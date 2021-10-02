import { Alert } from "react-native";
import { L } from "./Lan";

import * as ImagePicker from "expo-image-picker";
export const pickHandler = async (
  navigation: () => void,
  pickImage: () => void,
  fromCamera: Boolean | null
) => {
  const {
    status,
  } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status === "granted") {
    {
      !fromCamera ? (
        Alert.alert(
          L("CommonCaution"),
          L("CommonRoll"),
          [
            {
              text: L("CommonRollContinue"),
              onPress: () => pickImage(),
            },
            {
              text: L("CommonRollCamera"),
              onPress: () => {
                navigation.push("Camera");
              },
            },
            {
              text: L("CommonCancel"),
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ],
          { cancelable: false }
        )) :   
      Alert.alert(
        L("CommonCaution"),
        L("CommonRoll"),
        [
          {
            text: L("CommonRollContinue"),
            onPress: () =>
             pickImage(),
          },
          {
            text: L("CommonCancel"),
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    };
      
  } else alert(L("permissionCamera"));
};
