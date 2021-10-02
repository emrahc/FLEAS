interface photoError {
  error: {
    abortError: string;
    detail: string;
  };
  kickout: () => undefined;
  navigation: () => undefined;
}

export const photoError = (
  error,
  kickout,
  navigation
): photoError => {
  if (error.name === "AbortError") {
    console.log(error.AbortError, " PHOTO UPLOAD ERROR");
    return;
  } else if (
    error.detail ===
    "Authentication credentials were not provided."
  ) {
    kickout();
    return alert(JSON.stringify(error.detail));
  } else {
    navigation.navigate("PhotoAnalyzing");
  }
};
