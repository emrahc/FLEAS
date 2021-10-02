import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ScrollView, StyleSheet } from "react-native";
import {
  Text,
  View,
  Assets,
  Constants,
  Button,
  Colors,
  Typography,
  Incubator,
  Card,
} from "react-native-ui-lib"; //eslint-disable-line
import { AuthStackParamList } from "../types";
import { AntDesign } from "@expo/vector-icons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import SvgLogo from "../../assets/FaceLordSvgLogo";
import LifeCoach from "../../assets/SvgComponents/LifeCoach";
import Donut from "../../components/donut/Donut";
import MatchDonut from "../../components/donut/MatchDonut";
import SvgMeter from "../../components/donut/SvgMeter";
import { Aries } from "../../components/horoscope";
import Horoscope from "../../components/horoscope/Horoscope";
import HoroscopeMatch from "../../components/horoscope/HoroscopeMatch";
import Government from "../../components/jobs/Government";
import Health from "../../components/jobs/Health";
import Science from "../../components/jobs/Science";
import Shop from "../../components/jobs/Shop";
import Work from "../../components/patterns/Work";
import Swot1 from "../../components/swot/Swot1";
import Swot2 from "../../components/swot/Swot2";
import Swot3 from "../../components/swot/Swot3";
import Swot4 from "../../components/swot/Swot4";
import Container from "../../components/ui/layout/Container";
import Spacer from "../../components/ui/layout/Spacer";
import PatternAnalysisCard from "../../components/ui/patterncard/PatternAnalysisCard";
import PatternCard from "../../components/ui/patterncard/PatternCard";
import PatternQuotesCard from "../../components/ui/patterncard/PatternQuotesCard";
import { themeInit } from "../../components/ui/ThemeInit";
import { init } from "../../utils/Lan";
import Swot from "../Swot/Swot";
import SwiperComponent from "../../components/ui/swiper/Swiper";
import Swiper from "../../components/ui/swiper/Swiper";
import SwiperWix from "../../components/ui/swiper/Carousel";

export default function WelcomeCarousel({
  navigation,
}: StackScreenProps<AuthStackParamList, "Login">) {
  const appleIcon = () => <AntDesign name="apple1" size={24} color="white" />;
  const facebookIcon = () => (
    <AntDesign name="facebook-square" size={24} color="white" />
  );
  const googleIcon = () => <AntDesign name="google" size={24} color="white" />;
  themeInit();
  React.useEffect(() => {
    init();
  }, []);

  return (
    // <View flex-1 centerV backgroundColor="#191A26">
    // <LinearGradient
    //   // Background Linear Gradient
    //   colors={["#271D45", "#191924", "#191924", "#1D3A7D"]}
    //   style={{ flex: 1 }}
    //   start={[1, 0]}
    //   end={[-0.3, 1]}
    // >
    // <ScrollView
    //   contentContainerStyle={{
    //     flexGrow: 1,
    //     justifyContent: "center",
    //     alignItems: "stretch",
    //     paddingHorizontal:"5%",
    //     paddingVertical:"6%"
    //   }}
    // >
    <Container scroll={false}>
      <View flex centerV spread paddingVertical="5%" paddingHorizontal="5%">
        <SwiperWix />
        <View>
          <Button primary label="Continue" />
          <Spacer mt={3} />
          <Text h5 grey center>
            Signup Face Lord
          </Text>
        </View>
      </View>
    </Container>

    // </LinearGradient>
    // </View>
  );
}
