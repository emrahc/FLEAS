import * as React from "react";
import { Image, StyleSheet, TextInput } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import KeyboardAvoiding from "../components/ui/layout/KeyboardAvoiding";
import TextInputField from "../components/ui/forms/TextInputField";
import { useFormik } from "formik";
import Button from "../components/ui/buttons/Basebutton";
import { Box } from "../components";

import * as yup from "yup";
import { height, width } from "../constants/Layout";
import { L } from "../utils/Lan";

export default function ChangePassword({
  navigation,
}: StackScreenProps<RootStackParamList, "ChangePassword">) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {
    state,
    changePassword,
    resetError,
  } = React.useContext(AuthContext);
  const loginSchema = yup.object().shape({
    old_password: yup
      .string()
      .trim()
      .min(6, L("SignupPasswordError2"))
      .lowercase()
      .required(L("SignupPasswordError1")),
    new_password1: yup
      .string()
      .trim()
      .min(6, L("SignupPasswordError2"))
      .required(L("SettingsPasswordUpdateNewError")),
    new_password2: yup
      .string()
      .required(L("SignupPasswordError1"))
      .test(
        "new_password1s-match",
        L("SignupPasswordError3"),
        function (value: any) {
          return this.parent.new_password1 === value;
        }
      ),
  });


  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setErrors,
    setFieldValue,
  } = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      old_password: "",
      new_password1: "",
      new_password2: "",
    },
    onSubmit: (values) => {
      changePassword(values);
    },
  });
  React.useEffect(() => {
    if (state.error) {
      setErrors(state.error);
    }
    return () => {
      resetError();
    };
  }, [state.error]);

  const new_password1 = React.useRef<TextInput>(null);
  const new_password2 = React.useRef<TextInput>(null);
  return (
    <KeyboardAvoiding>
      <Image
        style={styles.image}
        source={require("../assets/images/face1.png")}
      />
      <Box alignItems="center" justifyContent="center">
        <TextInputField
          icon="check"
          placeholder={L("SettingsPasswordUpdateOld")}
          secureTextEntry={true}
          onChangeText={handleChange("old_password")}
          onBlur={handleBlur("old_password")}
          value={values.old_password}
          header={L("SettingsPasswordOld")}
          edited={values.old_password !== ""}
          error={errors.old_password}
          touched={touched.old_password}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="Next"
          onSubmitEditing={() =>
            new_password1.current?.focus()
          }
        />
        <TextInputField
          icon="check"
          ref={new_password1}
          placeholder={L("SettingsPasswordUpdateNew")}
          secureTextEntry={true}
          onChangeText={handleChange("new_password1")}
          onBlur={handleBlur("new_password1")}
          value={values.new_password1}
          header={L("CommonPassword")}
          edited={values.new_password1 !== ""}
          error={errors.new_password1}
          touched={touched.new_password1}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="next"
          returnKeyLabel="Next"
          onSubmitEditing={() =>
            new_password2.current?.focus()
          }
        />
        <TextInputField
          icon="check"
          ref={new_password2}
          placeholder={L("SettingsPasswordUpdateConfirm")}
          secureTextEntry={true}
          onChangeText={handleChange("new_password2")}
          onBlur={handleBlur("new_password2")}
          value={values.new_password2}
          header={L("CommonPassword")}
          edited={values.new_password2 !== ""}
          error={errors.new_password2}
          touched={touched.new_password2}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="Go"
        />
      </Box>
      <Box alignItems="center" alignContent="center">
        <Button
          variant="purple"
          onPress={() => handleSubmit()}
          label={L("SettingsPasswordUpdateHeader")}
        />
      </Box>
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
});
