import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Swot3(props: SvgProps) {
  return (
    <Svg width={63} height={60} fill="none" {...props}>
      <G filter="url(#prefix__filter0_b)">
        <Rect width={63} height={60} rx={14} fill="#D6BDEF" />
      </G>
      <Path
        d="M18.788 9.363c-5.434 0-8.836 3.644-8.836 9.484 0 5.827 3.402 9.458 8.836 9.458 5.421 0 8.836-3.631 8.836-9.458 0-5.84-3.415-9.484-8.836-9.484zm0 3.2c2.996 0 4.913 2.437 4.913 6.284 0 3.834-1.917 6.258-4.913 6.258-3.009 0-4.926-2.424-4.926-6.258 0-3.847 1.93-6.285 4.926-6.285zM51.5 26a1.5 1.5 0 00-1.5 1.5v3h-9v-3a1.5 1.5 0 10-3 0v21a1.5 1.5 0 103 0v-3h9v3a1.5 1.5 0 103 0v-21a1.5 1.5 0 00-1.5-1.5zM50 33.5v3h-9v-3h9zm-9 9v-3h9v3h-9z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default Swot3;
