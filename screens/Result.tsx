import React from "react";
import { Modal, Platform, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Box, useTheme } from "../components";
import ResultListItem from "../components/ui/list/ResultListItem";
import { RootStackParamList } from "../types";
// import Button from "../components/ui/buttons/Basebutton";
import { ScrollView } from "react-native-gesture-handler";

import StarRating from "react-native-star-rating";

import { heightToPercentage, widthToPercentage } from "../constants/Layout";
import { fetchData } from "../utils/Fetch";
import { Context as AuthContext } from "../components/authentication/AuthContext";

import { Context as PhotoContext } from "../context/PhotoContext";
import Toast from "react-native-toast-message";
import { AdMobBanner } from "expo-ads-admob";
import { L } from "../utils/Lan";
import Container from "../components/ui/layout/Container";
import { View, Text, Button } from "react-native-ui-lib";
import Spacer from "../components/ui/layout/Spacer";
import FireAir from "../assets/SvgComponents/FireAir";
import PatternDetail from "../components/ui/patterndetail/PatternDetail";
import RatingModal from "../components/ui/rating/RatingModal";
import PatternTitle from "../components/ui/patterntitle/PatternTitle";
const Result = ({
  route,
}: StackScreenProps<RootStackParamList, "AnalysisScreen">) => {
  const theme = useTheme();
  const { state } = React.useContext(AuthContext);
  const { state: st, getDesc } = React.useContext(PhotoContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [starCount, setStarcount] = React.useState(5);
  const { activeValues } = route.params;
  let values = activeValues;
  values = activeValues
    .slice(0)
    .sort((a, b) => Object.values(b) - Object.values(a));

  const adUnitID: string | undefined = Platform.select({
    ios: "ca-app-pub-5640507925808732/4590490625",
    // ios: "ca-app-pub-3940256099942544/2934735716",
    android: "ca-app-pub-5640507925808732/9977057017",
  });
  const sendRating = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${state.token}`);

    var raw = JSON.stringify({ point: starCount });

    const { error, response } = await fetchData(
      "https://api.face2yourself.com/api/photos/" +
        st.analysis.id +
        "/feedback/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${state.token}`,
        },
        body: {
          point: starCount,
        },
        redirect: "follow",
      }
    );

    if (error) {
      console.log(error, "ERROR FEEDBACK");
      console.log(starCount, "STAR FEEDBACK");
      return alert(JSON.stringify(error));
    } else if (response) {
      setModalVisible(false);
      console.log(response, "send");
      Toast.show({ text1: L("AnalysisFeedbackSent") });
    }
  };

  return (
    <Container scroll={true}>
      <View centerH paddingHorizontal={"5%"}>
        <PatternTitle
          title1={"Fire Air Water and Earth"}
          title2={"Patterns"}
          pattern={<FireAir />}
        />
        <Spacer pt={2} />
        <View center flex width="100%">
          <PatternDetail highest={true} />
          <PatternDetail highest={false} />
        </View>
        {/* <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => alert(e)}
        /> */}
        {values &&
          st.desc &&
          values.map((value, index) => {
            const resultName = Object.keys(value)[0];
            const resultPercentage = Object.values(value)[0];

            // console.log(
            //   `${resultName}_description`,
            //   "DESCRIPTION"
            // );
            // if (descs !== null) {
            // const filteredByKey = Object.fromEntries(
            // Object.entries(descs).filter(([key, value]) => key === 'I') )
            // const filteredByValue = Object.fromEntries(
            //   Object.entries(descs).filter(
            //     ([key, value]) =>
            //       value === `${resultName}_description`
            //   )
            // );
            // console.log(filteredByValue, "FILTEREd");
            // const keko = descs.map((desc) => {
            //   if (
            //     desc["code"] ===
            //     `${resultName}_description`
            //   )
            //     console.log(desc, "KEKO");
            // });
            // console.log(
            //   descs.find(
            //     (desc) => desc.code === "heart_name"
            //   )
            // );
            // }

            return (
              <ResultListItem
                key={index}
                resultName={L(
                  `${resultName.charAt(0).toUpperCase() + resultName.slice(1)}`
                )}
                resultPercentage={resultPercentage}
                isHighest={index === 0 ? true : false}
                resultText={st.desc[resultName]}
              />
            );
          })}

        <Spacer pt={2} />
        <View row flex width={"100%"}>
          {/* <Button
            disabled={false}
            variant="green"
            label={L("AnalysisFeedback")}
            onPress={() => setModalVisible(true)}
          /> */}
          <Button
            flex
            primary
            label="Feedback"
            onPress={() => setModalVisible(true)}
          />
        </View>
        <RatingModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </View>
    </Container>
  );
};

export default Result;
