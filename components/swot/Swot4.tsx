import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Swot4(props: SvgProps) {
  return (
    <Svg width={63} height={60} fill="none" {...props}>
      <G filter="url(#prefix__filter0_b)">
        <Rect width={63} height={60} rx={14} fill="#AFEFA5" />
      </G>
      <Path
        d="M18.737 28V12.842h5.307V9.68H9.609v3.16h5.294V28h3.834z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.874 28.875a1.624 1.624 0 01-1.625-1.625v-1.625a1.625 1.625 0 113.25 0v1.625c0 .897-.726 1.625-1.625 1.625zm.248 5.3a1.624 1.624 0 10-2.297-2.298L41 33.701a8.89 8.89 0 00-5.064-1.576 8.937 8.937 0 108.938 8.937c0-1.88-.584-3.624-1.576-5.063l1.823-1.824zm4.628-.425h1.625a1.625 1.625 0 100-3.25H49.75a1.625 1.625 0 100 3.25z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default Swot4;
