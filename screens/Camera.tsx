import React, { useState, useEffect, useRef } from "react";
import { Modal, ImageBackground } from "react-native";
import * as FaceDetector from "expo-face-detector";
import { Camera } from "expo-camera";
import { Box, Text, useTheme } from "../components/";
import { Context as PhotoContext } from "../context/PhotoContext";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  width,
  height,
  heightToPercentage,
  widthToPercentage,
} from "../constants/Layout";
import RoundButton from "../components/ui/buttons/RoundButton";

import BarcodeMask from "react-native-barcode-mask";
import * as ImageManipulator from "expo-image-manipulator";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { ImageEditor } from "../components/ImageCrop/ImageEditor";
import { isIOS } from "../constants/Platform";
import { L } from "../utils/Lan";
import { photoError } from "../utils/PhotoErrorHandler";
import Button from "../components/ui/buttons/Basebutton";
import { pickHandler } from "../utils/PickHandler";
import { UploadHandler } from "../utils/UploadHandler";
import CameraButton from "../components/ui/camera/CameraButton";
import { View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PreviewModal } from "../components/ui/camera/PreviewModal";
import Spacer from "../components/ui/layout/Spacer";

export default function CameraComponent({
  navigation,
}: StackScreenProps<RootStackParamList, "Camera">) {
  const camRef = useRef<Camera>(null);
  const { state, upload } = React.useContext(PhotoContext);
  const { setLoading, state: st, handleAd, kickout } = React.useContext(
    AuthContext
  );
  const theme = useTheme();
  const [hasPermission, setHasPermission] = useState<boolean>(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [face, setFace] = useState(null);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [cropped, setCropped] = useState(null);

  const [imageUri, setImageUri] = React.useState(undefined);
  const [editorVisible, setEditorVisible] = React.useState(false);

  const handleFacesDetected = ({ faces }: any): void => {
    if (
      !faces[0] ||
      visible ||
      faces[0].bounds.origin.x < widthToPercentage(10) ||
      faces[0].bounds.origin.y < heightToPercentage(5) ||
      widthToPercentage(90) <
        faces[0].bounds.origin.x + faces[0].bounds.size.width ||
      faces[0].bounds.origin.y + faces[0].bounds.size.height >
        heightToPercentage(90)
    ) {
      setFace(null);
    } else if (faces[0]) {
      setFace(faces[0].bounds);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Box />;
  }
  if (hasPermission === false) {
    return (
      <Box
        flex={1}
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
      >
        <Text variant="button" color="black" paddingBottom="l">
          {L("permissionCamera")}
        </Text>
        <Button
          variant="red"
          label="RETURN"
          onPress={() => navigation.goBack()}
        />
      </Box>
    );
  }
  async function takePicture() {
    if (camRef) {
      if (face) {
        setLoading(true);
        const data: any = await camRef.current?.takePictureAsync({
          base64: false,
        });
        const growthFactor = {
          w: data.width / width,
          h: data.height / height,
        };
        const cropDimensions = {
          originX: Math.round(growthFactor.w * face.origin.x),
          originY: Math.round(growthFactor.h * face.origin.y),
          width: Math.round(growthFactor.h * face.size.height),
          height: Math.round(growthFactor.h * face.size.height),
        };
        // const cropDimensions = {
        //   originX: (data.height - data.width) / 2,

        //   originY: 0,
        //   width: data.width,
        //   height: data.width,
        // };
        let croppedPhoto;

        if (face) {
          croppedPhoto = await ImageManipulator.manipulateAsync(
            data.uri,
            [
              {
                crop: {
                  originX: cropDimensions.originX * 0.7,
                  originY: cropDimensions.originY * 0.88,
                  width: cropDimensions.width * 1.27,
                  height: cropDimensions.height * 1.27,
                },
              },
            ],
            {
              compress: isIOS ? 0.6 : 1,
              format: ImageManipulator.SaveFormat.PNG,
            }
          );
        }
        // originX: cropDimensions.originX * 0.86,
        //                 originY: cropDimensions.originY * 0.88,
        //                 width: cropDimensions.width * 1.27,
        //                 height: cropDimensions.height * 1.27,
        console.log("width", data.width, "height", data.height);
        console.log("width", croppedPhoto.width, "height", croppedPhoto.height);
        console.log("DIMENSIONS", face);
        console.log(croppedPhoto);
        console.log(data.width);
        console.log(data.height);
        setImage(croppedPhoto.uri);
        setCropped(croppedPhoto);
        setVisible(true);

        setLoading(false);
      }
    }
  }
  // const adHandler = async () => {
  //   if (state.ads_on === false) {
  //     if (st.photoCount > 3) {
  //       handleAd(st.token);
  //     } else if (state.photoCount <= 3) {
  //       const resCount = await PhotoCount(state.token);
  //       if (resCount > 3) {
  //         handleAd(st.token);
  //       }
  //     }
  //   }
  // };
  const setEditor = () => {
    setEditorVisible(false);
    // navigation.setOptions({
    //   headerShown: true,
    // });
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

  const setL = (bool: boolean, text: string, abort, result) => {
    return setLoading(bool, text, abort, result);
  };
  const upPhoto = async (result: object) => {
    !result && setVisible(false);
    result && console.log(result, "RESULT");
    cropped && console.log(cropped, "CROPPED");
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
  return (
    <Box flex={1}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ratio={"16:9"}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.none,
          runClassifications: FaceDetector.Constants.Classifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
        ref={camRef}
      >
        <BarcodeMask
          width={width * 0.6}
          height={width * 0.6}
          edgeColor={"#6C4EF4"}
          outerMaskOpacity={0.5}
          edgeBorderWidth={4}
          useNativeDriver={true}
          showAnimatedLine={false}
          backgroundColor={"black"}
        />

        <Box
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            paddingLeft: width * 0.053,
            paddingRight: width * 0.053,
            paddingTop: width * 0.049,
            paddingBottom: width * 0.08,
          }}
        >
          <Box alignSelf="flex-start" paddingLeft="s" paddingRight="s">
            <Ionicons
              name="md-arrow-back"
              size={widthToPercentage(10)}
              color="white"
              onPress={() => navigation.goBack()}
            />
          </Box>
          <Box
            style={{
              position: "absolute",
              top: heightToPercentage(15),
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingHorizontal: widthToPercentage(5),
            }}
          >
            <Text variant="explanatoryl" color="purpleGray">
              {L("Instructions1")}
            </Text>
          </Box>
          {face && (
            <View
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                top: face.origin.y,
                left: face.origin.x,
                width: face.size.width,
                height: face.size.height,
                borderColor: "yellow",
                borderWidth: 2,
              }}
            />
          )}

          <View row center>
            <View padding-20 br100 bg-secondaryGrey>
              <Ionicons
                name="camera-reverse-outline"
                size={widthToPercentage(8)}
                color="white"
                onPress={() =>
                  setType(
                    type === Camera.Constants.Type.front
                      ? Camera.Constants.Type.back
                      : Camera.Constants.Type.front
                  )
                }
              />
            </View>
            <Spacer ml={10} />
            <TouchableOpacity onPress={() => takePicture()}>
              <CameraButton w={23} />
            </TouchableOpacity>

            <Spacer mr={10} />
            <View padding-20 br100 bg-secondaryGrey>
              <SimpleLineIcons
                name="picture"
                size={widthToPercentage(8)}
                color="white"
                onPress={() => pickHandler(navigation, upPhoto, true)}
              />
            </View>
          </View>
        </Box>
      </Camera>
      <PreviewModal
        visible={visible}
        image={image}
        heightToPercentage={heightToPercentage}
        upPhoto={upPhoto}
        cropped={cropped}
        setVisible={setVisible}
        widthToPercentage={widthToPercentage}
        setCropped={setCropped}
      />
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
