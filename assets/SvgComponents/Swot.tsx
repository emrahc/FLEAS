import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { widthToPercentage } from "../../constants/Layout";

function Swot({ w = 20, ...props }) {
  const vWidth = 62;
  const vHeight = 62;
  const width = widthToPercentage(w);
  const height = (width * vHeight) / vWidth;
  return (
    <Svg
      fill="none"
      width={width}
      height={height}
      viewBox={[0, 0, vWidth, vHeight].join(" ")}
      {...props}
    >
      <Path
        d="M35.707 27.707l-.307-1.228-1.107-.186L31 29.586l-3.293-3.293-1.218.196-.196 1.218L29.586 31l-3.293 3.293.105 1.188 1.309.226L31 32.414l3.293 3.293 1.268-.307.146-1.107L32.414 31l3.293-3.293z"
        fill="#EDF4FF"
      />
      <Path
        d="M34.287 26.294l4-4L39.7 23.71l-4 3.999-1.413-1.414z"
        fill="#FF9A9F"
      />
      <Path
        d="M22.288 23.707l1.414-1.413 4 3.999-1.415 1.414-3.999-4z"
        fill="#A4CCFF"
      />
      <Path
        d="M22.287 38.291l4-3.999 1.413 1.414-4 4-1.413-1.415z"
        fill="#EAD1FF"
      />
      <Path
        d="M34.285 35.707l1.414-1.413 4 3.999-1.414 1.414-4-4z"
        fill="#CDFFA0"
      />
      <Path
        d="M28 48c0-7.732-6.268-14-14-14a13.942 13.942 0 00-8.85 3.151C2.007 39.718.848 43.625.848 48c0 7.732 5.42 13.206 13.152 13.206 4.376 0 8.282-1.213 10.85-4.357A13.943 13.943 0 0028 48z"
        fill="#D6BDEF"
      />
      <Path
        d="M16 60C8.268 60 2 53.732 2 46c0-3.356 1.181-6.437 3.15-8.849A13.971 13.971 0 000 48c0 7.732 6.268 14 14 14 4.375 0 8.282-2.008 10.85-5.151A13.946 13.946 0 0116 60z"
        fill="#C3AFF0"
      />
      <Path
        d="M62 48c0-7.732-6.268-14-14-14a13.942 13.942 0 00-8.85 3.151c-3.143 2.567-4.302 6.474-4.302 10.849 0 7.732 5.42 13.206 13.152 13.206 4.376 0 8.282-1.213 10.85-4.357A13.943 13.943 0 0062 48z"
        fill="#AFEFA5"
      />
      <Path
        d="M50 60c-7.732 0-14-6.268-14-14 0-3.356 1.181-6.437 3.15-8.849A13.971 13.971 0 0034 48c0 7.732 6.268 14 14 14 4.375 0 8.282-2.008 10.85-5.151A13.946 13.946 0 0150 60z"
        fill="#8CE1A4"
      />
      <Path
        d="M28 14c0-7.732-6.268-14-14-14a13.942 13.942 0 00-8.85 3.151C2.007 5.718.848 9.625.848 14c0 7.732 5.42 13.206 13.152 13.206 4.376 0 8.282-1.213 10.85-4.357A13.943 13.943 0 0028 14z"
        fill="#7DC3EE"
      />
      <Path
        d="M16 26C8.268 26 2 19.732 2 12c0-3.356 1.181-6.437 3.15-8.849A13.97 13.97 0 000 14c0 7.732 6.268 14 14 14 4.375 0 8.282-2.008 10.85-5.151A13.946 13.946 0 0116 26z"
        fill="#64ACDC"
      />
      <Path
        d="M62 14c0-7.732-6.268-14-14-14a13.942 13.942 0 00-8.85 3.151C36.008 5.718 34.849 9.625 34.849 14c0 7.732 5.42 13.206 13.152 13.206 4.376 0 8.282-1.213 10.85-4.357A13.943 13.943 0 0062 14z"
        fill="#E15F78"
      />
      <Path
        d="M50 26c-7.732 0-14-6.268-14-14 0-3.356 1.181-6.437 3.15-8.849A13.971 13.971 0 0034 14c0 7.732 6.268 14 14 14 4.375 0 8.282-2.008 10.85-5.151A13.946 13.946 0 0150 26z"
        fill="#DB4655"
      />
      <Path
        d="M52.152 45.262a1 1 0 10-1.414-1.414l-1.122 1.122a5.5 5.5 0 101.414 1.414l1.122-1.122zM52 42a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zM56 45h-1a1 1 0 110-2h1a1 1 0 110 2zM18 40a1 1 0 00-1 1v2h-6v-2a1 1 0 10-2 0v14a1 1 0 102 0v-2h6v2a1 1 0 102 0V41a1 1 0 00-1-1zm-1 5v2h-6v-2h6zm-6 6v-2h6v2h-6zM49.414 14l4.293-4.293a1 1 0 10-1.414-1.414L48 12.586l-4.293-4.293a1 1 0 10-1.414 1.414L46.586 14l-4.293 4.293a1 1 0 101.414 1.414L48 15.414l4.293 4.293a.996.996 0 001.414 0 1 1 0 000-1.414L49.414 14zM16 13h-4a1 1 0 100 2h4a1 1 0 100-2zM8 9a1 1 0 00-1 1v3H6a1 1 0 100 2h1v3a1 1 0 102 0v-8a1 1 0 00-1-1zM22 13h-1v-3a1 1 0 10-2 0v8a1 1 0 102 0v-3h1a1 1 0 100-2z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Swot;
