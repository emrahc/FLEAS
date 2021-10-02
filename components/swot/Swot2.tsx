import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Swot2(props: SvgProps) {
  return (
    <Svg width={63} height={60} fill="none" {...props}>
      <G filter="url(#prefix__filter0_b)">
        <Rect width={63} height={60} rx={14} fill="#E15F78" />
      </G>
      <Path
        d="M21.492 15.482h.114L25.085 28h3.618l4.862-18.32h-3.973l-2.895 13.267h-.101L23.168 9.681h-3.237l-3.428 13.266H16.4L13.52 9.681H9.546L14.396 28h3.618l3.478-12.518zM47.267 42.5l5.366-5.366a1.25 1.25 0 10-1.767-1.768L45.5 40.733l-5.366-5.367a1.25 1.25 0 10-1.768 1.768l5.366 5.366-5.366 5.366a1.25 1.25 0 101.768 1.768l5.366-5.366 5.366 5.366a1.246 1.246 0 001.768 0 1.25 1.25 0 000-1.768L47.267 42.5z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default Swot2;
