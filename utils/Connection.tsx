import React from "react";
import FaceRed from "../assets/images/facered";
import { Box, Text } from "../components";
import { heightToPercentage } from "../constants/Layout";
import { useNetInfo } from "@react-native-community/netinfo";

import { L } from "../utils/Lan";
export const ConnectInfo = () => {
  const netInfo = useNetInfo();
  return (
    <>
      {!netInfo.isConnected && (
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.596)",
            zIndex: 99999999,
          }}
        >
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
                  style={{
                    paddingBottom: heightToPercentage(3),
                  }}
                >
                  {L("Error")}
                </Text>
              </Box>
              <Box>
                <Text
                  style={{
                    paddingTop: heightToPercentage(3),
                    paddingBottom: heightToPercentage(3),
                    paddingHorizontal: "20%",
                    width: "100%",
                  }}
                  variant="errorMessage"
                  textAlign="center"
                >
                  {L("Check")}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
