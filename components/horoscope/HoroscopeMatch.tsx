import React from "react";
import { View, Text } from "react-native-ui-lib";
import HoroscopeImage from "./HoroscopeImage";
interface HoroscopeMatchProps {}

const HoroscopeMatch: React.FunctionComponent<HoroscopeMatchProps> = (
  props
) => {
  return (
    <View row center>
      <HoroscopeImage />
      <View center margin-10 bg-danger br100 padding-5>
        <Text white h8>
          VS
        </Text>
      </View>
      <HoroscopeImage left={false} />
    </View>
  );
};

export default HoroscopeMatch;
