import AntDesign from "@expo/vector-icons/build/AntDesign";
import React from "react";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../../constants/Layout";
import { AuthStackParamList } from "../../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { isTablet } from "../../../constants/Platform";

interface Props {
  navigation: StackNavigationProp<
    AuthStackParamList,
    "Info"
  >;
}

export const InfoButton = ({ navigation }: Props) => {
  const navigationHandler = (): void => {
    navigation.navigate("Info");
  };
  return (
    <AntDesign
      name="infocirlceo"
      size={
        isTablet
          ? heightToPercentage(2.8)
          : heightToPercentage(3)
      }
      color="black"
      onPress={navigationHandler}
    />
  );
};
