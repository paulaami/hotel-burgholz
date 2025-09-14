<template>
	<div class="data-page">
		<!-- Hero section with privacy policy background -->
		<section class="hero-section fullwidth-section">
			<!-- Hero content - privacy policy message -->
			<div class="hero-content">
				<ContentContainer>
					<h1 class="hero-title">Impressum</h1>
				</ContentContainer>
			</div>
		</section>

		<!-- Description section -->
		<section class="privacy-description">
			<ContentContainer>
				<div class="description-content">
					<div class="description-text">
						<h1>Impressum</h1>
						<h2 id="m46">Diensteanbieter</h2>
						<p>Hotel Burgholz</p>
						<p>Daniel Rabenda</p>
						<p>Am Burgholz 27</p>
						<p>52372 Kreuzau-Stockheim</p>

						<h2 id="m56">Kontaktm&ouml;glichkeiten</h2>
						<p>E-Mail-Adresse: kontakt@hotel-burgholz.de</p>
						<p>Telefon: +49(0)2421/55890200</p>
						<p>Fax: +49(0)2421/5589210</p>
						<p>Kontaktformular: kontakt@hotel-burgholz.de</p>
						<p>Weitere Kontaktm&ouml;glichkeiten: +4917623896507</p>

						<h2 id="m153">Vertretungsberechtigte Personen</h2>
						<p>Vertretungsberechtigt: Inhaber Daniel Rabenda</p>

						<h2 id="m154">Journalistisch-redaktionelle Angebote</h2>
						<p>Inhaltlich verantwortlich: Adresse wie oben</p>

						<h2 id="m3589">Audiovisuelle Mediendienste</h2>
						<p>Sitzland: Deutschland.</p>

						<h2 id="m58">Angaben zum Unternehmen</h2>
						<p>Umsatzsteuer Identifikationsnummer (USt-ID): DE353725220</p>
						<p>Gesch&auml;ftsbereich: Hotel</p>

						<h2 id="m72">Berufshaftpflichtversicherung</h2>
						<p>
							AXA Versicherung AG<br />Colonia-Allee 10-20<br />51067 K&ouml;ln
						</p>
						<p>R&auml;umliche Geltung: Deutschland</p>

						<h2 id="m174">Verbraucherstreitbeilegung</h2>
						<p>
							Wir sind nicht bereit und nicht verpflichtet an einem
							Streitbeilegungsverfahren vor einer
							Verbraucherstreitschlichtungsstelle teilzunehmen.
						</p>

						<h2 id="m172">Social Media und andere Onlinepr&auml;senzen</h2>
						<p>
							Dieses Impressum gilt auch f&uuml;r die folgenden
							Social-Media-Pr&auml;senzen und Onlineprofile:
						</p>
						<p>
							<a href="https://facebook.com/HotelBurgholz" target="_blank"
								>https://facebook.com/HotelBurgholz</a
							>
						</p>
						<p>
							<a href="https://instagram.com/hotel_burgholz" target="_blank"
								>https://instagram.com/hotel_burgholz</a
							>
						</p>

						<h2 id="m65">Haftungs- und Schutzrechtshinweise</h2>
						<p>
							Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden
							sorgf&auml;ltig und nach unserem aktuellen Kenntnisstand erstellt,
							dienen jedoch nur der Information und entfalten keine rechtlich
							bindende Wirkung, sofern es sich nicht um gesetzlich
							verpflichtende Informationen (z. B. das Impressum, die
							Datenschutzerkl&auml;rung, AGB oder verpflichtende Belehrungen von
							Verbrauchern) handelt. Wir behalten uns vor, die Inhalte
							vollst&auml;ndig oder teilweise zu &auml;ndern oder zu
							l&ouml;schen, soweit vertragliche Verpflichtungen unber&uuml;hrt
							bleiben. Alle Angebote sind freibleibend und unverbindlich.
						</p>
						<p>
							Links auf fremde Webseiten: Die Inhalte fremder Webseiten, auf die
							wir direkt oder indirekt verweisen, liegen au&szlig;erhalb unseres
							Verantwortungsbereiches und wir machen sie uns nicht zu Eigen.
							F&uuml;r alle Inhalte und Nachteile, die aus der Nutzung der in
							den verlinkten Webseiten aufrufbaren Informationen entstehen,
							&uuml;bernehmen wir keine Verantwortung.
						</p>
						<p>
							Urheberrechte und Markenrechte: Alle auf dieser Website
							dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken
							und Warenzeichen sind durch die jeweiligen Schutzrechte
							(Urheberrechte, Markenrechte) gesch&uuml;tzt. Die Verwendung,
							Vervielf&auml;ltigung usw. unterliegen unseren Rechten oder den
							Rechten der jeweiligen Urheber bzw. Rechteinhaber.
						</p>
						<p>
							Hinweise auf Rechtsverst&ouml;&szlig;e: Sollten Sie innerhalb
							unseres Internetauftritts Rechtsverst&ouml;&szlig;e bemerken,
							bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige
							Inhalte und Links nach Kenntnisnahme unverz&uuml;glich entfernen.
						</p>

						<p class="seal">
							<a
								href="https://datenschutz-generator.de/"
								title="Rechtstext von Dr. Schwenke - f&uuml;r weitere Informationen bitte anklicken."
								target="_blank"
								rel="noopener noreferrer nofollow"
								><img
									src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-doc-de.png"
									alt="Rechtstext von Dr. Schwenke - f&uuml;r weitere Informationen bitte anklicken."
									width="250"
									height="250"
							/></a>
						</p>
					</div>
				</div>
			</ContentContainer>
		</section>
	</div>
</template>

<script setup lang="ts">
import ContentContainer from "@/components/layout/ContentContainer.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

// Hero section styles
.hero-section {
	position: relative;
	width: 100%;
	height: 60vh;
	min-height: 400px;
	background-image: url("@/assets/images/datenschutz_hotel_burgholz.jpg");
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
	}
}

// Privacy policy content section
.privacy-description {
	padding: $spacing-section 0;
	background-color: $color-white;
}

.description-content {
	display: grid;
	grid-template-columns: 1fr;
	gap: $spacing-xxl;
}

.description-text {
	h1 {
		font-size: 36px;
		color: $color-text-dark;
		margin: 0 0 $spacing-xl 0;
		font-weight: 500;
	}

	h2 {
		font-size: 28px;
		color: $color-text-dark;
		margin: $spacing-xl 0 $spacing-lg 0;
		font-weight: 500;
	}

	h3 {
		font-size: 22px;
		color: $color-text-dark;
		margin: $spacing-lg 0 $spacing-md 0;
		font-weight: 500;
	}

	p {
		color: $color-text-light;
		line-height: 1.7;
		margin-bottom: $spacing-lg;

		&:last-child {
			margin-bottom: 0;
		}
	}

	ul {
		color: $color-text-light;
		line-height: 1.7;
		margin: $spacing-lg 0;
		padding-left: $spacing-lg;

		li {
			margin-bottom: $spacing-sm;
		}
	}

	.index {
		background-color: $color-background-light;
		padding: $spacing-lg;
		border-radius: 4px;
		margin: $spacing-xl 0;

		.index-link {
			color: $color-primary;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.seal {
		text-align: center;
		margin: $spacing-xl 0;

		img {
			max-width: 200px;
			height: auto;
		}
	}

	.m-elements {
		background-color: $color-background-light;
		padding: $spacing-lg;
		border-radius: 4px;
		margin: $spacing-lg 0;

		li {
			margin-bottom: $spacing-md;

			strong {
				color: $color-text-dark;
				font-weight: 600;
			}
		}
	}

	.glossary {
		li {
			margin-bottom: $spacing-lg;

			strong {
				color: $color-primary;
				font-weight: 600;
			}
		}
	}
}

// Responsive styles
@include responsive(lg) {
	.hero-section {
		.hero-title {
			font-size: 32px;
		}
	}

	.description-text {
		h1 {
			font-size: 30px;
		}

		h2 {
			font-size: 24px;
		}
	}
}

@include responsive(md) {
	.description-text {
		h1 {
			font-size: 28px;
		}

		h2 {
			font-size: 22px;
		}

		h3 {
			font-size: 20px;
		}
	}
}

@include responsive(sm) {
	.hero-section {
		min-height: 300px;

		.hero-title {
			font-size: 28px;
		}
	}

	.description-text {
		h1 {
			font-size: 24px;
		}

		h2 {
			font-size: 20px;
		}

		h3 {
			font-size: 18px;
		}
	}
}
</style>
