import { Platform } from "react-native";

interface photo {
  object: {
    name: string;
    type: string;
    uri: string | Blob;
  };
}

export const createFormData = (photo: photo): FormData => {
  const data: FormData = new FormData();

  data.append("photo", {
    uri:
      Platform.OS === "android"
        ? photo.uri
        : photo.uri.replace("file://", ""),
    type: "image/jpeg",
    name: "image.jpg",
  });

  console.log(data);
  //   Object.keys(body).forEach((key) => {
  //     data.append(key, body[key]);
  //   });

  return data;
};
