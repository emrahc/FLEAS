import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useTheme } from "../../Theme";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { isTablet } from "../../../constants/Platform";
import { heightToPercentage } from "../../../constants/Layout";
interface RoundButtonProps {
  variant: "purple" | "white" | "red" | "green";
  onPress: () => void;
  navigation: () => void;
  style?: object;
  icon: string;
  iconSize: number;
  takePhoto: Boolean;
}

const RoundButton = ({
  variant,
  icon,
  iconSize,
  navigation,
  onPress,
  takePhoto,
}: RoundButtonProps) => {
  // const isTablet =
  //   headerPhone["x-fy-pt"]?.ios?.userInterfaceIdiom ===
  //   "tablet"
  //     ? true
  //     : false;
  const theme = useTheme();
  const buttonFunctionHandler = () => {
    if (icon === "camera") {
      navigation.navigate("Camera");
    } else if (icon === "picture-o") {
      // Alert.alert("Alert Title");
      console.log("keko");
      // ImageSelect(setLoading, state, upload, navigation);
    }
  };
  const backgroundColor =
    variant === "purple"
      ? theme.colors.purple
      : variant === "white"
      ? theme.colors.whitePurple
      : variant === "red"
      ? theme.colors.red
      : theme.colors.green;
  const color = variant === "white" ? theme.colors.purple : "white";

  const paddingVertical = isTablet
    ? takePhoto
      ? heightToPercentage(5)
      : heightToPercentage(4.5)
    : heightToPercentage(iconSize / 2);
  const paddingHorizontal = paddingVertical;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
      onPress={() => (onPress ? onPress() : buttonFunctionHandler())}
    >
      {icon === "delete" ? (
        <AntDesign
          name="delete"
          color="black"
          style={{
            paddingHorizontal,
            paddingVertical,
          }}
          size={widthPercentageToDP(iconSize)}
          color={color}
        />
      ) : (
        <FontAwesome
          style={{
            paddingHorizontal,
            paddingVertical,
          }}
          name={icon}
          size={
            isTablet
              ? takePhoto
                ? iconSize * 3.5
                : widthPercentageToDP(iconSize)
              : widthPercentageToDP(iconSize)
          }
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};

RoundButton.defaultProps = { variant: "default" };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 360,
  },
});

export default RoundButton;
