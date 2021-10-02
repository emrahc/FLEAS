import * as React from "react";
import { StyleSheet } from "react-native";
import { ReText } from "react-native-redash";
import Svg, { SvgProps, Rect, G, Circle, Line } from "react-native-svg";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useDerivedValue,
  Easing,
} from "react-native-reanimated";
import { View } from "react-native-ui-lib";
import { heightToPercentage, widthToPercentage } from "../../constants/Layout";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const AnimatedLine = Animated.createAnimatedComponent(Line);

interface Props extends SvgProps {
  percentage: number;
}
function SvgComponent({ percentage = 100 }: Props) {
  const progress = useSharedValue(0);
  const halfPercentage = percentage / 2;
  const color = percentage > 0 ? "#3FC67A" : "red";
  // const diameter = 50 + halfPercentage; //eslint disable
  const length = 282;
  const vWidth = 292;
  const vHeight = 66;
  const width = widthToPercentage(80);
  const height = (width * vHeight) / vWidth;

  const halfLength = percentage > 0 ? 167 : 125;
  const diameter = (length * halfPercentage) / 100;
  console.log((halfLength * halfPercentage) / 100);
  // x2: `${50 * progress.value}%`,
  const animatedProps = useAnimatedProps(() => ({
    x2: halfLength + diameter * progress.value,
  }));
  React.useEffect(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {
      duration: 750,
      easing: Easing.quad,
    });
  }, [progress]);
  const progressText = useDerivedValue(() => {
    return percentage > 0
      ? `+${Math.floor(progress.value * percentage)}`
      : `${Math.floor(progress.value * percentage)}`;
  });

  return (
    <View center>
      <ReText
        text={progressText}
        style={[
          StyleSheet.absoluteFillObject,
          { textAlign: "center", fontSize: 18, color: "white", zIndex: 1 },
        ]}
      />
      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, vWidth, vHeight].join(" ")}
        fill="none"
      >
        <Rect x={110} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={290} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={99} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={279} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={88} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={268} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={77} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={257} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={66} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={246} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={55} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={235} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={44} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={224} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={33} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={213} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={22} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={202} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={11} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={191} y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect y={22} width={2} height={23} rx={1} fill="#334" />
        <Rect x={180} y={22} width={2} height={23} rx={1} fill="#334" />
        {/* <Path
        d="M150 33.5a1.5 1.5 0 011.5-1.5h78a1.5 1.5 0 010 3h-78a1.5 1.5 0 01-1.5-1.5z"
        fill="#3FC67A"
      /> */}
        <G>
          {/* <AnimatedLine
          //   x={`${50 - percentage / 2}%`}
          //   x={"50%"}
          animatedProps={animatedProps}
          y={"50%"}
          //   width={`${percentage / 2}%`}
          width={"100%"}
          height={4}
          rx={1}
          originX={"-50%"}
          fill="#3FC67A"
        /> */}
          <AnimatedLine
            x1="50%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke={color}
            strokeWidth="2"
            animatedProps={animatedProps}
            //   translateX={-150}
            //   originX={-180}
          />
        </G>
        {/* <Path
        d="M150 0 2.5 0 011.5-1.5h78a1.5 1.5 0 010 3h-78a1.5 1.5 0 01-1.5-1.5z"
        fill="#3FC67A"
      /> */}
        <G origin={"50% 50%"}>
          <Circle cx={"50%"} cy={"50%"} r={22} fill={color} />
        </G>
      </Svg>
    </View>
  );
}

const SvgMeter = React.memo(SvgComponent);
export default SvgMeter;
