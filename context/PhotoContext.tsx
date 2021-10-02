import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { DESC } from "../constants/Api";
import { fetchData } from "../utils/Fetch";

import createDataContext from "./createDataContext";

import { headerPhone } from "../constants/Platform";
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

export const initialPhotoState = {
  isUploading: false,
  fromResponse: false,
  analysis: null,
  photo: null,
  photos: null,
  error: null,
  desc: null,
};

export type initialPhotoStateType = {
  isUploading: boolean;
  fromResponse: boolean;
  analysis: object | null;
  photos: object[] | null;
  photo: string | null;
  error: string | null;
  ads_on: boolean;
  desc: object[] | null;
};

export enum Types {
  UPLOAD = "UPLOAD",
  GET_PHOTOS = "GET_PHOTOS",
  UPLOAD_STATE = "UPLOAD_STATE",
  Error = "ERROR",
  Get_Desc = "GET_DESC",
}

type PhotoType = {
  isUploading: boolean;
  fromResponse: boolean;
  analysis: object | null;
  photos: object[] | null;
  photo: string | null;
  error: string | null;
	ads_on:boolean;
};

type PhotoPayload = {
  [Types.UPLOAD_STATE]: {
    isUploading: boolean;
  };
  [Types.UPLOAD]: {
    analysis: object;
    fromResponse: boolean;
    photo: string;
  };
  [Types.GET_PHOTOS]: {
    photos: object[];
  };
  [Types.Get_Desc]: {
    desc: object[];
  };
  [Types.Ads_Status]: {
    ads_on: boolean;
  };
  [Types.Error]: {
    error: object;
  };
};
export type PhotoActions = ActionMap<PhotoPayload>[keyof ActionMap<PhotoPayload>];

export const photoReducer = (
  state: PhotoType = initialPhotoState,
  action: PhotoActions
) => {
  switch (action.type) {
    case Types.UPLOAD:
      return {
        photo: action.payload.photo,
        analysis: action.payload.analysis,
        isUploading: false,
        fromResponse: action.payload.fromResponse,
      };
    case Types.GET_PHOTOS:
      return {
        ...state,
        photos: action.payload.photos,
        isUploading: false,
      };
    case Types.UPLOAD_STATE:
      return {
        isUploading: action.payload.isUploading,
      };
    case Types.Get_Desc:
      return {
        ...state,
        desc: action.payload.desc,
      };
    case Types.Error:
      return {
        error: action.payload.error,
        isUploading: false,
      };
    default:
      return state;
  }
};

const upload = (
  dispatch: Dispatch<Object | undefined>
) => async (
  analysis: object,
  photo: string,
  fromResponse: boolean
) => {
  console.log(photo,"PHOTO CONTEXT")
  return dispatch({
    type: Types.UPLOAD,
    payload: {
      photo,
      analysis,
      fromResponse,
    },
  });
};

const photos = (dispatch: Dispatch<Object>) => async (
  photos: object[]
) => {
  return dispatch({
    type: Types.GET_PHOTOS,
    payload: {
      photos,
    },
  });
};
const toggleAds = (dispatch: Dispatch<Object>) => async (
  ads_on: boolean
) => {
  return dispatch({
    type: Types.Ads_Status,
    payload: {
      ads_on,
    },
  });
};

const uploadState = (dispatch: Dispatch<Object>) => async (
  isUploading: boolean
) => {
  return dispatch({
    type: Types.UPLOAD_STATE,
    payload: {
      isUploading,
    },
  });
};
//api.face2yourself.com/api/config/?language=tr

const getDesc = (
  dispatch: Dispatch<Object>
) => async () => {
  const token = await AsyncStorage.getItem("userToken");

  const language = await AsyncStorage.getItem("lang");
  const lan = language?.slice(0, 2);
  const { response, error } = await fetchData(
    `${DESC}${lan}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      ...headerPhone,
      },
    }
  );

  if (!error) {
    // const resJSON = response.toJSON();
    // const res = response.map((lang, index) => {
    //   // console.log(lang, "FILTER");
    //   const { languages } = lang;
    //   if (languages == "tr") {
    //     // return lang;
    //     // if (index === 1) {
    //     console.log(lang, lan, "LANG");
    //   }
    // });
    // console.log(response, "PROFILE EDIT !ERROR");
    let vals = {};
    const res = response.map((lang) => {
      // lang.language === state.user.lang_code.slice(0, 2)
      if (lang.code.includes("_description")) {
        const code = lang.code.replace("_description", "");
        // (vals[code] = lang.value);
        return Object.assign(vals, {
          [code]: lang.value,
        });
      }
    });
    return dispatch({
      type: Types.Get_Desc,
      payload: {
        desc: vals,
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

const photoError = (dispatch: Dispatch<Object>) => async (
  error: object[]
) => {
  return dispatch({
    type: Types.Error,
    payload: {
      error: error,
    },
  });
};

export const { Provider, Context } = createDataContext(
  photoReducer,
  {
    upload,
    photos,
    toggleAds,
    uploadState,
    photoError,
    getDesc,
  },
  initialPhotoState
);
