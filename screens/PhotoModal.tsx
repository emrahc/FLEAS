import React from "react";
import { View, Button, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

export default function PhotoModal({ navigation }) {
  return (
    <View
      style={{
        width: "50%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
