import createDataContext from "../../context/createDataContext";
import {
  CHANGE_PASSWORD,
  DELETE,
  FACEBOOK,
  GOOGLE,
  APPLE,
  LOGIN,
  LOGOUT,
  REGISTER,
  RESET_PASSWORD,
  USER,
  VERIFY,
} from "../../constants/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as AppleAuthentication from "expo-apple-authentication";
import {
  headerPhone,
  isIOS,
} from "../../constants/Platform";
import {
  AdMobInterstitial,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import Toast from "react-native-toast-message";

import * as Facebook from "expo-facebook";

import * as Google from "expo-google-app-auth";
import { init, L } from "../../utils/Lan";
import { fetchData } from "../../utils/Fetch";
import axios from "axios";
import { deleteProfile } from "../../utils/db";
import { PhotoCount } from "../../utils/AdsHandler";
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export const initialLoginState = {
  isLoading: true,
  loadingMessage: null,
  user: null,
  name: null,
  email: null,
  token: null,
  error: null,
  lang: null,
  cancel:null,
  success: null,
  ads_on: false,
  imageUrl: null,
  photoCount: 0,
};

export type InitialLoginStateType = {
  isLoading: boolean;
  name: string | null;
  token: string | null;
  email: string | null;
  error: string | null;
  user: object | null;
  success: object | null;
  lang: string | null;
  cancel: () => void ;
  ads_on: boolean;
  imageUrl: string | null;
  photoCount: number | null;
};

export enum Types {
  SetLoad = "SET_LOAD",
  SignIn = "SIGN_IN",
  SignUp = "SIGN_Up",
  SignOut = "SIGN_OUT",
  SetLang = "SET_LANG",
  ChangePassword = "CHANGE_PASSWORD",
  ResetPassword = "RESET_PASSWORD",
  Verify = "VERIFY",
  ProfileEdit = "PROFILE_EDIT",
  Error = "ERROR",
  RetrieveToken = "RETRIEVE_TOKEN",
  UserLoad = "USER_LOAD",
  Ads_Status = "ADS_STATUS",
  PhotoCount = "PHOTO_COUNT",
}

type AuthType = {
  isLoading: boolean;
  loadingMessage: string | null;
  success: boolean | null;
  name: string | null;
  token: string | null;
  email: string | null;
  lang: string | null;
  error: string | null;
  user: object | null;
  ads_on: boolean;
  cancel: () => void | any;
  photoCount: number;
};

type AuthPayload = {
  [Types.SetLoad]: {
    isLoading: boolean;
    loadingMessage: string;
    cancel: () => void;
    imageUrl: string;
  };
  [Types.SignIn]: {
    email: string;
    token: string;
    user: string;
  };
  [Types.SignUp]: {
    email: string;
    token: string;
    user: object;
  };
  [Types.SignOut]: {
    token: null;
    email: "";
  };
  [Types.ChangePassword]: {
    success: boolean;
  };
  [Types.ResetPassword]: {
    success: string;
  };
  [Types.Verify]: {
    success: string;
  };
  [Types.SetLang]: {
    lang: string;
  };
  [Types.PhotoCount]: {
    photoCount: number;
  };
  [Types.ProfileEdit]: {
    success: boolean;
    user: object;
  };
  [Types.RetrieveToken]: {
    token: string;
  };
  [Types.Ads_Status]: {
    ads_on: boolean;
  };
  [Types.UserLoad]: {
    user: object;
  };
  [Types.Error]: {
    error: object;
  };
};
export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export const authReducer = (
  state: AuthType = initialLoginState,
  action: AuthActions
) => {
  switch (action.type) {
    case Types.UserLoad:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isLoading: false,
      };
    case Types.SignIn:
    case Types.SignUp:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        user: action.payload.user,
        error: null,
        isLoading: false,
      };
    case Types.Ads_Status:
      return {
        ...state,
        ads_on: action.payload.ads_on,
      };
    case Types.SetLang:
      return {
        ...state,
        lang: action.payload.lang,
      };
    case Types.PhotoCount:
      return {
        ...state,
        photoCount: action.payload.photoCount,
      };
    case Types.ResetPassword:
    case Types.Verify:
      return {
        ...state,
        success: action.payload.success,
      };
    case Types.ProfileEdit:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        success: action.payload.success,
      };
    case Types.SetLoad:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        loadingMessage: action.payload.loadingMessage,
        cancel: action.payload.cancel,
        imageUrl: action.payload.imageUrl,
      };
    case Types.RetrieveToken:
      return {
        ...state,
        token: action.payload.token,
        error: null,
        isLoading: false,
      };
    case Types.SignOut:
      return { token: null, email: "", isLoading: false };
    case Types.Error:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
type SignUpValues = {
  email: string | null;
  password1: string | null;
  password2: string | null;
  full_name: string | null;
  birth_date: string | null;
  gender: number;
};
const signup = (dispatch: Dispatch<Object>) => async (
  values: SignUpValues
) => {
  // return async (values) => {
  const {
    email,
    password1,
    password2,
    full_name,
    birth_date,
    gender,
  } = values;
  console.log(REGISTER, "REGISTER");
  const push_token = await AsyncStorage.getItem(
    "pushToken"
  );

  const lang = await AsyncStorage.getItem("lang");
  console.log(lang, "lang");
  const { response, error } = await fetchData(REGISTER, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": "token",
      ...headerPhone,
    },
    body: JSON.stringify({
      email: email,
      password1: password1,
      password2: password2,
      full_name: full_name,
      birth_date: birth_date,
      gender: gender,
      push_token: push_token,
      lang_code: lang,
    }),
  });
  if (!error) {
    const userToken = response.key;
    await AsyncStorage.setItem("userToken", userToken);

    await AsyncStorage.setItem("social", "false");
    Toast.show({
      type: "success",
      text1: L("Toast4"),
    });

    return dispatch({
      type: Types.SignUp,
      payload: {
        email: email,
        user: {
          email,
          full_name,
          birth_date,
          gender,
          lang_code: lang,
        },
        token: userToken,
      },
    });
  }

  return dispatch({
    type: Types.Error,
    payload: {
      error: error,
    },
  });
};
type SignInValues = {
  email: string;
  password: string;
};
type SignInDispatchValues = {
  Dispatch: Dispatch;
  type: string;
  payload: {
    email: string;
    token: string;
    user: object;
  };
};
type ErrorDispatchValues = {
  type: string;
  payload: {
    error: string;
  };
};

const signin = (
  dispatch: Dispatch<
    SignInDispatchValues | ErrorDispatchValues
  >
) => {
  return async ({ email, password }: SignInValues) => {
    console.log(email, password);
    dispatch({
      type: Types.SetLoad,
      payload: {
        isLoading: true,
      },
    });
    const push_token = await AsyncStorage.getItem(
      "pushToken"
    );
    const lang = await AsyncStorage.getItem("lang");
    const { response, error } = await fetchData(LOGIN, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": "token",
        "phone-type": "ANDROID",
        ...headerPhone,
      },
      body: JSON.stringify({
        email: email,
        password: password,
        push_token: push_token,
      }),
    });
    console.log(response, error);
    if (!error) {
      const userToken = response.key;
      await AsyncStorage.setItem("userToken", userToken);
      await AsyncStorage.setItem("social", "false");
      const { response: res, error: err } = await fetchData(
        USER,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${userToken}`,
            ...headerPhone,
          },
        }
      );
      if (!err) {
        const count = await PhotoCount(userToken);
        dispatch({
          type: Types.PhotoCount,
          payload: {
            photoCount: count["count"],
          },
        });
        const userInformation = res;
        if (lang !== userInformation.lang_code) {
          await AsyncStorage.setItem(
            "lang",
            userInformation.lang_code
          );

          dispatch({
            type: Types.SetLang,
            payload: {
              lang: userInformation.lang_code,
            },
          });
        }
        console.log(
          userInformation.lang_code,
          lang,
          "LANG CODE USER"
        );
        Toast.show({
          type: "success",
          text1: L("Toast4"),
        });
        return dispatch({
          type: Types.SignIn,
          payload: {
            email: email,
            token: userToken,
            user: userInformation,
          },
        });
      }

      console.log(error, "SIGN IN API");
      return dispatch({
        type: Types.Error,
        payload: {
          error: err,
        },
      });
    }
    return dispatch({
      type: Types.Error,
      payload: {
        error: error,
      },
    });
  };
};

const facebook = (dispatch: Dispatch<null>) => {
  return async () => {
    const push_token = await AsyncStorage.getItem(
      "pushToken"
    );

    const lang_code = await AsyncStorage.getItem("lang");

    // const APP_ID = "486355775697088";
    const APP_ID = "753454208691814";
    try {
      await Facebook.initializeAsync({
        appId: APP_ID,
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: [
          "public_profile",
          "email",
          "user_birthday",
          "user_gender",
        ],
      });
      if (type === "success") {
        console.log(token, "TOKEN");
        console.log(type, "SUCCESS");
        const { response, error } = await fetchData(
          FACEBOOK,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              access_token: token,
              push_token: push_token,
              lang_code: lang_code,
            }),
          }
        );

        // const { response, error } = await FetchHeader(
        //   FACEBOOK,
        //   "POST",
        //   token
        // );
        if (!error) {
          // alert(response);
          // console.log(response, "RESPONSE FACEBOOK SERVER");
          const userToken = response.key;

          await AsyncStorage.setItem(
            "userToken",
            userToken
          );
          // console.log(userToken);
          // alert(userToken);
          // await AsyncStorage.setItem(
          //   "userToken",
          //   userToken
          // );

          const {
            response: res,
            error: err,
          } = await fetchData(USER, {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Token ${userToken}`,
              ...headerPhone,
            },
          });
          if (!err) {
            const userInformation = res;
            console.log(userInformation, "RESS FACEBOOK");
            const count = await PhotoCount(userToken);
            dispatch({
              type: Types.PhotoCount,
              payload: {
                photoCount: count["count"],
              },
            });
            await AsyncStorage.setItem("social", "true");
            console.log(res, "PROFILE");
            Toast.show({
              type: "success",
              text1: L("Toast4"),
            });
            return dispatch({
              type: Types.SignIn,
              payload: {
                token: userToken,
                user: userInformation,
              },
            });
          } else if (err) {
            if (err.non_field_errors) {
              console.log(
                "USE EFFECT",
                err.non_field_errors[0]
              );
              alert(`${err},${err.non_field_errors[0]}`);
            } else {
              alert(err);
            }
            return dispatch({
              type: Types.Error,
              payload: {
                error: err,
              },
            });
          }
        } else if (error) {
          console.log(error, "ERROR");
          if (error.non_field_errors) {
            console.log(
              "USE EFFECT",
              error.non_field_errors[0]
            );
            alert(`${error},${error.non_field_errors[0]}`);
          } else {
            alert(error);
          }
          return dispatch({
            type: Types.Error,
            payload: {
              error: error,
            },
          });
        }
        // if (!err) {
        //   const userInformation = res;
        //   if (lang !== userInformation.lang_code) {
        //     await AsyncStorage.setItem(
        //       "lang",
        //       userInformation.lang_code
        //     );
        //     dispatch({
        //       type: Types.SetLang,
        //       payload: {
        //         lang: userInformation.lang_code,
        //       },
        //     });
        //   }
        //   console.log(
        //     userInformation.lang_code,
        //     lang,
        //     "LANG CODE USER"
        //   );
        //     return dispatch({
        //       type: Types.SignIn,
        //       payload: {
        //         email: email,
        //         token: userToken,
        //         user: userInformation,
        //       },
        //     });
        //   }

        //   console.log(error, "SIGN IN API");
        //   return dispatch({
        //     type: Types.Error,
        //     payload: {
        //       error: err,
        //     },
        //   });
        // }
      } else {
        // type === 'cancel'

        return dispatch({
          type: Types.SetLoad,
          payload: {
            isLoading: false,
          },
        });
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
      return dispatch({
        type: Types.Error,
        payload: {
          error: message,
        },
      });
    }
  };
};

const google = (dispatch: Dispatch<null>) => {
  return async () => {
    const push_token = await AsyncStorage.getItem(
      "pushToken"
    );

    const lang_code = await AsyncStorage.getItem("lang");
    try {
      const {
        type,
        user,
        accessToken,
      } = await Google.logInAsync({
        iosClientId: `980369007287-d6a2b76er8bi50ou2oi473m2taq16gce.apps.googleusercontent.com`,
        androidClientId: `980369007287-vf3mce84f4hs4m15aisujn2ffqkvbk9h.apps.googleusercontent.com`,
        androidStandaloneAppClientId:
          "980369007287-vde5nrodi1se7j21f0hte3c23onq3ceg.apps.googleusercontent.com",
        iosStandaloneAppClientId:
          "980369007287-l240jdj0l91e97e3k4jop90rjgggedcv.apps.googleusercontent.com",
      });

      if (type === "success") {
        console.log(accessToken, "TOKEN");
        console.log(type, "SUCCESS");

        dispatch;
        const { response, error } = await fetchData(
          GOOGLE,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              access_token: accessToken,
              lang_code: lang_code,
              push_token: push_token,
            }),
          }
        );

        // const { response, error } = await FetchHeader(
        //   FACEBOOK,
        //   "POST",
        //   token
        // );
        if (!error) {
          // alert(response);
          // console.log(response, "RESPONSE FACEBOOK SERVER");
          const userToken = response.key;

          await AsyncStorage.setItem(
            "userToken",
            userToken
          );
          // console.log(userToken);
          // alert(userToken);
          // await AsyncStorage.setItem(
          //   "userToken",
          //   userToken
          // );

          const {
            response: res,
            error: err,
          } = await fetchData(USER, {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Token ${userToken}`,
              ...headerPhone,
            },
          });
          if (!err) {
            const userInformation = res;
            const count = await PhotoCount(userToken);
            dispatch({
              type: Types.PhotoCount,
              payload: {
                photoCount: count["count"],
              },
            });
            await AsyncStorage.setItem("social", "true");
            console.log(res, "PROFILE");
            Toast.show({
              type: "success",
              text1: L("Toast4"),
            });
            return dispatch({
              type: Types.SignIn,
              payload: {
                token: userToken,
                user: userInformation,
              },
            });
          } else if (err) {
            if (err.non_field_errors) {
              console.log(
                "USE EFFECT",
                err.non_field_errors[0]
              );
              alert(err.non_field_errors[0]);
            } else {
              alert(err);
            }
            return dispatch({
              type: Types.Error,
              payload: {
                error: err,
              },
            });
          }
        } else if (error) {
          console.log(error, "ERROR");
          if (error.non_field_errors) {
            console.log(
              "USE EFFECT",
              error.non_field_errors[0]
            );
            alert(error.non_field_errors[0]);
          } else {
            alert(error);
          }
          return dispatch({
            type: Types.Error,
            payload: {
              error: error,
            },
          });
        }
        // if (!err) {
        //   const userInformation = res;
        //   if (lang !== userInformation.lang_code) {
        //     await AsyncStorage.setItem(
        //       "lang",
        //       userInformation.lang_code
        //     );
        //     dispatch({
        //       type: Types.SetLang,
        //       payload: {
        //         lang: userInformation.lang_code,
        //       },
        //     });
        //   }
        //   console.log(
        //     userInformation.lang_code,
        //     lang,
        //     "LANG CODE USER"
        //   );
        //     return dispatch({
        //       type: Types.SignIn,
        //       payload: {
        //         email: email,
        //         token: userToken,
        //         user: userInformation,
        //       },
        //     });
        //   }

        //   console.log(error, "SIGN IN API");
        //   return dispatch({
        //     type: Types.Error,
        //     payload: {
        //       error: err,
        //     },
        //   });
        // }
      } else {
        // type === 'cancel'
        return dispatch({
          type: Types.SetLoad,
          payload: {
            isLoading: false,
          },
        });
      }
    } catch ({ message }) {
      alert(`Google Login Error: ${message}`);
      return dispatch({
        type: Types.Error,
        payload: {
          error: message,
        },
      });
    }
  };
};
const apple = (dispatch: Dispatch<null>) => {
  return async () => {
    const push_token = await AsyncStorage.getItem(
      "pushToken"
    );
    const lang_code = await AsyncStorage.getItem("lang");

    try {
      const {
        user,
        identityToken: id_token,
        authorizationCode: access_token,
      } = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope
            .FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope
            .EMAIL,
        ],
      });

      if (user) {
        const data = {
          id_token,
          access_token,
          lang_code: lang_code,
          push_token: push_token,
        };
        const config = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
        const response = await axios.post(
          APPLE,
          data,
          config
        );

        if ((response.statusText = "OK")) {
          // alert(response);
          // console.log(response, "RESPONSE APPLE SERVER");
          const userToken = response.data.key;

          await AsyncStorage.setItem(
            "userToken",
            userToken
          );
          // console.log(userToken);
          // alert(userToken);
          // await AsyncStorage.setItem(
          //   "userToken",
          //   userToken
          // );

          const {
            response: res,
            error: err,
          } = await fetchData(USER, {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Token ${userToken}`,
              ...headerPhone,
            },
          });
          if (!err) {
            const userInformation = res;
            const count = await PhotoCount(userToken);
            dispatch({
              type: Types.PhotoCount,
              payload: {
                photoCount: count["count"],
              },
            });
            await AsyncStorage.setItem("social", "true");
            console.log(res, "PROFILE");
            Toast.show({
              type: "success",
              text1: L("Toast4"),
            });
            return dispatch({
              type: Types.SignIn,
              payload: {
                token: userToken,
                user: userInformation,
              },
            });
          } else if (err) {
            if (err.non_field_errors) {
              console.log(
                "USE EFFECT",
                err.non_field_errors[0]
              );
              alert(err.non_field_errors[0]);
            } else {
              alert(err);
            }
            return dispatch({
              type: Types.Error,
              payload: {
                error: err,
              },
            });
          }
          // } else if (error) {
          //   console.log(error, "ERROR");
          //   if (error.non_field_errors) {
          //     console.log(
          //       "USE EFFECT",
          //       error.non_field_errors[0]
          //     );
          //     alert(error.non_field_errors[0]);
          //   } else {
          //     alert(error);
          //   }
          //   return dispatch({
          //     type: Types.Error,
          //     payload: {
          //       error: error,
          //     },
          //   });
          // }
        } else {
          // type === 'cancel'
          return dispatch({
            type: Types.SetLoad,
            payload: {
              isLoading: false,
            },
          });
        }
      }
    } catch ({ message }) {
      alert(`Apple Login Error: ${message}`);
      console.log(message);
      return dispatch({
        type: Types.Error,
        payload: {
          error: message,
        },
      });
    }
  };
};
const signout = (dispatch: Dispatch<Object>) => {
  return async () => {
    let userToken = await AsyncStorage.getItem("userToken");
    const { response, error } = await fetchData(LOGOUT, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${userToken}`,
        ...headerPhone,
      },
    });

    await AsyncStorage.removeItem("userToken");

    Toast.show({
      type: "success",
      text1: L("SettingsLogoutMessage"),
    });
    return dispatch({ type: Types.SignOut });
  };
};

const kickout = (dispatch: Dispatch<Object>) => {
  return async () => {
    await AsyncStorage.removeItem("userToken");
    return dispatch({ type: Types.SignOut });
  };
};
type ProfileEdit = {
  full_name: string;
  gender: number;
  birth_date: string;
};
const profileEdit = (dispatch: Dispatch<Object>) => async (
  values: ProfileEdit
) => {
  console.log("PROFILE EDITTTTTTTTTTTT");
  const { full_name, gender, birth_date } = values;
  console.log(values, "PROFILE EDIT");
  const token = await AsyncStorage.getItem("userToken");
  const { response, error } = await fetchData(USER, {
    method: "PATCH",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
      ...headerPhone,
    },
    body: JSON.stringify({
      full_name,
      gender,
      birth_date,
    }),
  });
  dispatch({
    type: Types.SetLoad,
    payload: {
      isLoading: true,
      loadingMessage: null,
    },
  });
  if (!error) {
    console.log(response, "PROFILE EDIT !ERROR");

    Toast.show({
      type: "success",
      text1: L("Toast1"),
    });
    return dispatch({
      type: Types.ProfileEdit,
      payload: {
        success: true,
        user: response,
      },
    });
  }
  return dispatch({
    type: Types.Error,
    payload: {
      error: error,
    },
  });
};

interface ChangePassword {
  old_password: string;
  new_password1: string;
  new_password2: string;
}
const changePassword = (
  dispatch: Dispatch<Object>
) => async (values: ChangePassword) => {
  const {
    old_password,
    new_password1,
    new_password2,
  } = values;

  const token = await AsyncStorage.getItem("userToken");
  const { response, error } = await fetchData(
    CHANGE_PASSWORD,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        ...headerPhone,
      },
      body: JSON.stringify({
        old_password,
        new_password1,
        new_password2,
      }),
    }
  );
  if (!error) {
    console.log(response);
    Toast.show({
      type: "success",
      text1: L("SettingsPasswordUpdated"),
    });
    return dispatch({
      type: Types.ChangePassword,
      payload: {
        success: response,
      },
    });
  }
  return dispatch({
    type: Types.Error,
    payload: {
      error: error,
    },
  });
};
const resetPassword = (
  dispatch: Dispatch<Object>
) => async (email: String) => {
  const { response, error } = await fetchData(
    RESET_PASSWORD,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headerPhone,
      },
      body: JSON.stringify({
        email,
      }),
    }
  );
  if (!error) {
    console.log(response);
    Toast.show({
      type: "success",
      text1: L("ForgotPasswordCheck"),
    });
    return dispatch({
      type: Types.ResetPassword,
      payload: {
        success: "emailSent",
      },
    });
  }
  Toast.show({
    type: "success",
    text1: `${response.error.email} `,
  });
  return dispatch({
    type: Types.Error,
    payload: {
      error: error,
    },
  });
};

const handleAd = (dispatch: Dispatch<Object>) => async (nav
) => {
  dispatch({
    type: Types.Ads_Status,
    payload: {
      ads_on: true,
    },
  });

  dispatch({
    type: Types.SetLoad,
    payload: {
      isLoading: true,
    },
  });

  // const adUnitID: string | undefined = Platform.select({
  //   // https://developers.google.com/admob/ios/test-ads
  //   ios: "ca-app-pub-3940256099942544/1712485313",
  //   // https://developers.google.com/admob/android/test-ads
  //   android: "ca-app-pub-3940256099942544/5224354917",
  // // });
  // const adUnitID: string | undefined = Platform.select({
  //   // https://developers.google.com/admob/ios/test-ads
  //   // ios: "ca-app-pub-5640507925808732/1873537419",
  //   ios: "ca-app-pub-5640507925808732/5215793694",
  //   // ios: "ca-app-pub-3940256099942544/1712485313",
  //   // https://developers.google.com/admob/android/test-ads
  //   android: "ca-app-pub-5640507925808732/8388643175",
  // });
  function common() {
    dispatch({
      type: Types.Ads_Status,
      payload: {
        ads_on: false,
      },
    });
    dispatch({
      type: Types.SetLoad,
      payload: {
        isLoading: false,
      },
    });
  }
  const adUnitID = isIOS
    ? "ca-app-pub-5640507925808732/5215793694"
    : "ca-app-pub-5640507925808732/8388643175";
  const _openRewarded = async () => {
    await setTestDeviceIDAsync("EMULATOR");

    await AdMobRewarded.setAdUnitID(adUnitID);

    await AdMobRewarded.requestAdAsync();
    AdMobRewarded.addEventListener(
      "rewardedVideoUserDidEarnReward",
      () => {
        common();
        nav()
      }
    );
    AdMobRewarded.addEventListener(
      "rewardedVideoDidLoad",
      () => {
        common();
      }
    );
    AdMobRewarded.addEventListener(
      "rewardedVideoDidFailToLoad",
      () => {
        common();
      }
    );
    AdMobRewarded.addEventListener(
      "rewardedVideoDidPresent",
      () => {
        common();
      }
    );
    AdMobRewarded.addEventListener(
      "rewardedVideoDidFailToPresent",
      () => {
        common();
        alert("ADS PROBLEM")
      }
    );
    AdMobRewarded.addEventListener(
      "rewardedVideoDidDismiss",
      () => {
        common();
      }
    );

    await AdMobRewarded.showAdAsync();
    AdMobRewarded.removeAllListeners();
  };
  const _openIntersitial = async () => {
    await setTestDeviceIDAsync("EMULATOR");

    // await AdMobInterstitial.setAdUnitID(
    //   "ca-app-pub-5640507925808732/9152196945"
    // );
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-5640507925808732/9152196945"
    );
    await AdMobInterstitial.requestAdAsync();
    AdMobInterstitial.addEventListener(
      "interstitialDidLoad",
      () => {
        nav();
        common();
      }
    );
    AdMobInterstitial.addEventListener(
      "interstitialDidOpen",
      () => {
        common();
      }
    );
    AdMobInterstitial.addEventListener(
      "interstitialDidFailToLoad",
      () => {
        common();
      }
    );
    AdMobInterstitial.addEventListener(
      "interstitialDidClose",
      () => {
        common();
      }
    );
    AdMobInterstitial.addEventListener(
      "interstitialWillLeaveApplication",
      () => {
        common();
      }
    );
    // AdMobInterstitial.addEventListener(
    //   "rewardedVideoDidDismiss",
    //   () => {
    //     common();
    //   }
    // );

    await AdMobInterstitial.showAdAsync();
    AdMobInterstitial.removeAllListeners();
  };
  await _openRewarded();
};

const verify = (dispatch: Dispatch<Object>) => async (
  password: string,
  token: string
) => {
  // const { password, token } = values;
  const { response, error } = await fetchData(VERIFY, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headerPhone,
    },
    body: JSON.stringify({
      password,
      token,
    }),
  });
  if (!error) {
    Toast.show({
      type: "success",
      text1: L("ForgotPasswordLogin"),
    });
    return dispatch({
      type: Types.Verify,
      payload: {
        success: "passwordChanged",
      },
    });
  }

  Toast.show({
    type: "error",
    text1: L("Toast2"),
  });
  return dispatch({
    type: Types.Error,
    payload: {
      error: Object.values(error)[0],
    },
  });
};
const setLoading = (dispatch: Dispatch<Object>) => {
  return async (
    load: boolean,
    loadingMessage: string,
    cancel: () => void,
    imageUrl: string
  ) => {
    console.log(load, "SET LOADING REDUCER");
    dispatch({
      type: Types.SetLoad,
      payload: {
        isLoading: load,
        loadingMessage: loadingMessage,
        cancel,
        imageUrl,
      },
    });
  };
};
const setSuccess = (dispatch: Dispatch<Object>) => {
  return async () => {
    dispatch({
      type: Types.Verify,
      payload: {
        success: null,
      },
    });
  };
};

const resetError = (dispatch: Dispatch<Object>) => {
  return async () => {
    dispatch({
      type: Types.Error,
      payload: {
        isLoading: null,
      },
    });
  };
};
const setLang = (dispatch: Dispatch<Object>) => {
  return async (lang: string) => {
    await AsyncStorage.setItem("lang", lang);

    let userToken = await AsyncStorage.getItem("userToken");

    const { response, error } = await fetchData(USER, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${userToken}`,
        ...headerPhone,
      },
      body: JSON.stringify({
        lang_code: lang,
      }),
    });
    console.log(response, error, "SET LANGgg");
    if (!error) {
      console.log(response, "SETLANG");
      init();
      dispatch({
        type: Types.SetLang,
        payload: {
          lang: lang,
        },
      });

      return dispatch({
        type: Types.ProfileEdit,
        payload: {
          success: true,
          user: response,
        },
      });
    }
  };
};

const deleteUser = (dispatch: Dispatch<Object>) => {
  return async (email: string) => {
    dispatch({
      type: Types.SetLoad,
      payload: {
        isLoading: true,
      },
    });

    let userToken = await AsyncStorage.getItem("userToken");
    try {
      const response = await axios.delete(DELETE, {
        headers: {
          Authorization: `Token ${userToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response, "response");
      Toast.show({
        type: "success",
        text1: L("Toast3"),
      });
      console.log(email, "BEFORE QUERY");
      await deleteProfile(email);
      return dispatch({ type: Types.SignOut });
    } catch (error) {
      alert("User Delete Error");

      return dispatch({
        type: Types.Error,
        payload: {
          error: error,
        },
      });
    }
  };
};
interface setLan {
  type: string;
  payload: {
    lang: string;
  };
}
const setLan = (dispatch: Dispatch<setLan>) => {
  return async (lang: string) => {
    await AsyncStorage.setItem("lang", lang);
    console.log(lang, "STATE 4");
    init();
    dispatch({
      type: Types.SetLang,
      payload: {
        lang: lang,
      },
    });
  };
};

const retrieveToken = (dispatch: Dispatch<Object>) => {
  return async (token: string) => {
    const { response, error } = await fetchData(USER, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        ...headerPhone,
      },
    });

    if (!error) {
      const user = response;
      const count = await PhotoCount(token);

      dispatch({
        type: Types.PhotoCount,
        payload: {
          photoCount: count["count"],
        },
      });
      console.log(user, "RETRIEVE TOKEN GET USER INFO");
      Toast.show({
        type: "success",
        text1: L("Toast4"),
      });
      dispatch({
        type: Types.UserLoad,
        payload: {
          user: user,
        },
      });
      return dispatch({
        type: Types.RetrieveToken,
        payload: {
          token,
        },
      });
    }

    return dispatch({
      type: Types.Error,
      payload: {
        error: error,
      },
    });
  };
};
const count = (
  dispatch: Dispatch<Object | undefined>
) => async (count: number) => {
  return dispatch({
    type: Types.PhotoCount,
    payload: {
      photoCount: count,
    },
  });
};
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signup,
    signout,
    facebook,
    google,
    apple,
    profileEdit,
    changePassword,
    resetPassword,
    deleteUser,
    verify,
    setSuccess,
    setLoading,
    retrieveToken,
    resetError,
    handleAd,
    setLang,
    setLan,
    count,
    kickout,
  },
  initialLoginState
);
