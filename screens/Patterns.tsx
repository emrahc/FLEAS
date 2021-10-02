import React from "react";
import { Button, View, Text } from "react-native-ui-lib";
import HoroscopeMatch from "../components/horoscope/HoroscopeMatch";
import Container from "../components/ui/layout/Container";
import Spacer from "../components/ui/layout/Spacer";
import { MatchMaker } from "../components/ui/match/MatchMaking";
import PatternDetailQuotes from "../components/ui/patterncard/PatternQuotesDetailCard";
import PatternTitle from "../components/ui/patterntitle/PatternTitle";

interface PatternsProps {}

const Patterns: React.FunctionComponent<PatternsProps> = ({
  pattern = "horoscope",
}) => {
  return (
    <Container scroll={true}>
      <View centerV flex spread paddingHorizontal={"5%"}>
        <PatternTitle
          title1={"Other Horoscope Patterns"}
          title2={""}
          pattern={<HoroscopeMatch />}
          patternLeft={false}
        />
        {/* <QuotesSelect /> */}
        {/* <MatchMaker /> */}
        <Spacer pt={3} />
        <View>
          <PatternDetailQuotes />
        </View>
        <Button medium label="Continue" />
      </View>

      <Spacer pt={3} />
    </Container>
  );
};

export default Patterns;
