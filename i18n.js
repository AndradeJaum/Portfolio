import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./public/locales/en.json";
import translationES from "./public/locales/es.json";
import translationPT from "./public/locales/pt.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  pt: {
    translation: translationPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
