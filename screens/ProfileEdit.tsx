import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import KeyboardAvoiding from "../components/ui/layout/KeyboardAvoiding";
import TextInputField from "../components/ui/forms/TextInputField";
import { useFormik } from "formik";
import Button from "../components/ui/buttons/Basebutton";
import { Box } from "../components";

import { useActionSheet } from "@expo/react-native-action-sheet";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as yup from "yup";
import dayjs from "dayjs";
import {
  height,
  heightToPercentage,
  width,
} from "../constants/Layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { L } from "../utils/Lan";
const isIOS = Platform.OS == "ios";

const Touchable = ({ children, ...props }) => {
  if (isIOS)
    return (
      <TouchableOpacity {...props}>
        {children}
      </TouchableOpacity>
    );
  else if (!isIOS)
    return (
      <Pressable
        style={{ zIndex: 999999999999 }}
        {...props}
      >
        {children}
      </Pressable>
    );
};
export default function ProfileEdit({
  navigation,
}: StackScreenProps<RootStackParamList, "ProfileEdit">) {
  const { showActionSheetWithOptions } = useActionSheet();
  const { state, profileEdit } = React.useContext(
    AuthContext
  );
  const [
    isDatePickerVisible,
    setDatePickerVisibility,
  ] = React.useState(false);
  const [genderIos, setGenderIos] = React.useState("");
//   React.useEffect(() => {
//     if (state.error) {
//       setErrors(state.error);
//     }
// 
//     setFieldValue("full_name", state.user.full_name);
//     setFieldValue("birth_date", state.user.birth_date);
//     setServerGender(state.user.gender);
//   }, [
//     state.error,
//     state.birthday,
//     state.user.gender,
//     state.user.full_name,
//   ]);
  const profileSchema = yup.object().shape({
    full_name: yup
      .string()
      .trim()
      .min(3, L("SignupNameError1"))
      .required(L("SignupNameError2"))
      .nullable(),
    birth_date: yup
      .string()
      .required(L("SignupDateOfBirthError"))
      .nullable(),
   gender: yup
      .mixed("Choose gender")
      .oneOf([1, 2, 3] as const, L("SignupGenderError"))
      .defined()
      .required(),
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
    validationSchema: profileSchema,
    initialValues: {
      full_name: "",
      gender: null,
      birth_date: "",
    },
    onSubmit: (values) => {
      console.log("KEKO");
      profileEdit(values);
    },
  });
//   const setServerGender = (value) => {
//     if (value === 1) {
//       setFieldValue("gender", 1);
//       setGenderIos("FEMALE");
//     }
// 
//     if (value === 2) {
//       setFieldValue("gender", 2);
// 
//       setGenderIos("MALE");
//     }
//     if (value === 3) {
//       setFieldValue("gender", 3);
//       setGenderIos("OTHER");
//     }
//   };

  React.useEffect(() => {
    if (state.error) {
      if (state.error.birth_date) {
        console.log(state.error.birth_date[0], "ARRAY");

        setErrors({
          birth_date: L("SignupDateOfBirth18Error"),
        });
      } else {
			console.log(state.error,"PROFILE EDIT ERROR")
			alert(state.error)
				setErrors(state.error)}
    }
  }, [state.error]);
  const onPress = (): void => {
    showActionSheetWithOptions(
      {
        options: [
          L("SignupFemale"),
          L("SignupMale"),
          L("SignupOther"),
          L("CommonCancel"),
        ],
        cancelButtonIndex: 3,

        message: L("SignupGenderSelect"),
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          setFieldValue("gender", 1);

          setGenderIos(L("SignupFemale"));
        }

        if (buttonIndex === 1) {
          setFieldValue("gender", 2);

          setGenderIos(L("SignupMale"));
        }
        if (buttonIndex === 2) {
          setFieldValue("gender", 3);

          setGenderIos(L("SignupOther"));
        }
      }
    );
  };
  const showDatePicker = (): void => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = (): void => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: string) => {
    setFieldValue(
      "birth_date",
      dayjs(date).format("YYYY-MM-DD")
    );
    hideDatePicker();
  };

  const nameRef = React.useRef<TextInput>(null);
  return (
    <KeyboardAvoiding>
      <Box flex={1} alignItems="center">
        <Image
          style={styles.image}
          source={require("../assets/images/face1.png")}
        />

        <Box
          style={{ paddingBottom: heightToPercentage(1) }}
        >
          <TextInputField
            icon="user"
            ref={nameRef}
            error={errors.full_name}
            placeholder={L("SignupNameType")}
            onChangeText={handleChange("full_name")}
            onBlur={handleBlur("full_name")}
            value={values.full_name}
            header={L("SignupName")}
            edited={true}
            touched={touched.full_name}
            autoCompleteType="name"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="Enter"
            selectable={true}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display="spinner"
          />

          <Touchable onPress={showDatePicker}>
            <TextInputField
              error={errors.birth_date}
              placeholder={L("SignupDateOfBirth")}
              onChangeText={handleChange("birth_date")}
              onBlur={handleBlur("birth_date")}
              value={values.birth_date}
              header={L("SignupDateOfBirth")}
              editable={false}
              edited={values.birth_date !== null}
              touched={touched.birth_date}
              selectable={true}
            />
          </Touchable>

          <Touchable onPress={onPress}>
            <TextInputField
              error={errors.gender}
              placeholder={L("SignupGenderSelect")}
              onChangeText={handleChange("gender")}
              onBlur={handleBlur("gender")}
              value={genderIos}
              header={L("SignupGender")}
              editable={false}
              edited={values.gender !== null}
              touched={touched.gender}
              selectable={true}
            />
          </Touchable>
        </Box>
        <Box alignItems="center" alignContent="center">
          <Button
            variant="purple"
            onPress={() => handleSubmit()}
            label={L("SettingsProfileEditChange")}
          />
        </Box>
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
