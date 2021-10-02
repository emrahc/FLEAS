import * as React from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Button from "../buttons/Basebutton";
import { Box, Text, useTheme } from "../../Theme";
import { facebookLogIn } from "../../authentication/Facebook";
import { AntDesign } from "@expo/vector-icons";
import { widthToPercentage } from "../../../constants/Layout";
interface BottomSheetComponentProps {
  ref: React.RefObject<BottomSheet>;
}
const handleLogin = () => {
  console.log("Keko");
};
const handleSignup = () => {
  console.log("Keko");
};
const BottomSheetComponent = React.forwardRef<
  BottomSheet,
  BottomSheetComponentProps
>((props, ref) => {
  const theme = useTheme();
  const renderContent = () => (
    <Box
      flexDirection="column"
      alignItems="center"
      backgroundColor="white"
      height={450}
    >
      <Button
        variant="purple"
        onPress={handleLogin}
        label="login face yourself"
      />
      <Button
        variant="white"
        onPress={handleSignup}
        label="sign up"
      />
      <Button
        variant="white"
        onPress={facebookLogIn}
        label="sign up"
      />
      <Button variant="white">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          style={{
            width: "100%",

            backgroundColor: "#3B5998",
            borderRadius: 18,
          }}
        >
          <Box
            flex={1.5}
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <AntDesign
              style={{}}
              name="facebook-square"
              size={widthToPercentage(8)}
              color="white"
            />
          </Box>
          <Text
            variant="button"
            color="white"
            style={{
              flex: 6,
              paddingBottom: theme.spacing.b,
              paddingTop: theme.spacing.b,
            }}
          >
            SIGN UP WITH FACEBOOK
          </Text>
        </Box>
      </Button>
      <Button variant="white">
        <Box
          flexDirection="row"
          alignItems="center"
          style={{
            width: "100%",
            borderRadius: 18,

            backgroundColor: "#4285F4",
          }}
        >
          <Box
            flex={1}
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingLeft: widthToPercentage(8),
            }}
          >
            <AntDesign
              name="google"
              size={widthToPercentage(8)}
              color="white"
            />
          </Box>
          <Text
            variant="button"
            color="white"
            style={{
              flex: 7,
              paddingRight: widthToPercentage(6),
              paddingBottom: theme.spacing.b,
              paddingTop: theme.spacing.b,
            }}
          >
            SIGN UP WITH GOOGLE
          </Text>
        </Box>
      </Button>
    </Box>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  return (
    <BottomSheet
      ref={ref}
      snapPoints={[450, 250, 0]}
      // renderHeader={renderHeader}
      initialSnap={2}
      borderRadius={30}
      renderContent={renderContent}
    />
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: -3, height: -10 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
});

export default BottomSheetComponent;
