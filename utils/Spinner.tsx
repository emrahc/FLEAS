import React, { Component } from "react";
import { Box, Text } from "../components";
import Button from "../components/ui/buttons/Basebutton";
import {
  heightToPercentage,
  widthToPercentage,
} from "../constants/Layout";
import { L } from "./Lan";
import LottieView from "lottie-react-native";
import { Image } from "react-native";
type Props = {
  spinner: boolean;
  loadingMessage: string;
  cancel: () => void;
  imageUrl: string;
};
export default class Loader extends Component<Props> {
  componentDidMount() {
    this.animation.play();
  }
  state = {
    spinner: this.props.spinner,
  };
  render() {
    return (
      <>
        {this.props.spinner && (
          <Box
            justifyContent="space-evenly"
            alignItems="center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              // backgroundColor: "rgba(0, 0, 0, 0.596)",
              backgroundColor: "white",
              zIndex: 1,
            }}
          >
            <Box
              style={{
                marginTop: heightToPercentage(20),
              }}
            >
              <Box
                style={{
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  backgroundColor: "white",
                }}
              >
                <LottieView
                  autoPlay
                  loop
                  resizeMode={
                    !this.props.cancel
                      ? "center"
                      : "contain"
                  }
                  ref={(animation) => {
                    this.animation = animation;
                  }}
                  style={{
                    width: widthToPercentage(40),
                    height: heightToPercentage(40),
                    // paddingVertical: heightToPercentage(),
                  }}
                  source={
                    !this.props.imageUrl
                      ? require("../assets/animation/9Renk.json")
                      : require("../assets/animation/data.json")
                  }
                />
              </Box>
              {this.props.imageUrl &&  (
                <Box
                  elevation={3}
                  shadowOffset={{
                    width: 0,
                    height: 2,
                  }}
                  shadowOpacity={0.1}
                  shadowRadius={3}
                >
                  <Image
                    source={{ uri: this.props.imageUrl }}
                    style={{
                      width: widthToPercentage(25),
                      height: widthToPercentage(25),
                      borderWidth: 10,
                      borderRadius: 30,
                      borderColor: "white",
                    }}
                  />
                </Box>
              )}
            </Box>
            <Box>
              <Text
                variant="title"
                color="purpleMid"
                marginTop="xl"
              >
                {this.props.loadingMessage}
              </Text>
            </Box>
            {this.props.cancel && (
              <Button
                variant="red"
                label={L("CommonCancel")}
                onPress={() => this.props.cancel()}
              />
            )}
          </Box>
        )}
      </>
    );
  }
}