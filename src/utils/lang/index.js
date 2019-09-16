import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import locales from 'constants/locales';
import { getStorage } from 'app/utils/storage';

const storage = getStorage('localStorage');

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: locales.EN,
    lng: storage.getItem('i18nextLng') || locales.EN,
    debug: process.env.DEBUG,
    backend: {
      loadPath: `${process.env.CDN_URL}/assets/locales/{{lng}}/{{ns}}.json`,
      allowMultiLoading: true
    },
    ns: [],
    defaultNS: [],
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
