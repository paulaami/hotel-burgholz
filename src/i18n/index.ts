// import { createI18n } from 'vue-i18n';
// import en from './en.json';
// import de from './de.json';

// // Type for language storage key
// type LanguageStorageKey = 'hotel-burgholz-language';

// // Available languages
// export const SUPPORTED_LANGUAGES = ['de', 'en'] as const;
// export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// // Storage key for saving language preference
// export const LANGUAGE_STORAGE_KEY: LanguageStorageKey = 'hotel-burgholz-language';

// // Get saved language from localStorage or use browser language, fall back to German
// export function getDefaultLanguage(): SupportedLanguage {
//   // Check localStorage first
//   const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as SupportedLanguage | null;
  
//   if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
//     return savedLanguage;
//   }
  
//   // Check browser language
//   const browserLanguage = navigator.language.split('-')[0] as SupportedLanguage;
  
//   // Use browser language if supported, otherwise default to German
//   return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : 'de';
// }

// // Create i18n instance
// export const i18n = createI18n({
//   legacy: false, // You must set `false`, to use Composition API
//   locale: getDefaultLanguage(),
//   fallbackLocale: 'de', // Default fallback language
//   messages: {
//     en,
//     de
//   }
// });

// // Function to change language
// export function setLanguage(lang: SupportedLanguage): void {
//   if (SUPPORTED_LANGUAGES.includes(lang)) {
//     localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
//     i18n.global.locale.value = lang;
//     document.querySelector('html')?.setAttribute('lang', lang);
//   }
// }