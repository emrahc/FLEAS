import * as React from "react";
import { Image, StyleSheet } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../types";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import KeyboardAvoiding from "../components/ui/layout/KeyboardAvoiding";
import TextInputField from "../components/ui/forms/TextInputField";
import { useFormik } from "formik";
import { Box,  } from "../components";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import * as yup from "yup";
import { height, width } from "../constants/Layout";
import { L } from "../utils/Lan";
import { View,Text, Button } from "react-native-ui-lib";
import SvgLogo from "../assets/FaceLordSvgLogo";
import Spacer from "../components/ui/layout/Spacer";
const CELL_COUNT = 6;
export default function ResetPassword({
  navigation,
  route,
}: StackScreenProps<AuthStackParamList, "ResetPassword">) {
  const loginSchema = yup.object().shape({
    token: yup.string().required().max(6).min(6),
    password: yup
      .string()
      .required(L("SignupPasswordError1"))
      .min(6, L("SignupPasswordError2")),
  });
  // const { email } = route.params;
  const { verify, state, setSuccess } = React.useContext(
    AuthContext
  );
  const [secureText, setSecureText] = React.useState(true);

  React.useEffect(() => {
    if (state.error) {
      setErrors(state.error);
    }

    if (state.success === "passwordChanged") {
      navigation.navigate("Login");
    }
    console.log("STATE ERROR", state);
    return () => {
      resetForm();
      setSuccess();
    };
  }, [state.error, state.success]);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
    setErrors,
  } = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      password: "",
      email: "",
      token: "",
    },
    onSubmit: (values) => {
      verify(values.password, values.token);
    },
  });

  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({
    value,
    cellCount: CELL_COUNT,
  });
  const [
    props,
    getCellOnLayoutHandler,
  ] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <KeyboardAvoiding>
 <View paddingHorizontal="5%" paddingTop="10%">

   <View center>
          <SvgLogo w={25}/>
          </View>
      {/* <Text variant="title">{L("ForgotPasswordSent")}</Text> */}
      <Spacer mt={5}/>
      <Text white h2 center>Authenticate Your Account</Text>
      <Spacer mt={2}/>
      <Text grey h5 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit vero cumque cupiditate nulla minus </Text>
      <Spacer mt={2}/>
      <Text h4 primary center>
        email@email.com
      </Text>
      <Spacer mt={3}/>
      <CodeField
        ref={ref}
        {...props}
        value={values.token}
        onChangeText={handleChange("token")}
        cellCount={6}
        // rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      
      <Spacer mt={3}/>
      <Button label="Verify" primary/>
 </View>
    </KeyboardAvoiding>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.19,
    height: width * 0.19 * 1.26,
    marginBottom: height * 0.034,
    marginTop: height * 0.034,
  },
  title: {
    fontSize: width * 0.051,
    fontWeight: "bold",
  },
  root: { flex: 1, padding: 20 },
  title2: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: width * 0.13,
    height: width * 0.13,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "transparent",
    textAlign: "center",
    // marginHorizontal: width * 0.01,
    paddingVertical:5,
    paddingHorizontal:5,

    backgroundColor:"#232323",
    color:"white"
  },
  focusCell: {
    borderColor: "white",
  },
});
