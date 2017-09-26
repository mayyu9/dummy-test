import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

addLocaleData(localeData);

const messages = {
  "dummt-test-engine.dummp-test-app": "Succès",
  "dummt-test-engine.dummp-test-app-failed-to-load": "Erreur. Échec de chargement.",
  "dummt-test-engine.no-dummp-test-app": "Indisponible.",
  "Terra.ajax.error": "Échec du chargement du contenu."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'fr',
  messages,
};