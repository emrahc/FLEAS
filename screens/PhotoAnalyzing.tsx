import * as React from "react";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import Button from "../components/ui/buttons/Basebutton";
import { Box, Text } from "../components";
import FaceRed from "../assets/images/facered";
import { heightToPercentage } from "../constants/Layout";
import IconButton from "../components/ui/buttons/IconButton";
import { L } from "../utils/Lan";

export default function PhotoAnalyzing({
  navigation,
}: StackScreenProps<RootStackParamList, "PhotoAnalyzing">) {
  const { state } = React.useContext(AuthContext);

  React.useEffect(() => {
    console.log("STATE ERROR", state);
  }, [state]);

  return (
    <Box
      alignItems="center"
      backgroundColor="white"
      flex={1}
      paddingHorizontal="l"
    >
      <Box flex={5} justifyContent="flex-end">
        <FaceRed />
      </Box>
      <Box flex={3}>
        <Box>
          <Text
            variant="title"
            color="red"
            textAlign="center"
            style={{ paddingBottom: heightToPercentage(3) }}
          >
            {L("Error")}
          </Text>
        </Box>
        <Text
          style={{
            paddingTop: heightToPercentage(3),
            paddingBottom: heightToPercentage(3),
          }}
          variant="errorMessage"
          textAlign="center"
        >
          {L("ErrorAnalysis")}
        </Text>
        <Text variant="explanatoryl" textAlign="center">
          {L("ErrorInstructions")}
        </Text>
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        style={{ paddingTop: heightToPercentage(10) }}
      >
        <IconButton
          onPress={() => navigation.replace("Instructions")}
          label={L("InstructionsHeader")}
          variant="red"
        />
      </Box>
      <Box
        flex={4}
        alignContent="flex-end"
        justifyContent="flex-end"
        style={{ marginBottom: heightToPercentage(2) }}
      >
        <Button
          variant="purple"
          onPress={() => navigation.replace("Camera")}
          label={L("ErrorButton")}
        />
      </Box>
    </Box>
  );
}
