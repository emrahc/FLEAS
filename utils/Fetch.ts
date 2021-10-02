export const fetchData = async (
  url: string,
  options: object
) => {
  return fetchHandler(url, options);
};

const fetchHandler = async (
  url: string,
  options: object
) => {
  const res = await fetch(url, options);
  const json = await res.json();
  if (res.status < 300) {
    const response = { response: json, error: null };
    return response;
  } else {
    const response = { response: null, error: json };
    return response;
  }
};
