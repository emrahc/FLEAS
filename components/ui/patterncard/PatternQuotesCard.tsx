import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Colors, View } from "react-native-ui-lib";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../../constants/Layout";

interface Props {
  pattern: React.ReactNode;
  patternName: string;
  locked: boolean;
}

const PatternQuotesCard = ({ pattern, patternName, locked = true }: Props) => {
  const [selected, setsSelected] = React.useState<boolean>(false);
  const color = selected ? Colors.success : "transparent";
  return (
    <TouchableOpacity onPress={() => setsSelected(!selected)}>
      <Card
        row
        spread
        primaryGrey
        borderRadius={18}
        borderWidth={2}
        containerStyle={[
          styles.cardContainer,

          { borderWidth: 2, borderColor: color },
        ]}
      >
        <Card.Section
          content={[{ text: patternName, white: true, h4: true }]}
          style={{
            flex: 8 / 10,
            paddingTop: widthToPercentage(10),
            paddingBottom: widthToPercentage(2),
          }}
          bottom
        />
        <View flex row right>
          <View paddingT-10 paddingR-10>
            {pattern}
          </View>
          {locked && (
            <View paddingT-10 paddingR-10>
              <AntDesign
                name="lock"
                size={widthToPercentage(6)}
                color="white"
              />
            </View>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default PatternQuotesCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.primaryGrey,
    width: widthToPercentage(90),
    paddingLeft: widthToPercentage(5),
    paddingBottom: widthToPercentage(5),
    zIndex: 999,
    height: heightToPercentage(20),
  },
});
