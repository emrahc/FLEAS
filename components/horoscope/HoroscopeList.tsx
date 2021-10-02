import React from "react";
import { View } from "react-native-ui-lib";
import {
  Aries,
  Taurus,
  Gemini,
  Cancer,
  Leo,
  Aquarius,
  Libra,
  Pisces,
  Sagittarius,
  Virgo,
} from ".";
import PatternCard from "../ui/patterncard/PatternCard";
import Capricorn from "./Capricorn";
import Scorpio from "./Scorpio";

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
export const HoroscopeList = () => {
  return (
    <View flex paddingTop="2%" centerV spread flexWrap={"wrap"} row>
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
    </View>
  );
};
