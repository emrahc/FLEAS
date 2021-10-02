import * as React from "react";
import { TextInput, StyleSheet, Image as Img } from "react-native";
import Svg, { G, Circle, Image, Text, ForeignObject } from "react-native-svg";
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
import face1 from "../../assets/images/face1.png";
import { View } from "react-native-ui-lib";
import { widthToPercentage } from "../../constants/Layout";
import { Colors } from "react-native-ui-lib";
export default function MatchDonut({
  percentage = 75,
  radius = widthToPercentage(30),
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
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {
      duration: 1000,
    });
  }, [progress]);
  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * percentage)}%`;
  });
  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Img
        style={[
          StyleSheet.absoluteFillObject,
          {
            top: "30%",
            left: "15%",
            width: "25%",
            height: "25%",
            borderRadius: 100,
          },
        ]}
        source={{
          uri: "https://picsum.photos/200/200",
        }}
      />
      <Img
        style={[
          StyleSheet.absoluteFillObject,
          {
            top: "30%",
            left: "60%",
            width: "25%",
            height: "25%",
            borderRadius: 100,
          },
        ]}
        source={{
          uri: "https://picsum.photos/200/200",
        }}
      />
      <ReText
        text={progressText}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 4, color: textColor ?? color, top: "56%" },
          styles.text,
        ]}
      />
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        {/* <Image
          x="35%"
          y="35%"
          width="30%"
          height="30%"
          preserveAspectRatio="xMidYMid slice"
          opacity="1"
          style={{
            borderRadius: 100,
          }}
          // href={require("../../assets/images/maskedface.png")}
          // href={"https://picsum.photos/200/200"}
          //   clipPath="url(#clip)"
        /> */}

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
        <Circle
          cx="50%"
          cy="45%"
          r={radius / 7}
          fill={"#E15F78"}
          // stroke={color}
          strokeWidth={strokeWidth}
          strokeOpacity="0.2"
          strokeLinecap="round"
        />
        <Text
          x={"50%"}
          y={"46%"}
          stroke="white"
          fill={"white"}
          textAnchor="middle"
          fontSize={radius / 10}
          alignmentBaseline="central"
        >
          VS
        </Text>
        <Text
          x={"50%"}
          y={"65%"}
          stroke={Colors.grey}
          fill={Colors.grey}
          textAnchor="middle"
          fontSize={radius / 8}
          alignmentBaseline="central"
        >
          + High Match
        </Text>
      </Svg>
      {/* <AnimatedTextInput
        underlineColorAndroid="transparent"
        value={progressText}
        editable={false}
        defaultValue="0"
        /> */}
      {/* <ReText
        text={progressText}
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color },
          styles.text,
        ]}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});
