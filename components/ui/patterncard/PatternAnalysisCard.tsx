import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Card, Colors, View } from "react-native-ui-lib";
import { widthToPercentage } from "../../../constants/Layout";

interface Props {
  pattern: React.ReactNode;
  patternName: string;
  locked: boolean;
}

const PatternAnalysisCard = ({
  pattern,
  patternName,
  locked,
  navigation,
}: Props) => {
  return (
    <Card
      containerStyle={{
        width: widthToPercentage(43),
        paddingVertical: widthToPercentage(1),
        paddingHorizontal: widthToPercentage(1),
        backgroundColor: Colors.primaryGrey,
        marginHorizontal: widthToPercentage(1),
      }}
      onPress={locked ? undefined : () => navigation()}
    >
      <View style={styles.pattern}>
        <View paddingT-10 paddingL-5>
          {pattern}
        </View>
        {locked && (
          <AntDesign name="lock" size={widthToPercentage(6)} color="white" />
        )}
      </View>
      <Card.Section
        content={[{ text: patternName, h6: true, white: true }]}
        style={{
          paddingTop: widthToPercentage(5),
          paddingBottom: widthToPercentage(2),
          paddingLeft: widthToPercentage(1),
        }}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  pattern: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PatternAnalysisCard;
