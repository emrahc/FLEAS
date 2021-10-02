import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Card, Colors, View } from "react-native-ui-lib";
import Work from "../../patterns/Work";

interface Props {}

const PatternCardHalf = (props: Props) => {
  return (
    <Card
      containerStyle={{
        width: 170,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: Colors.primaryGrey,
      }}
    >
      <View row spread>
        <View paddingT-10 paddingL-10>
          <Work />
        </View>
        {true && <AntDesign name="lock" size={24} color="white" />}
      </View>
      <Card.Section
        content={[{ text: "Work Love Money and Self Patterns", white: true }]}
        style={{ paddingTop: 30, paddingBottom: 10 }}
      />
    </Card>
  );
};

export default PatternCardHalf;
