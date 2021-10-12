import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./components/Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Navigation from "./navigation/index";
import LoadAssets from "./components/LoadAssets";
import { Provider as AuthProvider } from "./components/authentication/AuthContext";
import useCachedResources from "./hooks/useCachedResources";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import * as Localization from "expo-localization";
import { init } from "./utils/Lan";
import { Platform } from "react-native";
import Constants from "expo-constants";
import { themeInit } from "./components/ui/ThemeInit";
import Purchases from "react-native-purchases";
const fonts = {
  "sf-pro-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "sf-pro-semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
};
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

themeInit();

const registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const {
      status: existingStatus,
    } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    // alert(token);
    const pushToken = await AsyncStorage.getItem("pushToken");
    if (token !== pushToken || !pushToken) {
      await AsyncStorage.setItem("pushToken", token);
      console.log("notification token", token);
      console.log("notification token", pushToken);
    } else {
      return;
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  }
};

const langHandler = async () => {
  const lang = await AsyncStorage.getItem("lang");
  console.log(lang, "APP INIT LANG");
  if (!lang) {
    const { locale } = await Localization.getLocalizationAsync();
    console.log(locale, "LOCALE");

    await AsyncStorage.setItem("lang", locale);
  }
};
export default function App() {
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    Purchases.setup("UnNQYIghppdApcDFslwZBdzvqawydsyM");
    Purchases.getAppUserID()
      .then((e) => console.log(e, "PURCHASER"))
      .catch((e) => console.log(e));
    Purchases.getOfferings()
      .then((e) => {
        console.log(e, "PURCH");
      })
      .catch((e) => console.log(e, "ERROR"));
  });
  // const notificationListener = useRef<any>();
  // const responseListener = useRef<any>();
  langHandler();
  // useEffect(() => {
  //   registerForPushNotificationsAsync();
  //   // This listener is fired whenever a notification is received while the app is foregrounded
  //   // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );
  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    init();
    return (
      <ActionSheetProvider>
        <ThemeProvider>
          <LoadAssets {...{ fonts }}>
            <SafeAreaProvider>
              <StatusBar hidden />
              <Provider store={store}>
                <AuthProvider>
                  <Navigation />
                </AuthProvider>
              </Provider>
            </SafeAreaProvider>
          </LoadAssets>
        </ThemeProvider>
      </ActionSheetProvider>
    );
  }
}
