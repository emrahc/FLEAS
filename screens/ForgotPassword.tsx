import * as React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";

import { StackScreenProps } from "@react-navigation/stack";
import LoginForm from "../components/ui/forms/LoginForm";
import { AuthStackParamList } from "../types";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import KeyboardAvoiding from "../components/ui/layout/KeyboardAvoiding";
import TextInputField from "../components/ui/forms/TextInputField";
import { useFormik } from "formik";
import * as yup from "yup";
import { height, width } from "../constants/Layout";
import { L } from "../utils/Lan";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { View,Text, Button } from "react-native-ui-lib";
import SvgLogo from "../assets/FaceLordSvgLogo";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import Spacer from "../components/ui/layout/Spacer";

const CELL_COUNT = 6;
export default function ForgotPassword({
  navigation,
}: StackScreenProps<AuthStackParamList, "ForgotPassword">) {
  const [value, setValue] = React.useState("");
  const { state, resetPassword } = React.useContext(
    AuthContext
  );

  React.useEffect(() => {
    if (state.error) {
      setErrors(state.error);
      console.log(errors);
    }

    if (state.success === "emailSent") {
      navigation.navigate("ResetPassword", {
        email: values.email,
      });
    }
    console.log("STATE ERROR", state);
  }, [state.error, state.success]);
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email(L("SignupEmailError3"))
      .trim()
      .lowercase()
      .required(L("SignupEmailError1")),
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
    setErrors,
    setFieldValue,
  } = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      resetPassword(values.email);
    },
  });
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
      <Text white h2 center>{L("ForgotPasswordSent")}</Text>
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
      
      <Spacer mt={3} />
          <FloatingLabelInput
            value={values.password}
            togglePassword={false}
            editable={true}
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

      <Spacer mt={3}/>
      <Text center grey h5>{L("ForgotPasswordRequest")}</Text>
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
    borderRadius: 15,
    borderColor: "#EDE9FE",
    textAlign: "center",
    marginHorizontal: width * 0.01,
  },
  focusCell: {
    borderColor: "#6C4EF4",
  },
});
