<template>
	<div class="room-page">
		<!-- Hero section with room title overlay -->
		<section
			class="hero-section fullwidth-section"
			:style="{ backgroundImage: `url(${heroBackgroundImage})` }"
		>
			<div class="hero-content">
				<ContentContainer>
					<h1 class="hero-title">{{ currentRoom.name?.toUpperCase() }}</h1>
					<p class="hero-subtitle">
						{{ currentRoom.category || "" }}
					</p>
				</ContentContainer>
			</div>
		</section>

		<!-- Room details section -->
		<section class="room-details-section">
			<ContentContainer>
				<!-- Room details bar -->
				<div class="room-details-bar">
					<div class="detail-item">
						<h3 class="detail-title">GRÖSSE</h3>
						<p class="detail-value">{{ currentRoom.size }}</p>
					</div>
					<div class="detail-item">
						<h3 class="detail-title">BELEGUNG</h3>
						<p class="detail-value">{{ currentRoom.capacity }}</p>
					</div>
					<div class="detail-item">
						<h3 class="detail-title">ROOM PRICE PER NIGHT</h3>
						<p class="detail-value">{{ currentRoom.price }}</p>
					</div>
				</div>
				<!-- Carousel section -->
				<section class="room-carousel-section">
					<ContentContainer>
						<div class="carousel-container">
							<img
								:src="currentRoom.images[currentImageIndex]"
								:alt="currentRoom.name"
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
								v-for="(_, index) in currentRoom.images"
								:key="index"
								:class="[
									'indicator-item',
									{ active: index === currentImageIndex },
								]"
								@click="goToImage(index)"
							></div>
						</div>
					</ContentContainer>
				</section>
				<!-- Room description -->
				<div class="room-description-container">
					<h2 class="description-title">
						{{ currentRoom.tagline || "Komfort und Erholung im Schwarzwald" }}
					</h2>
					<div class="description-content">
						<p>{{ currentRoom.description }}</p>
					</div>
				</div>

				<!-- Booking button -->
				<div class="booking-container">
					<router-link :to="bookingUrl" class="booking-button">
						Book now
					</router-link>
				</div>

				<!-- Room features -->
				<div class="room-features">
					<div class="features-column">
						<h3 class="features-title">Inclusive services</h3>
						<ul class="features-list">
							<li
								v-for="(service, index) in roomServices"
								:key="'service-' + index"
							>
								{{ service }}
							</li>
						</ul>
					</div>
					<div class="features-column">
						<h3 class="features-title">Zimmerausstatung</h3>
						<ul class="features-list">
							<li
								v-for="(feature, index) in roomFeatures"
								:key="'feature-' + index"
							>
								{{ feature }}
							</li>
						</ul>
					</div>
				</div>
			</ContentContainer>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ContentContainer from "@/components/layout/ContentContainer.vue";

const route = useRoute();
const router = useRouter();
const roomId = computed(() => route.params.id as string);
const apartmentId = computed(() => route.params.apartmentId as string);
const currentImageIndex = ref(0);

// Check if we're on an apartment page
const isApartmentPage = computed(() => route.path.includes("/apartment/"));

// Regular room data
const rooms = {
	einzelzimmer: {
		name: "Einzelzimmer",
		category: "",
		tagline: "Gemütliche Atmosphäre für Einzelreisende",
		images: [
			new URL(
				"@/assets/images/einzelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-1.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/einzelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-5.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-6.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-11.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-22.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-24.jpg",
				import.meta.url
			).href,
		],
		description:
			"Unser Einzelzimmer ist ideal für Geschäftsreisende und Radfahrer und bietet eine helle und gemütliche Atmosphäre auf etwa 16 m². Ausgestattet mit einer Klimaanlage sorgt es für angenehme Temperaturen. Ein praktischer Schreibtisch und ein Flat-TV stehen zur Verfügung, während das kostenfreie WLAN mit Glasfaseranschluss schnelle Internetverbindungen garantiert. Für zusätzlichen Komfort gibt es eine Kofferablage und eine Mini-Bar. Das moderne Badezimmer verfügt über eine Dusche und ein WC. Das extra breite Bett misst 120cm x 200cm und kann auf Wunsch auch in der Überlänge von 120cm x 210 cm bereitgestellt werden. Dieses Einzelzimmer kombiniert Komfort und Funktionalität und bietet den perfekten Rückzugsort während Ihres Aufenthalts.",
		capacity: "1 Person",
		price: "ab 112,– €",
		size: "16 m²",
		services: [
			"Reichhaltiges Frühstücksbuffet",
			"Kostenfreies WLAN mit Glasfaseranschluss",
			"Tägliche Zimmerreinigung",
			"Parkplatz am Hotel kostenfrei",
		],
		features: [
			"Klimaanlage mit individueller Steuerung",
			"Extra breites Einzelbett (120 × 200 cm)",
			"Bettgröße auf Wunsch in Überlänge (210 cm)",
			"Schreibtisch mit Beleuchtung",
			"Flat-TV mit Satellitenprogrammen",
			"Minibar mit Erfrischungsgetränken",
			"Modernes Badezimmer mit Dusche und WC",
			"Haartrockner",
			"Hochwertige Pflegeprodukte",
			"Kofferablage",
		],
	},
	doppelzimmer: {
		name: "Doppelzimmer",
		category: "",
		tagline: "Komfort und Funktionalität für zwei Personen",
		images: [
			new URL(
				"@/assets/images/doppelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-27.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/doppelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-31.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-6.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-11.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-22.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/shared/Hotel Burgholz_Uschi Kitschke Fotografie-24.jpg",
				import.meta.url
			).href,
		],
		description:
			"Das Doppelzimmer ist ideal für Geschäftsreisende und Radfahrer und bietet eine helle und gemütliche Atmosphäre auf etwa 25 m². Ausgestattet mit einer Klimaanlage sorgt es für angenehme Temperaturen. Ein praktischer Schreibtisch und ein Flat-TV stehen zur Verfügung, während das kostenfreie WLAN mit Glasfaseranschluss schnelle Internetverbindungen garantiert. Für zusätzlichen Komfort gibt es eine gemütliche Sitzgelegenheit, eine Kofferablage und eine Mini-Bar. Das moderne Badezimmer verfügt über eine Dusche und ein WC. Die Einzelbetten messen 100 x 200 cm und sind auf Wunsch auch in der Überlänge von 100 x 210 cm erhältlich. Dieses Doppelzimmer kombiniert Komfort und Funktionalität und bietet den perfekten Rückzugsort während Ihres Aufenthalts.",
		capacity: "2 Personen",
		price: "ab 140,– €",
		size: "25 m²",
		services: [
			"Reichhaltiges Frühstücksbuffet",
			"Kostenfreies WLAN mit Glasfaseranschluss",
			"Tägliche Zimmerreinigung",
			"Parkplatz am Hotel kostenfrei",
		],
		features: [
			"Klimaanlage mit individueller Steuerung",
			"Zwei Einzelbetten (100 × 200 cm)",
			"Bettgröße auf Wunsch in Überlänge (210 cm)",
			"Gemütliche Sitzgelegenheit",
			"Schreibtisch mit Beleuchtung",
			"Flat-TV mit Satellitenprogrammen",
			"Minibar mit Erfrischungsgetränken",
			"Modernes Badezimmer mit Dusche und WC",
			"Haartrockner",
			"Hochwertige Pflegeprodukte",
			"Kofferablage",
		],
	},
	studioApartment: {
		name: "Studio Apartment",
		category: "",
		tagline: "Luxuriöser Komfort auf großzügiger Fläche",
		images: [
			new URL("@/assets/images/studio.jpg", import.meta.url).href,
			new URL("@/assets/images/studio2.jpg", import.meta.url).href,
			new URL("@/assets/images/studio3.jpg", import.meta.url).href,
			new URL("@/assets/images/studio4.jpg", import.meta.url).href,
			new URL("@/assets/images/studio5.jpg", import.meta.url).href,
		],
		description:
			"Das Studio Apartment bietet auf einer großzügigen Fläche von circa 64 m² luxuriösen Komfort und moderne Annehmlichkeiten. Das Apartment verfügt über zwei gemütliche Schlafzimmer, die jeweils eine entspannende Nachtruhe garantieren. Im Hauptschlafzimmer befindet sich ein komfortables Boxspringbett mit den Maßen 180 x 200 cm, während das zweite Schlafzimmer ein ebenfalls bequemes Bett mit den Maßen 120 x 200 cm bietet. Das stilvoll eingerichtete Bad lädt mit seinen hochwertigen Armaturen und einer großzügigen Dusche zur Entspannung ein. Der Wohnbereich ist geschmackvoll dekoriert und bietet ausreichend Platz zum Entspannen und Verweilen. Ein Essbereich ist ebenfalls vorhanden und eignet sich perfekt für gemeinsame Mahlzeiten. Die vollwertige Küche ist mit modernen Geräten ausgestattet, darunter eine Spülmaschine, die den Aufenthalt noch angenehmer macht. So können Sie sich ganz auf Ihre Erholung konzentrieren, ohne sich um den Abwasch kümmern zu müssen. Eine Terrasse rundet das Angebot ab und bietet einen schönen Ort, um die frische Luft zu genießen oder gemütlich draußen zu sitzen.",
		capacity: "4 Personen",
		price: "ab 190,– €",
		size: "64 m²",
		services: [
			"Wahlweise Frühstücksbuffet buchbar",
			"Kostenfreies WLAN mit Glasfaseranschluss",
			"Tägliche Reinigung",
			"Kostenloser Parkplatz",
			"Wäscheservice auf Anfrage",
		],
		features: [
			"Zwei separate Schlafzimmer",
			"Hauptschlafzimmer mit Boxspringbett (180 × 200 cm)",
			"Zweites Schlafzimmer mit Bett (120 × 200 cm)",
			"Großer Wohnbereich",
			"Essbereich für gemeinsame Mahlzeiten",
			"Vollwertige Küche mit Spülmaschine",
			"Drei Flat-TVs",
			"Eigene Terrasse",
			"Stilvolles Bad mit hochwertigen Armaturen",
			"Großzügige Dusche",
			"Klimaanlage",
		],
	},
};

// Apartment data
const apartments = {
	einzelzimmer: {
		name: "Apartment Einzelzimmer",
		category: "Apartment",
		tagline: "Komfortables Apartment für eine Person",
		images: [
			new URL(
				"@/assets/images/apartament/einzelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-100.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/einzelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-56.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-58.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-65.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-70.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-74.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-75.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-82.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-85.jpg",
				import.meta.url
			).href,
		],
		description:
			"Das Apartment Einzelzimmer bietet auf 30 m² eine komfortable Unterkunft für eine Person. Es verfügt über ein separates Schlafzimmer mit einem komfortablen Einzelbett, das Privatsphäre und Ruhe gewährleistet. Das moderne Badezimmer ist gut ausgestattet. Der Wohnbereich lädt mit einem Flat-TV zum Entspannen ein und geht nahtlos in den Essbereich über. Eine gut ausgestattete Küchenzeile ermöglicht es, sich selbst zu verpflegen. Darüber hinaus gehört zu diesem Apartment eine gemütliche Terrasse. Kostenloses WLAN mit Glasfaser sorgt für schnelle und zuverlässige Internetverbindungen.",
		capacity: "1 Person",
		price: "ab 140,– €",
		size: "30 m²",
		services: [
			"Wahlweise Frühstücksbuffet buchbar",
			"Kostenfreies WLAN mit Glasfaseranschluss",
			"Tägliche Reinigung",
			"Kostenloser Parkplatz",
			"Wäscheservice auf Anfrage",
		],
		features: [
			"Separates Schlafzimmer",
			"Komfortables Einzelbett",
			"Wohnzimmer mit gemütlichem Sitzbereich",
			"Essbereich",
			"Gut ausgestattete Küchenzeile",
			"Eigene Terrasse",
			"Flat-TV",
			"Modernes Badezimmer mit Dusche und WC",
			"Haartrockner",
			"Hochwertige Pflegeprodukte",
			"Klimaanlage",
		],
	},
	doppelzimmer: {
		name: "Apartment Doppelzimmer",
		category: "Apartment",
		tagline: "Großzügiger Wohnraum mit separatem Schlafzimmer",
		images: [
			new URL(
				"@/assets/images/apartament/doppelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-72.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/doppelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-80.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/doppelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-88.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-58.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-65.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-70.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-74.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-75.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-82.jpg",
				import.meta.url
			).href,
			new URL(
				"@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-85.jpg",
				import.meta.url
			).href,
		],
		description:
			"Das Apartment Doppelzimmer bietet für zwei Personen eine komfortable Unterkunft auf 36 m². Es verfügt über ein separates Schlafzimmer mit einem luxuriösen Boxspringbett (180 x 200 cm), das Privatsphäre und Ruhe gewährleistet. Das moderne Badezimmer ist gut ausgestattet. Der Wohnbereich lädt mit einem Flat-TV zum Entspannen ein und geht nahtlos in den Essbereich über, der ausreichend Platz für gemütliche Mahlzeiten bietet. Eine voll ausgestattete Küchenzeile ermöglicht es den Gästen, sich selbst zu verpflegen. Darüber hinaus gehört zu jedem Apartment eine Terrasse, die zum Verweilen im Freien einlädt. Kostenloses WLAN mit Glasfaser sorgt für schnelle und zuverlässige Internetverbindungen.",
		capacity: "2 Personen",
		price: "ab 160,– €",
		size: "36 m²",
		services: [
			"Wahlweise Frühstücksbuffet buchbar",
			"Kostenfreies WLAN mit Glasfaseranschluss",
			"Tägliche Reinigung",
			"Kostenloser Parkplatz",
			"Wäscheservice auf Anfrage",
		],
		features: [
			"Separates Schlafzimmer",
			"Luxuriöses Boxspringbett (180 × 200 cm)",
			"Wohnzimmer mit gemütlichem Sitzbereich",
			"Essbereich für gemütliche Mahlzeiten",
			"Voll ausgestattete Küchenzeile",
			"Eigene Terrasse",
			"Flat-TV",
			"Modernes Badezimmer mit Dusche und WC",
			"Haartrockner",
			"Hochwertige Pflegeprodukte",
			"Klimaanlage",
		],
	},
};

// Current room computed property
const currentRoom = computed(() => {
	if (isApartmentPage.value) {
		// We're on an apartment detail page
		if (!apartmentId.value || !apartments[apartmentId.value]) {
			router.push("/zimmer/apartment"); // Redirect to apartment overview if ID is invalid
			return {};
		}
		return apartments[apartmentId.value];
	} else {
		// We're on a regular room detail page
		if (!roomId.value || !rooms[roomId.value]) {
			router.push("/zimmer"); // Redirect to rooms overview if ID is invalid
			return {};
		}
		return rooms[roomId.value];
	}
});

// Hero background image - uses the second image from the room's image array
const heroBackgroundImage = computed(() => {
	if (currentRoom.value.images && currentRoom.value.images.length > 0) {
		return currentRoom.value.images[1] || currentRoom.value.images[0]; // Use second image, fallback to first
	}
	// Fallback to the original Unsplash image if no room images are available
	return "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80";
});

// Services and features
const roomServices = computed(() => currentRoom.value.services || []);
const roomFeatures = computed(() => currentRoom.value.features || []);

// Booking URL
const bookingUrl = computed(() => {
	if (isApartmentPage.value) {
		return `/buchen/apartment/${apartmentId.value}`;
	} else {
		return `/buchen/${roomId.value}`;
	}
});

// Carousel navigation methods
const totalImages = computed(() => currentRoom.value.images?.length || 0);

const nextImage = () => {
	if (totalImages.value > 0) {
		currentImageIndex.value = (currentImageIndex.value + 1) % totalImages.value;
	}
};

const prevImage = () => {
	if (totalImages.value > 0) {
		currentImageIndex.value =
			(currentImageIndex.value - 1 + totalImages.value) % totalImages.value;
	}
};

const goToImage = (index) => {
	currentImageIndex.value = index;
};

// Reset carousel when room changes
watch([roomId, apartmentId], () => {
	currentImageIndex.value = 0;
});

// Check if room exists on mount
onMounted(() => {
	if (isApartmentPage.value) {
		if (apartmentId.value && !apartments[apartmentId.value]) {
			router.push("/zimmer/apartment");
		}
	} else {
		if (roomId.value && !rooms[roomId.value]) {
			router.push("/zimmer");
		}
	}
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

// Hero section - now uses dynamic background image
.hero-section {
	position: relative;
	width: 100%;
	height: 60vh;
	min-height: 400px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: $color-white;
	transition: background-image 0.5s ease-in-out; // Smooth transition when switching rooms

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

// Carousel section
.room-carousel-section {
	padding: $spacing-md 0;

	.carousel-container {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%; // 16:9 aspect ratio
		overflow: hidden;

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

// Room details section
.room-details-section {
	padding: $spacing-section 0;

	.room-details-bar {
		display: flex;
		justify-content: space-around;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		padding: $spacing-lg 0;
		margin-bottom: $spacing-xl;

		.detail-item {
			text-align: center;
			padding: 0 $spacing-md;

			.detail-title {
				font-size: 0.8rem;
				font-weight: 400;
				text-transform: uppercase;
				letter-spacing: 1px;
				color: #666;
				margin: 0 0 $spacing-xs 0;
			}

			.detail-value {
				font-size: 1.1rem;
				font-weight: 500;
				color: #333;
				margin: 0;
			}
		}
	}

	.room-description-container {
		text-align: center;
		max-width: 800px;
		margin: 0 auto $spacing-xl;

		.description-title {
			font-size: 1.8rem;
			font-weight: 400;
			color: #333;
			margin: 0 0 $spacing-lg 0;
		}

		.description-content {
			color: #666;
			line-height: 1.8;

			p {
				margin: 0 0 $spacing-md 0;
			}
		}
	}

	.booking-container {
		text-align: center;
		margin-bottom: $spacing-xxl;

		.booking-button {
			display: inline-block;
			padding: $spacing-md $spacing-xxl;
			background-color: $color-primary;
			color: white;
			text-decoration: none;
			text-transform: none;
			font-size: 1rem;
			font-weight: 400;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: darken($color-primary, 10%);
			}
		}
	}

	.room-features {
		display: grid;
		grid-template-columns: 1fr;
		gap: $spacing-xl;
		background-color: #f7f7f7;
		padding: $spacing-xl;

		@include responsive(min-md) {
			grid-template-columns: repeat(2, 1fr);
		}

		.features-column {
			.features-title {
				font-size: 1.2rem;
				font-weight: 500;
				color: #333;
				margin: 0 0 $spacing-lg 0;
				padding-bottom: $spacing-sm;
				border-bottom: 1px solid #ddd;
			}

			.features-list {
				list-style: none;
				padding: 0;
				margin: 0;

				li {
					position: relative;
					padding-left: $spacing-md;
					margin-bottom: $spacing-sm;
					line-height: 1.6;
					color: #666;

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

// Responsive styles - matching zimmerpage.vue
@include responsive(lg) {
	.hero-section {
		.hero-title {
			font-size: 32px;
		}

		.hero-subtitle {
			font-size: $font-size-medium;
		}
	}
}

@include responsive(md) {
	.room-details-section {
		.room-details-bar {
			flex-direction: column;
			gap: $spacing-md;

			.detail-item {
				border-bottom: 1px solid #eee;
				padding-bottom: $spacing-sm;

				&:last-child {
					border-bottom: none;
				}
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

	.room-carousel-section {
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

	.room-details-section {
		.room-description-container {
			.description-title {
				font-size: 1.5rem;
			}
		}

		.booking-container {
			.booking-button {
				width: 100%;
				padding: $spacing-md;
			}
		}
	}
}
</style>
