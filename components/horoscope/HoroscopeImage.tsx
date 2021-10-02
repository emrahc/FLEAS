import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Text, View, Colors } from "react-native-ui-lib";
import { heightToPercentage, widthToPercentage } from "../../constants/Layout";
import Aries from "./Aries";

const imageUrl = { uri: "https://i.pravatar.cc/300" };

interface Props {
  image: {
    uri: string;
  };
  left: boolean;
}
const leftValue = { left: "-50%" };
const rightValue = { right: "-50%" };
const HoroscopeImage = ({ image = imageUrl, left = true }: Props) => {
  return (
    <View center>
      <ImageBackground
        source={image}
        resizeMode="center"
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View
          style={[styles.horoscopeContainer, left ? leftValue : rightValue]}
        >
          <View style={styles.horoscope}>
            <Aries />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 300,
  },
  image: {
    flex: 1,
    width: widthToPercentage(20),
    height: widthToPercentage(20),
  },
  imageStyle: {
    borderRadius: 100,
    width: widthToPercentage(20),
    height: widthToPercentage(20),
  },
  horoscopeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  horoscope: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.midGrey,
    borderRadius: 100,
    width: widthToPercentage(0.1),
    height: widthToPercentage(0.1),
    padding: widthToPercentage(7),
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default HoroscopeImage;
