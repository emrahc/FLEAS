import dayjs from "dayjs";
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Colors, Text, View } from "react-native-ui-lib";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../../constants/Layout";
import Work from "../../patterns/Work";
interface Props {
  pattern: string;
  percentage: number;
  highest: boolean;
}

const PatternDetailQuotes = ({
  pattern = "Energetic",
  percentage = 75,
  highest = false,
  patternAuthor = "Stephan King",
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
      <View row centerH spread style={styles.patternTitle}>
        <View paddingV-10>
          <Text h5 grey>
            {dayjs().format("MMMM DD, YYYY")}
          </Text>
        </View>
        <View>
          <Work w={8} />
        </View>
      </View>
      <View style={styles.patternBorder} />
      <View padding="1.5%">
        <Text white h6 style={[styles.patternDetail, { color: "white" }]}>
          Lor em ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat
        </Text>
        <Text primary>{patternAuthor}</Text>
      </View>
    </Card>
  );
};

export default PatternDetailQuotes;

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
