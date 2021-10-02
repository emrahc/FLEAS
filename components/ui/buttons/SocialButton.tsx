import React from "react";
import { TouchableOpacity as TO } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Box, Text } from "../..";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../../constants/Layout";

interface Props {
  socialButton: () => void;
  icon: String;
  text: String;
  color: String;
  textColor: String;
}

const ButtonDetails = ({
  icon,
  text,
  color,
  textColor,
}) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      style={{
        flex: 1,
        backgroundColor: color,
        borderRadius: 18,
        borderWidth: 1,
        borderColor:
          color === "white" ? "black" : "transparent",
      }}
    >
      <AntDesign
        style={{
          paddingBottom:
            icon === "apple1" ? heightToPercentage(0.6) : 0,

          color: textColor,
        }}
        name={icon}
        size={heightToPercentage(2.2)}
      />
      <Text
        style={{
          fontSize: heightToPercentage(2.9),
          fontWeight: "500",
          color: textColor,
          letterSpacing: 0.05,
          textAlign: "center",
          paddingLeft: heightToPercentage(0.8),
        }}
      >
        {text}
      </Text>
    </Box>
  );
};

const SocialButton = ({
  socialButton,
  icon,
  text,
  color,
  textColor,
}: Props) => {
  return (
    <>
      {color === "white" ? (
        <TO
          style={{
            width: widthToPercentage(84),
            height: heightToPercentage(7.6),
            marginBottom: "2%",
          }}
          onPress={() => socialButton()}
        >
          <ButtonDetails
            icon={icon}
            text={text}
            color={color}
            textColor={textColor}
          />
        </TO>
      ) : (
        <TouchableOpacity
          style={{
            width: widthToPercentage(84),
            height: heightToPercentage(7.6),
            marginBottom: "2%",
          }}
          onPress={() => socialButton()}
        >
          <ButtonDetails
            icon={icon}
            text={text}
            color={color}
            textColor={textColor}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default SocialButton;
