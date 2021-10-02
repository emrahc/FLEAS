import React from "react";
import { Card, Colors, Text, View } from "react-native-ui-lib";
import PatternDonut from "../../donut/PatternDonut";

interface Props {}

const MatchCard = (props: Props) => {
  return (
    <Card
      row
      spread
      centerV
      borderRadius={18}
      paddingHorizontal="2%"
      paddingVertical="4%"
      backgroundColor={Colors.primaryGrey}
    >
      {/* <Card.Section
        content={[
          {
            text: "Zodiac Match",
            h4: true,
            white: true,
          },
        ]}
        style={styles.text}
      /> */}
      <Text h4 white>
        Zodiac Match
      </Text>
      <View row centerV>
        <View right>
          <Text grey h5>
            High Match
          </Text>
          <Text danger h3 alignRight>
            +80%
          </Text>
        </View>
        <PatternDonut />
      </View>
    </Card>
  );
};

export default MatchCard;
