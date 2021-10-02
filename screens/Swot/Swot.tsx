import React from "react";
import { Button, View, Text } from "react-native-ui-lib";
import FireAir from "../../assets/SvgComponents/FireAir";
import Swot from "../../assets/SvgComponents/Swot";
import WorkLove from "../../assets/SvgComponents/WorkLoveMoneyPatterns";
import AnimatedCircle from "../../components/donut/AnimatedCircle";
import PatternDonut from "../../components/donut/PatternDonut";
import SvgMeter from "../../components/donut/SvgMeter";
import Horoscope from "../../components/horoscope/Horoscope";
import HoroscopeMatch from "../../components/horoscope/HoroscopeMatch";
import Container from "../../components/ui/layout/Container";
import Spacer from "../../components/ui/layout/Spacer";
import MatchCard from "../../components/ui/match/MatchCard";
import { MatchMaker } from "../../components/ui/match/MatchMaking";
import MatchMeter from "../../components/ui/match/MatchMeter";
import PatternQuotesCard from "../../components/ui/patterncard/PatternQuotesCard";
import PatternDetailQuotes from "../../components/ui/patterncard/PatternQuotesDetailCard";
import PatternTitle from "../../components/ui/patterntitle/PatternTitle";
import { QuotesPattern } from "../../components/ui/quotes/QuotesPattern";
import { QuotesSelect } from "../../components/ui/quotes/QuotesSelect";

interface PatternsProps {}

const SwotAnalysis: React.FunctionComponent<PatternsProps> = ({
  pattern = "horoscope",
}) => {
  return (
    <Container scroll={true}>
      <View centerV flex spread paddingHorizontal={"5%"}>
        <PatternTitle
          title1={"AI SWOT Analysis"}
          title2={""}
          pattern={<Swot />}
          patternLeft={false}
        />
        {/* <QuotesSelect /> */}
        {/* <MatchMaker /> */}
        <Spacer pt={3} />
        <View>
          <Text grey h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            deserunt?
          </Text>
        </View>
        <Spacer pt={4} />
        <PatternQuotesCard
          pattern={<WorkLove />}
          patternName={"Work Love Money and Self Patterns"}
          locked={false}
        />
        <PatternQuotesCard
          pattern={<FireAir />}
          patternName={"Fire Air Water and Earth Patterns"}
          locked={false}
        />
        <PatternQuotesCard
          pattern={<Horoscope />}
          patternName={"Horoscope Patterns"}
        />
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

export default SwotAnalysis;
