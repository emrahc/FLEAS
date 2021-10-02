import AsyncStorage from "@react-native-async-storage/async-storage";
import { createFormData } from "./createFormData";
import { headerPhone } from "../constants/Platform";
export const useFetchImage = async (
  url: string,
  method: string,
  photo: ImageData,
  signal: AbortSignal
) => {
  console.log(photo);
  const data = createFormData(photo);
  const userToken = await AsyncStorage.getItem("userToken");
  var myHeaders = new Headers();
  myHeaders.append("content-type", "multipart/form-data");
  myHeaders.append("Authorization", `Token ${userToken}`);
  let headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    Authorization: `Token ${userToken}`,
    headerPhone,
  };
  var requestOptions = {
    method: method,
    headers,
    body: data,
    signal: signal,
  };

  try {
    const res = await fetch(url, requestOptions);

    if (res.status < 300) {
      console.log(res.status, "RES STATUS");
      const json = await res.json();
      const response = { response: json, error: null };
      return response;
    } else {
      console.log(res.status, "RES STATUS");
      const json = await res.json();
      const response = { response: null, error: json };
      return response;
    }
  } catch (error) {
    console.log(error, "ERROR");
    const response = { response: null, error: error };
    return response;
  }
};
