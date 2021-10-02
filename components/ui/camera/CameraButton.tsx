import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { widthToPercentage } from "../../../constants/Layout";
interface Logo {
  w: number;
}

function CameraButton({ w = 30, ...props }: Logo) {
  const vWidth = 77;
  const vHeight = 77;
  const width = widthToPercentage(w);
  const height = (width * vHeight) / vWidth;
  return (
    <Svg
      width={width}
      height={height}
      viewBox={[0, 0, vWidth, vHeight].join(" ")}
      fill="none"
      {...props}
    >
      <Circle cx={38.5} cy={38.5} r={38.5} fill="#246BFD" />
      <Circle cx={38.5} cy={38.5} r={28.994} fill="#fff" fillOpacity={0.2} />
      <Circle
        cx={38.488}
        cy={38.488}
        fill="#fff"
        fillOpacity={0.1}
        r={19.488}
      />
      <Path
        scale={0}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.587 30c1.023 0 1.958.576 2.415 1.487l.805 1.604a.9.9 0 00.805.495h.688c1.491 0 2.7 1.204 2.7 2.69v7.172a2.695 2.695 0 01-2.7 2.69H31.7a2.695 2.695 0 01-2.7-2.69v-7.172a2.695 2.695 0 012.7-2.69h.688a.9.9 0 00.805-.495l.805-1.604A2.701 2.701 0 0136.413 30h3.175zm0 1.793h-3.175a.9.9 0 00-.804.496l-.805 1.603a2.701 2.701 0 01-2.415 1.487H31.7c-.497 0-.9.402-.9.897v7.172c0 .495.403.897.9.897h12.6c.497 0 .9-.402.9-.897v-7.172a.898.898 0 00-.9-.897h-.688a2.701 2.701 0 01-2.414-1.486l-.805-1.604a.9.9 0 00-.805-.496zM38 35.38c1.988 0 3.6 1.606 3.6 3.586a3.593 3.593 0 01-3.6 3.587 3.593 3.593 0 01-3.6-3.587A3.593 3.593 0 0138 35.38zm0 1.793c-.994 0-1.8.803-1.8 1.793 0 .99.806 1.793 1.8 1.793s1.8-.802 1.8-1.793c0-.99-.806-1.793-1.8-1.793z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CameraButton;
