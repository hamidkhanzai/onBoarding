// @flow
import I18n from 'react-native-i18n';

import en from './locales/en';
import de from './locales/de';

/* eslint-disable immutable/no-mutation */
I18n.fallbacks = true;
I18n.defaultLocale = 'en';
I18n.translations = {
  en: en,
  de: de,
};

export default I18n;
