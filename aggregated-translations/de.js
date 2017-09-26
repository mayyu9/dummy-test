import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/de';

addLocaleData(localeData);

const messages = {
  "dummt-test-engine.dummp-test-app": "Erfolg.",
  "dummt-test-engine.dummp-test-app-failed-to-load": "Fehler. Ladevorgang fehlgeschlagen.",
  "dummt-test-engine.no-dummp-test-app": "Nicht verfügbar.",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'de',
  messages,
};