import React, { ReactNode } from "react";
import {
  TouchableOpacity as To,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { widthToPercentage } from "../../../constants/Layout";
import { isIOS } from "../../../constants/Platform";
import { Box, Text, useTheme } from "../../Theme";

interface ButtonProps {
  label?: string;
  variant: "purple" | "white" | "red" | "green";
  onPress: () => void;
  children?: ReactNode;
  style?: object;
  disabled: boolean;
  visible:boolean;
}

const Touchable = ({ children, ...props }) => {
  if (isIOS)
    return (
      <TouchableOpacity {...props}>
        {children}
      </TouchableOpacity>
    );
  else if (!isIOS) return <To {...props}>{children}</To>;
};
const Button = ({
  label,
  variant,
  onPress,
  children,
  style,
  disabled,
  visible,
}: ButtonProps) => {
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
  const borderRadius = theme.borderRadius.b;
  const paddingBottom = theme.spacing.b;
  const paddingTop = theme.spacing.b;
  return (
    <Touchable
      style={[
        styles.container,
        style,

        { backgroundColor, borderRadius},
      ]}
      {...{ onPress }}
      disabled={disabled}
    >
      <Box>
        <Text
          variant="button"
          style={{ color, paddingBottom, paddingTop }}
        >
          {label?.toLocaleUpperCase()}
        </Text>
      </Box>
    </Touchable>
  );
};

Button.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    width: widthToPercentage(84),

    marginBottom: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
