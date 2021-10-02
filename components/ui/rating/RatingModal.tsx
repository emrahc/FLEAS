import React from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Button } from "react-native-ui-lib";

import StarRating from "react-native-star-rating";
import Modal from "react-native-modal";
import { widthToPercentage } from "../../../constants/Layout";
import Spacer from "../layout/Spacer";
interface Props {
  visible: Boolean;
  setvisible: (arg0: Boolean) => void;
}

const RatingModal = ({ modalVisible, setModalVisible }: Props) => {
  const [starCount, setStarcount] = React.useState(5);
  const navigate = (screen: string) => {
    navigation.navigate("AuthContent", { screen });
    setvisible(false);
  };
  const onStarRatingPress = (rating: number) => {
    setStarcount(rating);
  };
  return (
    <Modal
      onBackdropPress={() => setModalVisible(false)}
      isVisible={modalVisible}
      animationIn="fadeIn"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View
        spread
        bg-primaryDark
        height="50%"
        width="100%"
        style={styles.modal}
      >
        <View>
          <View row spread paddingBottom="1%">
            <Text h1 white>
              Feedback
            </Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => setModalVisible(false)}
            >
              <Text h2 grey marginB-10>
                X
              </Text>
            </TouchableOpacity>
          </View>
          <Text h5 grey>
            Please review the results
          </Text>
        </View>

        <View flex paddingHorizontal="5%" centerV>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={(rating) => onStarRatingPress(rating)}
            fullStarColor={"#FFCC65"}
            emptyStarColor={"#B8B1D7"}
          />
        </View>
        <Button small label="Send Review" />
        <Spacer pb={2} />
        <Button small dark label="Cancel" />
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
export default RatingModal;
