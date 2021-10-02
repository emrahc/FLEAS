import React from "react";
import { StyleSheet } from "react-native";
import { Card, View, Text } from "react-native-ui-lib";
import SvgMeter from "../../donut/SvgMeter";

interface Props {}

const MatchMeter = (props: Props) => {
  return (
    <View center paddingBottom="1%">
      <Card
        borderRadius={30}
        enableShadow={true}
        containerStyle={{
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: "#232333",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View backgroundColor="#181924" paddingH-20 paddingV-10 br50>
          <Text h4 white>
            Custom
          </Text>
        </View>
        <View>
          <SvgMeter />
        </View>
      </Card>
    </View>
  );
};

export default MatchMeter;
