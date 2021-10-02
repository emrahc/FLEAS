import axios from "axios";
import { PHOTO_COUNT } from "../constants/Api";

export const PhotoCount = async (token: string) => {
  try {
    const response = await axios.get(PHOTO_COUNT, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("PHOTO COUNT",response.data)
    return response.data;
  } catch (error) {
    return error;
  }
};
