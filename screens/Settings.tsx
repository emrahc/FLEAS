import React from "react";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Box, Text, useTheme } from "../components";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { init, L } from "../utils/Lan";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({ navigation }) => {
  const {
    signout,
    setLang,
    deleteUser,
    state,
  } = React.useContext(AuthContext);
  const [social, setSocial] = React.useState<boolean>(
    false
  );
  const { showActionSheetWithOptions } = useActionSheet();
  const theme = useTheme();
  console.log(state.user.email, "SETTINGS");
  const socio = async () => {
    const soc = await AsyncStorage.getItem("social");
    if (soc === "true") setSocial(true);
    if (soc === "false") setSocial(false);
    console.log(social, "SOCIAL");
  };
  React.useEffect(() => {
    socio();
  }, []);
  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure to delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => deleteUser(state.user.email),
          style: "destructive",
        },
      ]
    );
  };

  const onPress = (): void => {
    showActionSheetWithOptions(
      {
        options: [
          L("English"),
          L("Turkish"),
          L("French"),
          L("German"),
          L("Italian"),
          L("Norwegian"),
          L("Portuguese"),
          L("Russian"),
          L("Spanish"),
          L("Swedish"),
          L("CommonCancel"),
        ],
        cancelButtonIndex: 10,
        message: L("SelectLanguage"),
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          setLang("en-US");
          init();
        }

        if (buttonIndex === 1) {
          setLang("tr-TR");

          init();
        }
        if (buttonIndex === 2) {
          setLang("fr-FR");

          init();
        }

        if (buttonIndex === 3) {
          setLang("de-DE");
          init();
        }
        if (buttonIndex === 4) {
          setLang("it-IT");
          init();
        }

        if (buttonIndex === 5) {
          setLang("no-NO");
          init();
        }
        if (buttonIndex === 6) {
          setLang("pt-PT");
          init();
        }
        if (buttonIndex === 7) {
          setLang("ru-RU");
          init();
        }
        if (buttonIndex === 8) {
          setLang("es-ES");
          init();
        }
        if (buttonIndex === 9) {
          setLang("sv-SV");
          init();
        }
      }
    );
  };

  return (
    <Box flex={1} backgroundColor="white">
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="capitalize"
          >
            {L("SettingsProfileEdit")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>
      {social == false && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ChangePassword")
          }
        >
          <Box
            borderWidth={1}
            flexDirection="row"
            justifyContent="space-between"
            borderBottomColor="whitePurple"
            borderTopColor="whitePurple"
            borderRightColor="transparent"
            borderLeftColor="transparent"
            style={{
              paddingHorizontal: widthPercentageToDP(8),
              paddingVertical: widthPercentageToDP(4),
            }}
          >
            <Text
              variant="section"
              textAlign="left"
              textTransform="capitalize"
            >
              {L("SettingsPasswordUpdate")}
            </Text>
            <AntDesign
              name="right"
              size={widthPercentageToDP(5)}
              color={theme.colors.purpleMid}
            />
          </Box>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => onPress()}>
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="capitalize"
          >
            {L("SettingsLanguage")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteAccount()}>
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="capitalize"
          >
            {L("SettingsDeleteAccount")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signout()}>
        <Box
          borderWidth={1}
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="whitePurple"
          borderTopColor="whitePurple"
          borderRightColor="transparent"
          borderLeftColor="transparent"
          style={{
            paddingHorizontal: widthPercentageToDP(8),
            paddingVertical: widthPercentageToDP(4),
          }}
        >
          <Text
            variant="section"
            textAlign="left"
            textTransform="capitalize"
          >
            {L("SettingsLogout")}
          </Text>
          <AntDesign
            name="right"
            size={widthPercentageToDP(5)}
            color={theme.colors.purpleMid}
          />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default Settings;
