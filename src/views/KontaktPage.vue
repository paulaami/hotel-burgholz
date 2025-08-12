<template>
	<div class="kontakt-page">
		<!-- Hero section with background image -->
		<section class="hero-section fullwidth-section">
			<!-- Navigation arrows for slider functionality -->
			<!-- <button class="slider-arrow slider-arrow-left">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			</button> -->
			<!-- <button class="slider-arrow slider-arrow-right">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</button> -->

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
							<a href="tel:07803 93480" class="contact-phone">07803 93480</a>
							<a
								href="mailto:info@hotelburgholz-gengenbach.de"
								class="contact-email"
								>info@hotelburgholz-gengenbach.de</a
							>
						</div>
					</div>
				</div>

				<div class="contact-form-container">
					<form class="contact-form" @submit.prevent="submitForm">
						<h3>Persönliche Daten</h3>

						<div class="form-group">
							<label for="salutation">Anrede</label>
							<select id="salutation" v-model="formData.salutation" required>
								<option value="" disabled selected>Bitte auswählen</option>
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
								/>
							</div>

							<div class="form-group">
								<label for="lastName">Nachname *</label>
								<input
									type="text"
									id="lastName"
									v-model="formData.lastName"
									required
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
								/>
							</div>

							<div class="form-group">
								<label for="phone">Telefon</label>
								<input type="tel" id="phone" v-model="formData.phone" />
							</div>
						</div>

						<div class="form-group">
							<label for="message">Ihre Nachricht an uns</label>
							<textarea
								id="message"
								v-model="formData.message"
								rows="5"
							></textarea>
						</div>

						<div class="form-group">
							<label for="antiSpam">Anti-Spam *</label>
							<input
								type="text"
								id="antiSpam"
								v-model="formData.antiSpam"
								required
							/>
							<div class="captcha">
								<img
									src="https://via.placeholder.com/150x50?text=CAPTCHA"
									alt="Captcha"
								/>
							</div>
						</div>

						<div class="form-group privacy">
							<h4>Datenschutz</h4>
							<p>
								Wir verarbeiten Ihre Daten ausschließlich zur Bearbeitung Ihres
								Anliegens. Weitere Informationen zum Umgang mit
								personenbezogenen Daten finden Sie <a href="#">hier</a>.
							</p>
						</div>

						<div class="form-submit">
							<button type="submit" class="submit-button">
								NACHRICHT SENDEN
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
						<p>
							Das Hotel Burgholz liegt eingebettet in die idyllische Landschaft
							des Mittleren Schwarzwaldes, nur wenige Minuten vom historischen
							Stadtkern Gengenbachs entfernt.
						</p>

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
							<a href="#" class="social-link facebook">FACEBOOK</a>
							<a href="#" class="social-link instagram">INSTAGRAM</a>
						</div>
					</div>
				</div>
			</ContentContainer>
		</section>

		<!-- Google Maps section -->
		<section class="maps-section">
			<div class="google-map">
				<!-- <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1231113946346!2d6.518232415915539!3d50.47714617947849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf5c7e6f5c5e3d%3A0x31e43d7fb9d8a3c2!2sHotel%20Burgholz!5e0!3m2!1sen!2spl!4v1634913215698!5m2!1sen!2spl" 
          width="100%" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe> -->
				<iframe
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
import { ref } from "vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";

// Form data
const formData = ref({
	salutation: "",
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	message: "",
	antiSpam: "",
});

// Form submission
const submitForm = () => {
	// Form validation and submission logic would go here
	console.log("Form submitted:", formData.value);

	// Reset form after submission
	formData.value = {
		salutation: "",
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
		antiSpam: "",
	};

	// Show success message or handle response
	alert(
		"Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden."
	);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

// .kontakt-page {
// 	padding-top: 80px; // Account for fixed header
// }

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
