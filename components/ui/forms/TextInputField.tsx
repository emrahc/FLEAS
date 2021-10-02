import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
// import { Entypo } from "@expo/vector-icons";
import { Box, useTheme, Text } from "../../index";
import { Entypo, AntDesign } from "@expo/vector-icons";
import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { L } from "../../../utils/Lan";
import { isTablet } from "../../../constants/Platform";
import { heightToPercentage } from "../../../constants/Layout";
interface TextInputFieldProps extends TextInputProps {
  error?: string;
  header?: string;
  touched?: boolean;
  edited?: boolean;
  selectable: boolean;
  icon: string;
  password: boolean | null;
  setSecureText: () => void | null;
  secureText: boolean | null;
}

const TextInputField = forwardRef<
  TextInput,
  TextInputFieldProps
>(
  (
    {
      error,
      touched,
      edited,
      header,
      icon,
      selectable,
      password,
      setSecureText,
      secureText,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const reColor = !touched
      ? "whitePurple"
      : error
      ? "red"
      : "whitePurple";
    const color = theme.colors[reColor];

    return (
      <Box style={styles.container}>
        {((!error && touched) ||
          (edited && !error) ||
          (selectable && !error)) && (
          <Text
            variant="textInputHeader"
            style={styles.textInputHeader}
          >
            {header}
          </Text>
        )}
        {error && touched && (
          <Box style={styles.errorHeaderContainer}>
            <Text
              variant="textInputHeader"
              color="red"
              style={{
                paddingHorizontal: widthPercentageToDP(1),
              }}
            >
              {header}
            </Text>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 18,
              }}
            >
              <Text
                variant="textInputHeaderError"
                color="white"
                style={{
                  paddingHorizontal: widthPercentageToDP(3),
                }}
              >
                {L("CommonWarning")}
              </Text>
            </View>
          </Box>
        )}
        <Box
          borderColor={reColor}
          borderWidth={2}
          style={styles.inputWrapper}
        >
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={theme.colors["black"]}
            {...{ ref }}
            {...props}
          />
          {!touched && !error && !password && (
            <Entypo
              name={icon}
              size={24}
              color={secureText ? "purple" : color}
            />
          )}
          {password && !error && (
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
            >
              <Entypo
                name={!secureText ? "eye-with-line" : "eye"}
                size={24}
                color={theme.colors.purple}
              />
            </TouchableOpacity>
          )}
          {touched && !error && !password && (
            <AntDesign
              name="check"
              size={24}
              color={"green"}
            />
          )}
          {error && (
            <AntDesign
              name="close"
              size={24}
              color={color}
            />
          )}
        </Box>
        {error && touched && (
          <Box alignItems="center" justifyContent="center">
            <Text
              variant="explanatory"
              color="red"
              textTransform="capitalize"
            >
              {error}
            </Text>
          </Box>
        )}
      </Box>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    marginBottom: height(0.5),
  },
  textInputHeader: {
    backgroundColor: "white",
    flexDirection: "row",
    alignSelf: "flex-start",
    top: width(4),
    left: width(2.63),
    paddingRight: 10,
    paddingLeft: width(2.93),
    zIndex: 1,
  },
  errorHeaderContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    // top: isTablet ? width(3) : width(4.53) ,
    top: heightToPercentage(2),
    left: width(2.63),
    paddingRight: 10,
    paddingLeft: width(2.93),
    zIndex: 1,
  },
  inputWrapper: {
    width: width(90),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 18,
    // borderWidth: 2,
    paddingRight: width(5),
    marginVertical: height(1),
    height: height(7),
  },
  input: {
    flex: 1,
    color: "black",
    fontFamily: "poppins-bold",
    fontWeight: "900",
    fontSize: width(100) / 30,
    paddingLeft: width(5.33),
    letterSpacing: 1,
    zIndex: 0,
  },
});

export default TextInputField;
