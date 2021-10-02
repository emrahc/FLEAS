import * as React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Text } from "../../Theme";
import { useRecoilState } from "recoil";
import { IconButton } from "../components/IconButton";
import {
  accumulatedPanState,
  cropSizeState,
  editingModeState,
  imageBoundsState,
  imageDataState,
  imageScaleFactorState,
  processingState,
} from "../Store";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import { Size } from "../../../utils/Size";
import { L } from "../../../utils/Lan";

export function Crop({
  finish,
  onEditingComplete,
  onClose,
}) {
  const [accumulatedPan] = useRecoilState(
    accumulatedPanState
  );
  const [imageBounds] = useRecoilState(imageBoundsState);
  const [imageScaleFactor] = useRecoilState(
    imageScaleFactorState
  );
  const [cropSize] = useRecoilState(cropSizeState);
  const [, setProcessing] = useRecoilState(processingState);
  const [imageData, setImageData] = useRecoilState(
    imageDataState
  );
  const [, setEditingMode] = useRecoilState(
    editingModeState
  );

  const onPerformCrop = async () => {
    // Calculate cropping bounds
    const croppingBounds = {
      originX: Math.round(
        (accumulatedPan.x - imageBounds.x) *
          imageScaleFactor
      ),
      originY: Math.round(
        (accumulatedPan.y - imageBounds.y) *
          imageScaleFactor
      ),
      width: Math.round(cropSize.width * imageScaleFactor),
      height: Math.round(
        cropSize.height * imageScaleFactor
      ),
    };
    // Set the editor state to processing and perform the crop
    setProcessing(true);
    console.log(
      await FileSystem.getInfoAsync(imageData.uri, {
        size: true,
      }),
      "FILE SYSTEM ASYNC"
    );
    const { size } = await FileSystem.getInfoAsync(
      imageData.uri,
      {
        size: true,
      }
    );
    console.log(size, "SIZE");
    const compress = Size(size);

    console.log(compress, "COMPRESS");
    const cropResult = await ImageManipulator.manipulateAsync(
      imageData.uri,
      [{ crop: croppingBounds }],
      {
        compress,
      }
    );

    const { uri, width, height } = cropResult;
    setProcessing(false);
    setImageData({ uri, width, height });
    setEditingMode("operation-select");
    onEditingComplete(cropResult);
    onClose();
  };
  const cropHandler = async () => {
    onPerformCrop()
      // .then(() =>
      //   console.log(imageData, "IMAGE DATAAAAAAAAa")
      // )
      .catch(() => {
        // If there's an error dismiss the the editor and alert the user
        setProcessing(false);
        Alert.alert("Select proper face.");
      });
    // finish();

    // onEditingComplete();
    // onClose();

    // finish();
  };
  console.log(L("welcomeOr"));
  return (
    <View style={styles.container}>
      <IconButton
        iconID="close"
        text={L("CropCancel")}
        onPress={() => onClose()}
      />
      <Text variant="explanatoryl" color="white">
        {L("CropAdjust")}
      </Text>
      <IconButton
        iconID="check"
        text={L("CropDone")}
        onPress={() => cropHandler()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "1%",
  },
});
