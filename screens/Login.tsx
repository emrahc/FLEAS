import * as React from "react";
import { TextInput } from "react-native";
import { init, L } from "../utils/Lan";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../types";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import KeyboardAvoiding from "../components/ui/layout/KeyboardAvoiding";
import TextInputField from "../components/ui/forms/TextInputField";
import { useFormik } from "formik";
import { Box, useTheme } from "../components";
import LottieView from "lottie-react-native";

import * as yup from "yup";
import { heightToPercentage, widthToPercentage } from "../constants/Layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isIOS, version } from "../constants/Platform";
import SocialButton from "../components/ui/buttons/SocialButton";
import { LinearGradient } from "expo-linear-gradient";
import SvgLogo from "../assets/FaceLordSvgLogo";
import { Button, View, Text } from "react-native-ui-lib";
import Spacer from "../components/ui/layout/Spacer";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { AntDesign } from "@expo/vector-icons";

export default function Login({
  navigation,
}: StackScreenProps<AuthStackParamList, "Login">) {
  const theme = useTheme();
  const appleIcon = () => <AntDesign name="apple1" size={24} color="white" />;
  const facebookIcon = () => (
    <AntDesign name="facebook-square" size={24} color="white" />
  );
  const googleIcon = () => <AntDesign name="google" size={24} color="white" />;
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email(L("SignupEmailError3"))
      .trim()
      .lowercase()
      .required(L("SignupEmailError1")),
    password: yup
      .string()
      .trim()
      .min(6, L("SignupPasswordError2"))
      .required(L("SignupPasswordError1")),
  });
  const [secureText, setSecureText] = React.useState(true);
  const { signin, state, facebook, google, apple } = React.useContext(
    AuthContext
  );
  React.useEffect(() => {
    init();
  }, []);
  React.useEffect(() => {
    if (state.error) {
      if (state.error.non_field_errors) {
        console.log("USE EFFECT", state.error.non_field_errors[0]);
        setErrors({
          password: L("LoginLoginError"),
          email: L("LoginLoginError"),
        });
      } else setErrors(state.error);
    }
    console.log("STATE ERROR", state);
  }, [state]);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setErrors,
  } = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signin(values);
    },
  });

  const passwordRef = React.useRef<TextInput>(null);
  return (
    <KeyboardAvoiding>
      <View flex  paddingHorizontal="5%" paddingTop="5%">
        <View center>
          <SvgLogo w={20} />
        </View>
        <Spacer mt={5} />
        <View width="100%">
          <FloatingLabelInput
            value={values.email}
            onChangeText={handleChange("email")}
            containerStyles={{
              borderRadius: 18,
              borderColor: "#232333",
              borderWidth: 1,
              paddingVertical: "6%",
              paddingHorizontal: 10,
              backgroundColor: "#232333",
            }}
            inputStyles={{
              paddingLeft: 5,
              color: "white",
            }}
            customLabelStyles={{
              colorBlurred: "white",
              fontSizeFocused: 13,
              colorFocused: "#7C8090",
            }}
            labelStyles={{}}
            label={"User Name"}
            //  customShowPasswordComponent={<Text>Show</Text>}
            //  customHidePasswordComponent={<Text>Hide</Text>}
          />

          <Spacer mt={2} />
          <FloatingLabelInput
            value={values.password}
            togglePassword={false}
            onChangeText={handleChange("password")}
            containerStyles={{
              borderRadius: 18,
              borderColor: "#232333",
              borderWidth: 1,
              paddingVertical: "6%",
              paddingHorizontal: 10,
              backgroundColor: "#232333",
            }}
            inputStyles={{
              paddingLeft: 5,
            }}
            customLabelStyles={{
              colorFocused: "white",
              fontSizeFocused: 13,
              colorBlurred: "#7C8090",
            }}
            labelStyles={{}}
            label={"Password"}
            isPassword

            //  customShowPasswordComponent={<Text>Show</Text>}
            //  customHidePasswordComponent={<Text>Hide</Text>}
          />
        </View>

        <Spacer mt={3} />
        <Text grey h6>
          Forgot Password ?
        </Text>
        <Spacer mt={3} />
        <View>
          <Button label="Login Face Lord" />
          <Spacer mt={3} />
          <Text grey h4 center>
            OR
          </Text>
        </View>
        <Spacer mt={3} />
        <View>
          <Button
            label="Sign up with Apple"
            black
            iconSource={(iconStyle) => (
              <View
                style={{
                  // paddingRight:iconStyle[0].marginRight,
                  marginRight: "3%",
                  // justifyContent:"flex-start"
                }}
              >
                {appleIcon()}
              </View>
            )}
          />
          <Spacer mt={0.5} />
          <Button
            label="Sign up with Facebook"
            black
            iconSource={(iconStyle) => (
              <View
                style={{
                  // paddingRight:iconStyle[0].marginRight,
                  marginRight: "3%",
                  // justifyContent:"flex-start"
                }}
              >
                {facebookIcon()}
              </View>
            )}
          />
          <Spacer mt={0.5} />
          <Button
            label="Sign up with Google"
            black
            iconSource={(iconStyle) => (
              <View
                style={{
                  // paddingRight:iconStyle[0].marginRight,
                  marginRight: "3%",
                  // justifyContent:"flex-start"
                }}
              >
                {googleIcon()}
              </View>
            )}
            onPress={()=> console.log("KEKO")}
          />
        </View>
      </View>
    </KeyboardAvoiding>
  );
}
