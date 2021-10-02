import React, { ReactNode } from "react";
import {
  createText,
  createBox,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { heightToPercentage } from "../constants/Layout";
const screen: number = 812;
const theme = {
  colors: {
    white: "white",
    whitePurple: "#EDE9FE",
    black: "black",
    purple: "#6C4EF4",
    purpleLight: "#B8B1D7",
    purpleSpider: "#CFC5FF",
    purpleGreySpider: "#C5C0DB",
    purpleMid: "#9B95B6",
    purpleGray: "#FAF9FF",
    whiteGray: "#7D7D7D",
    green: "#45CB85",
    red: "#FF6674",
    reddish: "red",
    transparent: "transparent",
  },
  spacing: {
    b: heightToPercentage(2.46),
    o: 0,
    s: 8,
    sm: 14,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadius: {
    o: 0,
    s: 4,
    m: 10,
    b: 18,
    l: 25,
    xl: 75,
  },
  textVariants: {
    brand: {
      fontSize: RFValue(34, screen),
      lineHeight: RFValue(40, screen),
      fontFamily: "poppins-bold",
      color: "black",
      textAlign: "left",
    },
    title: {
      fontSize: RFValue(17, screen),
      lineHeight: RFValue(32, screen),
      fontFamily: "poppins-bold",
      color: "black",
    },
    errorMessage: {
      fontSize: RFValue(29, screen),
      lineHeight: RFValue(38, screen),
      fontFamily: "poppins-bold",
      color: "black",
      zIndex: 99999,
    },
    explanatory: {
      fontSize: RFValue(12, screen),
      lineHeight: RFValue(21, screen),
      fontFamily: "poppins-medium",
      color: "whiteGray",
    },
    explanatoryl: {
      fontSize: RFValue(14, screen),
      lineHeight: RFValue(21, screen),
      fontFamily: "poppins-medium",
      color: "black",
    },
    button: {
      fontSize: RFValue(18, screen),
      lineHeight: RFValue(21, screen),
      letterSpacing: RFValue(1, screen),
      fontFamily: "poppins-bold",
      fontWeight: "bold",
      textAlign: "center",
    },
    appleButton: {
      fontSize: heightToPercentage(3),
      fontWeight: "500",
      letterSpacing: 0.38,
      lineHeight: 24,
      textAlign: "center",
    },
    header: {
      fontSize: RFValue(12, screen),
      fontFamily: "SemiBold",
      lineHeight: 24,
    },
    section: {
      fontSize: RFValue(18, screen),
      fontFamily: "poppins-medium",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    textInputHeader: {
      fontSize: RFValue(12, screen),
      backgroundColor: "white",
      alignSelf: "flex-start",
      fontFamily: "poppins-medium",

      fontWeight: "800",
      zIndex: 999,
      color: "purple",
    },
    textInputHeaderError: {
      fontSize: RFValue(12, screen),
      alignSelf: "flex-start",
      fontFamily: "poppins-medium",
      fontWeight: "800",
      zIndex: 999,
    },
    resultButton: {
      fontSize: RFValue(13, screen),
      fontFamily: "poppins-medium",
      textTransform: "uppercase",
      zIndex: 999,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <ReStyleThemeProvider theme={theme}>
    {children}
  </ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
