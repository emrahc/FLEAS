import React, { useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Context as PhotoContext } from "../context/PhotoContext";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import {
  ActivityIndicator,
  Modal,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { Box } from "../components";
import { useTheme } from "../components/Theme";
import { RootStackParamList } from "../types";
import { captureRef } from "react-native-view-shot";

import * as Sharing from "expo-sharing";

import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

require("dayjs/locale/en");
require("dayjs/locale/de");
require("dayjs/locale/tr");
require("dayjs/locale/es");
require("dayjs/locale/fr");
require("dayjs/locale/it");
require("dayjs/locale/nl");
require("dayjs/locale/pt");
require("dayjs/locale/ru");
require("dayjs/locale/sv");

import * as ImagePicker from "expo-image-picker";
import RoundButton from "../components/ui/buttons/RoundButton";
import ResultButton from "../components/ui/buttons/ResultButton";
import SpiderChart from "../components/ui/chart/SpiderChart";
import { heightToPercentage, widthToPercentage } from "../constants/Layout";
import { pickHandler } from "../utils/PickHandler";

import { ImageEditor } from "../components/ImageCrop/ImageEditor";
import { L } from "../utils/Lan";
import { photoError } from "../utils/PhotoErrorHandler";
import { UploadHandler } from "../utils/UploadHandler";
import { PhotoSave } from "../utils/PhotoSave";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Container from "../components/ui/layout/Container";
import { View, Button, Text, Colors } from "react-native-ui-lib";
import Spacer from "../components/ui/layout/Spacer";
import { RoundPatternGroup } from "../components/ui/buttongroup/RoundPatternGroup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
const soulIndexResponse = [11, 16, 14, 12, 17, 15, 13];

const mindIndexResponse = [7, 6, 10, 4, 8, 9, 5];
const heartIndexResponse = [23, 20, 22, 18, 21, 24, 19];
const selfIndexResponse = [31, 26, 25, 28, 29, 27, 30];

const mindIndexPhoto = [7, 6, 10, 4, 8, 9, 5];
const soulIndexPhoto = [11, 16, 14, 12, 17, 15, 13];
const heartIndexPhoto = [23, 20, 22, 18, 21, 24, 19];
const selfIndexPhoto = [31, 26, 25, 28, 29, 27, 30];
let soulValues: object[];
let mindValues: object[];
let heartValues: object[];
let selfValues: object[];

const state = {
  analysis: {
    ambition: 77,
    anger: 52,
    artistic: 29,
    conscience: 47,
    created_at: "2021-08-22T22:13:37.276324Z",
    emotional: 32,
    fair: 59,
    honesty: 56,
    id: 24084,
    intuitive: 52,
    jealous: 40,
    leader: 53,
    logical: 95,
    lust: 53,
    merciful: 51,
    naivety: 78,
    numerical: 60,
    optimistic: 88,
    patient: 35,
    pessimistic: 28,
    photo: null,
    point: null,
    realistic: 66,
    romantic: 34,
    selfishness: 33,
    sensitive: 51,
    shy: 36,
    sociable: 53,
    social: 57,
    stubborn: 40,
    vanity: 44,
    verbal: 42,
  },
  photo: "https://via.placeholder.com/150",
};

const AnalysisScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "AnalysisScreen">) => {
  const theme = useTheme();
  const count = useSelector((state: RootState) => state.userReducer.value);
  const dispatch = useDispatch();
  const viewshot = useRef<null>(null);
  const [active, setActive] = React.useState<string>("soul");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [activeValues, setActiveValues] = React.useState(soulValues);
  const [activeMax, setActiveMax] = React.useState<string>("");
  const { upload, toggleAds, getDesc } = React.useContext(PhotoContext);
  const {
    state: st,
    setLoading: setLoad,
    kickout,
    handleAd,
  } = React.useContext(AuthContext);
  const sheetRef = React.useRef(null);
  const snapPoints = React.useMemo(() => [0, "110%"], []);
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    if (index === 1) {
      openShareDialogAsync();
    }
    if (index === 0) {
      setModalVisible(false);
    }
  }, []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = React.useCallback(() => {
    console.log("KEKO");
    bottomSheetModalRef.current?.expand();
    setModalVisible(true);
  }, []);
  // const asset:ImageSourcePropType=useAssets(state.photo)
  // const asset = Asset.fromModule(require(state.photo)).uri;
  console.log(state.photo, "STATE PHOTO");
  const [, setPoints] = React.useState(null);
  const [image, setImage] = React.useState<string | null>(null);
  const [id, setId] = React.useState<string>("");
  const [imageUri, setImageUri] = React.useState(undefined);
  const [editorVisible, setEditorVisible] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  async function PhotoUpload() {
    // await PhotoSave(state.analysis.id, st.user.email, state.photo);
  }
  React.useEffect(() => {
    getDesc();
    let soulIndex =
      state.fromResponse == true ? soulIndexResponse : soulIndexPhoto;
    let mindIndex =
      state.fromResponse == true ? mindIndexResponse : mindIndexPhoto;
    let heartIndex =
      state.fromResponse == true ? heartIndexResponse : heartIndexPhoto;
    let selfIndex =
      state.fromResponse == true ? selfIndexResponse : selfIndexPhoto;
    if (state.analysis !== null) {
      if (!id && state.analysis.id) {
        setId(state.analysis.id);
      }
      setPoints(state.analysis);
      if (state.photo && !state.fromResponse) {
        PhotoUpload();
      }
      soulValues = soulIndex.map((value) => {
        let key = Object.keys(state.analysis)[value];
        let values = Object.values(state.analysis)[value];
        return { [key]: values };
      });
      mindValues = mindIndex.map((value) => {
        let key = Object.keys(state.analysis)[value];
        let values = Object.values(state.analysis)[value];
        return { [key]: values };
      });
      heartValues = heartIndex.map((value) => {
        let key = Object.keys(state.analysis)[value];
        let values = Object.values(state.analysis)[value];
        return { [key]: values };
      });
      selfValues = selfIndex.map((value) => {
        let key = Object.keys(state.analysis)[value];
        let values = Object.values(state.analysis)[value];
        return { [key]: values };
      });
      if (soulValues) {
        setActiveValues(soulValues);
        setLoading(false);
        setLoad(false);
        setActiveMax(findMax(soulValues));
      }
    }
    return () => {
      toggleAds(false);
      setActive("soul");
      setImage(null);
    };
  }, [state.analysis, state.analysis.id, state.photo]);
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

  const date = (): string => {
    dayjs.extend(localeData);

    const language = "tr-TR";
    // st.user.lang_code.slice(0, 2);
    dayjs.locale(language);
    return dayjs().format("MMMM DD, YYYY");
  };
  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    // await viewshot.current.capture().then(
    //   (uri: string) => {
    //     console.log("Image saved to", uri);
    //     Sharing.shareAsync("file://" + uri);
    //   },
    //   (error: Error) =>
    //     console.error("Oops, snapshot failed", error)
    // );
    await captureRef(viewshot, {
      result: "tmpfile",
      quality: 1,
      format: "jpg",
    }).then(
      (uri: string) => {
        console.log("Image saved to", uri);
        Sharing.shareAsync("file://" + uri);
      },
      (error: Error) => console.error("Oops, snapshot failed", error)
    );
  };
  const findMax = (values: object[]): string => {
    let sortingValues = [...values];
    let max: string[] = Object.keys(
      sortingValues.sort((a, b) => Object.values(b) - Object.values(a))[0]
    );

    return max[0].charAt(0).toUpperCase() + max[0].slice(1);
  };

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
    return setLoad(bool, text, abort, result);
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
      st,
      handleAd,
      launchEditor,
      true
    );
  };
  const spiderHandler = (criteria: string): void => {
    setActive(criteria);
    if (criteria === "soul") {
      setActiveValues(soulValues);

      setActiveMax(findMax(soulValues));
    } else if (criteria === "mind") {
      setActiveValues(mindValues);

      setActiveMax(findMax(mindValues));
    } else if (criteria === "heart") {
      setActiveValues(heartValues);
      setActiveMax(findMax(heartValues));
    } else if (criteria === "self") {
      setActiveValues(selfValues);
      setActiveMax(findMax(selfValues));
    }
  };

  return (
    <Container
    // backgroundColor="white"
    // justifyContent="space-around"
    // alignItems="center"
    // flex={1}
    >
      <Spacer pt={8} />
      <View flex centerH spread>
        <View left width={"90%"}>
          <Text h4 white text500>
            Fire Air Water and Earth
          </Text>
          <Text h4 white text500>
            Patterns
          </Text>
        </View>
        {/* <Spacer pt={2} /> */}
        <RoundPatternGroup active={active} />
        {/* <Spacer pt={2} /> */}
        <View centerH paddingHorizontal="10%">
          <Text grey h7>
            {active === "soul"
              ? L("AnalysisSoulDescription")
              : active === "mind"
              ? L("AnalysisMindDescription")
              : active === "heart"
              ? L("AnalysisHeartDescription")
              : L("AnalysisSelfDescription")}
          </Text>
        </View>

        {/* <Spacer pb={1} /> */}
        <View centerH>
          {console.log(state.photo, "CACHE IMAGE PHOTO")}

          <Image
            source={{ uri: state.photo }}
            style={{
              width: widthToPercentage(15),
              height: widthToPercentage(15),
              borderRadius: 100,
            }}
          />
        </View>
        {loading ? (
          <View flex center>
            <ActivityIndicator size="large" color={theme.colors.purple} />
          </View>
        ) : (
          <>
            {/* <Spacer pt={2} /> */}
            <SpiderChart values={activeValues} />
          </>
        )}
        {/* <Spacer pb={2} /> */}
        <View width="90%">
          <Button
            // pv={"2%"}
            medium
            visible={!modalVisible}
            label={`${L(activeMax + "B")} ${L("CommonDetails").toUpperCase()}`}
            onPress={() => {
              navigation.navigate("Result", {
                activeValues: activeValues,
                id: id,
                token: st.token,
              });
            }}
          />
          <Spacer pt={1} pr={1} />
          <View row centerH width="100%">
            <Button pv={"5%"} flex dark label="Share Analysis" />

            <Spacer pl={1} pr={1} />
            <Button pv={"5%"} flex dark label="Take a New Photo" />
          </View>
        </View>
        <Spacer pt={1} />
        <BottomSheet
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <Box
            collapsable={false}
            ref={viewshot}
            style={{
              flex: 1,
              alignItems: "center",
              paddingHorizontal: widthToPercentage(10),
            }}
          >
            <Box alignItems="center" paddingBottom="b" paddingTop="o">
              <Image
                source={{ uri: state.photo }}
                style={{
                  width: widthToPercentage(15),
                  height: widthToPercentage(15),
                  borderRadius: 20,
                }}
              />
            </Box>
            {loading ? (
              <Box flex={1} justifyContent="center" alignItems="center">
                <ActivityIndicator size="large" color={theme.colors.purple} />
              </Box>
            ) : (
              <Box
                backgroundColor="white"
                style={{
                  paddingVertical: heightToPercentage(0.5),
                }}
              >
                <SpiderChart values={activeValues} />
                <Text variant="title" textAlign="center" color="purpleLight">
                  {L(
                    `Analysis${
                      active.charAt(0).toUpperCase() + active.slice(1)
                    }`
                  )}{" "}
                  {L("AnalysisSharePattern")}
                </Text>
              </Box>
            )}
            <Box backgroundColor="white">
              <Image
                resizeMode="contain"
                source={require("../assets/images/AppIconNew.png")}
                style={{
                  flex: 1 / 3,
                  borderRadius: 18,
                  width: undefined,
                }}
              />
              <Box>
                <Box>
                  <Text variant="title" color="purple" textAlign="center">
                    Face Yourself
                  </Text>
                  <Text variant="errorMessage" textAlign="center">
                    {L("AnalysisShareDiscover")}
                  </Text>

                  <Text variant="explanatoryl" textAlign="center">
                    {date()}
                  </Text>
                  <Text
                    variant="explanatory"
                    color="whiteGray"
                    textAlign="center"
                  >
                    {L("AnalysisShareDescription1")}
                  </Text>
                  <Text
                    variant="explanatory"
                    color="whiteGray"
                    textAlign="center"
                  >
                    {L("AnalysisShareDescription2")}
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text textAlign="center" variant="explanatoryl" color="purple">
                  www.face2yourself.com
                </Text>
              </Box>
            </Box>
          </Box>
        </BottomSheet>

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
      </View>
    </Container>
  );
};

export default AnalysisScreen;
