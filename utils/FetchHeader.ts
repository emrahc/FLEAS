export const FetchHeader = async (
  url: string,
  method: string,
  token: string
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Token " + token);

  var requestOptions: {} = {
    method: method,
    headers: myHeaders,
    redirect: "follow",
  };
  console.log(requestOptions, "REQUEST OPTIONS");
  try {
    const res = await fetch(url, requestOptions);
    const json = await res.text();
    if (res.status < 300) {
      const response = { response: json, error: null };
      return response;
    } else {
      const response = { response: null, error: json };
      return response;
    }
  } catch (error) {
    const response = { response: null, error: error };
    return response;
  }
};
