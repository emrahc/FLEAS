import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { Text, useTheme } from "../../index";
interface ResultButtonProps {
  variant: "purple" | "whiteGray";
  onPress: () => void;
  label: string;
  style?: object;
  disabled: boolean;
}

const ResultButton = ({
  variant,
  onPress,
  label,
  disabled,
}: ResultButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    variant === "purple"
      ? theme.colors.purple
      : theme.colors.purpleGray;
  const color =
    variant === "purple" ? "white" : theme.colors.purpleMid;
  const paddingVertical = heightPercentageToDP(1.23);
  const paddingHorizontal = widthPercentageToDP(2.66);
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor,
          paddingHorizontal,
          paddingVertical,
        },
      ]}
      {...{ onPress }}
    >
      <Text
        variant="resultButton"
        style={{
          color,
        }}
      >
        {label.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    width: widthPercentageToDP(20),
  },
});

export default ResultButton;
