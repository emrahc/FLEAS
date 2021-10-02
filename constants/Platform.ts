import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Device from "expo-device";

export const isIOS = Platform.OS == "ios";
export const version = parseInt(Platform.Version, 10);
export const isTablet =
  Constants.platform.ios?.userInterfaceIdiom === "tablet"
    ? true
    : false;
const appVer = isIOS ? "x-fy-appver" : "x-fy-andver";
export const headerPhone = {
  "x-fy-pt": Constants.platform,
  "x-fy-pm": Device.modelName,
  [appVer]: Platform.Version,
};
