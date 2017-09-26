import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {
  "dummt-test-engine.dummp-test-app": "Éxito",
  "dummt-test-engine.dummp-test-app-failed-to-load": "Error. Error al cargar.",
  "dummt-test-engine.no-dummp-test-app": "No disponible",
  "Terra.ajax.error": "Error al cargar el contenido."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'es',
  messages,
};