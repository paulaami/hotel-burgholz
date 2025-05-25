<template>
	<div class="tagung-page">
		<!-- Hero section with conference/restaurant image background -->
		<section class="hero-section fullwidth-section">
			<!-- Hero content - conference message -->
			<div class="hero-content">
				<ContentContainer>
					<h1 class="hero-title">TAGUNG & EVENTS</h1>
					<p class="hero-subtitle">
						Professionelle Räumlichkeiten für Ihre Veranstaltungen
					</p>
				</ContentContainer>
			</div>
		</section>

		<!-- Description section (like in hotel description) -->
		<section class="hotel-description">
			<ContentContainer>
				<div class="description-content">
					<div class="description-text">
						<p class="subtitle">Ihr Ort für Meetings und Veranstaltungen</p>
						<h2 class="title">TAGUNGSRAUM</h2>
						<div class="description">
							<p>
								Willkommen im modernen Tagungsraum – einem idealen Ort für Ihre
								Meetings, Seminare und Workshops. Dieser Raum bietet nicht nur
								ausreichend Platz für kreative Ideen und produktive
								Diskussionen, sondern auch eine inspirierende Atmosphäre, die
								Ihre Veranstaltung unvergesslich macht.
							</p>
						</div>
						<div class="action-buttons">
							<a href="#" class="action-button dark">ANFRAGEN</a>
							<button class="details-button" @click="toggleDetails">
								<span class="details-icon">i</span>
								DETAILS & AUSSTATTUNG
							</button>
						</div>
					</div>
					<div class="description-image">
						<img src="@/assets/images/Konferrenz2.jpg" alt="Tagungsraum" />
					</div>
				</div>
			</ContentContainer>
		</section>

		<!-- Additional description -->
		<section class="additional-description-section">
			<ContentContainer>
				<div class="additional-description">
					<p>
						Für entspannende Pausen steht ein angrenzender Aufenthaltsraum zur
						Verfügung. Hier finden Sie eine Kaffeemaschine, die für aromatische
						Kaffeepausen sorgt, sowie einen Kühlschrank, der mit einer Auswahl
						an Softgetränken gefüllt ist. So bleiben alle Teilnehmer jederzeit
						erfrischt und motiviert.
					</p>

					<p>
						Für eine optimale Präsentationstechnik ist der Tagungsraum mit einem
						hochmodernen Beamer ausgestattet, der eine ClickShare-Anbindung für
						Ihren Computer ermöglicht. Das bedeutet, dass Sie Ihre
						Präsentationen und Inhalte ganz einfach und kabellos teilen können –
						für einen reibungslosen Ablauf Ihrer Veranstaltung. Die integrierten
						Lautsprecher sorgen dafür, dass alle Teilnehmer auch die akustischen
						Inhalte klar und deutlich hören können.
					</p>

					<p>
						Darüber hinaus ist der Raum klimatisiert, sodass Sie und Ihre Gäste
						bei jeder Raumtemperatur komfortabel arbeiten können. Für
						zusätzliche Bequemlichkeit steht ein WC im Tagungsbereich zur
						Verfügung.
					</p>

					<p>
						Egal, ob Sie eine kleine Besprechung oder ein größeres Seminar
						planen, der Tagungsraum im Hotel Burgholz bietet Ihnen die perfekte
						Kombination aus Funktionalität und Komfort. Wir freuen uns darauf,
						Ihre Veranstaltung zu einem vollen Erfolg zu machen!
					</p>
				</div>
			</ContentContainer>
		</section>

		<!-- Carousel section -->
		<section class="conference-carousel-section">
			<ContentContainer>
				<div class="carousel-container">
					<img
						:src="conferenceRoomImages[currentImageIndex]"
						alt="Tagungsraum"
						class="carousel-image"
					/>

					<!-- Navigation arrows -->
					<button
						class="carousel-arrow carousel-arrow-left"
						@click="prevImage"
						aria-label="Previous image"
					>
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
					</button>
					<button
						class="carousel-arrow carousel-arrow-right"
						@click="nextImage"
						aria-label="Next image"
					>
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
					</button>
				</div>

				<!-- Carousel indicators -->
				<div class="carousel-indicators">
					<div
						v-for="(_, index) in conferenceRoomImages"
						:key="index"
						:class="['indicator-item', { active: index === currentImageIndex }]"
						@click="goToImage(index)"
					></div>
				</div>
			</ContentContainer>
		</section>

		<!-- Room details expanded section -->
		<div class="room-details-expanded" v-if="isDetailsActive">
			<ContentContainer>
				<div class="details-header">
					<h3>Details & Ausstattung: Tagungsraum</h3>
					<button class="close-details" @click="closeDetails">
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
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</button>
				</div>

				<div class="details-content">
					<div class="details-column">
						<h4>Technische Ausstattung</h4>
						<ul>
							<li>Hochmoderner Beamer</li>
							<li>ClickShare-Anbindung</li>
							<li>Integrierte Lautsprecher</li>
							<li>WLAN</li>
							<li>Klimaanlage</li>
						</ul>
					</div>
					<div class="details-column">
						<h4>Pausenbereich</h4>
						<ul>
							<li>Angrenzender Aufenthaltsraum</li>
							<li>Kaffeemaschine</li>
							<li>Kühlschrank mit Softgetränken</li>
							<li>WC im Tagungsbereich</li>
						</ul>
					</div>
					<div class="details-column">
						<h4>Zusätzliche Informationen</h4>
						<ul>
							<li>
								Für entspannende Pausen steht ein angrenzender Aufenthaltsraum
								zur Verfügung. Hier finden Sie eine Kaffeemaschine, die für
								aromatische Kaffeepausen sorgt, sowie einen Kühlschrank, der mit
								einer Auswahl an Softgetränken gefüllt ist. So bleiben alle
								Teilnehmer jederzeit erfrischt und motiviert.
							</li>
							<li>
								Darüber hinaus ist der Raum klimatisiert, sodass Sie und Ihre
								Gäste bei jeder Raumtemperatur komfortabel arbeiten können.
							</li>
						</ul>
					</div>
				</div>
			</ContentContainer>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";

// Gallery state
const currentImageIndex = ref(0);
const isDetailsActive = ref(false);

// Conference room images - replace with your actual images
const conferenceRoomImages = [
	new URL("@/assets/images/Konferrenz3.jpg", import.meta.url).href,
	new URL("@/assets/images/Konferrenz4.jpg", import.meta.url).href,
	new URL("@/assets/images/Konferrenz5.jpg", import.meta.url).href,
	// new URL("@/assets/images/Konferrenz6.jpg", import.meta.url).href,
];

// Carousel navigation methods
const totalImages = ref(conferenceRoomImages.length);

const nextImage = () => {
	currentImageIndex.value = (currentImageIndex.value + 1) % totalImages.value;
};

const prevImage = () => {
	currentImageIndex.value =
		(currentImageIndex.value - 1 + totalImages.value) % totalImages.value;
};

const goToImage = (index: number) => {
	currentImageIndex.value = index;
};

// Toggle details panel
const toggleDetails = () => {
	isDetailsActive.value = true;
	document.body.style.overflow = "hidden"; // Prevent scrolling when details open
};

const closeDetails = () => {
	isDetailsActive.value = false;
	document.body.style.overflow = ""; // Restore scrolling
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

// Hero section styles (similar to zimmmer page)
.hero-section {
	position: relative;
	width: 100%;
	height: 60vh;
	min-height: 400px;
	background-image: url("@/assets/images/Konferrenz1.jpg"); // Restaurant image
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
}

// Description section (like on homepage)
.hotel-description {
	padding: $spacing-section 0;
	background-color: $color-white;
}

.description-content {
	display: grid;
	grid-template-columns: 1fr;
	gap: $spacing-xxl;

	@include responsive(min-lg) {
		grid-template-columns: 3fr 2fr;
		align-items: center;
	}
}

.description-text {
	padding-right: $spacing-lg;

	.subtitle {
		font-size: $font-size-large;
		color: $color-primary;
		margin: 0 0 $spacing-sm 0;
		position: relative;
		padding-left: 40px;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 50%;
			width: 30px;
			height: 1px;
			background-color: $color-primary;
		}
	}

	.title {
		font-size: 36px;
		color: $color-text-dark;
		margin: 0 0 $spacing-xl 0;
		font-weight: 500;
	}

	.description {
		color: $color-text-light;
		line-height: 1.7;
		margin-bottom: $spacing-xl;

		p {
			margin-bottom: $spacing-lg;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}

.action-buttons {
	display: flex;
	gap: $spacing-md;
	margin-top: $spacing-xl;

	.action-button {
		display: inline-block;
		padding: $spacing-sm $spacing-xl;
		text-decoration: none;
		font-size: $font-size-base;
		font-weight: 500;
		letter-spacing: 0.1em;
		transition: all $transition-speed ease;

		&.dark {
			background-color: $color-primary;
			color: $color-white;

			&:hover {
				background-color: darken($color-primary, 10%);
			}
		}

		&.light {
			background-color: transparent;
			color: $color-text-dark;
			border: 1px solid $color-primary;

			&:hover {
				background-color: $color-primary;
				color: $color-white;
			}
		}
	}

	.details-button {
		display: inline-flex;
		align-items: center;
		gap: $spacing-sm;
		border: none;
		background: none;
		color: $color-text-dark;
		font-size: $font-size-base;
		font-weight: 500;
		cursor: pointer;
		padding: 0;
		letter-spacing: 0.1em;

		.details-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 24px;
			height: 24px;
			border-radius: 50%;
			background-color: $color-text-dark;
			color: white;
			font-style: italic;
			font-weight: bold;
		}

		&:hover {
			color: $color-primary;

			.details-icon {
				background-color: $color-primary;
			}
		}
	}
}

.description-image {
	img {
		width: 100%;
		height: auto;
		border-radius: 4px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		object-fit: cover;
	}
}

// Additional description section
.additional-description-section {
	padding: $spacing-section 0;
	background-color: $color-background-light;

	.additional-description {
		p {
			margin-bottom: $spacing-md;
			line-height: 1.7;
			color: $color-text-light;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}

// Carousel section (similar to room page)
.conference-carousel-section {
	padding: $spacing-md 0;
	background-color: $color-background-light;

	.carousel-container {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%; // 16:9 aspect ratio
		overflow: hidden;
		border-radius: 4px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

		.carousel-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: opacity 0.3s ease;
		}

		.carousel-arrow {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color: rgba(255, 255, 255, 0.5);
			border: none;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			z-index: 2;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: rgba(255, 255, 255, 0.8);
			}

			&-left {
				left: 20px;
			}

			&-right {
				right: 20px;
			}

			svg {
				width: 24px;
				height: 24px;
			}
		}
	}

	.carousel-indicators {
		display: flex;
		justify-content: center;
		gap: 8px;
		margin-top: 16px;

		.indicator-item {
			width: 40px;
			height: 5px;
			background-color: #ddd;
			cursor: pointer;
			transition: background-color 0.3s;

			&.active {
				background-color: $color-primary;
			}

			&:hover {
				background-color: darken(#ddd, 10%);
			}
		}
	}
}

// Room details expanded section
.room-details-expanded {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.95);
	z-index: 999;
	overflow-y: auto;
	padding: 100px 0 $spacing-xxl;

	.details-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: $spacing-xl;

		h3 {
			font-size: $font-size-xl;
			font-weight: 500;
			margin: 0;
		}

		.close-details {
			background: none;
			border: none;
			cursor: pointer;
			padding: $spacing-xs;

			svg {
				width: 24px;
				height: 24px;
			}
		}
	}

	.details-content {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: $spacing-xl;

		@include responsive(min-md) {
			grid-template-columns: repeat(2, 1fr);
		}

		@include responsive(min-lg) {
			grid-template-columns: repeat(3, 1fr);
		}

		.details-column {
			h4 {
				font-size: $font-size-medium;
				font-weight: 500;
				margin: 0 0 $spacing-md 0;
			}

			ul {
				list-style: none;
				padding: 0;
				margin: 0;

				li {
					margin-bottom: $spacing-xs;
					padding-left: $spacing-md;
					position: relative;
					line-height: 1.5;

					&::before {
						content: "•";
						position: absolute;
						left: 0;
						color: $color-primary;
					}
				}
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

		.hero-subtitle {
			font-size: $font-size-medium;
		}
	}

	.description-text {
		.title {
			font-size: 30px;
		}
	}
}

@include responsive(md) {
	.description-text {
		padding-right: 0;
	}

	.action-buttons {
		flex-wrap: wrap;
		gap: $spacing-sm;
	}

	.conference-carousel-section {
		.carousel-container {
			.carousel-arrow {
				width: 40px;
				height: 40px;

				svg {
					width: 20px;
					height: 20px;
				}
			}
		}

		.carousel-indicators {
			.indicator-item {
				width: 30px;
				height: 4px;
			}
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
	}

	.description-text {
		.subtitle {
			font-size: $font-size-base;
			padding-left: 30px;

			&::before {
				width: 20px;
			}
		}

		.title {
			font-size: 22px;
		}
	}

	.conference-carousel-section {
		.carousel-container {
			.carousel-arrow {
				width: 35px;
				height: 35px;
				// left: 10px;

				// &-right {
				// 	right: 10px;
				// }

				svg {
					width: 16px;
					height: 16px;
				}
			}
		}
	}
}
</style>
