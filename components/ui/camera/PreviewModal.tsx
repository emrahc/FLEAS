import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Modal, ImageBackground } from "react-native";
import { Button, View } from "react-native-ui-lib";
import { Box } from "../..";
import Spacer from "../layout/Spacer";
export function PreviewModal({
  visible,
  image,
  heightToPercentage,
  upPhoto,
  cropped,
  setVisible,
  widthToPercentage,
  setCropped,
}) {
  return (
    <Box>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View flex>
          {image && (
            <ImageBackground
              resizeMode="contain"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#252121",
              }}
              source={{
                uri: image,
              }}
            >
              <View flex bottom paddingH-10>
                <Button
                  label="Retake"
                  primary
                  onPress={() => setVisible(false)}
                />
                <Spacer pt={2} />
                <Button label="Confirm" success />
              </View>

              <Spacer pb={2} />
            </ImageBackground>
          )}
        </View>
      </Modal>
    </Box>
  );
}
