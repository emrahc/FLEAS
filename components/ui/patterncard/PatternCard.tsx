import React from "react";
import { StyleSheet } from "react-native";
import { Card, Colors } from "react-native-ui-lib";
import { widthToPercentage } from "../../../constants/Layout";

interface Props {
  pattern: React.ReactNode;
  patternName: string;
  selected: boolean;
}

const PatternCard = ({ pattern, patternName }: Props) => {
  const [selected, setsSelected] = React.useState<boolean>(false);
  const color = selected ? Colors.success : "transparent";
  return (
    <Card
      center
      onPress={() => setsSelected(!selected)}
      enableShadow={true}
      borderRadius={18}
      borderWidth={2}
      containerStyle={[
        styles.cardContainer,

        { borderWidth: 2, borderColor: color },
      ]}
    >
      <Card.Section
        content={[
          { text: "✓", h5: true, success: selected, transparent: !selected },
        ]}
      />
      {pattern}
      <Card.Section
        content={[{ text: patternName, white: true, h5: true }]}
        style={{
          paddingTop: widthToPercentage(3),
          paddingBottom: widthToPercentage(2),
        }}
      />
    </Card>
  );
};

export default PatternCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.primaryGrey,
    width: widthToPercentage(29),
    padding: widthToPercentage(3),
  },
});
