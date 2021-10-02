import * as React from "react";
import { Easing, TextInput, Text, View, StyleSheet } from "react-native";
import Svg, { G, Circle, Rect } from "react-native-svg";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useDerivedValue,
  withRepeat,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Donut({
  percentage = 75,
  radius = 50,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 0,
  textColor,
  max = 100,
}) {
  const progress = useSharedValue(0);

  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const CIRCLE_LENGTH = 100; // 2PI*R
  const R = CIRCLE_LENGTH / (2 * Math.PI);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      circumference - ((circumference * percentage) / 100) * progress.value,
  }));

  React.useEffect(() => {
    progress.value = withRepeat(
      withTiming(progress.value > 0 ? 0 : 1, {
        duration: 500,
      }),
      2,
      true
    );
  }, [progress]);
  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * percentage)}`;
  });
  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeOpacity="0.2"
            strokeLinecap="round"
          />

          <AnimatedCircle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            animatedProps={animatedProps}
          />
        </G>
      </Svg>
      {/* <AnimatedTextInput
        underlineColorAndroid="transparent"
        value={progressText}
        editable={false}
        defaultValue="0"
        /> */}
      <ReText
        text={progressText}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color },
          styles.text,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});
