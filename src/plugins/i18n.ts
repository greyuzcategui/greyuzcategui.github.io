import { createI18n } from 'vue-i18n'
import es from '../i18n/locales/es.json'
import en from '../i18n/locales/en.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})

export default i18n
