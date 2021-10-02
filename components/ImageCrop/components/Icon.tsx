import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Box, Text } from "../..";
import { widthToPercentage } from "../../../constants/Layout";

export interface IIconProps {
  iconID: string;
  text: string;
}

export function Icon(props: IIconProps) {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
    >
      <MaterialIcons
        name={props.iconID}
        size={widthToPercentage(5)}
        color={"white"}
      />
      <Text color="white">{props.text}</Text>
    </Box>
  );
}
