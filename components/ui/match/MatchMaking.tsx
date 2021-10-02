import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native-ui-lib";
import MatchMaking from "../../../assets/SvgComponents/MatchMaking";
import { widthToPercentage } from "../../../constants/Layout";
import { HoroscopeList } from "../../horoscope/HoroscopeList";
import Spacer from "../layout/Spacer";
import PatternCard from "../patterncard/PatternCard";
import PatternTitle from "../patterntitle/PatternTitle";
export const MatchMaker = () => {
  return (
    <View paddingTop="2%" centerV>
      <PatternTitle
        title1={"AI Matchmaking & Analogy"}
        title2={""}
        pattern={<MatchMaking w={25} />}
      />
      {false ? (
        <>
          <View paddingVertical="10%" centerV row spread>
            {/* <PatternCard
              key={index}
              pattern={pattern.pattern}
              patternName={pattern.patternName}
              selected={false}
            /> */}

            <Image
              source={{ uri: "https://via.placeholder.com/300" }}
              style={{
                width: widthToPercentage(30),
                height: widthToPercentage(30),
                borderRadius: 100,
              }}
            />
            <View
              center
              bg-danger
              br100
              width={widthToPercentage(15)}
              height={widthToPercentage(15)}
            >
              <Text h3 white>
                VS
              </Text>
            </View>
            <Image
              source={{ uri: "https://via.placeholder.com/300" }}
              style={{
                width: widthToPercentage(30),
                height: widthToPercentage(30),
                borderRadius: 100,
              }}
            />
          </View>
          <Text white center h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            itaque fugiat voluptatibus placeat et.
          </Text>
        </>
      ) : (
        <>
          <Spacer pt={1} />
          <HoroscopeList />
          <Spacer pt={1} />
        </>
      )}
    </View>
  );
};
