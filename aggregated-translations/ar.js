import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/ar';

addLocaleData(localeData);

const messages = {
  "Terra.ajax.error": "This content failed to load."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'ar',
  messages,
};