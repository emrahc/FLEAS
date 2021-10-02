import * as React from "react";
import { Text, Dimensions } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { HeaderBackButton } from "@react-navigation/stack";
import {
  AnalysisScreen,
  CameraComponent,
  ChangePassword,
  Profile,
  ProfileEdit,
  Result,
  Settings,
  TakePhoto,
  PhotoAnalyzing,
  Instructions,
} from "../screens";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { RootStackParamList } from "../types";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import { init, L } from "../utils/Lan";
import { isTablet } from "../constants/Platform";
import { View } from "react-native-ui-lib";
import { widthToPercentage } from "../constants/Layout";
import { Header, HeaderLeft, HeaderRight } from "./Header";
const { width } = Dimensions.get("window");
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  const { state } = React.useContext(AuthContext);
  init();
  return (
    <Stack.Navigator
      initialRouteName="TakePhoto"
      screenOptions={{
        headerLargeTitleHideShadow: true,
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerHideShadow: true,
        headerTintColor: "transparent",
        headerTranslucent: true,
      }}
    >
      <Stack.Screen
        name="TakePhoto"
        component={TakePhoto}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          headerHideBackButton: true,
          headerCenter: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "poppins-bold",
                fontSize: width / 25,
                textTransform: "uppercase",
              }}
            >
              Face Yourself
            </Text>
          ),
          headerRight: () => (
            <MaterialIcons
              name="person-outline"
              size={isTablet ? width / 15 : width / 12}
              color="black"
              onPress={() => navigation.navigate("Profile")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Instructions"
        component={Instructions}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              onPress={() => navigation.navigate("TakePhoto")}
            />
          ),
          headerCenter: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "poppins-bold",
                fontSize: width / 25,
                textTransform: "uppercase",
              }}
            >
              {L("InstructionsHeader").toUpperCase()}
            </Text>
          ),
          headerRight: () => (
            <MaterialIcons
              name="person-outline"
              size={isTablet ? width / 15 : width / 12}
              color="black"
              onPress={() => navigation.navigate("Profile")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              onPress={() => navigation.goBack()}
            />
          ),
          headerCenter: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "poppins-bold",
                fontSize: width / 25,
                textTransform: "uppercase",
              }}
            >
              {state.user.full_name && state.user.full_name.slice(0, 20)}
            </Text>
          ),
          headerRight: () => (
            <Feather
              name="settings"
              size={isTablet ? width / 17 : width / 13}
              color="black"
              onPress={() => navigation.replace("Settings")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: false,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              onPress={() => navigation.replace("Profile")}
            />
          ),
          headerCenter: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "poppins-bold",
                fontSize: width / 25,
              }}
            >
              {L("SettingsHeader")}
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              onPress={() => navigation.replace("Settings")}
            />
          ),
          headerCenter: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "poppins-bold",
                fontSize: width / 25,
              }}
            >
              {L("SettingsProfileEdit").toUpperCase()}
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              onPress={() => navigation.replace("Settings")}
            />
          ),
          headerCenter: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "poppins-bold",
                fontSize: width / 25,
                textTransform: "uppercase",
              }}
            >
              {L("SettingsPasswordUpdateHeader")}
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name="AnalysisScreen"
        component={AnalysisScreen}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              label="AI Tools"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <>
              <View padding-8 bg-midGrey br100 spread>
                <AntDesign
                  name="exclamationcircleo"
                  size={widthToPercentage(6)}
                  color="white"
                  // onPress={() => navigation.replace("Settings")}
                />
              </View>
              <View padding-8 marginH-5 bg-midGrey br100>
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={widthToPercentage(6)}
                  color="white"
                />
              </View>
            </>
          ),
        })}
      />

      <Stack.Screen
        name="Camera"
        component={CameraComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhotoAnalyzing"
        component={PhotoAnalyzing}
        options={({ navigation }) => ({
          headerShown: true,
          StackAnimation: "fade",
          headerTitle: "",
          headerHideBackButton: true,
          headerHideShadow: true,
          headerRight: () => (
            <MaterialIcons
              name="person-outline"
              size={isTablet ? width / 15 : width / 12}
              color="black"
              onPress={() => navigation.replace("Profile")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={({ navigation }) => {
          return {
            StackAnimation: "fade",
            headerShown: true,
            headerHideShadow: true,
            hideBackButton: false,
            headerLeft: () => (
              <HeaderLeft label="Back" navigation={() => navigation.goBack()} />
            ),
            headerRight: () => <HeaderRight navigation={navigation} />,
          };
        }}
      />
    </Stack.Navigator>
  );
}
