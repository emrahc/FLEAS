import React from "react";
import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";

import Modal from "react-native-modal";
import { widthToPercentage } from "../../../constants/Layout";
interface Props {
  visible: Boolean;
  setvisible: (arg0: Boolean) => void;
}

const PhotoModal = ({ visible, setvisible, navigation }: Props) => {
  const navigate = (screen: string) => {
    navigation.navigate("AuthContent", { screen });
    setvisible(false);
  };
  return (
    <Modal
      onBackdropPress={() => setvisible(false)}
      isVisible={visible}
      animationIn="fadeIn"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View bg-primaryDark height="40%" width="100%" style={styles.modal}>
        <View>
          <View row spread paddingBottom="1%">
            <Text h2 white>
              Take or Upload a Photo
            </Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setvisible(false)}
            >
              <Text h2 grey marginB-10>
                X
              </Text>
            </TouchableOpacity>
          </View>
          <Text h5 grey>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, itaque
          </Text>
        </View>

        <View row paddingTop="10%" centerH>
          <TouchableOpacity onPress={() => navigate("AnalysisScreen")}>
            <View
              center
              paddingVertical="15%"
              paddingHorizontal="4%"
              bg-primaryGrey
              br30
              flex
            >
              <Feather
                name="camera"
                size={widthToPercentage(5)}
                color="white"
              />
              <Text h6 white marginT-5>
                Take a Photo
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("keko")}>
            <View
              center
              paddingVertical="15%"
              paddingHorizontal="5%"
              marginRight="2%"
              marginLeft="2%"
              bg-primaryGrey
              br30
              flex
            >
              <FontAwesome5
                name="image"
                size={widthToPercentage(5)}
                color="white"
              />
              <Text h6 white marginT-5>
                Camera Roll
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("keko")}>
            <View
              center
              paddingVertical="15%"
              paddingHorizontal="5%"
              bg-primaryGrey
              br30
              flex
            >
  <Ionicons name="person-circle-outline" 
                color="white"
                size={widthToPercentage(5.5)}
/>
              <Text h6 white marginT-5>Profile Page</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    borderRadius: 18,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  close: {
    paddingHorizontal: widthToPercentage(1),
  },
});
export default PhotoModal;
