import React, {
  RefObject,
  useEffect,
  useState,
} from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Entypo } from "@expo/vector-icons";
import Button from "../buttons/Basebutton";
import { Box } from "../../Theme";
const { width, height } = Dimensions.get("window");
interface LoginFormProps {
  value: String;
  data: String;
  handleLogin: () => void;
  navigation: any;
}

export default function LoginForm({
  navigation,
  handleLogin,
  signout,
}: LoginFormProps) {
  const { control, handleSubmit, errors } = useForm();
  const [emailEdited, setEmailEdited] = useState(false);
  const [passwordEdited, setPasswordEdited] = useState(
    false
  );
  const emailRef: any = React.useRef<TextInput>(null);
  const passwordRef: any = React.useRef<TextInput>(null);
  const onSubmit = (data: object): void =>
    handleLogin(data);
  const signUp = (): void => signout();

  return (
    <View style={styles.container}>
      <View>
        {emailEdited && (
          <Text
            style={{
              backgroundColor: "white",
              alignSelf: "flex-start",
              fontFamily: "poppins-medium",
              paddingRight: 10,
              paddingLeft: width * 0.0293,
              fontWeight: "800",
              fontSize: width * 0.026,
              top: width * 0.0453,
              left: width * 0.0263,
              zIndex: 999,
              color: "#6C4EF4",
            }}
          >
            EMAIL ADRESS
          </Text>
        )}
        <Controller
          control={control}
          rules={{ required: "This is required" }}
          onFocus={() => emailRef.current.focus()}
          render={({ onChange, onBlur, value }) => (
            <View
              style={{
                ...styles.inputWrapper,
                borderColor: errors.email
                  ? "red"
                  : "#ede9fe",
              }}
            >
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                ref={emailRef}
                // onTouchStart={() => console.log("Touchstart")}
                // onTouchEnd={() => console.log("TouchEnd")}
                // clearTextOnFocus={true}
                // onFocus={() => setFocus(true)}
                returnKeyLabel="Next"
                returnKeyType="next"
                onChangeText={(value) => {
                  onChange(value);

                  if (!emailEdited && value.length > 0)
                    setEmailEdited(true);
                  if (emailEdited && value.length == 0)
                    setEmailEdited(false);
                }}
                value={value}
                placeholder="E-MAIL ADRESS"
                placeholderTextColor="black"
                onSubmitEditing={() =>
                  passwordRef.current?.focus()
                }
              />
              <Entypo
                name="email"
                size={14}
                color="#9b86fc"
              />
            </View>
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <View style={styles.validationText}>
            <Text
              style={{
                color: "red",
                fontFamily: "poppins-medium",
              }}
            >
              {errors.email.message}
            </Text>
          </View>
        )}
      </View>
      <View>
        {passwordEdited && (
          <Text
            style={{
              backgroundColor: "white",
              alignSelf: "flex-start",
              fontFamily: "poppins-medium",
              paddingRight: 10,
              paddingLeft: width * 0.0293,
              fontWeight: "800",
              fontSize: width * 0.026,
              top: width * 0.0453,
              left: width * 0.0263,
              zIndex: 999,
              color: "#6C4EF4",
            }}
          >
            PASSWORD
          </Text>
        )}
        <View>
          <Controller
            control={control}
            onFocus={() => {
              passwordRef.current.focus();
              console.log("password");
            }}
            rules={{ required: "This is required" }}
            render={({ onChange, onBlur, value }) => (
              <View
                style={{
                  ...styles.inputWrapper,
                  borderColor: errors.password
                    ? "red"
                    : "#ede9fe",
                }}
              >
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  // onTouchStart={() => console.log("Touchstart")}
                  // onTouchEnd={() => console.log("TouchEnd")}
                  // clearTextOnFocus={true}
                  // onFocus={() => setFocus(true)}
                  ref={passwordRef}
                  onChangeText={(value) => {
                    onChange(value);

                    if (!passwordEdited && value.length > 0)
                      setPasswordEdited(true);
                    if (passwordEdited && value.length == 0)
                      setPasswordEdited(false);
                  }}
                  value={value}
                  placeholder="PASSWORD"
                  placeholderTextColor="black"
                />
                <Entypo
                  name="email"
                  size={14}
                  color="#9b86fc"
                />
              </View>
            )}
            name="password"
            defaultValue=""
          />
        </View>
        {errors.password && (
          <View style={styles.validationText}>
            <Text
              style={{
                color: "red",
                fontFamily: "poppins-medium",
              }}
            >
              {errors.password.message}
            </Text>
          </View>
        )}
      </View>
      <Box alignItems="center" alignContent="center">
        <Button
          variant="purple"
          onPress={handleSubmit(onSubmit)}
          label="LOGIN FACE YOURSELF"
        />
        <Button
          variant="white"
          onPress={() => navigation.replace("SignUp")}
          label="SIGN UP"
        />
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 2,
    justifyContent: "center",
    marginBottom: height * 0.1,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#ede9fe",
    borderRadius: 18,
    borderWidth: 1,
    paddingRight: width * 0.01,
    marginVertical: height * 0.01,
    height: height * 0.073,
  },
  input: {
    color: "black",
    fontFamily: "poppins-bold",
    lineHeight: 18,
    flex: 1,
    // fontWeight: "900",
    fontSize: width / 30,
    paddingLeft: width * 0.0533,
    letterSpacing: 1,
    zIndex: -99999,
  },
  validationText: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: height * 0.0123,
    color: "red",
  },
});
