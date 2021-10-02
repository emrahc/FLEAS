import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as React from "react";
import { init } from "../utils/db";

export default function useCachedResources() {
  const [
    isLoadingComplete,
    setLoadingComplete,
  ] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      console.log("USE CACHED RESOURCES");
      try {
        await init();
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
