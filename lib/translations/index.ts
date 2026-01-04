import { Language, Translations } from '../i18n';
import { en } from './en';
import { pt } from './pt';

export const translations: Record<Language, Translations> = {
  en,
  pt,
};

export function getTranslations(language: Language): Translations {
  return translations[language] || translations.en;
}