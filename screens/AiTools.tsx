import * as React from "react";
import Container from "../components/ui/layout/Container";
import { Text, View } from "react-native-ui-lib"; //eslint-disable-line
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../types";
import { init } from "../utils/Lan";
import SvgLogo from "../assets/FaceLordSvgLogo";
import Horoscope from "../components/horoscope/Horoscope";
import Quotes from "../assets/SvgComponents/Quotes";
import Swot from "../assets/SvgComponents/Swot";
import PatternQuotesCard from "../components/ui/patterncard/PatternQuotesCard";
import WorkLoveMoneyPatterns from "../assets/SvgComponents/WorkLoveMoneyPatterns";
import PatternAnalysisCard from "../components/ui/patterncard/PatternAnalysisCard";
import LifeCoach from "../assets/SvgComponents/LifeCoach";
import FireAir from "../assets/SvgComponents/FireAir";
import Career from "../assets/SvgComponents/Career";
import MatchMaking from "../assets/SvgComponents/MatchMaking";

export default function AiTools({
  navigation,
}: StackScreenProps<AuthStackParamList, "Login">) {
  React.useEffect(() => {
    init();
  }, []);

  return (
    <Container scroll={true}>
      <View centerH flex-1 paddingTop={"10%"} marginB-100>
        <View row spread bottom paddingBottom="5%" width="90%">
          <SvgLogo w={20} />
          <View paddingL-10>
            <Text h2 white>
              Welcome
            </Text>
            <Text h2 white>
              Face Lord AI Tools
            </Text>
          </View>
        </View>
        <View row spread bottom paddingV-10>
          <PatternAnalysisCard
            pattern={<WorkLoveMoneyPatterns w={20} />}
            patternName={"Work Love Money and Self Patterns"}
            locked={false}
            navigation={() =>
              navigation.navigate("AuthContent", { screen: "AnalysisScreen" })
            }
          />
          <PatternAnalysisCard
            pattern={<FireAir w={20} />}
            patternName={"Fire Air Water and Earth Patterns"}
            locked={false}
          />
        </View>
        <PatternQuotesCard
          pattern={<Career />}
          patternName={"AI Careers and Occupations"}
          locked={false}
        />
        <View row spread paddingV-10>
          <PatternAnalysisCard
            pattern={<Quotes />}
            patternName={"AI Quotes"}
            locked={false}
          />
          <PatternAnalysisCard
            pattern={<Horoscope />}
            patternName={"Horoscope Patterns"}
            locked={false}
          />
        </View>
        <PatternQuotesCard
          pattern={<LifeCoach />}
          patternName={"AI Life Coach"}
          locked={false}
        />
        {/* <View center>
          <MatchDonut />
        </View> */}
        <View row spread paddingV-10>
          <PatternAnalysisCard
            pattern={<Swot />}
            patternName={"AI Quotes"}
            locked={false}
          />
          <PatternAnalysisCard
            pattern={<MatchMaking />}
            patternName={"AI Matchmaking and Astrology"}
            locked={false}
          />
        </View>
      </View>
    </Container>
  );
}
