import { Dimensions } from "react-native";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export function heightToPercentage(percentage: number | undefined): number {
  return (percentage / 100) * height;
}
export function widthToPercentage(value: number | null): number {
  return (value / 100) * width;
}
export function valueToPercentage(percent: number, value: number): number {
  return (percent / value) * 100;
}

export function percentageToValue(percentage: number, value: number): number {
  return (percentage * value) / 100;
}
