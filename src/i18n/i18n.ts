import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { spanishTranslations } from "./translations/spanish";

const resources = { ...spanishTranslations };

i18n.use(initReactI18next).init({
  resources,
  lng: "sp",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
