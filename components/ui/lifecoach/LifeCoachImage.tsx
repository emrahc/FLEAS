import React from "react";
import { Image } from "react-native";
import { View } from "react-native-ui-lib";
import LifeCoach from "../../../assets/SvgComponents/LifeCoach";
import Quotes from "../../../assets/SvgComponents/Quotes";
import { widthToPercentage } from "../../../constants/Layout";
export const LifeCoachImage = () => {
  return (
    <View paddingV-10 center row>
      <View
        center
        style={{
          borderWidth: 50,
          borderRadius: 100,
          marginRight: "2%",
          borderColor: "#342C4C",
          width: widthToPercentage(10),
          height: widthToPercentage(10),
        }}
      >
        <Image
          source={{ uri: "https://via.placeholder.com/300" }}
          style={{
            width: widthToPercentage(17),
            height: widthToPercentage(17),
            borderRadius: 100,
          }}
        />
      </View>
      <View
        center
        style={{
          borderWidth: 50,
          borderRadius: 100,
          borderColor: "#342C4C",
          backgroundColor: "#342C4C",
          width: widthToPercentage(10),
          height: widthToPercentage(10),
        }}
      >
        <LifeCoach w={14} />
      </View>
    </View>
  );
};
