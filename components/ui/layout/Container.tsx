import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  Dimensions,
} from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Constants from "expo-constants";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
type Props = KeyboardAvoidingViewProps & {
  children: React.ReactNode;
  scroll: boolean;
};
const isIOS = Platform.OS == "ios";

const { height } = Dimensions.get("window");

const Container: React.FC<Props> = React.memo(
  ({ children, scroll = false, ...rest }: Props) => {
    const insets = useSafeAreaInsets();
    console.log(Constants.statusBarHeight);
    return scroll ? (
      <ScrollView
        // keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1, alignItems: "stretch" }}
        scrollEnabled={scroll}
      >
        <View flex centerV bg-dark>
          <LinearGradient
            // Background Linear Gradient
            colors={["#271D45", "#191924", "#191924", "#1D3A7D"]}
            style={{ flex: 1 }}
            start={[1, 0]}
            end={[-0.3, 1]}
          >
            {children}
          </LinearGradient>
        </View>
      </ScrollView>
    ) : (
      <View flexG>
        <LinearGradient
          // Background Linear Gradient
          colors={["#271D45", "#191924", "#191924", "#1D3A7D"]}
          style={{ flex: 1 }}
          start={[1, 0]}
          end={[-0.3, 1]}
        >
          {children}
        </LinearGradient>
      </View>
    );
  }
);

export default Container;
