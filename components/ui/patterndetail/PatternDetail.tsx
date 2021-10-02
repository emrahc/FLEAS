import React from "react";
import { StyleSheet } from "react-native";
import { Card, Colors, Text, View } from "react-native-ui-lib";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../../constants/Layout";
interface Props {
  pattern: string;
  percentage: number;
  highest: boolean;
}

const PatternDetail = ({
  pattern = "Energetic",
  percentage = 75,
  highest = false,
}: Props) => {
  return (
    <Card
      borderRadius={18}
      enableShadow={false}
      containerStyle={[
        styles.cardContainer,
        { backgroundColor: highest ? Colors.success : Colors.primaryGrey },
      ]}
    >
      <View row spread style={styles.patternTitle}>
        <Text h45 white centerH>
          {pattern}
        </Text>
        <View
          backgroundColor={highest ? Colors.primaryGrey : Colors.grey20}
          paddingH-24
          paddingV-5
          br50
        >
          <Text h45 white>
            {percentage}%
          </Text>
        </View>
      </View>
      <View style={styles.patternBorder} />
      <View padding-5>
        <Text
          h6
          style={[
            styles.patternDetail,
            { color: highest ? Colors.white : Colors.grey },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat
        </Text>
      </View>
    </Card>
  );
};

export default PatternDetail;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingVertical: widthToPercentage(2),
    paddingHorizontal: widthToPercentage(2),
    marginBottom: heightToPercentage(2),
  },
  patternTitle: {
    paddingHorizontal: widthToPercentage(1),
    paddingVertical: widthToPercentage(1),
    marginBottom: widthToPercentage(1),
  },
  patternBorder: {
    borderBottomColor: Colors.grey20,
    borderWidth: 0.3,
  },
  patternDetail: {
    lineHeight: 18,
    paddingVertical: widthToPercentage(1.5),
  },
});
