import {
  Typography,
  Colors,
  Spacings,
  Assets,
  ThemeManager,
} from "react-native-ui-lib";

import { RFValue } from "react-native-responsive-fontsize";
const screen = 812;
export const themeInit = () => {
  Colors.loadColors({
    primary: "#246BFD",
    secondary: "#5E5CE6",
    danger: "#FC4848",
    success: "#3FC67A",
    dark: "#191A26",
    grey: "#7C8090",
    primaryGrey: "#232333",
    secondaryGrey: "rgba(124, 128, 144, 0.1)",
    midGrey: "#4E4E64",
    primaryDark: "#181924",
    spiderDark: "#1B2A51",
  });

  Typography.loadTypographies({
    h1: {
      fontSize: RFValue(38, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h2: {
      fontSize: RFValue(28, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h3: {
      fontSize: RFValue(26, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h4: {
      fontSize: RFValue(22, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h45: {
      fontSize: RFValue(20, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h5: {
      fontSize: RFValue(17, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h6: {
      fontSize: RFValue(16, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h7: {
      fontSize: RFValue(15, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
    h8: {
      fontSize: RFValue(12, screen),
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
  });

  Spacings.loadSpacings({
    screenOffset: 30,
  });
  const buttonStyles = {
    size: "large",
    borderRadius: 18,
    labelStyle: {
      paddingVertical: "1.5%",
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: "sf-pro-bold",
    },
  };
  interface ButtonTypes {
    primary: String;
    secondary: String;
    danger: String;
    success: String;
    black: String;
    dark: String;
    pv: String;
    fs: Number;
  }
  interface TextTypes {
    fontSize: number;
  }
  ThemeManager.setComponentTheme("Text", (props: TextTypes, context) => {
    // 'square' is not an original Button prop, but a custom prop that can
    // be used to create different variations of buttons in your app
    if (props.size) {
      return {
        style: {
          fontSize: RFValue(props.fontSize, screen),
        },
      };
    }
  });
  ThemeManager.setComponentTheme("Button", (props: ButtonTypes, context) => {
    // 'square' is not an original Button prop, but a custom prop that can
    // be used to create different variations of buttons in your app
    const font = props.fs ? props.fs : 18;
    let bgColor: object;
    if (props.primary) bgColor = { backgroundColor: Colors.primary };
    if (props.secondary) bgColor = { backgroundColor: Colors.secondary };
    if (props.danger) bgColor = { backgroundColor: Colors.danger };
    if (props.success) bgColor = { backgroundColor: Colors.success };
    if (props.black) bgColor = { backgroundColor: "black" };
    if (props.dark) bgColor = { backgroundColor: Colors.primaryGrey };
    return {
      ...buttonStyles,
      ...bgColor,

      labelStyle: {
        paddingVertical: props.pv ? props.pv : "1.5%",
        fontSize: RFValue(font, screen),
        fontWeight: "bold",
      },
      color: "white",
    };
  });
};
