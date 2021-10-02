import React from "react";
import { Text, View } from "react-native-ui-lib";
import FireAir from "../../../assets/SvgComponents/FireAir";
import Quotes from "../../../assets/SvgComponents/Quotes";
import WorkLove from "../../../assets/SvgComponents/WorkLoveMoneyPatterns";
import Air from "../../elements/Air";
import Earth from "../../elements/Earth";
import Fire from "../../elements/Fire";
import Water from "../../elements/Water";
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
} from "../../horoscope";
import Capricorn from "../../horoscope/Capricorn";
import Scorpio from "../../horoscope/Scorpio";
import Love from "../../patterns/Love";
import Money from "../../patterns/Money";
import Self from "../../patterns/Self";
import Work from "../../patterns/Work";
import Spacer from "../layout/Spacer";
import PatternCard from "../patterncard/PatternCard";
import PatternQuotesCard from "../patterncard/PatternQuotesCard";
import PatternTitle from "../patterntitle/PatternTitle";

const PatternWorkLove = [
  {
    pattern: <Work />,
    patternName: "Work",
  },
  {
    pattern: <Love />,
    patternName: "Love",
  },
  {
    pattern: <Money />,
    patternName: "Money",
  },
  {
    pattern: <Self />,
    patternName: "Self",
  },
];
const PatternFireAir = [
  {
    pattern: <Fire />,
    patternName: "Fire",
  },
  {
    pattern: <Air />,
    patternName: "Air",
  },
  {
    pattern: <Water />,
    patternName: "Water",
  },
  {
    pattern: <Earth />,
    patternName: "Earth",
  },
];
const Horoscope = [
  {
    pattern: <Aries />,
    patternName: "Aries",
  },
  {
    pattern: <Taurus />,
    patternName: "Taurus",
  },
  {
    pattern: <Gemini />,
    patternName: "Gemini",
  },
  {
    pattern: <Cancer />,
    patternName: "Cancer",
  },
  {
    pattern: <Leo />,
    patternName: "Leo",
  },
  {
    pattern: <Virgo />,
    patternName: "Virgo",
  },
  {
    pattern: <Libra />,
    patternName: "Libra",
  },
  {
    pattern: <Scorpio />,
    patternName: "Scorpio",
  },
  {
    pattern: <Sagittarius />,
    patternName: "Sagittarius",
  },
  {
    pattern: <Capricorn />,
    patternName: "Capricorn",
  },
  {
    pattern: <Aquarius />,
    patternName: "Aquarius",
  },
  {
    pattern: <Pisces />,
    patternName: "Pisces",
  },
];
export const QuotesSelect = ({}) => {
  return (
    <>
      <PatternTitle
        title1={"AI Quotes"}
        title2={""}
        pattern={<Quotes w={20} />}
      />
      <Spacer pt={1} />
      <Text grey h4>
        Select 3 Patterns
      </Text>
      {/* {pattern == "horoscope" ? <HoroscopeList /> : null} */}
      <Spacer pt={1} />
      <Text white h5>
        Work Love Money and Self Patterns
      </Text>
      <Spacer pt={2} />
      <View row spread flexWrap="wrap">
        {PatternWorkLove.map((pattern, index) => {
          console.log("keko");
          return (
            <PatternCard
              key={index}
              pattern={pattern.pattern}
              patternName={pattern.patternName}
              selected={false}
            />
          );
        })}
      </View>
      <Spacer pt={2} />
      <Text white h5>
        Fire Air Water and Earth Patterns
      </Text>
      <Spacer pt={2} />
      <View row spread flexWrap={"wrap"}>
        {PatternFireAir.map((pattern, index) => {
          console.log("keko");
          return (
            <PatternCard
              key={index}
              pattern={pattern.pattern}
              patternName={pattern.patternName}
              selected={false}
            />
          );
        })}
      </View>
      <Spacer pt={2} />
      <Text white h5>
        Horoscope Patterns
      </Text>
      <Spacer pt={2} />
      <View row spread flexWrap={"wrap"}>
        {Horoscope.map((pattern, index) => {
          return (
            <PatternCard
              key={index}
              pattern={pattern.pattern}
              patternName={pattern.patternName}
              selected={false}
            />
          );
        })}
      </View>
    </>
  );
};
