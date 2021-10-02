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
import { AuthStackParamList } from "../../types";
import { heightToPercentage, widthToPercentage } from "../../constants/Layout";
import BottomSheet from "@gorhom/bottom-sheet";
import { init, L } from "../../utils/Lan";
import { Context as AuthContext } from "../../components/authentication/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isIOS, version } from "../../constants/Platform";
import SocialButton from "../../components/ui/buttons/SocialButton";
import { themeInit } from "../../components/ui/ThemeInit";
import Svg from "react-native-svg";
import SvgLogo from "../../assets/FaceLordSvgLogo";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  AppleSocialButton,
  FacebookSocialButton,
} from "react-native-social-buttons";
import { LinearGradient } from "expo-linear-gradient";
import { FloatingLabelInput } from "react-native-floating-label-input";
import WorkLove from "../../assets/SvgComponents/WorkLoveMoneyPatterns";
import Donut from "../../components/donut/Donut";
import CircleAnimated from "../../components/donut/AnimatedCircle";
import SvgMeter from "../../components/donut/SvgMeter";
import MatchDonut from "../../components/donut/MatchDonut";
import {
  Aquarius,
  Aries,
  Cancer,
  Gemini,
  Leo,
  Libra,
  Pisces,
  Sagittarius,
  Taurus,
  Virgo,
} from "../../components/horoscope";
import Earth from "../../components/elements/Earth";
import Horoscope from "../../components/horoscope/Horoscope";
import Government from "../../components/jobs/Government";
import Health from "../../components/jobs/Health";
import Science from "../../components/jobs/Science";
import Shop from "../../components/jobs/Shop";
import Work from "../../components/patterns/Work";
import MatchCard from "../../components/ui/match/MatchCard";
import Careers from "../../assets/SvgComponents/Career";
import Quotes from "../../assets/SvgComponents/Quotes";
import Swot from "../../assets/SvgComponents/Swot";
import MatchMaking from "../../assets/SvgComponents/MatchMaking";
import PatternDetail from "../../components/ui/patterndetail/PatternDetail";
import Swot1 from "../../components/swot/Swot1";
import Swot2 from "../../components/swot/Swot2";
import Swot3 from "../../components/swot/Swot3";
import Swot4 from "../../components/swot/Swot4";
import PatternCard from "../../components/ui/patterncard/PatternCard";
import PatternQuotesCard from "../../components/ui/patterncard/PatternQuotesCard";
import Education from "../../components/jobs/Education";
import WorkLoveMoneyPatterns from "../../assets/SvgComponents/WorkLoveMoneyPatterns";
import PatternAnalysisCard from "../../components/ui/patterncard/PatternAnalysisCard";
import IT from "../../components/jobs/IT";
import FireAir from "../../assets/SvgComponents/FireAir";
import LifeCoach from "../../assets/SvgComponents/LifeCoach";
import HoroscopeImage from "../../components/horoscope/HoroscopeImage";
import HoroscopeMatch from "../../components/horoscope/HoroscopeMatch";
import BottomTabBar from "../../components/ui/bottomtabbar/BottomTabBar";
import Spacer from "../../components/ui/layout/Spacer";
import Container from "../../components/ui/layout/Container";
const data = [
  {
    percentage: 8,
    color: "tomato",
    max: 10,
  },
  {
    percentage: 14,
    color: "skyblue",
    max: 20,
  },
  {
    percentage: 92,
    color: "gold",
    max: 100,
  },
  {
    percentage: 240,
    color: "#222",
    max: 500,
  },
];
export default function WelcomeScreen({
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
    <Container scroll={true}>
      <View paddingHorizontal="5%" paddingVertical="6%">
        <SvgLogo w={35} />
        <Spacer mt={3} />
        <Text h1 white>
          Welcome to
        </Text>
        <Text h1 white>
          Face Lord
        </Text>

        <Spacer mt={3} />
        <Text h5 grey>
          Aliquet sagittis id consectetur purus ut faucibus mi eget mauris
          pharetra et ultrices
        </Text>
        <Spacer mt={3} />
        <Button label="Login Face Lord" />
        <Spacer mt={1} />
        <Button label="Sign Up With Email" secondary />
        <Spacer mt={2} />
        <Text white h4 center>
          OR
        </Text>
        {/* <AppleSocialButton 
    buttonViewStyle={{backgroundColor:"black", width:"90%",borderRadius:18,paddingVertical:"1.5%"}}
    textStyle={{paddingVertical:"2%",color:"white",fontSize:18}}
    logoStyle={{backgroundColor:"white", }}
    />     */}
        <Spacer mt={2} />
        <Button
          label="Sign up with Apple"
          black
          iconSource={(iconStyle) => (
            <View
              style={{
                // paddingRight:iconStyle[0].marginRight,
                marginRight: "3%",
                // justifyContent:"flex-start"
              }}
            >
              {appleIcon()}
            </View>
          )}
        />
        <Spacer mt={0.5} />
        <Button
          label="Sign up with Facebook"
          black
          iconSource={(iconStyle) => (
            <View
              style={{
                // paddingRight:iconStyle[0].marginRight,
                marginRight: "3%",
                // justifyContent:"flex-start"
              }}
            >
              {facebookIcon()}
            </View>
          )}
        />
        <Spacer mt={0.5} />
        <Button
          label="Sign up with Google"
          black
          iconSource={(iconStyle) => (
            <View
              style={{
                // paddingRight:iconStyle[0].marginRight,
                marginRight: "3%",
                // justifyContent:"flex-start"
              }}
            >
              {googleIcon()}
            </View>
          )}
        />
        <View center>
          <MatchDonut />
        </View>

        <BottomTabBar />
        <View center>
          <PatternQuotesCard
            pattern={<Horoscope />}
            patternName={"Horoscope Patterns"}
            locked={true}
          />
        </View>
        <HoroscopeMatch />
        <View centerH paddingV-10>
          <Donut color={"yellow"} />

          {/*
            <Text h1>KEKO</Text>
            <Text h2>KEKO</Text>
            <Text h3>KEKO</Text>
            <Text h4>KEKO</Text>
            <Text h5>KEKO</Text>
            <Text h7 color={"white"} center>KEKO</Text>
            <Text h6 >KEKO</Text> */}
        </View>
        {/* <FloatingLabelInput
            containerStyles={{
              borderRadius: 18,
              borderColor: "#232333",
              borderWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 10,
              backgroundColor: '#232333',

            }}
            inputStyles={{
              paddingLeft: 5
            }}
            customLabelStyles={{
              colorFocused: 'red',
              fontSizeFocused: 13,
              colorBlurred: "#7C8090"
            }}
            label={'User Name'}
            isPassword
          //  customShowPasswordComponent={<Text>Show</Text>}
          //  customHidePasswordComponent={<Text>Hide</Text>}
          /> */}

        {/* <Button label="custom" danger/> */}
        {/* <Button label="custom" marginT-20 primary />
          <Button label="custom" marginT-20 secondary /> */}

        {/* <Button   centerV centerH label="Retake" success/> */}
        {/* <Button label="custom"  black/>
    <Button label="custom" danger/>
    <Button label="Retake" primary/>
    <Button label="Retake" secondary/>
    <Button label="Retake" success/>


    <Button label="Apple" black iconSource={
      iconStyle=><AntDesign name="apple1" size={24} color="white" />
    }
    iconOnRight={false}
    labelStyle={{justifyContent:"center"}}
   />
    <AppleSocialButton buttonViewStyle={{backgroundColor:"black",width:"90%",borderRadius:18,paddingVertical:"1.5%"}}
    textStyle={{paddingVertical:"1.5%",color:"white"}}
    logoStyle={{backgroundColor:"white"}}
    />
<FacebookSocialButton buttonviewStyle={{width:"100%"}} />
    <View paddingT-10 center>

    <SvgLogo/>
    </View> */}
        <View center paddingH-20>
          <Card
            borderRadius={30}
            enableShadow={false}
            containerStyle={{
              width: "100%",
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: "#232333",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View backgroundColor="#181924" paddingH-20 paddingV-10 br50>
              <Text h4 white>
                Custom
              </Text>
            </View>
            <View>
              <SvgMeter />
            </View>
          </Card>
        </View>
        <View center padding-20>
          <Card
            containerStyle={{
              width: 170,
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: "#232333",
            }}
          >
            <View row spread>
              <View paddingT-10 paddingL-10>
                <Work />
              </View>
              {true && <AntDesign name="lock" size={24} color="white" />}
            </View>
            <Card.Section
              content={[
                { text: "Work Love Money and Self Patterns", white: true },
              ]}
              style={{ paddingTop: 30, paddingBottom: 10 }}
            />
          </Card>
        </View>
        <PatternAnalysisCard
          pattern={<Swot />}
          patternName={"AI SWOT Analysis"}
          locked={true}
        />

        <View center paddingT-10>
          {/* <PatternDetail highest={false } /> */}
          <Swot />
          <Swot1 />
          <Swot2 />
          <Swot3 />
          <Swot4 />
          <LifeCoach />
          <PatternCard pattern={<Science />} patternName={"Work"} />
        </View>
        <View row spread padding-10>
          <Aries />
          <Government />
          <Health />
          <Science />
          <Shop />
        </View>
        {/* <PatternCard pattern={<Aries />} patternName={"Earth"} /> */}
      </View>
    </Container>

    // </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "5%",
    backgroundColor: "white",
  },

  buttons: {
    alignSelf: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
});
