import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

function Love(props: SvgProps) {
  return (
    <Svg width={34} height={34} fill="none" {...props}>
      <Path
        d="M23.447 18.208c-.198-.519-5.906-4.211-6.376-4.182-1.855.113-3.483.955-4.706 2.434-.12.145-.23.289-.331.43a7.55 7.55 0 00-.406-.53c-1.29-1.536-3.03-2.348-5.03-2.348a6.39 6.39 0 00-4.745 2.078C.658 17.386 0 19.106 0 20.934c0 1.776.627 3.325 1.972 4.873 1.172 1.35 2.777 2.604 4.809 4.192 1.377 1.076 2.938 2.296 4.624 3.758a.994.994 0 001.305 0c1.606-1.392 3.1-2.57 4.418-3.61 2.053-1.62 3.674-2.898 4.857-4.271 1.356-1.573 1.987-3.144 1.987-4.942 0-.873-.186-1.841-.525-2.726z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M32.571 2.558C31.728 1.391 30.16 0 27.478 0c-1.996 0-3.746.809-5.06 2.34-.156.18-.296.361-.423.538a7.52 7.52 0 00-.407-.53C20.298.812 18.56 0 16.56 0a6.19 6.19 0 00-4.686 2.092c-1.14 1.282-1.77 2.998-1.77 4.83 0 3.804 2.71 5.943 6.81 9.18 1.325 1.047 2.827 2.233 4.453 3.643a.994.994 0 001.305 0c1.634-1.417 3.155-2.61 4.497-3.665 2.045-1.605 3.66-2.872 4.842-4.237C33.367 10.274 34 8.711 34 6.922c0-1.496-.534-3.127-1.429-4.365z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={11.986}
          y1={34}
          x2={11.986}
          y2={14.012}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FD3A84" />
          <Stop offset={1} stopColor="#FFA68D" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={22.052}
          y1={19.988}
          x2={22.052}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFC2CC" />
          <Stop offset={1} stopColor="#FFF2F4" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Love;
