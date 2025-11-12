// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";

// Import Cookie Consent
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
// import "./cookieconsent-custom.css";
import { cookieConsentConfig } from "./cookieconsent-config";

// Inicjalizuj Cookie Consent
CookieConsent.run(cookieConsentConfig);

const app = createApp(App);
app.use(router);
app.mount("#app");
