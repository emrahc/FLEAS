import React from "react";
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import Slider1 from "../../../assets/images/Slider1";
import Slider2 from "../../../assets/images/Slider2";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../../constants/Layout";
import LottieView from "lottie-react-native";
import { L } from "../../../utils/Lan";
import SvgLogo from "../../../assets/FaceLordSvgLogo";
import Spacer from "../layout/Spacer";
import { Button, Image, View, Text } from "react-native-ui-lib";
import SwiperLifePatterns from "./SwiperLifePatterns";

export default function SwiperComponent() {
  const animation = React.useRef(null);
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      removeClippedSubviews={false}
    >
      <View paddingTop="20%">
        <View center>
          <SvgLogo w={35} />
        </View>
        <Spacer mt={3} />
        <Text center h1 white>
          Welcome to
        </Text>
        <Text center h1 white>
          Face Lord
        </Text>
        <Spacer mt={3} />
        <Text h5 grey center>
          Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
          pharetra et ultrices
        </Text>
      </View>
      <View>
        <Spacer mt={3} />
        <Text center h1 white>
          Purus semper eget duis at tellus
        </Text>
        <Spacer mt={3} />
        <Text h5 grey center>
          Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
          pharetra et ultrices
        </Text>
      </View>
      <View spread paddingTop="30%" flex>
        <View flexG>
          <Image
            source={require("../../../assets/images/SwiperLifePattern.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View flex>
          <Text center h1 white>
            Purus semper eget duis at tellus
          </Text>
          <Text h5 grey center>
            Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
            pharetra et ultrices
          </Text>
        </View>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: null,
    height: null,
    flexGrow: 1,
  },
});
