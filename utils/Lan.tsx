import memoize from "lodash.memoize"; // Use for caching/memoize for better performance
import i18n from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const translationGetters = {
  "de-DE": (): JSON =>
    require("../assets/languages/de.json"),
  "en-US": (): JSON =>
    require("../assets/languages/en.json"),
  "es-ES": (): JSON =>
    require("../assets/languages/es.json"),
  "fr-FR": (): JSON =>
    require("../assets/languages/fr.json"),
  "it-IT": (): JSON =>
    require("../assets/languages/it.json"),
  "no-NO": (): JSON =>
    require("../assets/languages/no.json"),
  "pt-PT": (): JSON =>
    require("../assets/languages/pt.json"),
  "ru-RU": (): JSON =>
    require("../assets/languages/ru.json"),
  "sv-SV": (): JSON =>
    require("../assets/languages/sv.json"),
  "tr-TR": (): JSON =>
    require("../assets/languages/tr.json"),
};

export const L = memoize(
  (key, config) =>
    i18n.t(key, config).includes("missing")
      ? key
      : i18n.t(key, config),
  (key, config) =>
    config ? key + JSON.stringify(config) : key
);
export const init = async () => {
  // let localeLanguageTag = Localization.locale;
  // let localeLanguageTag = "tr-TR";

  const localeLanguageTag = await AsyncStorage.getItem(
    "lang"
  );
  console.log(localeLanguageTag, "LOCALE LANGUAGE INIT");
  // update layout direction
  L.cache.clear();
  // set i18n-js config
  if (!translationGetters[localeLanguageTag]) {
    i18n.translations = {
      [localeLanguageTag]: translationGetters["en-US"](),
    };
  } else {
    i18n.translations = {
      [localeLanguageTag]: translationGetters[
        localeLanguageTag
      ](),
    };
  }

  i18n.locale = localeLanguageTag;
};
