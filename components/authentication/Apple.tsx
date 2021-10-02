import React from "react";
import * as AppleAuthentication from "expo-apple-authentication";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../constants/Layout";
import { ActivityIndicator } from "react-native";
import { useTheme } from "../Theme";
export function Apple({ apple }) {
  const theme = useTheme();
  return (
    <>
      {AppleAuthentication.isAvailableAsync() ? (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={
            AppleAuthentication
              .AppleAuthenticationButtonType.SIGN_UP
          }
          buttonStyle={
            AppleAuthentication
              .AppleAuthenticationButtonStyle.BLACK
          }
          cornerRadius={heightToPercentage(2)}
          style={{
            width: widthToPercentage(84),
            height: heightToPercentage(7.5),
            zIndex: 999999,
            marginBottom: "2%",
          }}
          onPress={() => apple()}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color={theme.colors.purple}
        />
      )}
    </>
  );
}
