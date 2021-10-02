import React, { ReactNode } from "react";
import { View, Text } from "react-native-ui-lib";
import Spacer from "../layout/Spacer";

interface PatternTitleProps {
  title1: string;
  title2: string;
  pattern: ReactNode;
  patternLeft: boolean;
}

const PatternTitle = ({
  title1,
  title2,
  pattern,
  patternLeft = true,
}: Props) => {
  return (
    <View flex width="100%">
      <Spacer pt={8} />
      <View left width={"100%"}>
        <Text h4 white text500>
          {title1}
        </Text>
        {title2 !== "" && (
          <Text h4 white text500>
            {title2}
          </Text>
        )}
      </View>
      <Spacer pt={2} />
      {patternLeft ? (
        <View left flex width="100%">
          {pattern}
        </View>
      ) : (
        <View flex width="100%">
          {pattern}
        </View>
      )}
    </View>
  );
};

export default PatternTitle;
