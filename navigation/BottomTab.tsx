import * as React from "react";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
import BottomTabBar from "../components/ui/bottomtabbar/BottomTabBar";

import { Login, Profile, WelcomeScreen } from "../screens";
import AiTools from "../screens/AiTools";
import { Colors, View } from "react-native-ui-lib";
import { widthToPercentage } from "../constants/Layout";
import { HeaderLeft, HeaderRight } from "./Header";
import Patterns from "../screens/Patterns";
import DailyQuotes from "../screens/Quotes/DailyQuotes";
import AiLifeCoach from "../screens/AILifeCoach/AiLifeCoach";
import Match from "../screens/Match/Match";
import SwotAnalysis from "../screens/Swot/Swot";
//  import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      tabBar={(props) => <BottomTabBar {...props} />}
      //   screenOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <Tab.Screen name="TabOne" component={TabOneNavigator} />
      <Tab.Screen name="TabTwo" component={TabTwoNavigator} />
    </Tab.Navigator>
  );
}

const TabOneStack = createNativeStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={({ navigation }) => ({
        headerHideShadow: true,
        headerTitle: "",
        headerTranslucent: true,
        headerTransparent: true,
        // headerLeft: () => <HeaderLeft label={"Back"} navigation={navigation} />,
        headerRight: () => <HeaderRight navigation={navigation} />,
      })}
    >
      <TabOneStack.Screen name="AiTools" component={AiTools} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: Colors.midGrey,
        headerHideShadow: true,
        headerTitle: "",
        headerTranslucent: true,
        headerTransparent: true,
        headerRight: () => <HeaderRight navigation={navigation} />,
      })}
    >
      <TabTwoStack.Screen
        name="Profile"
        component={SwotAnalysis}
        options={({ navigation }) => {
          return {
            // headerTitleStyle: {
            //   color: "white",
            // },
            headerLeft: () => (
              <HeaderLeft label={"Back"} navigation={navigation} />
            ),
          };
        }}
      />
    </TabTwoStack.Navigator>
  );
}
