import React, { useEffect, useRef, useState } from "react";
import {
  Pressable,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import { Context as AuthContext } from "../components/authentication/AuthContext";
import { AuthStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import { Box, Text } from "../components/Theme";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from "dayjs";
import TextInputField from "../components/ui/forms/TextInputField";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useTheme } from "@shopify/restyle";
import { widthToPercentage } from "../constants/Layout";
import KeyboardAvoiding from "../components/ui/layout/KeyboardAvoiding";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isIOS } from "../constants/Platform";
import { init, L } from "../utils/Lan";
import { Button, View } from "react-native-ui-lib";
import SvgLogo from "../assets/FaceLordSvgLogo";
import Spacer from "../components/ui/layout/Spacer";
import { FloatingLabelInput } from "react-native-floating-label-input";
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
const SignUp = ({
  navigation,
}: StackScreenProps<AuthStackParamList, "SignUp">) => {
  const { showActionSheetWithOptions } = useActionSheet();
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email(L("SignupEmailError3"))
      .trim()
      .lowercase()
      .required(L("SignupEmailError1")),
    full_name: yup
      .string()
      .min(3, L("SignupNameError1"))
      .required(L("SignupNameError2")),
    birth_date: yup
      .string()
      .required(L("SignupDateOfBirthError")),
    gender: yup
      .mixed("Choose gender")
      .oneOf([1, 2, 3] as const, L("SignupGenderError"))
      .defined()
      .required(),
    password1: yup
      .string()
      .trim()
      .min(6, L("SignupPasswordError2"))
      .required(L("SignupPasswordError1")),
    password2: yup
      .string()
      .required(L("SignupPasswordError1"))
      .test(
        "password1s-match",
        L("SignupPasswordError3"),
        function (value: any) {
          return this.parent.password1 === value;
        }
      ),
  });
  const theme = useTheme();
  const { signup, state } = React.useContext(AuthContext);
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
      full_name: "",
      email: "",
      birth_date: "",
      gender: null,
      password1: "",
      password2: "",
      remember: false,
    },
    onSubmit: (values) => {
      signup(values);
    },
  });
  const [
    isDatePickerVisible,
    setDatePickerVisibility,
  ] = useState(false);
  const [accepted, setAccepted] = useState<boolean>(false);
  const [genderIos, setGenderIos] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(
    false
  );
  useEffect(() => {
    if (state.error) {
      if (state.error.birth_date) {
        console.log(state.error.birth_date[0], "ARRAY");

        setErrors({
          birth_date: L("SignupDateOfBirth18Error"),
        });
      } else setErrors(state.error);
    }
  }, [state.error]);

  const password1 = useRef<TextInput>(null);
  const name = useRef<TextInput>(null);
  const password2 = useRef<TextInput>(null);
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

  return (
    <KeyboardAvoiding>
   <View flex  paddingHorizontal="5%" paddingTop="6%">
        <View center>
          <SvgLogo w={25}/>
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

          <Spacer mt={2} />
          <TouchableOpacity onPress={showDatePicker}>
   <FloatingLabelInput
            togglePassword={false}
            editable={false}
            // onTouchStart={()=>console.log("KEKO")}
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
            label={"Birthdate"}

            //  customShowPasswordComponent={<Text>Show</Text>}
            //  customHidePasswordComponent={<Text>Hide</Text>}
          />
          </TouchableOpacity>
          <Spacer mt={2} />
          <TouchableOpacity onPress={onPress}>

   <FloatingLabelInput
            togglePassword={false}
            editable={false}
            // onTouchStart={()=>console.log("KEKO")}
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
            label={"Gender"}

            //  customShowPasswordComponent={<Text>Show</Text>}
            //  customHidePasswordComponent={<Text>Hide</Text>}
          />
          </TouchableOpacity>
        </View>

        <View>
   
          <Spacer mt={0.5} />
      
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            display="spinner"
          />
 
          

          
        </View>
<Spacer mt={2} />
          <Button label="Sign up Face Lord" />
      </View>
  
          {/* )} */}

        
      {/* <BottomSheetComponnt ref={sheetRef} /> */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={!accepted || showModal}
      >
        <Box
          style={{
            flex: 1,
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: "white",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <ScrollView>
            <Text variant="title">Legal Information</Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Effective as of February 01, 2021.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Last updated February 01, 2021.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Please read all documents carefully.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Face Yourself is an online-based mobile
              application that uniquely allows you to create
              your personality map from your facial lines.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Tanos Technology LLC. built the Face Yourself
              mobile application (the App) as a Free app.
              This Service is provided by Tanos Technology
              LLC. built the Face Yourself mobile (“We”,
              “our” or “us”) at no cost and is intended for
              use as is.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Using this App, its users’ (“you” or “your”)
              accept the following terms of use,
              responsibility policies, and privacy policy.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              The App supports multi-languages, and its
              native language is English. There may be
              errors due to translation in other languages;
              by the way, our company is not responsible for
              spelling errors, etc., other than English. We
              would be pleased to report your bug reports
              via feedback or email.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              By downloading or using the App, these terms
              will automatically apply to you. You should
              make sure, accordingly, that you read them
              carefully before using the App. You're not
              allowed to copy or modify any part of the App
              or our trademarks in any way. You're not
              allowed to attempt to extract the App's source
              code, and you also shouldn't try to translate
              the App into other languages or make
              derivative versions. The App itself, and all
              the trademarks, all the figures, copyright,
              database rights, and other intellectual
              property rights related to it, belong to our
              app publisher.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              The App stores and processes the personal data
              that you have provided to our Service. It's
              your responsibility to keep your phone and
              access to the App secure. Therefore, we
              recommend that you do not jailbreak or root
              your phone, which is the process of removing
              software restrictions and limitations imposed
              by the official operating system of your
              device. It could make your phone vulnerable to
              malware/viruses/malicious programs, compromise
              your phone's security features, and it could
              mean that the App won't work correctly or at
              all.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              You should be aware that there are certain
              things that our app publishers will not take
              responsibility for; certain functions of the
              App will require the App to have an active
              internet connection. The connection can be
              Wi-Fi or provided by your mobile network
              provider. Still, our app publishers cannot
              take responsibility for the App not working at
              full functionality if you don't have access to
              Wi-Fi, and you don't have any of your data
              allowance left.
            </Text>
            <Text></Text>
            <Text variant="explanatoryl">
              If you're using the App outside of an area
              with Wi-Fi, you should remember that your
              terms of the agreement with your mobile
              network provider will still apply. As a
              result, you may be charged by your mobile
              provider for the cost of data for the duration
              of the connection while accessing the App, or
              other third-party charges. Using the App,
              you're accepting responsibility for any such
              charges, including roaming data charges if you
              use the App outside of your home territory
              (i.e., region or country) without turning off
              data roaming. If you are not the bill payer
              for the device you're using the App, please be
              aware that we assume that you have received
              permission from the bill payer for using the
              App.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Along the same lines, our app publishers
              cannot always take responsibility for the way
              you use the App, i.e., You need to make sure
              that your device stays charged – if it runs
              out of battery. You can't turn it on to avail
              yourself of the Service; we cannot accept
              responsibility.
            </Text>

            <Text></Text>
            <Text variant="explanatoryl">
              Concerning our app publishers' responsibility
              for your use of the App, when you're using the
              App, it's essential to bear in mind that
              although we endeavor to ensure that it is
              updated and correct at all times, we do rely
              on third parties to provide information to us
              so that we can make it available to you. Our
              app publishers accept no liability for any
              loss, direct or indirect, you experience as a
              result of relying wholly on the App's
              functionality.
            </Text>
            <Text></Text>
            <Text variant="explanatoryl">
              At some point, we may wish to update the App.
              The App is currently available on Android &
              iOS & Huawei– the requirements for all three
              systems (and for any additional systems we
              decide to extend the availability of the App
              to) may change, and you'll need to download
              the updates if you want to keep using the App.
              Our app publishers do not promise that it will
              always update the App to be relevant to you
              and works with the Android & iOS & Huawei
              version installed on your device. However, you
              promise forever to accept updates to the
              application when offered to you; We may also
              wish to stop providing the App. We may
              terminate use of it at any time without giving
              notice of termination to you. Unless we tell
              you otherwise, upon any termination, (a) the
              rights and licenses granted to you in these
              terms will end; (b) you must stop using the
              App, and (if needed) delete it from your
              device.
            </Text>
            <Text></Text>
            <Text variant="title">
              Changes to this Terms and Use
            </Text>

            <Text variant="explanatoryl">
              We may update our Terms and Use from time to
              time. Therefore, you are recommended to review
              this page periodically for any changes. We
              will notify you of any changes by emailing or
              popup services of the App the new 'Privacy
              Policy' or the 'Terms of Use' on this page.
            </Text>
            <Text></Text>
            <Text variant="title">Contact Us</Text>
            <Text variant="explanatoryl">
              If there are any questions regarding these
              terms of use, you may contact us at
              info@face2yourself.com.
            </Text>
            <Text variant="title" textAlign="right">
              Face Yourself Team
            </Text>
          </ScrollView>
          <Touchable
            onPress={() => {
              setAccepted(true);
              setShowModal(false);
            }}
          >
            <Box
              style={{
                backgroundColor: theme.colors.purple,
                width: widthToPercentage(84),
                borderRadius: theme.borderRadius.b,
                paddingBottom: theme.spacing.b,
                paddingTop: theme.spacing.b,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2%",
              }}
            >
              <Text variant="button" color="white">
                {L("SignupAccept")}
              </Text>
            </Box>
          </Touchable>
        </Box>
      </Modal>
    </KeyboardAvoiding>
  );
};

export default SignUp;
