import * as React from "react";
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
import { Box } from "../../Theme";
import { LinearGradient } from "expo-linear-gradient";
type Props = KeyboardAvoidingViewProps & {
  children: React.ReactNode;
};
const isIOS = Platform.OS == "ios";

const { height } = Dimensions.get("window");

const KeyboardAvoiding: React.FC<Props> = React.memo(
  ({ children, ...rest }: Props) => {
    const insets = useSafeAreaInsets();
    console.log(Constants.statusBarHeight);
    return (
      <KeyboardAvoidingView
        behavior={isIOS ? "padding" : "height"}
        enabled
        style={{ flex: 1 }}
        {...rest}
      >
        <ScrollView
          // keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1}}
          scrollEnabled={true}
        >
    <LinearGradient
        // Background Linear Gradient
        colors={["#271D45", "#191924", "#191924", "#1D3A7D"]}
        style={{ flex: 1 }}
        start={[1, 0]}
        end={[-0.3, 1]}>
            
              {children}
            </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
);

KeyboardAvoiding.displayName = "KeyboardAvoiding";

export default KeyboardAvoiding;
