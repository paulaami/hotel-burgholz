<template>
	<div class="kontakt-page">
		<!-- Hero section with background image -->
		<section class="hero-section fullwidth-section">
			<!-- Hero content -->
			<div class="hero-content">
				<ContentContainer>
					<h1 class="hero-title">KONTAKT</h1>
					<p class="hero-subtitle">Wir freuen uns auf Ihre Nachricht</p>
				</ContentContainer>
			</div>
		</section>

		<!-- Contact form section -->
		<section class="contact-section">
			<ContentContainer>
				<div class="contact-intro">
					<p class="contact-subtitle">Fragen, Wünsche, Anregungen</p>
					<h2 class="contact-title">KONTAKTIEREN SIE UNS</h2>

					<div class="contact-info">
						<p>
							Haben Sie Fragen zu Ihrem Aufenthalt oder möchten Sie eine Anfrage
							stellen?
						</p>
						<p>
							Das Rezeptionsteam ist immer von Montag bis Sonntag zwischen 9 und
							18 Uhr für Sie da! Ob per Telefon, E-Mail oder über unser
							Kontaktformular – zögern Sie nicht, uns zu kontaktieren. Wir
							freuen uns darauf, Ihnen weiterzuhelfen.
						</p>

						<div class="contact-direct">
							<a href="tel:+4924215589200" class="contact-phone"
								>+49 (0) 2421 558 92 00</a
							>
							<a href="tel:+4917623896507" class="contact-phone"
								>+49 (0) 176 238 965 07</a
							>
							<a href="mailto:kontakt@hotel-burgholz.de" class="contact-email"
								>kontakt@hotel-burgholz.de</a
							>
							<a
								href="mailto:reservierung@hotel-burgholz.de"
								class="contact-email"
								>reservierung@hotel-burgholz.de</a
							>
						</div>
					</div>
				</div>

				<div class="contact-form-container">
					<!-- Success Message -->
					<div v-if="showSuccessMessage" class="success-message">
						<p>
							✓ Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie
							möglich bei Ihnen melden.
						</p>
					</div>

					<!-- Error Message -->
					<div v-if="showErrorMessage" class="error-message">
						<p>❌ {{ errorMessage }}</p>
					</div>

					<form class="contact-form" @submit.prevent="submitForm">
						<h3>Persönliche Daten</h3>

						<div class="form-group">
							<label for="salutation">Anrede *</label>
							<select
								id="salutation"
								v-model="formData.salutation"
								required
								:disabled="isSubmitting"
							>
								<option value="" disabled>Bitte auswählen</option>
								<option value="Herr">Herr</option>
								<option value="Frau">Frau</option>
								<option value="Divers">Divers</option>
							</select>
						</div>

						<div class="form-row">
							<div class="form-group">
								<label for="firstName">Vorname *</label>
								<input
									type="text"
									id="firstName"
									v-model="formData.firstName"
									required
									:disabled="isSubmitting"
								/>
							</div>

							<div class="form-group">
								<label for="lastName">Nachname *</label>
								<input
									type="text"
									id="lastName"
									v-model="formData.lastName"
									required
									:disabled="isSubmitting"
								/>
							</div>
						</div>

						<div class="form-row">
							<div class="form-group">
								<label for="email">E-Mail *</label>
								<input
									type="email"
									id="email"
									v-model="formData.email"
									required
									:disabled="isSubmitting"
								/>
							</div>

							<div class="form-group">
								<label for="phone">Telefon</label>
								<input
									type="tel"
									id="phone"
									v-model="formData.phone"
									:disabled="isSubmitting"
								/>
							</div>
						</div>

						<div class="form-group">
							<label for="message">Ihre Nachricht an uns</label>
							<textarea
								id="message"
								v-model="formData.message"
								rows="5"
								:disabled="isSubmitting"
							></textarea>
						</div>

						<div class="form-group privacy">
							<h4>Datenschutz</h4>
							<p>
								Wir verarbeiten Ihre Daten ausschließlich zur Bearbeitung Ihres
								Anliegens. Weitere Informationen zum Umgang mit
								personenbezogenen Daten finden Sie
								<a href="/hotel/datenschutz">hier</a>.
							</p>
						</div>

						<div class="form-submit">
							<button
								type="submit"
								class="submit-button"
								:disabled="isSubmitting"
							>
								{{ isSubmitting ? "WIRD GESENDET..." : "NACHRICHT SENDEN" }}
							</button>
						</div>
					</form>
				</div>
			</ContentContainer>
		</section>

		<!-- Location and Social Media section -->
		<section class="location-social-section">
			<ContentContainer>
				<div class="location-social-grid">
					<div class="location-info">
						<h3 class="section-title">Unser Standort</h3>

						<div class="hotel-address">
							<p><strong>Hotel Burgholz</strong></p>
							<p>Am Burgholz 27</p>
							<p>52372 Kreuzau</p>
						</div>
					</div>

					<div class="social-media">
						<h3 class="section-title">Social Media</h3>
						<p>
							Folgen Sie uns auf unseren Social-Media-Kanälen und bleiben Sie
							immer auf dem Laufenden:
						</p>

						<div class="social-links">
							<a
								href="https://facebook.com/HotelBurgholz"
								class="social-link facebook"
								>FACEBOOK</a
							>
							<a
								href="https://www.instagram.com/hotel_burgholz"
								class="social-link instagram"
								>INSTAGRAM</a
							>
						</div>
					</div>
				</div>
			</ContentContainer>
		</section>

		<!-- Google Maps section -->
		<section class="maps-section">
			<div class="google-map">
				<div v-if="!mapsConsent" class="cookie-placeholder">
					<p>
						Um die Karte anzuzeigen, müssen Sie der Verwendung von Google Maps
						zustimmen.
					</p>
					<button
						type="button"
						class="cookie-button"
						@click="showCookieSettings"
					>
						Einstellungen anpassen
					</button>
				</div>
				<iframe
					v-else
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.705187831916!2d6.515752912840198!3d50.762499971535256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf69449c1dc9d1%3A0x17d88a71fc414150!2sHotel%20Burgholz!5e0!3m2!1sen!2spl!4v1744478972891!5m2!1sen!2spl"
					width="100%"
					height="450"
					style="border: 0"
					allowfullscreen="true"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";
import * as CookieConsent from "vanilla-cookieconsent";
import { useSEO } from "@/composables/useSEO";

useSEO({
	title: "Kontakt | Hotel Burgholz Kreuzau - Jetzt anfragen",
	description:
		"Kontaktieren Sie Hotel Burgholz in Kreuzau. Tel: +49 2421 558 92 00 | Email: kontakt@hotel-burgholz.de | Rezeption Mo-So 9-18 Uhr.",
	keywords:
		"Hotel Burgholz Kontakt, Hotel Kreuzau Telefon, Hotel Düren Reservierung",
	canonical: "https://hotel-burgholz.de/kontakt",
	ogType: "website",
});

// Form data
const formData = ref({
	salutation: "",
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	message: "",
});

// Form state
const isSubmitting = ref(false);
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const errorMessage = ref("");

// Google Maps consent state
const mapsConsent = ref(false);

// Check consent status
const checkConsent = () => {
	const cookie = CookieConsent.getCookie();
	mapsConsent.value = cookie?.categories?.includes("functionality") || false;
};

// Show Cookie Consent settings
const showCookieSettings = () => {
	CookieConsent.showPreferences();

	// Poll consent status while modal is open
	const intervalId = setInterval(() => {
		checkConsent();
	}, 300);

	// Stop checking after 10 seconds
	setTimeout(() => {
		clearInterval(intervalId);
	}, 10000);
};

// Check consent on mount and listen for changes
onMounted(() => {
	checkConsent();

	// Listen for ALL consent-related events
	window.addEventListener("cc:onConsent", () => {
		setTimeout(checkConsent, 100);
	});
	window.addEventListener("cc:onChange", () => {
		setTimeout(checkConsent, 100);
	});
	window.addEventListener("cc:onModalHide", () => {
		setTimeout(checkConsent, 200);
	});
	window.addEventListener("cc:onFirstConsent", () => {
		setTimeout(checkConsent, 100);
	});
});

// Form submission
const submitForm = async () => {
	// Reset messages
	showSuccessMessage.value = false;
	showErrorMessage.value = false;
	errorMessage.value = "";
	isSubmitting.value = true;

	try {
		// Dla głównej domeny hotel-burgholz.de
		const response = await fetch("/send-email.php", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData.value),
		});

		const result = await response.json();

		if (response.ok && result.success) {
			// Success!
			showSuccessMessage.value = true;

			// Reset form
			formData.value = {
				salutation: "",
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: "",
			};

			// Hide success message after 5 seconds
			setTimeout(() => {
				showSuccessMessage.value = false;
			}, 5000);
		} else {
			// Error from server
			showErrorMessage.value = true;
			errorMessage.value =
				result.message || "Es gab ein Problem beim Senden Ihrer Nachricht.";
		}
	} catch (error) {
		// Network or other error
		console.error("Form submission error:", error);
		showErrorMessage.value = true;
		errorMessage.value =
			"Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.";
	} finally {
		isSubmitting.value = false;
	}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

/* Success and Error Messages */
.success-message,
.error-message {
	padding: 1rem;
	margin-bottom: 1.5rem;
	border-radius: 4px;
	font-weight: 500;
}

.success-message {
	background-color: #d4edda;
	border: 1px solid #c3e6cb;
	color: #155724;
}

.error-message {
	background-color: #f8d7da;
	border: 1px solid #f5c6cb;
	color: #721c24;
}

/* Disabled state for form elements */
.form-group input:disabled,
.form-group select:disabled,
.form-group textarea:disabled,
.submit-button:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}

/* Cookie placeholder dla Google Maps */
.cookie-placeholder {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 450px;
	background-color: #f5f5f5;
	padding: 2rem;
	text-align: center;
}

.cookie-placeholder p {
	margin-bottom: 1rem;
	color: #333;
	font-size: 1rem;
}

.cookie-button {
	background-color: #8b7355;
	color: white;
	padding: 0.75rem 1.5rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1rem;
	transition: background-color 0.3s;
}

.cookie-button:hover {
	background-color: #6d5a44;
}

// Hero section styles
.hero-section {
	position: relative;
	width: 100%;
	height: 60vh;
	min-height: 400px;
	background-image: url("@/assets/images/Hotel Burgholz_Uschi Kitschke Fotografie-150.jpg");
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: $color-white;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		width: 100%;

		.hero-title {
			font-size: $font-size-hero;
			font-weight: 500;
			letter-spacing: 0.1em;
			margin: 0 0 $spacing-sm 0;
		}

		.hero-subtitle {
			font-size: $font-size-large;
			font-weight: 300;
			margin: 0;
		}
	}

	.slider-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: rgba(128, 128, 128, 0.5);
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		transition: background-color $transition-speed ease;
		z-index: 2;

		&:hover {
			background-color: rgba(128, 128, 128, 0.7);
		}

		&-left {
			left: 20px;
		}

		&-right {
			right: 20px;
		}

		svg {
			width: 20px;
			height: 20px;
		}
	}
}

// Contact section styles
.contact-section {
	padding: $spacing-section 0;
	background-color: $color-white;

	.contact-intro {
		margin-bottom: $spacing-xxl;
	}

	.contact-subtitle {
		font-size: $font-size-base;
		color: $color-primary;
		margin: 0 0 $spacing-xs 0;
	}

	.contact-title {
		font-size: 32px;
		color: $color-text-dark;
		margin: 0 0 $spacing-xl 0;
		font-weight: 500;
	}

	.contact-info {
		max-width: 800px;
		// margin: 0 auto;

		p {
			margin-bottom: $spacing-md;
			line-height: 1.7;
			color: $color-text-light;
		}
	}

	.contact-direct {
		margin-top: $spacing-xl;
		display: flex;
		flex-direction: column;
		gap: $spacing-sm;

		.contact-phone,
		.contact-email {
			color: $color-primary;
			text-decoration: none;
			font-weight: 500;
			transition: color $transition-speed ease;

			&:hover {
				color: darken($color-primary, 10%);
			}
		}
	}
}

// Contact form styles
.contact-form-container {
	max-width: 800px;
	margin: 0 auto;
}

.contact-form {
	background-color: $color-white;
	padding: $spacing-xl 0;

	h3 {
		font-size: $font-size-large;
		color: $color-text-dark;
		margin: 0 0 $spacing-xl 0;
		font-weight: 500;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: $spacing-md;

		@include responsive(md) {
			grid-template-columns: 1fr;
		}
	}

	.form-group {
		margin-bottom: $spacing-md;

		label {
			display: block;
			margin-bottom: $spacing-xs;
			color: $color-text-dark;
		}

		input,
		select,
		textarea {
			width: 100%;
			padding: $spacing-sm $spacing-md;
			border: 1px solid #ddd;
			border-radius: 4px;
			font-size: $font-size-base;

			&:focus {
				border-color: $color-primary;
				outline: none;
			}
		}

		textarea {
			resize: vertical;
		}
	}

	.captcha {
		margin-top: $spacing-sm;
	}

	.privacy {
		margin-top: $spacing-xl;

		h4 {
			font-size: $font-size-medium;
			margin: 0 0 $spacing-sm 0;
			color: $color-text-dark;
		}

		p {
			font-size: $font-size-small;
			color: $color-text-light;

			a {
				color: $color-primary;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.form-submit {
		margin-top: $spacing-xl;

		.submit-button {
			background-color: $color-primary;
			color: $color-white;
			border: none;
			padding: $spacing-sm $spacing-xl;
			font-size: $font-size-base;
			font-weight: 500;
			cursor: pointer;
			transition: background-color $transition-speed ease;

			&:hover {
				background-color: darken($color-primary, 10%);
			}
		}
	}
}

// Location and Social Media section
.location-social-section {
	padding: $spacing-section 0;
	background-color: $color-background-light;

	.location-social-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: $spacing-xxl;

		@include responsive(md) {
			grid-template-columns: 1fr;
			gap: $spacing-xl;
		}
	}

	.section-title {
		font-size: $font-size-xl;
		color: $color-text-dark;
		margin: 0 0 $spacing-md 0;
		font-weight: 400;
	}

	.location-info,
	.social-media {
		p {
			margin-bottom: $spacing-md;
			line-height: 1.7;
			color: $color-text-light;
		}
	}

	.hotel-address {
		margin-top: $spacing-lg;

		p {
			margin-bottom: $spacing-xs;
		}
	}

	.social-links {
		display: flex;
		gap: $spacing-md;
		margin-top: $spacing-lg;

		@include responsive(sm) {
			flex-direction: column;
			gap: $spacing-sm;
		}

		.social-link {
			display: inline-block;
			padding: $spacing-sm $spacing-md;
			color: $color-primary;
			border: 1px solid $color-primary;
			text-decoration: none;
			font-size: $font-size-small;
			letter-spacing: 0.1em;
			transition: all $transition-speed ease;

			&:hover {
				background-color: $color-primary;
				color: $color-white;
			}
		}
	}
}

// Google Maps section
.maps-section {
	width: 100%;
	height: 450px;

	.google-map {
		width: 100%;
		height: 100%;

		iframe {
			display: block;
		}
	}
}

// Responsive styles
@include responsive(lg) {
	.hero-section {
		.hero-title {
			font-size: 32px;
		}

		.hero-subtitle {
			font-size: $font-size-medium;
		}
	}

	.contact-section {
		.contact-title {
			font-size: 28px;
		}
	}
}

@include responsive(md) {
	.hero-section {
		min-height: 350px;
	}

	.contact-form {
		.form-row {
			grid-template-columns: 1fr;
		}
	}
}

@include responsive(sm) {
	.hero-section {
		min-height: 300px;

		.hero-title {
			font-size: 28px;
		}

		.hero-subtitle {
			font-size: $font-size-base;
		}

		.slider-arrow {
			width: 35px;
			height: 35px;

			svg {
				width: 16px;
				height: 16px;
			}
		}
	}

	.contact-section {
		.contact-title {
			font-size: 24px;
		}

		.contact-direct {
			align-items: flex-start;
		}
	}

	.maps-section {
		height: 350px;
	}
}
</style>
