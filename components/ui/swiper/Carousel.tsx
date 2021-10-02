import React from "react";
import { StyleSheet, Image } from "react-native";
import { Carousel, Text, View } from "react-native-ui-lib";
import SvgLogo from "../../../assets/FaceLordSvgLogo";
import { heightToPercentage } from "../../../constants/Layout";
import Spacer from "../layout/Spacer";
import LottieView from "lottie-react-native";
interface Props {}

const SwiperWix = (props: Props) => {
  const carousel = React.useRef<typeof Carousel>();

  const animation = React.useRef(null);
  return (
    <Carousel
      ref={carousel}
      //loop
      // autoplay={autoplay}
      // onChangePage={this.onChangePage}
      // pageWidth={width}
      // itemSpacings={Spacings.s3}
      //   containerMarginHorizontal={Spacings.s2}
      //   initialPage={INITIAL_PAGE}
      containerStyle={{
        flex: 1,
      }}
      pageControlPosition={Carousel.pageControlPositions.UNDER}
      //   pageControlProps={{ onPagePress: this.onPagePress, limitShownPages }}
      // showCounter
      allowAccessibleLayout
      loop
    >
      <View center flexG>
        <SvgLogo w={45} />
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
      <View center flexG>
        <LottieView
          autoPlay
          loop
          resizeMode="contain"
          ref={animation}
          style={{
            height: heightToPercentage(40),
            // flexGrow: 1,
            // paddingVertical: heightToPercentage(),
          }}
          source={require("../../../assets/animation/face_lord_Cihan_son.json")}
        />

        <View>
          <Text center h1 white>
            Purus semper eget duis at tellus
          </Text>
          <Text h5 grey center>
            Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
            pharetra et ultrices
          </Text>
        </View>
      </View>
      <View flexG center>
        <Image
          source={require("../../../assets/images/SwiperLifePattern.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text center h1 white>
            Purus semper eget duis at tellus
          </Text>
          <Text h5 grey center>
            Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
            pharetra et ultrices
          </Text>
        </View>
      </View>
    </Carousel>
  );
};

export default SwiperWix;

const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: "100%",
    height: "50%",
  },
});
