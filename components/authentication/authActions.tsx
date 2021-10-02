import { Dispatch, ReducerAction } from "react";
import { api, REGISTER } from "../../constants/Api";

export const signup = (dispatch: ReducerAction) => async (
  values
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
  try {
    console.log(values);
    const response = await api.post(REGISTER, {
      email: email,
      password1: password1,
      password2: password2,
      full_name: full_name,
      birth_date: birth_date,
      gender: gender,
    });

    dispatch({
      type: "signup",
      payload: {
        token: response.data.key,
        email: email,
      },
    });
    console.log(response.data);
  } catch (error) {
    // console.log(error.response.data.email[0]);
    console.log(error.response.data);
    let errors: object[] = [];
    if (error.response.data) {
      for (const [key, value] of Object.entries(
        error.response.data
      )) {
        console.log(`${key}: ${value}`);
        errors.push({ key: value });
        dispatch({
          type: "error",
          paylod: {
            error: error.response.data,
          },
        });
      }
    }
  }
  // };
};

export const signin = (dispatch: Dispatch) => {
  return async ({ email, password }) => {
    // Do some API Request here
    // const response = await fetch(
    //   "http://api.face2yourself.com:8880/api/account/login/",
    //   {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       "X-CSRF-TOKEN": "token",
    //     },
    //     body: JSON.stringify({
    //       email: "emrahciftci@outlook.com",
    //       password: "123456",
    //     }),
    //   }
    // );
    // const res = JSON.stringify(response);

    // }
    try {
      const response = await Axios.post(
        "http://api.face2yourself.com:8880/api/account/login/",
        {
          email: email,
          password: password,
        }
      );
      const userToken = response.data.key;
      // console.log(response);
      // console.log(response.data);
      // const userEmail = foundUser[0].userEmail;
      try {
        await AsyncStorage.setItem("userToken", userToken);
      } catch (e) {
        console.log(e.data.message);
        // dispatch({
        //   type: "error",
        //   paylod: {
        //     error: e,
        //   },
        // });
      }

      dispatch({
        type: "signin",
        payload: {
          email: email,
          token: userToken,
        },
      });
    } catch (error) {
      // console.log(error.response.data.email[0]);

      console.log(error.response.data);
      if (error.response.data) {
        let errors: object[] = [];
        for (const [key, value] of Object.entries(
          error.response.data
        )) {
          // console.log(`${key}: ${value}`);
          console.log(key, value[0]);

          errors.push({ key: value[0] });
        }
        console.log(errors);
        dispatch({
          type: "error",
          paylod: {
            error: errors,
          },
        });
      }
    }
  };
};

export const signout = (dispatch) => {
  return () => {
    dispatch({ type: "signout" });
  };
};

export const retrieveToken = (dispatch) => {
  return async (token: string) => {
    dispatch({
      type: "retrieve_token",
      payload: {
        token,
      },
    });
  };
};
