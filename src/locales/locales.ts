// eslint-disable-next-line import/no-named-as-default
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import appConfig from '@/configs/app.config';
import en from './lang/en.json';
import uz from './lang/uz.json';
import errEn from './lang/errors/en.json';
import errUz from './lang/errors/uz.json';

const resources = {
  en: {
    translation: { ...en, ...errEn },
  },
  uz: {
    translation: { ...uz, ...errUz },
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: appConfig.locale,
  lng: appConfig.locale,
  interpolation: {
    escapeValue: false,
  },
});

export const dateLocales: {
  [key: string]: () => Promise<ILocale>;
} = {
  en: () => import('dayjs/locale/en'),
  uz: () => import('dayjs/locale/uz'),
};

export default i18n;
