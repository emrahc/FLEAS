import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Swot1(props: SvgProps) {
  return (
    <Svg width={63} height={60} fill="none" {...props}>
      <G filter="url(#prefix__filter0_b)">
        <Rect width={63} height={60} rx={14} fill="#7DC3EE" />
      </G>
      <Path
        d="M9.825 22.77c.114 3.453 3.022 5.535 7.389 5.535 4.583 0 7.389-2.26 7.389-5.84 0-2.78-1.689-4.342-5.561-5.116l-1.942-.394c-2.159-.432-3.047-1.13-3.047-2.26 0-1.345 1.27-2.234 3.16-2.234 1.93 0 3.289.94 3.416 2.5h3.618c-.063-3.363-2.755-5.598-7.033-5.598-4.075 0-6.995 2.222-6.995 5.574 0 2.729 1.79 4.481 5.446 5.205l1.93.38c2.298.47 3.16 1.156 3.16 2.362 0 1.346-1.396 2.336-3.44 2.336-2.082 0-3.63-.914-3.872-2.45H9.825z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 33c-.921 0-1.667.746-1.667 1.667v5h-1.666a1.666 1.666 0 100 3.333h1.666v5a1.666 1.666 0 103.334 0V34.667c0-.92-.746-1.667-1.667-1.667zm13.334 6.667h-6.667a1.666 1.666 0 100 3.333h6.666a1.666 1.666 0 100-3.333zm8.333 0h1.666a1.666 1.666 0 110 3.333h-1.666v5a1.666 1.666 0 11-3.334 0V34.667a1.666 1.666 0 113.334 0v5z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default Swot1;
