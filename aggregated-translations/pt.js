import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  "dummt-test-engine.dummp-test-app": "Sucesso",
  "dummt-test-engine.dummp-test-app-failed-to-load": "Erro! Falha ao carregar.",
  "dummt-test-engine.no-dummp-test-app": "Nãs disponível",
  "Terra.ajax.error": "Falha ao carregar conteúdo."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'pt',
  messages,
};