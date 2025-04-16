<template>
	<div class="bike-tours-page">
		<!-- Hero section with biking image background -->
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
			</button>
			<button class="slider-arrow slider-arrow-right">
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

			<!-- Hero content - bike tours message -->
			<div class="hero-content">
				<ContentContainer>
					<h1 class="hero-title">BIKE TOURS</h1>
					<p class="hero-subtitle">
						Entdecken Sie die Nordeifel auf zwei Rädern
					</p>
				</ContentContainer>
			</div>
		</section>

		<!-- Description section (like in hotel description) -->
		<section class="hotel-description">
			<ContentContainer>
				<div class="description-content">
					<div class="description-text">
						<p class="subtitle">Radsport-Paradies Nordeifel</p>
						<h2 class="title">BIKE TOURS</h2>
						<div class="description">
							<p>
								Die Nordeifel, ist ein wahres Eldorado für Mountainbiker und
								bietet eine beeindruckende Kombination aus atemberaubender
								Natur, abwechslungsreichen Trails und herausfordernden
								Steigungen. Eingebettet in die beeindruckende Landschaft des
								Naturparks Nordeifel, finden Radler hier zahlreiche
								Möglichkeiten, ihre Leidenschaft für das Mountainbiken
								auszuleben.
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
						<img :src="bikeMain" alt="Mountainbiker in der Nordeifel" />
					</div>
				</div>
			</ContentContainer>
		</section>

		<!-- Feature bike tours gallery -->
		<section class="feature-links">
			<ContentContainer>
				<div class="additional-description">
					<p>
						Egal, ob du ein erfahrener Mountainbiker bist oder gerade erst
						anfängst, die Nordeifel hat für jeden etwas zu bieten. Die Region
						zeichnet sich durch ein gut ausgebautes Netz an Trails aus, die
						sowohl technisch anspruchsvolle Abschnitte als auch entspannende
						Fahrten durch malerische Wälder und Wiesen umfassen. Die Routen
						variieren in Länge und Schwierigkeitsgrad, sodass du sowohl kurze
						Ausflüge als auch mehrstündige Touren planen kannst.
					</p>

					<p>
						Für diejenigen, die die Region intensiv und sicher erkunden möchten,
						stehen erfahrene Guides für Mountainbike, Gravelbike und Rennrad zur
						Verfügung. Diese Guides kennen die besten Routen und versteckten
						Schätze der Nord- Eifel.
					</p>
				</div>

				<div class="feature-links-grid">
					<div
						v-for="(image, index) in bikeImages"
						:key="index"
						class="feature-card"
						@click="openFullscreen(index)"
					>
						<div class="feature-image-container">
							<img :src="image.src" :alt="image.alt" class="feature-image" />
							<div class="feature-overlay"></div>
							<button class="gallery-fullscreen">
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
									<circle cx="11" cy="11" r="8"></circle>
									<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</ContentContainer>
		</section>

		<!-- Fullscreen gallery modal -->
		<div class="fullscreen-gallery" v-if="isFullscreenActive">
			<div class="fullscreen-content">
				<img
					:src="bikeImages[activeImageIndex].src"
					:alt="bikeImages[activeImageIndex].alt"
					class="fullscreen-image"
				/>

				<button class="fullscreen-close" @click="closeFullscreen">
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

				<button
					class="fullscreen-nav fullscreen-nav-prev"
					@click="prevFullscreenImage"
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
					class="fullscreen-nav fullscreen-nav-next"
					@click="nextFullscreenImage"
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
		</div>

		<!-- Bike details expanded section -->
		<div class="room-details-expanded" v-if="isDetailsActive">
			<ContentContainer>
				<div class="details-header">
					<h3>Details & Ausstattung: Bike Tours</h3>
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
						<h4>Mountainbike-Touren</h4>
						<ul>
							<li>Verschiedene Schwierigkeitsgrade</li>
							<li>Geführte Touren mit erfahrenen Guides</li>
							<li>Technische Trails und Flowtrails</li>
							<li>Tour-Längen von 20 bis 60 km</li>
							<li>Höhenmeter von 500 bis 1500 hm</li>
						</ul>
					</div>
					<div class="details-column">
						<h4>Rennrad & Gravelbike</h4>
						<ul>
							<li>Ausgeschilderte Rennradrouten</li>
							<li>Wenig befahrene Nebenstraßen</li>
							<li>Anspruchsvolle Steigungen</li>
							<li>Schotterwege für Gravelbikes</li>
							<li>Tourenlängen von 60 bis 120 km</li>
						</ul>
					</div>
					<div class="details-column">
						<h4>Service & Ausstattung</h4>
						<ul>
							<li>Bike-Waschplatz am Hotel</li>
							<li>Sichere Bike-Garage</li>
							<li>Werkzeug für kleinere Reparaturen</li>
							<li>Lunchpakete für Tagestouren</li>
							<li>GPS-Tracks aller Touren</li>
							<li>Bike-Verleih auf Anfrage</li>
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
import bikeMain from "@/assets/images/bike.jpg";
import bikeTwo from "@/assets/images/bike2.jpg";
import bikeThree from "@/assets/images/bike3.jpg";
import bikeFour from "@/assets/images/bike4.jpg";
import bikeFive from "@/assets/images/bike5.jpg";
// Gallery state
const activeImageIndex = ref(0);
const isFullscreenActive = ref(false);
const isDetailsActive = ref(false);

// Bike tour images
const bikeImages = [
	{
		src: bikeTwo,
		alt: "Mountainbiker auf Waldtrail",
	},
	{
		src: bikeThree,
		alt: "Mountainbiker mit Blick über die Eifel",
	},
	{
		src: bikeFour,
		alt: "Gravelbiker auf Schotterweg",
	},
	{
		src: bikeFive,
		alt: "Rennradfahrer auf Landstraße",
	},
];

// Open fullscreen gallery at specific index
const openFullscreen = (index: number) => {
	activeImageIndex.value = index;
	isFullscreenActive.value = true;
	document.body.style.overflow = "hidden"; // Prevent scrolling
};

const closeFullscreen = () => {
	isFullscreenActive.value = false;
	document.body.style.overflow = ""; // Restore scrolling
};

const prevFullscreenImage = () => {
	const totalImages = bikeImages.length;
	activeImageIndex.value =
		(activeImageIndex.value - 1 + totalImages) % totalImages;
};

const nextFullscreenImage = () => {
	const totalImages = bikeImages.length;
	activeImageIndex.value = (activeImageIndex.value + 1) % totalImages;
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

.bike-tours-page {
	padding-top: 80px; // Account for fixed header
}

// Hero section styles
.hero-section {
	position: relative;
	width: 100%;
	height: 60vh;
	min-height: 400px;
	background-image: url('@/assets/images/bike-hero.jpg'); // Mountain biking image
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

// Feature gallery section
.feature-links {
	padding: $spacing-section 0;
	background-color: $color-background-light;

	.additional-description {
		margin-bottom: $spacing-xxl;

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

.feature-links-grid {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: $spacing-xl;

	@include responsive(min-md) {
		grid-template-columns: repeat(2, 1fr);
	}

	@include responsive(min-lg) {
		grid-template-columns: repeat(4, 1fr);
	}
}

.feature-card {
	position: relative;
	overflow: hidden;
	border-radius: 4px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	transition: box-shadow $transition-speed ease;
	cursor: pointer;

	&:hover {
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);

		.feature-image {
			transform: scale(1.05);
			filter: brightness(1.1);
		}
	}
}

.feature-image-container {
	position: relative;
	width: 100%;
	height: 300px;
	overflow: hidden;
}

.feature-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform $transition-speed-slow ease,
		filter $transition-speed-slow ease;
}

.feature-overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.1) 0%,
		rgba(0, 0, 0, 0.3) 100%
	);
	z-index: 1;
}

.gallery-fullscreen {
	position: absolute;
	top: 15px;
	right: 15px;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	background-color: rgba(128, 128, 128, 0.5);
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	z-index: 2;
	transition: background-color $transition-speed ease;

	&:hover {
		background-color: rgba(128, 128, 128, 0.7);
	}

	svg {
		width: 20px;
		height: 20px;
	}
}

// Fullscreen gallery modal
.fullscreen-gallery {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;

	.fullscreen-content {
		position: relative;
		width: 90%;
		height: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fullscreen-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	.fullscreen-close {
		position: absolute;
		top: -40px;
		right: 0;
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		color: white;
		cursor: pointer;

		svg {
			width: 24px;
			height: 24px;
		}
	}

	.fullscreen-nav {
		position: absolute;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background-color: rgba(128, 128, 128, 0.5);
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		transition: background-color $transition-speed ease;

		&:hover {
			background-color: rgba(128, 128, 128, 0.7);
		}

		&-prev {
			left: -60px;
		}

		&-next {
			right: -60px;
		}

		svg {
			width: 20px;
			height: 20px;
		}
	}
}

// Bike details expanded section
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

	.feature-image-container {
		height: 250px;
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

	.feature-image-container {
		height: 220px;
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

	.feature-image-container {
		height: 180px;
	}

	.gallery-fullscreen {
		width: 35px;
		height: 35px;

		svg {
			width: 16px;
			height: 16px;
		}
	}

	.fullscreen-gallery {
		.fullscreen-nav {
			&-prev {
				left: 15px;
			}

			&-next {
				right: 15px;
			}
		}
	}
}
</style>
