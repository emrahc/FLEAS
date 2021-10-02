import React from "react";
import { View } from "react-native";
import {
  heightToPercentage,
  widthToPercentage,
} from "../../../constants/Layout";

interface Props {
  pt: number;
  pb: number | undefined;
  pl: number;
  pr: number;
  pv: number;
  ph: number;
  mt: number;
  mb: number;
  ml: number;
  mr: number;
  mv: number;
  mh: number;
}

const Spacer = ({
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  pv = 0,
  ph = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  mv = 0,
  mh = 0,
}: Props) => {
  return (
    <View
      style={{
        paddingTop: heightToPercentage(pt),
        paddingBottom: heightToPercentage(pb),
        paddingLeft: widthToPercentage(pl),
        paddingRight: widthToPercentage(pr),
        paddingVertical: heightToPercentage(pv),
        paddingHorizontal: widthToPercentage(ph),
        marginTop: heightToPercentage(mt),
        marginBottom: heightToPercentage(mb),
        marginLeft: widthToPercentage(ml),
        marginRight: widthToPercentage(mr),
        marginVertical: heightToPercentage(mv),
        marginHorizontal: widthToPercentage(mh),
      }}
    />
  );
};

export default Spacer;
