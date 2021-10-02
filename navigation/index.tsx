import * as React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider as PhotoProvider } from "../context/PhotoContext";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import AuthNavigator from "./AuthNavigator";
import { RootNavigator } from "./AppNavigator";
import BottomTabNavigator from "./BottomTab";
import Loader from "../utils/Spinner";
import { init } from "../utils/Lan";
import Toast from "react-native-toast-message";
import { ConnectInfo } from "../utils/Connection";
import PhotoModal from "../screens/PhotoModal";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

export default function Navigation() {
  const { state, retrieveToken } = React.useContext(AuthContext);

  React.useEffect(() => {
    let userToken;
    setTimeout(async () => {
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        console.log(userToken);
      } catch (e) {
        console.log(e);
      }
      init();
      retrieveToken(userToken);
    }, 1000);
  }, []);
  React.useEffect(() => {
    init();
  }, [state.lang]);
  return (
    <>
      {/* <Loader
        // spinner={state.isLoading}
        spinner={false}
        loadingMessage={state.loadingMessage}
        cancel={state.cancel}
        imageUrl={state.imageUrl}
      /> */}
      {/* <ConnectInfo /> */}
      {!state.token ? (
        <PhotoProvider>
          <AppStack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: "transparent" },
              cardOverlayEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: "clamp",
                  }),
                },
              }),
            }}
            mode="modal"
          >
            <AppStack.Screen name="Welcome" component={BottomTabNavigator} />
            <AppStack.Screen name="Root" component={RootNavigator} />
            <AppStack.Screen name="AuthContent" component={AuthNavigator} />

            {/* <AppStack.Screen name="Photo" component={PhotoModal} /> */}
          </AppStack.Navigator>
        </PhotoProvider>
      ) : (
        <PhotoProvider>
          <AppStack.Navigator
            screenOptions={{
              headerShown: false,
              statusBarHidden: false,
            }}
          >
            <AppStack.Screen name="AuthContent" component={AuthNavigator} />
          </AppStack.Navigator>
        </PhotoProvider>
      )}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
