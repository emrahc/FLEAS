import React from "react";
import { Button, Colors, View } from "react-native-ui-lib";
import Spacer from "../layout/Spacer";
export function RoundPatternGroup({ active }) {
  return (
    <View row width="85%" spread>
      <Button // secondary
        pv={"0%"}
        label="Fire"
        flex
        fs={14}
        avoidMinWidth={true}
        backgroundColor={
          active === "heart" ? Colors.secondary : Colors.primaryGrey
        }
      />
      <Spacer pl={1} />
      <Button // secondary
        pv={"0%"}
        label="Air"
        fs={14}
        avoidMinWidth={true}
        flex
        backgroundColor={
          active === "heart" ? Colors.secondary : Colors.primaryGrey
        }
      />
      <Spacer pl={1} />
      <Button // secondary
        flex
        pv={"0%"}
        label="Water"
        fs={14}
        avoidMinWidth={true}
        backgroundColor={
          active === "heart" ? Colors.secondary : Colors.primaryGrey
        }
      />
      <Spacer pl={1} />
      <Button // secondary
        pv={"0%"}
        label="Earth"
        flex
        fs={14}
        avoidMinWidth={true}
        backgroundColor={
          active !== "heart" ? Colors.secondary : Colors.primaryGrey
        }
      />
    </View>
  );
}
