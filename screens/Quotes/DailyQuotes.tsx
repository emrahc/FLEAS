import React from "react";
import { Button, View, Text } from "react-native-ui-lib";
import MatchMaking from "../../assets/SvgComponents/MatchMaking";
import Container from "../../components/ui/layout/Container";
import Spacer from "../../components/ui/layout/Spacer";
import { MatchMaker } from "../../components/ui/match/MatchMaking";
import PatternDetailQuotes from "../../components/ui/patterncard/PatternQuotesDetailCard";
import PatternTitle from "../../components/ui/patterntitle/PatternTitle";
import { QuotesImage } from "../../components/ui/quotes/QuotesImage";

interface PatternsProps {}

const DailyQuotes: React.FunctionComponent<PatternsProps> = ({
  pattern = "horoscope",
}) => {
  return (
    <Container scroll={true}>
      <View centerV flex spread paddingHorizontal={"5%"}>
        {/* <MatchMaker w={20} /> */}
        <PatternTitle
          title1={"My Daily Quotes"}
          title2={""}
          pattern={<QuotesImage />}
        />
        {/* <Spacer pt={3} /> */}
        <View>
          <PatternDetailQuotes />
          <PatternDetailQuotes />
          <PatternDetailQuotes />
          <PatternDetailQuotes />
          <PatternDetailQuotes />
          <PatternDetailQuotes />
        </View>
        <Button medium label="Continue" />
      </View>

      <Spacer pt={3} />
    </Container>
  );
};

export default DailyQuotes;
