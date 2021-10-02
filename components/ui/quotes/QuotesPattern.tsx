import React from "react";
import WorkLove from "../../../assets/SvgComponents/WorkLoveMoneyPatterns";
import Spacer from "../layout/Spacer";
import PatternQuotesCard from "../patterncard/PatternQuotesCard";
import PatternTitle from "../patterntitle/PatternTitle";
import { Text } from "react-native-ui-lib";
import FireAir from "../../../assets/SvgComponents/FireAir";
import Quotes from "../../../assets/SvgComponents/Quotes";
import Horoscope from "../../horoscope/Horoscope";
export const QuotesPattern = ({}) => {
  return (
    <>
      <PatternTitle
        title1={"AI Quotes"}
        title2={""}
        pattern={<Quotes w={20} />}
      />
      <Spacer pt={1} />
      <Text grey h6>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vero,
      </Text>
      {/* {pattern == "horoscope" ? <HoroscopeList /> : null} */}
      <Spacer pt={1} />
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
      <Spacer pt={1} />
    </>
  );
};
