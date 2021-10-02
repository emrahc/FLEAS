import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Platform } from "react-native";

import { RootStackParamList } from "../types";
import { Box, Text } from "../components";
import IconButton from "../components/ui/buttons/IconButton";
import { PoppingButton } from "../components/ui/buttons/PoppingButton";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Context as PhotoContext } from "../context/PhotoContext";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import RoundButton from "../components/ui/buttons/RoundButton";
import * as ImagePicker from "expo-image-picker";
import {
  height,
  widthToPercentage,
} from "../constants/Layout";
import { pickHandler } from "../utils/PickHandler";
import { ImageEditor } from "../components/ImageCrop/ImageEditor";
import { init, L } from "../utils/Lan";
import { photoError } from "../utils/PhotoErrorHandler";
import { UploadHandler } from "../utils/UploadHandler";
interface TakePhoto {
  AllowImage: string;
}

export default function TakePhoto({
  navigation,
}: StackScreenProps<RootStackParamList, "TakePhoto">) {
  const { upload } = React.useContext(PhotoContext);
  const {
    setLoading,
    state,
    handleAd,
    setLan,
    kickout,
  } = React.useContext(AuthContext);

  const [imageUri, setImageUri] = React.useState(undefined);
  const [editorVisible, setEditorVisible] = React.useState(
    false
  );
  
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

  React.useEffect(() => {
    if (state.lang !== null) {
      setLan(state.lang);
    }
    init();
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
    return setLoading(bool, text, abort, result)
  }
  const upPhoto = async (result: object) => {
    return await UploadHandler(L, result, setL, photoError, kickout, navigation, upload, state, handleAd, launchEditor, false
    )

  }

  return (
    <Box flex={1}>
      <Box
        backgroundColor="white"
        paddingTop="xl"
        paddingLeft="l"
        paddingRight="l"
        flex={1}
      >
        <Box alignItems="center">
          <Text variant="brand">{L("TakePhotoTitle")}</Text>
          <Text
            variant="explanatory"
            marginTop="m"
            marginBottom="m"
            textAlign="center"
          >
            {L("TakePhotoDescription")}
          </Text>
        </Box>

        <Box
          zIndex={1}
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            onPress={() =>
              navigation.navigate("Instructions")
            }
            label={L("TakePhotoInstrunctions")}
            variant="red"
          />
        </Box>
        <Box style={styles.poppin}>
          <PoppingButton
            onPress={() => navigation.navigate("Camera")}
          >
            <Box
              width={widthPercentageToDP(50)}
              height={widthPercentageToDP(50)}
              justifyContent="center"
              alignItems="center"
              backgroundColor="purple"
              borderRadius={360}
              borderWidth={10}
              borderColor="white"
              shadowOffset={{ width: 0, height: 10 }}
              shadowOpacity={0.3}
              shadowRadius={3}
              elevation={4}
            >
              <MaterialIcons
                name="photo-camera"
                size={widthPercentageToDP(25)}
                color="white"
              />
            </Box>
          </PoppingButton>
        </Box>
        <Box style={styles.buttons}>
          <RoundButton
            icon="picture-o"
            variant="white"
            takePhoto={true}
            iconSize={widthToPercentage(2)}
            onPress={() =>
              pickHandler(
                navigation,
                upPhoto
              )
            }
          />
        </Box>
      </Box>
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
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poppin: {
    flex: 15,
    marginTop: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: height * 0.05,
  },
});
