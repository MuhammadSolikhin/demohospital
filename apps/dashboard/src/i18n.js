import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './data/locales/en.json';
import id from './data/locales/id.json';

const lng = localStorage.getItem('language') || 'en';
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            id: { translation: id },
        },
        lng,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
