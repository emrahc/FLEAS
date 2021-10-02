import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { Text, useTheme } from "../../Theme";
interface IconButtonProps {
  label?: string;
  variant: "purple" | "white" | "red" | "green";
  onPress: () => void;
  style?: object;
}

const IconButton = ({
  label,
  variant,
  onPress,
}: IconButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    variant === "purple"
      ? theme.colors.purple
      : variant === "white"
      ? theme.colors.white
      : variant === "red"
      ? theme.colors.red
      : theme.colors.green;
  const color =
    variant === "white" ? theme.colors.purple : "white";
  const borderRadius = theme.borderRadius.xl;
  const paddingBottom = heightPercentageToDP(0.006);
  const paddingTop = heightPercentageToDP(0.006);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor, borderRadius },
      ]}
      {...{ onPress }}
    >
      <Text
        variant="title"
        textTransform="uppercase"
        style={{ color, paddingBottom, paddingTop }}
      >
        {label?.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(40.666),
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default IconButton;
