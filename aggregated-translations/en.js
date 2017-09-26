import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  "dummt-test-engine.dummp-test-app": "Success.",
  "dummt-test-engine.dummp-test-app-failed-to-load": "Error! Failed to load.",
  "dummt-test-engine.no-dummp-test-app": "Not available.",
  "Terra.ajax.error": "This content failed to load."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'en',
  messages,
};