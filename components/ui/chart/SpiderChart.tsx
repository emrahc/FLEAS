import { ThemeProvider } from "@react-navigation/native";
import * as React from "react";
import Svg, { Rect, Text, Circle, Polygon, Line, G } from "react-native-svg";
import { Colors } from "react-native-ui-lib";
import { colorsPalette } from "react-native-ui-lib/generatedTypes/style/colorsPalette";
import { width, widthToPercentage } from "../../../constants/Layout";
import { L } from "../../../utils/Lan";
import { useTheme } from "../../Theme";
function calculate(values: object[]) {
  var chart = 125;
  var chart = 125;

  var oz1 = Object.values(values[0])[0];
  var oz2 = Object.values(values[1])[0];
  var oz3 = Object.values(values[2])[0];
  var oz4 = Object.values(values[3])[0];
  var oz5 = Object.values(values[4])[0];
  var oz6 = Object.values(values[5])[0];
  var oz7 = Object.values(values[6])[0];

  var x1 = chart;
  var y1 = chart - oz1;

  var x2 = chart - oz2 * Math.cos((3 * Math.PI) / 14);
  var y2 = chart - oz2 * Math.sin((3 * Math.PI) / 14);

  var x3 = chart - oz3 * Math.cos((1 * Math.PI) / 14);
  var y3 = chart + oz3 * Math.sin((1 * Math.PI) / 14);

  var x4 = chart - oz4 * Math.sin((2 * Math.PI) / 14);
  var y4 = chart + oz4 * Math.cos((2 * Math.PI) / 14);

  var x5 = chart + oz5 * Math.sin((2 * Math.PI) / 14);
  var y5 = chart + oz5 * Math.cos((2 * Math.PI) / 14);

  var x6 = chart + oz6 * Math.cos((1 * Math.PI) / 14);
  var y6 = chart + oz6 * Math.sin((1 * Math.PI) / 14);

  var x7 = chart + oz7 * Math.cos((3 * Math.PI) / 14);
  var y7 = chart - oz7 * Math.sin((3 * Math.PI) / 14);

  const points = [
    [x1, y1],
    [x2, y2],
    [x3, y3],
    [x4, y4],
    [x5, y5],
    [x6, y6],
    [x7, y7],
  ];

  const arr = [oz1, oz2, oz3, oz4, oz5, oz6, oz7];
  const highIndex = arr.indexOf(Math.max(...arr));
  return { points, highIndex };
}

interface SpiderProps {
  values: object[];
}
function SpiderChart({ values, ...props }: SpiderProps) {
  const theme = useTheme();
  const { points, highIndex } = calculate(values);
  const pointsInnerr =
    "125 25, 46.816851753197014 62.65101981412665  27.50720878181764 147.25209339563145 81.61162608824418 215.0968867902419 168.38837391175582 215.0968867902419 222.49279121818236 147.25209339563145 203.183148246803 62.65101981412665 ";
  const pointsOutera =
    "125 0, 27.271064691496278 47.063774767658316 3.134010977272041 152.8151167445393 70.76453261030524 237.6211084878024 179.23546738969475 237.6211084878024 246.86598902272794 152.8151167445393 222.7289353085037 47.063774767658316";

  const pointsInner: number[][] = [
    [125, 25],
    [46.816851753197014, 62.65101981412665],
    [27.50720878181764, 147.25209339563145],
    [81.61162608824418, 215.0968867902419],
    [168.38837391175582, 215.0968867902419],
    [222.49279121818236, 147.25209339563145],
    [203.183148246803, 62.65101981412665],
  ];

  const labelPoints = [
    [85, 0],
    [-40, 40],
    [-60, 140],
    [5, 225],
    [160, 225],
    [230, 140],
    [210, 40],
  ];
  return (
    <Svg
      width={width}
      height={width * 0.6}
      preserveAspectRatio="true"
      fill="none"
      viewBox="0 0 250 250"
      {...props}
    >
      <Polygon points={pointsInnerr} strokeWidth={0.5} stroke={"#2C2C40"} />
      <Polygon
        strokeWidth={1}
        strokeDasharray={3}
        stroke={Colors.primary}
        points={pointsOutera}
        strokeLinecap="round"
      />
      {pointsInner.map((point: number[], index) => (
        <Line
          key={index}
          x1="125"
          y1="125"
          x2={point[0]}
          y2={point[1]}
          stroke={"#2C2C40"}
          strokeWidth={1}
          strokeDasharray={1}
        />
      ))}

      <Circle
        cx={125}
        cy={125}
        r={5}
        fill={theme.colors.purple}
        stroke="#fff"
      />
      <Polygon
        stroke={Colors.primary}
        strokeWidth={1.2}
        fill={Colors.spiderDark}
        fillOpacity={1}
        points={`${points.map((r) => {
          return `${r[0]},${r[1]}`;
        })}`}
      />
      {points.map((point, index) => {
        return (
          <Circle
            key={index}
            cx={point[0]}
            cy={point[1]}
            r={4}
            fill={index == highIndex ? Colors.success : Colors.grey}
            stroke="#2C2C40"
            strokeWidth={1}
          />
        );
      })}

      {labelPoints.map((point, index) => {
        let label = Object.keys(values[index])[0];
        label = label.charAt(0).toUpperCase() + label.slice(1);
        return (
          <G key={index} x={point[0]} y={point[1]}>
            <Rect
              fill={highIndex == index ? Colors.success : Colors.primaryGrey}
              width="85"
              height="20"
              rx="10"
            />
            <Text
              x="42.5"
              y="10"
              letterSpacing="0.9"
              stroke={"white"}
              alignmentBaseline="central"
              textAnchor="middle"
            >
              {L(`${label}`)}
            </Text>
          </G>
        );
      })}
    </Svg>
  );
}
export default SpiderChart;
