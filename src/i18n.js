import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import gu from "./locales/gu.json";

const resources = {
    en: {
        translation: en,
    },
    gu: {
        translation: gu,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "gu", // default language is Gujarati
        fallbackLng: "gu",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
