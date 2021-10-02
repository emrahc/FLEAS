import React from "react";
import { Image, FlatList, Platform } from "react-native";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import Face from "../assets/images/face1.png";
import SvgLogo from "../assets/FaceLordSvgLogo";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { heightPercentageToDP } from "react-native-responsive-screen";
import RoundButton from "../components/ui/buttons/RoundButton";
import { GET_IMAGES } from "../constants/Api";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { deletePhoto, fetchPhotosDB } from "../utils/db";
import { Context as PhotoContext } from "../context/PhotoContext";
import { fetchData } from "../utils/Fetch";
import { pickHandler } from "../utils/PickHandler";
import { PhotoCount } from "../utils/AdsHandler";
import { headerPhone } from "../constants/Platform";
import { ImageEditor } from "../components/ImageCrop/ImageEditor";
import { L } from "../utils/Lan";
import { photoError } from "../utils/PhotoErrorHandler";
import { UploadHandler } from "../utils/UploadHandler";
import Container from "../components/ui/layout/Container";
import { View, Text, Button } from "react-native-ui-lib";
import { RenderItem } from "../components/ui/profilerenderitem/RenderItem";
import Spacer from "../components/ui/layout/Spacer";

const numColumns = 3;
const Profile = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Profile">) => {
  const { state: st, photos, upload } = React.useContext(PhotoContext);
  const { state, setLoading, handleAd, kickout, count } = React.useContext(
    AuthContext
  );

  const [images, setImages] = React.useState([""]);
  const [image, setImage] = React.useState([]);
  const [selectMode, setSelectMode] = React.useState(false);
  const [imageUri, setImageUri] = React.useState(undefined);

  const [editorVisible, setEditorVisible] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          return;
        }
      }
    })();
  }, []);
  const setEditor = () => {
    setEditorVisible(false);
    navigation.setOptions({
      headerShown: true,
    });
  };

  const launchEditor = (uri: string) => {
    // Then set the image uri
    setImageUri(uri);
    // And set the image editor to be visible
    setEditorVisible(true);
    navigation.setOptions({
      headerShown: false,
    });
  };
  const setL = (bool, text, abort, result) => {
    return setLoading(bool, text, abort, result);
  };
  const upPhoto = async (result: object) => {
    return await UploadHandler(
      L,
      result,
      setL,
      photoError,
      kickout,
      navigation,
      upload,
      state,
      handleAd,
      launchEditor,
      false
    );
  };
  const nav = () => navigation.navigate("AnalysisScreen");

  const handleDbImages = (dbimages: Array): void => {
    setImages(dbimages);
  };
  const handleDeletePhoto = async () => {
    setLoading(true);
    await deletePhoto(image, handleDbImages);
    // console.log(image);
    let imagePaths = [];

    if (imagePaths !== [] || null) {
      imagePaths.filter((path) => {
        const ask = FileSystem.getInfoAsync(path);
        if (ask.exists === true) {
          FileSystem.deleteAsync(ask.uri);
        }
      });
    }
    // await dbPhotos();
    setImage([]);
    setSelectMode(false);
  };
  const fetchImage = async (id: number, imagePath: string) => {
    setLoading(true);
    const { error, response } = await fetchData(`${GET_IMAGES}${id}/`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${state.token}`,
        headerPhone,
      },
    });
    if (error) {
      setLoading(false);
      if (error.detail === "Authentication credentials were not provided.") {
        kickout();
        return alert(JSON.stringify(error.detail));
      }
      return alert(JSON.stringify(error.detail));
    } else if (response) {
      const up = async () => await upload(response, imagePath, true);
      await up();
      await handleAd();
      nav();
    }
  };

  // const dbPhotos = async () => {
  //   const photos = await fetchPhotosDB(handleDbImages, state.user.email);
  //   setLoading(false);
  // };
  React.useEffect(() => {
    mockPictures();
    // fetchImages();
    // fetchImages();
    // _getAllFilesInDirectory();
    // fetchImages();
    // const unsubscribe = navigation.addListener("focus", () => {
    //   setLoading(true);
    //   // dbPhotos();
    // });
    // const unsub = () => {
    //   unsubscribe;
    // };
    // // Return the function to unsubscribe from the event so it gets removed on unmount
    // return unsub();
  }, [navigation]);

  const handleAnalysis = async (analysisId: number, imagePath: string) => {
    console.log(analysisId, imagePath, "HANDLE ANALYSIS");
    // console.log(analysisId, "ANALYSIS ID");
    // st.photos.map((photo, index) => {
    //   if (photo.id == analysisId) {
    //     return upload(st.photos[index], true);
    //   }
    // });
    await fetchImage(analysisId, imagePath);
    // if (st.analysis.id === analysisId) {
    //   navigation.navigate("AnalysisScreen");
    // }
  };
  function fakeApi() {
    let mocked: string[] = [];
    fetch("https://picsum.photos/v2/list?page=1&limit=30") // 1
      .then((res) => res.json()) // 2
      .then((resJson) => {
        resJson.forEach((mock) => {
          mocked.push(mock.download_url);
        });
      })
      .then((json) => {
        setImages(mocked);
      })
      .catch((e) => console.log(e));
  }
  const mockPictures = async () => {
    let mockedPhoto: string[] = [];
    let mockPicture = fakeApi();
    // mockPicture.forEach((mock) => {
    //   mockedPhoto.push(mock);
    // });
    console.log(mockPicture, "MOCK");
    setImages(mockedPhoto);
  };

  const selectPhoto = async (item: number, action: string) => {
    // let selectedItem = images[index].analysisId;
    if (action === "remove") {
      let selectedImages = image;
      selectedImages = selectedImages.filter((id) => id !== item);
      //  let     removeIndex =selectedImages.indexOf(item)

      setImage(selectedImages);
      console.log(selectedImages, "REMOVE ARRAY", item, "REMOVED ITEM");
    }

    if (action === "add") {
      if (image.includes(item) == false) {
        let selectedImages = image;
        selectedImages.push(item);
        setImage(selectedImages);
        console.log(image, "ADD");
      }
    }
    if (action === "zero") {
      setImage([]);
      console.log(image, "ZERO ARRAY");
    }

    // console.log("ADD", image);
  };
  // console.log(image, "IMAGE ARRAY");

  const renderItem = ({ item }) => (
    <RenderItem
      key={item.key}
      item={item}
      setLoading={setLoading}
      handleAnalysis={handleAnalysis}
      selectMode={selectMode}
      setSelectMode={setSelectMode}
      selectPhoto={selectPhoto}
    />
  );
  return (
    <Container>
      <View flexG>
        <View>
          <FlatList
            removeClippedSubviews={true}
            initialNumToRender={2}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={1}
            windowSize={7}
            ListHeaderComponentStyle={{
              backgroundColor: "transparent",
              paddingTop: "20%",
              paddingBottom: "10%",
            }}
            ListFooterComponent={<Spacer pt={20} />}
            ListHeaderComponent={
              <View centerH flex>
                {/* <Image
                  source={Face}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{
                    width: "30%",
                    height: "30%",
                    aspectRatio: 1,
                    margin: heightPercentageToDP(2),
                  }}
                /> */}
                <SvgLogo />
                <Text h4 white>
                  emrah@emrah.com
                </Text>
                <View
                  bg-primaryGrey
                  br100
                  paddingH-25
                  paddingV-10
                  br-100
                  marginT-5
                >
                  <Text h7 grey text300>
                    {images.length} {L("ProfilePhotosAnalyzed")}
                  </Text>
                </View>
              </View>
            }
            data={images}
            renderItem={renderItem}
            numColumns={numColumns}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {selectMode && (
          <View paddingHorizontal="5%">
            <Button label={L("ProfilePhotosDeleteButton")} marginV-30 danger />
          </View>
          // <Button
          //   style={{
          //     marginBottom: 0,
          //     alignSelf: "center",
          //     alignContent: "center",
          //   }}
          //   variant="red"
          //   label={L("ProfilePhotosDeleteButton")}
          //   onPress={handleDeletePhoto}
          // />
        )}
      </View>
      <ImageEditor
        visible={editorVisible}
        onCloseEditor={() => setEditor()}
        imageUri={imageUri}
        fixedCropAspectRatio={1}
        lockAspectRatio={true}
        minimumCropDimensions={{
          width: 100,
          height: 100,
        }}
        onEditingComplete={(result) => {
          upPhoto(result);
        }}
        throttleBlur={false}
      />
    </Container>
  );
};

export default Profile;
