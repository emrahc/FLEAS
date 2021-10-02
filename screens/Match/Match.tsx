import React from "react";
import { Button, View, Text } from "react-native-ui-lib";
import AnimatedCircle from "../../components/donut/AnimatedCircle";
import PatternDonut from "../../components/donut/PatternDonut";
import SvgMeter from "../../components/donut/SvgMeter";
import HoroscopeMatch from "../../components/horoscope/HoroscopeMatch";
import Container from "../../components/ui/layout/Container";
import Spacer from "../../components/ui/layout/Spacer";
import MatchCard from "../../components/ui/match/MatchCard";
import { MatchMaker } from "../../components/ui/match/MatchMaking";
import MatchMeter from "../../components/ui/match/MatchMeter";
import PatternDetailQuotes from "../../components/ui/patterncard/PatternQuotesDetailCard";
import PatternTitle from "../../components/ui/patterntitle/PatternTitle";

interface PatternsProps {}

const Match: React.FunctionComponent<PatternsProps> = ({
  pattern = "horoscope",
}) => {
  return (
    <Container scroll={true}>
      <View center flex spread paddingHorizontal={"5%"}>
        <PatternTitle
          title1={"Other Horoscope Patterns"}
          title2={""}
          pattern={<HoroscopeMatch />}
          patternLeft={false}
        />
        {/* <QuotesSelect /> */}
        {/* <MatchMaker /> */}
        <Spacer pt={3} />
        <View paddingHorizontal="10%">
          <Text white center h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            deserunt?
          </Text>
        </View>
        <Spacer pt={4} />
        <View>
          {/* <AnimatedCircle /> */}
          {/* <PatternDonut /> */}
          <MatchCard />
          <Spacer pt={4} />
          <MatchMeter />
          <MatchMeter />
          <MatchMeter />
          <MatchMeter />
          <MatchMeter />
          <MatchMeter />
          {/* <SvgMeter /> */}
        </View>
        <Button medium label="Continue" />
      </View>

      <Spacer pt={3} />
    </Container>
  );
};

export default Match;
