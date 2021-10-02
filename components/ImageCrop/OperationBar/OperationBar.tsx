import * as React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { editingModeState, EditingModes } from "../Store";
import { useRecoilState } from "recoil";
import { OperationSelection } from "./OperationSelection";
import { Crop } from "./Crop";
import { heightToPercentage } from "../../../constants/Layout";

export function OperationBar({
  onFinishEditing,
  onEditingComplete,
  onClose,
}) {
  //
  const [editingMode] = useRecoilState(editingModeState);

  // const getOperationWindow = () => {
  //   switch ("crop") {
  //     case "crop":
  //       return <Crop finish={onFinishEditing} />;
  //     case "rotate":
  //       return <Rotate />;
  //     case "blur":
  //       return <Blur />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <Animated.View style={styles.container}>
      {/* <OperationSelection finish={onFinishEditing} /> */}
      {/* {editingMode !== "operation-select" && (
      )} */}
      <View
        style={[styles.container, { position: "absolute" }]}
      >
        {editingMode !== "crop" && (
          <Crop
            finish={onFinishEditing}
            onEditingComplete={onEditingComplete}
            onClose={() => onClose()}
          />
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: heightToPercentage(10),
    width: "100%",
    backgroundColor: "#333",
  },
});
