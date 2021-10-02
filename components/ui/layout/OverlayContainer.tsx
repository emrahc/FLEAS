import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  behind: React.Component;
  front: React.Component;
  under: React.Component;
}

// Show something on top of other
export const OverlayContainer = ({
  behind,
  front,
  under,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.behind}>{behind}</View>
        {front}
      </View>
      {under}
    </View>
  );
};
{
  /* <OverlayContainer
            behind={
              <LottieView
                autoPlay
                loop
                resizeMode="contain"
                ref={(animation) => {
                  this.animation = animation;
                }}
                style={{
                  width: widthToPercentage(40),
                  height: heightToPercentage(40),
                  // paddingVertical: heightToPercentage(),
                }}
                source={require("../assets/animation/data.json")}
              />
            }
            front={
              <Image
                source={require("../assets/images/maskedface.png")}
              /> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "white",
    zIndex: 99999,
  },
  center: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  behind: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
});
