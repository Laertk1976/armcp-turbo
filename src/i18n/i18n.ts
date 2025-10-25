import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import am from "../locales/am.json";
import en from "../locales/en.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { translation: en },
      am: { translation: am },
  },
  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
});

export default i18n;
