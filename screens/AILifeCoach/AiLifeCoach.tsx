import dayjs from "dayjs";
import React from "react";
import { Button, View, Text } from "react-native-ui-lib";
import MatchMaking from "../../assets/SvgComponents/MatchMaking";
import Container from "../../components/ui/layout/Container";
import Spacer from "../../components/ui/layout/Spacer";
import { LifeCoachImage } from "../../components/ui/lifecoach/LifeCoachImage";
import { MatchMaker } from "../../components/ui/match/MatchMaking";
import PatternDetailQuotes from "../../components/ui/patterncard/PatternQuotesDetailCard";
import PatternTitle from "../../components/ui/patterntitle/PatternTitle";
import { QuotesImage } from "../../components/ui/quotes/QuotesImage";

interface PatternsProps {}

const AiLifeCoach: React.FunctionComponent<PatternsProps> = ({
  pattern = "horoscope",
}) => {
  return (
    <Container scroll={true}>
      <View centerV flex spread paddingHorizontal={"5%"}>
        {/* <MatchMaker w={20} /> */}
        <PatternTitle
          title1={"Ai Life Coach"}
          title2={""}
          pattern={<LifeCoachImage />}
          patternLeft={false}
        />
        {/* <Spacer pt={3} /> */}
        <View centerH spread>
          <Spacer pt={2} />
          <Text center h5 grey>
            {dayjs().format("MMMM DD, YYYY")}
          </Text>
          <Spacer pt={2} />
          <View
            width="40%"
            bg-primary
            paddingHorizontal="1%"
            paddingVertical="1%"
            br50
          >
            <Text center white h5>
              Good Habits
            </Text>
          </View>
          <Spacer pt={2} />
          <Text center white h3>
            “Do not wait; the time will never be ‘just right.’ Start where you
            stand
          </Text>
          <Spacer pt={3} />
          <View
            width="40%"
            bg-success
            paddingHorizontal="1%"
            paddingVertical="1%"
            br50
          >
            <Text center white h5>
              Action Steps
            </Text>
          </View>
          <Spacer pt={2} />
          <Text center white h3>
            We must recognize that there is a higher power and pursue our faith
            regularly. We may not exercise our beliefs in exactly the same way,
            but I encourage you to find what works for you and explore it to
            it’s depths. A solid spiritual life will serve you well.
          </Text>
        </View>
        <Spacer pt={3} />
        <View width="90%">
          <Button medium label="Continue" />
          <Spacer pt={1} pr={1} />
          <View row centerH width="100%">
            <Button pv={"5%"} flex dark label="Share Analysis" />

            <Spacer pl={1} pr={1} />
            <Button pv={"5%"} flex dark label="Take a New Photo" />
          </View>
        </View>
      </View>

      <Spacer pt={3} />
    </Container>
  );
};

export default AiLifeCoach;
