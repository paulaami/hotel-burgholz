// Cookie Consent Configuration for Hotel Burgholz
import type { CookieConsentConfig } from "vanilla-cookieconsent";

export const cookieConsentConfig: CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: "box inline",
			position: "bottom right",
			equalWeightButtons: true,
			flipButtons: false,
		},
		preferencesModal: {
			layout: "box",
			position: "right",
			equalWeightButtons: true,
			flipButtons: false,
		},
	},

	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		functionality: {},
		analytics: {},
		marketing: {},
	},

	language: {
		default: "de",
		autoDetect: "browser",
		translations: {
			de: {
				consentModal: {
					title: "Wir verwenden Cookies",
					description:
						"Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Sie können Ihre Einwilligung jederzeit ändern oder widerrufen.",
					acceptAllBtn: "Alle akzeptieren",
					acceptNecessaryBtn: "Nur notwendige",
					showPreferencesBtn: "Einstellungen",
					footer: `
            <a href="/datenschutz">Datenschutzerklärung</a>
            <a href="/impressum">Impressum</a>
          `,
				},
				preferencesModal: {
					title: "Cookie-Einstellungen",
					acceptAllBtn: "Alle akzeptieren",
					acceptNecessaryBtn: "Nur notwendige",
					savePreferencesBtn: "Auswahl speichern",
					closeIconLabel: "Schließen",
					serviceCounterLabel: "Service|Services",
					sections: [
						{
							title: "Cookie-Nutzung",
							description:
								"Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter.",
						},
						{
							title:
								'Notwendige Cookies <span class="pm__badge">Immer aktiviert</span>',
							description:
								"Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen vorgenommene Aktionen gesetzt, die einer Anforderung von Diensten gleichkommen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen.",
							linkedCategory: "necessary",
						},
						{
							title: "Funktionale Cookies",
							description:
								"Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.",
							linkedCategory: "functionality",
							cookieTable: {
								headers: {
									name: "Cookie",
									domain: "Domain",
									description: "Beschreibung",
									expiration: "Ablauf",
								},
								body: [
									{
										name: "google_maps_consent",
										domain: "hotel-burgholz.de",
										description: "Speichert die Zustimmung für Google Maps",
										expiration: "6 Monate",
									},
								],
							},
						},
						{
							title: "Mehr Informationen",
							description:
								'Bei Fragen zu unseren Richtlinien bezüglich Cookies und Ihren Auswahlmöglichkeiten wenden Sie sich bitte an uns über unsere <a class="cc__link" href="/kontakt">Kontaktseite</a>.',
						},
					],
				},
			},
		},
	},
};
