// import { type App, type Plugin } from 'vue';
// import type { Router } from 'vue-router';
// import { setLanguage, type SupportedLanguage } from '@/i18n';

// interface I18nRoutePluginOptions {
//   router: Router;
//   i18n: any; // Use any to avoid type complications
// }

// // Create the plugin
// const i18nRoutePlugin: Plugin = {
//   install: (app: App, options: I18nRoutePluginOptions) => {
//     const { router, i18n } = options;

//     // Watch for route changes to update the language
//     router.beforeEach((to, from, next) => {
//       // Get locale from route params
//       const locale = to.params.locale as SupportedLanguage;
      
//       if (locale && locale !== i18n.global.locale.value) {
//         // Set language in i18n and localStorage
//         setLanguage(locale);
//       }
      
//       next();
//     });
//   }
// };

// export default i18nRoutePlugin;