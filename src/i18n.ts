import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uk from "./locales/uk/translation.json";
import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import fr from "./locales/fr/translation.json";

const resources = {
  uk: {
    translation: uk,
  },
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uk",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
