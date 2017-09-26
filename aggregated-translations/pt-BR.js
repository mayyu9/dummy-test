import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  "Terra.ajax.error": "This content failed to load."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'pt-BR',
  messages,
};