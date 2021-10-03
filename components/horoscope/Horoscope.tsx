import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { widthToPercentage } from "../../constants/Layout";

interface Props extends SvgProps {
  w: number;
}

function Horoscope({ w = 20, ...props }: Props) {
  const vWidth = 102;
  const vHeight = 102;
  const width = widthToPercentage(w);
  const height = (width * vHeight) / vWidth;
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox={[0, 0, vWidth, vHeight].join(" ")}
      {...props}
    >
      <Path
        d="M50.977 100.3c27.216 0 49.279-22.063 49.279-49.278 0-27.216-22.063-49.278-49.279-49.278C23.762 1.744 1.7 23.806 1.7 51.022c0 27.215 22.063 49.278 49.278 49.278z"
        fill="#5F4BBC"
      />
      <Path
        d="M49.278 32.33h3.399v6.797h-3.399V32.33zM49.278 62.916h3.399v6.797h-3.399v-6.796zM32.286 49.322h6.797v3.399h-6.797v-3.399zM62.872 49.322h6.797v3.399h-6.797v-3.399zM38.95 60.635l7.415-7.414 2.403 2.403-7.415 7.414-2.402-2.403zM34.144 65.44l2.402-2.402 2.403 2.402-2.403 2.403-2.402-2.403zM53.164 46.426l7.414-7.415 2.403 2.403-7.414 7.414-2.403-2.402zM62.982 36.61l2.403-2.403 2.403 2.402-2.403 2.403-2.403-2.403zM53.162 55.623l2.403-2.403 7.414 7.414-2.403 2.403-7.414-7.414zM62.978 65.44l2.403-2.403 2.403 2.403-2.403 2.402-2.403-2.402zM38.953 41.41l2.402-2.403 7.415 7.414-2.403 2.403-7.414-7.415zM34.148 36.603L36.55 34.2l2.403 2.403-2.403 2.403-2.402-2.403z"
        fill="#F98500"
      />
      <Path
        d="M50.977 57.819a6.797 6.797 0 100-13.594 6.797 6.797 0 000 13.594z"
        fill="#FFBA40"
      />
      <Path
        d="M54.376 17.207v-1.87a1.7 1.7 0 00-2.9-1.201l-3.4 3.398a1.7 1.7 0 000 2.404l3.4 3.398a1.699 1.699 0 002.9-1.201v-1.51c15.272 1.696 27.188 14.68 27.188 30.397a30.54 30.54 0 01-1.61 9.818l3.22 1.09a33.927 33.927 0 001.788-10.908c0-17.593-13.437-32.105-30.586-33.815zM26.523 63.723a1.7 1.7 0 00-1.884-.123l-1.22.704a30.602 30.602 0 0121.117-43.19l-.712-3.322A34 34 0 0020.47 66.007l-1.717.991a1.7 1.7 0 00.41 3.113l4.642 1.244a1.699 1.699 0 002.082-1.201l1.244-4.643a1.7 1.7 0 00-.608-1.788zM81.05 65.875a1.702 1.702 0 00-2.081-1.201l-4.642 1.244a1.7 1.7 0 00-.41 3.113l1.246.72A30.59 30.59 0 0128.44 71.7l-2.504 2.298a33.971 33.971 0 0052.192-2.537l1.675.967a1.699 1.699 0 002.491-1.911l-1.243-4.643z"
        fill="#4C3AA3"
      />
      <Path
        d="M50.977 101.999a50.976 50.976 0 01-36.045-87.024 50.978 50.978 0 1172.092 72.093A50.643 50.643 0 0150.977 102zm0-98.556A47.578 47.578 0 1084.62 17.378 47.266 47.266 0 0050.977 3.443z"
        fill="#4C3AA3"
      />
      <Path
        d="M20.39 25.533c-.215 0-.43-.041-.63-.121L2.768 18.615a1.7 1.7 0 01.218-3.226L15.5 12.26l1.516-9.096a1.7 1.7 0 012.696-1.08l13.594 10.195a1.7 1.7 0 01.086 2.65L21.497 25.124a1.7 1.7 0 01-1.106.41zM8.91 17.411l11.158 4.463 9.505-8.147-9.664-7.247-1.24 7.439a1.699 1.699 0 01-1.264 1.369L8.91 17.41z"
        fill="#C378CB"
      />
      <Path
        d="M18.692 6.841a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM32.286 17.037a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM3.398 20.435a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM16.992 17.037a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM20.39 27.232a3.399 3.399 0 11.001-6.798 3.399 3.399 0 010 6.798z"
        fill="#FFBA40"
      />
      <Path
        d="M84.962 22.134h-8.496a1.7 1.7 0 01-1.062-.372l-8.496-6.797 2.124-2.654 8.03 6.425h6.619l3.046-10.663a1.699 1.699 0 011.634-1.232h10.195v3.399h-8.914l-3.046 10.662a1.699 1.699 0 01-1.634 1.232z"
        fill="#C378CB"
      />
      <Path
        d="M67.97 17.037a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM98.556 11.939a3.399 3.399 0 110-6.798 3.399 3.399 0 010 6.798zM88.36 11.939a3.398 3.398 0 110-6.797 3.398 3.398 0 010 6.797zM76.466 23.834a3.399 3.399 0 110-6.798 3.399 3.399 0 010 6.798zM84.962 23.834a3.399 3.399 0 110-6.798 3.399 3.399 0 010 6.798z"
        fill="#FFBA40"
      />
      <Path
        d="M83.192 97.979l-3.398-.03.064-7.147-7.993-7.992 2.404-2.403 8.496 8.496a1.7 1.7 0 01.498 1.217l-.07 7.859z"
        fill="#C378CB"
      />
      <Path d="M81.564 88.405h11.894v3.398H81.564v-3.398z" fill="#C378CB" />
      <Path
        d="M93.458 93.503a3.399 3.399 0 110-6.798 3.399 3.399 0 010 6.798zM74.767 86.706a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM81.564 101.999a3.394 3.394 0 01-3.14-2.098 3.399 3.399 0 116.538-1.3 3.405 3.405 0 01-3.398 3.398zM81.564 93.503a3.399 3.399 0 110-6.798 3.399 3.399 0 010 6.798z"
        fill="#FFBA40"
      />
      <Path
        d="M32.286 98.6h-3.399V86.058l-11.645-5.823-11.038 9.462-2.212-2.58L15.887 76.92a1.699 1.699 0 011.865-.23l13.594 6.797a1.7 1.7 0 01.94 1.52V98.6z"
        fill="#C378CB"
      />
      <Path
        d="M5.098 91.804a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM16.992 81.608a3.399 3.399 0 110-6.797 3.399 3.399 0 010 6.797zM30.586 88.405a3.398 3.398 0 110-6.797 3.398 3.398 0 010 6.797zM30.586 101.999a3.394 3.394 0 01-3.14-2.098 3.397 3.397 0 113.14 2.098z"
        fill="#FFBA40"
      />
      <Path
        d="M4.874 67.158l-2.95-1.686 6.572-11.503V40.826h3.399V54.42a1.7 1.7 0 01-.224.843L4.874 67.158z"
        fill="#C378CB"
      />
      <Path
        d="M3.398 69.713a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.796zM10.195 57.819a3.399 3.399 0 110-6.798 3.399 3.399 0 010 6.798zM10.195 44.224a3.398 3.398 0 110-6.796 3.398 3.398 0 010 6.797z"
        fill="#FFBA40"
      />
      <Path
        d="M90.2 51.99l6.794-13.588 3.038 1.52-6.794 13.587-3.038-1.52z"
        fill="#C378CB"
      />
      <Path
        d="M98.556 42.525a3.399 3.399 0 110-6.798 3.399 3.399 0 010 6.798zM91.76 56.12a3.399 3.399 0 110-6.799 3.399 3.399 0 010 6.798z"
        fill="#FFBA40"
      />
      <Path
        d="M50.977 88.405a5.098 5.098 0 100-10.196 5.098 5.098 0 000 10.196zM83.353 32.33a5.097 5.097 0 10-5.735 7.473c.433.117.879.176 1.327.176a5.1 5.1 0 004.408-7.649zM25.566 30.464a5.098 5.098 0 10-2.557 9.515 5.124 5.124 0 003.841-1.739 5.098 5.098 0 00-1.284-7.776z"
        fill="#7E6DD1"
      />
    </Svg>
  );
}

export default Horoscope;