import React from "react";
import { Image, ScrollView } from "react-native";
import { Box, Text } from "../components";
import {
  heightToPercentage,
  widthToPercentage,
} from "../constants/Layout";
import { L } from "../utils/Lan";

const Instructions = () => {
  return (
    <Box
      backgroundColor="white"
      alignItems="center"
      flex={1}
      style={{ paddingHorizontal: widthToPercentage(5) }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <Box
            style={{
              paddingVertical: heightToPercentage(2),

              paddingBottom: heightToPercentage(2),
              paddingLeft: widthToPercentage(3),
              alignSelf: "flex-start",
            }}
          >
            <Text
              variant="title"
              textAlign="center"
              color="purple"
            >
              {L("InstructionsImportant")}
            </Text>
          </Box>
          <Text variant="explanatoryl" padding="s">
            {L("InstructionsTitle")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions1")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions2")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions3")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions4")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions5")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions6")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions7")}
          </Text>
          <Text variant="explanatoryl" padding="s">
            {L("Instructions8")}
          </Text>
        </Box>
        <Box
          style={{
            paddingVertical: heightToPercentage(2),

            paddingBottom: heightToPercentage(2),
            paddingLeft: widthToPercentage(3),
            alignSelf: "flex-start",
          }}
        >
          <Text
            variant="title"
            textAlign="center"
            color="purple"
          >
            {L("InstructionsExample")}
          </Text>
        </Box>

        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 4 / 5,
            resizeMode: "contain",
            marginBottom: heightToPercentage(2),
          }}
          source={require("../assets/images/squarefacegirl.jpg")}
        />
        <Image
          style={{
            width: "100%",
            height: undefined,
            aspectRatio: 4 / 5,
            resizeMode: "contain",
          }}
          source={require("../assets/images/squarefaceman.jpg")}
        />
      </ScrollView>
    </Box>
  );
};

export default Instructions;
