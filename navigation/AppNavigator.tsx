import * as React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Text } from "react-native";
import { AuthStackParamList } from "../types";
import { HeaderBackButton } from "@react-navigation/stack";
import {
  WelcomeScreen,
  Settings,
  Login,
  SignUp,
  Info,
  ForgotPassword,
  ResetPassword,
} from "../screens/";
import { InfoButton } from "../components/ui/buttons/InfoButton";
import { width } from "../constants/Layout";
import { L } from "../utils/Lan";
import WelcomeCarousel from "../screens/Welcome/WelcomeCarousel";
import Pricing from "../screens/Pricing/Pricing";
import AiTools from "../screens/AiTools";
const AppStack = createNativeStackNavigator<AuthStackParamList>();

export const RootNavigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="Root" component={AiTools} />
      <AppStack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          stackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              onPress={() => navigation.replace("Root")}
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
              {L("LoginButton")}
            </Text>
          ),
          headerRight: () => <InfoButton navigation={navigation} />,
        })}
      />

      <AppStack.Screen
        name="SignUp"
        component={SignUp}
        options={({ navigation }) => ({
          stackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton
              labelVisible={false}
              onPress={() => navigation.replace("Login")}
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
              {L("welcomeSignup")}
            </Text>
          ),
          headerRight: () => <InfoButton navigation={navigation} />,
        })}
      />

      <AppStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
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
              {L("ForgotPasswordHeader")}
            </Text>
          ),
        })}
      />
      <AppStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
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
              {L("ForgotPasswordHeader")}
            </Text>
          ),
        })}
      />
      <AppStack.Screen
        name="Info"
        component={Info}
        options={({ navigation }) => ({
          StackAnimation: "fade",
          headerShown: true,
          headerHideShadow: true,
          hideBackButton: false,
          headerLeft: () => (
            <HeaderBackButton onPress={() => navigation.goBack()} />
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
              {L("InfoHeader")}
            </Text>
          ),
        })}
      />
    </AppStack.Navigator>
  );
};
