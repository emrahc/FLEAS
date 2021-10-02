import React from "react";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Box, Text } from "../../";

interface Props {
  resultName: string;
  resultPercentage: string;
  isHighest: boolean;
  resultText: string;
}

const ResultListItem = ({
  resultName,
  resultPercentage,
  isHighest,
  resultText,
}: Props) => {
  console.log(resultName);
  console.log(resultPercentage);
  return (
    <Box
      style={{
        paddingHorizontal: widthPercentageToDP(5),

        paddingTop: heightPercentageToDP(1.8),
        paddingBottom: heightPercentageToDP(1.8),
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
      }}
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          variant="button"
          textTransform="capitalize"
          textAlign="left"
          color={isHighest ? "purple" : "black"}
        >
          {resultName}
        </Text>
        <Box
          backgroundColor={
            isHighest ? "purple" : "purpleGray"
          }
          justifyContent="center"
          alignItems="center"
          borderRadius={100}
          style={{
            paddingHorizontal: widthPercentageToDP(5),
            paddingVertical: widthPercentageToDP(1.5),
            width: widthPercentageToDP(20),
          }}
        >
          <Text
            variant="title"
            color={isHighest ? "white" : "purple"}
          >
            {resultPercentage}%
          </Text>
        </Box>
      </Box>
      <Box style={{ paddingTop: heightPercentageToDP(1) }}>
        <Text variant="explanatory">{resultText}</Text>
      </Box>
    </Box>
  );
};

export default ResultListItem;

const styles = StyleSheet.create({});
