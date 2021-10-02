import React from "react";
import { View } from "react-native-ui-lib";
import { HeaderBackButton } from "@react-navigation/stack";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { widthToPercentage } from "../constants/Layout";

export const HeaderLeft = ({ label, navigation }) => {
  return <HeaderBackButton label={label} onPress={() => navigation()} />;
};

export const HeaderRight = (navigation) => {
  return (
    <>
      <View padding-8 bg-midGrey br100 spread>
        <AntDesign
          name="exclamationcircleo"
          size={widthToPercentage(6)}
          color="white"
        />
      </View>
      <View padding-8 marginH-5 bg-midGrey br100>
        <MaterialCommunityIcons
          name="bell-outline"
          size={widthToPercentage(6)}
          color="white"
        />
      </View>
    </>
  );
};
