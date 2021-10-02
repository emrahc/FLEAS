import React from "react";
import { StyleSheet, Image } from "react-native";
import { Carousel, Text, View, Colors } from "react-native-ui-lib";
import LottieView from "lottie-react-native";
import Spacer from "../../components/ui/layout/Spacer";
import SvgLogo from "../../assets/FaceLordSvgLogo";
import Container from "../../components/ui/layout/Container";
import { AntDesign } from "@expo/vector-icons";
import { widthToPercentage } from "../../constants/Layout";
import Horoscope from "../../components/horoscope/Horoscope";
import MatchMaking from "../../assets/SvgComponents/MatchMaking";
interface Props {}

const Pricing = (props: Props) => {
  return (
    <Container scroll={true}>
      <View>
        <View paddingHorizontal="5%" paddingVertical="10%">
          <SvgLogo w={25} />
          <Spacer mt={3} />
          <Text h1 white>
            Join Face Lord
          </Text>
          <Text h1 white>
            Unlimited
          </Text>
        </View>
      </View>
      <View style={styles.priceCard}>
        <View paddingL-15>
          <Text h4 white>
            Full Version
          </Text>
          <Spacer mt={2} />
          <View width="90%">
            <Text h6 grey>
              Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
            </Text>
          </View>
          <Spacer mt={2} />
          <Text h2 primary>
            USD 85.00
          </Text>
        </View>

        <View paddingR-10 center>
          <AntDesign
            name="arrowright"
            size={widthToPercentage(8)}
            color="white"
          />
        </View>
      </View>
      <View style={styles.priceCard2}>
        <View paddingL-15>
          <Text h4 white>
            Monthly Version
          </Text>
          <Spacer mt={2} />
          <View width="90%">
            <Text h6 grey>
              Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
            </Text>
          </View>
          <Spacer mt={2} />
          <Text h2 primary>
            USD 17.00
          </Text>
        </View>

        <View paddingR-10 center>
          <AntDesign
            name="arrowright"
            size={widthToPercentage(8)}
            color="white"
          />
        </View>
      </View>
      <View style={styles.priceCard2}>
        <View paddingL-15>
          <Text h4 white>
            Free Version
          </Text>
          <Spacer mt={2} />
          <View width="90%">
            <Text h6 grey>
              Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
            </Text>
          </View>

          <Spacer mt={2} />
          <View row>
            <Horoscope w={10} />
            <Spacer ml={2} />
            <MatchMaking w={10} />
          </View>
        </View>

        <View paddingR-10 center>
          <AntDesign
            name="arrowright"
            size={widthToPercentage(8)}
            color="white"
          />
        </View>
      </View>

      <Spacer mt={2} />
      <View center>
        <Text grey h5>
          Yenile{" "}
        </Text>
        <Spacer mt={2} />
        <Text grey h5>
          Yenile{" "}
        </Text>
        <Spacer mt={2} />
        <Text grey h5>
          Yenile{" "}
        </Text>
      </View>
      <Spacer mt={2} />
    </Container>
  );
};

const styles = StyleSheet.create({
  priceCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderTopColor: Colors.grey,
    borderBottomColor: Colors.grey,
    paddingVertical: "5%",
  },
  priceCard2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderBottomColor: Colors.grey,
    paddingVertical: "5%",
  },
});

export default Pricing;
