import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Svg, {
  Circle,
  Path,
  G,
  Text,
  LinearGradient,
  Stop,
  Defs,
} from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { widthToPercentage } from "../../../constants/Layout";
import { Colors, View, Text as T } from "react-native-ui-lib";
import { useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import PhotoModal from "../photomodal/PhotoModal";
import { isIOS } from "../../../constants/Platform";

const AnimatedG = Animated.createAnimatedComponent(G);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
function BottomTabBar({ navigation }) {
  const [routeName, setRouteName] = React.useState<string | undefined>("");
  const route = useRoute();
  React.useEffect(() => {
    const routeLog = getFocusedRouteNameFromRoute(route);
    setRouteName(routeLog);
    console.log(routeLog);
  }, [route]);
  const [visible, setvisible] = React.useState(false);
  const progress = useSharedValue(1);
  const vWidth = 375;
  const vHeight = 112;
  const width = widthToPercentage(100);
  const height = (width * vHeight) / vWidth;
  const aiColor = routeName !== "TabTwo" ? "#fff" : "#7C8090";
  const profileColor = routeName === "TabTwo" ? "#fff" : "#7C8090";
  const animatedProps = useAnimatedProps(() => ({
    y: 5 * progress.value,
  }));
  const animatedOpacity = useAnimatedProps(() => ({
    fillOpacity: 1 - progress.value / 8,
  }));
  const size = (press: string) => {
    progress.value = withTiming(press === "in" ? 1 : 0, {
      duration: 500,
    });
    if (!visible) {
      setvisible(true);
    }
    console.log(progress.value);
  };
  const opacity = (press: string) => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {
      duration: 500,
    });
    console.log(progress.value);
    setvisible(true);
    // navigation.navigate("Photo");
  };
  return (
    <View
      style={{
        position: "absolute",
        bottom: -10,
      }}
    >
      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, vWidth, vHeight].join(" ")}
        // style={{ pointerEvents: pointerEvents }}
        // {...pointerEvents}
      >
        <AnimatedG
          // origin="300,50"
          // onPressOut={() => name("out")}
          onPressIn={() => size("in")}
          onPressOut={() => size("out")}
          animatedProps={animatedProps}
        >
          <AnimatedCircle
            cx={187.5}
            cy={38.5}
            r={38.5}
            fill="#246BFD"
            animatedProps={animatedOpacity}
          />
          <Circle
            cx={187.5}
            cy={38.5}
            r={28.994}
            fill="#fff"
            fillOpacity={0.2}
          />
          <Circle
            onPress={() => opacity("out")}
            cx={187.5}
            cy={38.5}
            r={28.994}
            fill="transparent"
          />
          <Circle
            cx={187.5}
            cy={38.5}
            fill="#fff"
            fillOpacity={0.1}
            r={19.488}
          />
          <Path
            d="M197.482 38.5c0 .965-.782 1.747-1.748 1.747h-6.487v6.488a1.747 1.747 0 01-3.494 0v-6.488h-6.488c-.483 0-.919-.195-1.235-.512a1.746 1.746 0 011.236-2.982h6.487v-6.487a1.748 1.748 0 013.494 0v6.487h6.488c.965 0 1.746.783 1.747 1.747z"
            fill="#fff"
          />
        </AnimatedG>
        <G>
          <Path
            d="M188 85c25.405 0 46-20.595 46-46 0-5.173 3.816-10 8.989-10H345c16.569 0 30 13.431 30 30v53H0V59c0-16.569 13.431-30 30-30h103.011c5.173 0 8.989 4.827 8.989 10 0 25.405 20.595 46 46 46z"
            fill={Colors.primaryGrey}
            fillOpacity={0.9}
          />
        </G>
        <G onPress={() => navigation.navigate("TabTwo")}>
          <Path d="M92.483 48.438h1.407v1.406h-1.407v-1.406z" fill="#7C8090" />
          <Path
            d="M275.963 42.64l-.878-1.224a7.515 7.515 0 00-1.239 1.115l1.124 1c.297-.332.63-.631.993-.89zM274.205 44.621l-1.321-.72a7.303 7.303 0 00-.627 1.553l1.452.398c.117-.428.283-.841.496-1.23z"
            fill={profileColor}
          />
          <Path
            d="M287.047 52.664v-5.29A7.458 7.458 0 00279.523 40a7.617 7.617 0 00-2.982.602l.587 1.386a6.106 6.106 0 012.395-.483 5.952 5.952 0 016.019 5.868v5.29c0 1.505-1.641 3.323-4.5 4.985a3.086 3.086 0 01-3.037 0c-2.859-1.661-4.5-3.478-4.5-4.984v-5.29c0-.07 0-.141.003-.211l-1.504-.056c-.003.09-.004.178-.004.266v5.29c0 1.853 1.371 3.487 3.009 4.78v3.912l-2.593 1.295.673 1.346 3.425-1.713v-3.781c.248.156.494.308.736.451a4.533 4.533 0 004.547 0c.241-.14.488-.29.736-.451v3.782L285.958 64l.673-1.347-2.594-1.3v-3.912c1.639-1.29 3.01-2.92 3.01-4.777z"
            fill={profileColor}
          />
          <Text
            fill={profileColor}
            // stroke="white"
            fontSize="90%"
            fontWeight="bold"
            x="74%"
            y="72%"
            textAnchor="middle"
          >
            My Profile
          </Text>

          <Circle
            cx={"75%"}
            cy={"55%"}
            fill="transparent"
            r={40}
            onPress={() => navigation.navigate("TabTwo")}
          />
          <Defs>
            <LinearGradient id="prefix__a" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="50%" stopColor="#ffff" />
              <Stop offset="100%" stopColor="red" />
            </LinearGradient>
          </Defs>
        </G>

        <G onPress={() => navigation.navigate("TabOne")}>
          <Text
            fill={aiColor}
            // stroke="white"
            fontSize="90%"
            fontWeight="bold"
            x="26%"
            y="72%"
            textAnchor="middle"
          >
            AI Tools
          </Text>
          <Path
            d="M86.812 55.593v4.095h2.859V64h9.843v-2.916c0-2.64.577-5.405 1.761-8.428h1.511l1.2 1.201a2.111 2.111 0 001.903 3.018c1.163 0 2.11-.946 2.11-2.11a2.112 2.112 0 00-3.018-1.902l-1.613-1.613h-1.527c.164-.458.287-.928.368-1.406h1.692a2.112 2.112 0 001.988 1.406c1.163 0 2.11-.946 2.11-2.109s-.947-2.11-2.11-2.11c-.916 0-1.698.589-1.988 1.407h-1.574c0-.476-.04-.946-.117-1.406h1.158l1.613-1.613c.275.132.583.207.908.207 1.163 0 2.11-.947 2.11-2.11 0-1.163-.947-2.11-2.11-2.11a2.111 2.111 0 00-1.903 3.019l-1.2 1.2h-.937c-1.126-3.193-4.172-5.58-7.857-5.624-4.16-.05-7.651 2.891-8.414 6.71a8.514 8.514 0 00.118 3.927L84 53.556l2.812 2.037zm19.077-1.53a.704.704 0 11-.001 1.407.704.704 0 01.001-1.407zm0-5.625a.704.704 0 11-.001 1.407.704.704 0 01.001-1.407zm0-5.625a.704.704 0 11-.001 1.407.704.704 0 01.001-1.407zm-5.521 8.348l-.038.09h-4.333c.308-.41.529-.888.634-1.407h4.148c-.093.45-.23.89-.411 1.317zm-5.072-2.02c0 1.163-.946 2.11-2.11 2.11a2.112 2.112 0 01-2.109-2.11c0-1.163.947-2.11 2.11-2.11 1.163 0 2.109.947 2.109 2.11zm5.625-.703h-4.29a3.5 3.5 0 00-.634-1.406h4.781c.094.455.143.925.143 1.406zm-13.964-1.451c.654-3.274 3.605-5.62 7.018-5.58 2.833.033 5.274 1.768 6.354 4.218h-7.142a3.52 3.52 0 00-3.516 3.516 3.519 3.519 0 003.515 3.515h6.584c-1.116 2.992-1.662 5.762-1.662 8.428v1.51h-7.03V58.28h-2.86v-3.405l-2.363-1.713 1.363-2.345c-.038-.195-.69-1.68-.261-3.831z"
            fill={aiColor}
          />

          <Path d="M92.483 48.438h1.407v1.406h-1.407v-1.406z" fill={aiColor} />
          <Circle
            cx={"26%"}
            cy={"55%"}
            fill="transparent"
            r={50}
            onPress={() => navigation.navigate("TabOne")}
          />
        </G>
      </Svg>
      <PhotoModal
        navigation={navigation}
        visible={visible}
        setvisible={setvisible}
      />
    </View>
  );
}

export default BottomTabBar;
