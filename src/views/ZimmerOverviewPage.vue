<template>
	<div class="zimmer-page">
		<!-- Hero section with room image background -->
		<section class="hero-section fullwidth-section">
			<!-- Navigation arrows for slider functionality -->
			<button class="slider-arrow slider-arrow-left">
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
			</button>

			<!-- Hero content - room message -->
			<div class="hero-content">
				<ContentContainer>
					<h1 class="hero-title">ZIMMER & SUITEN</h1>
					<p class="hero-subtitle">
						Erholung und Komfort im Herzen des Schwarzwaldes
					</p>
				</ContentContainer>
			</div>
		</section>

		<!-- Room listings section -->
		<section class="rooms-section">
			<ContentContainer>
				<div class="rooms-grid">
					<!-- Room item: EINZELZIMMER -->
					<div class="room-item">
						<div class="room-gallery">
							<div class="gallery-image-container">
								<img
									:src="rooms.landhaus.images[landhausImageIndex]"
									alt="Zimmer LANDHAUS"
									class="gallery-image"
								/>

								<!-- Gallery navigation -->
								<button
									class="gallery-nav gallery-nav-prev"
									@click.prevent="prevImage('landhaus')"
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
									class="gallery-nav gallery-nav-next"
									@click.prevent="nextImage('landhaus')"
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
								<button
									class="gallery-fullscreen"
									@click.prevent="openFullscreen('landhaus')"
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
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>

								<!-- Room type overlay -->
								<div class="room-overlay">
									<span class="room-category">Zimmer overview</span>
									<h2 class="room-name">EINZELZIMMER</h2>
								</div>
							</div>
						</div>

						<div class="room-info">
							<div class="room-specs">
								<span class="room-spec">2 Personen</span>
								<span class="room-spec">Ab 112,– / Nacht</span>
							</div>

							<div class="room-description">
								<p>
									Unser Einzelzimmer, ist ideal für Geschäftsreisende und
									Radfahrer, bietet eine helle und gemütliche Atmosphäre auf
									etwa 16 m². Ausgestattet mit einer Klimaanlage sorgt es für
									angenehme Temperaturen. Ein praktischer Schreibtisch und ein
									Flat-TV stehen zur Verfügung, während das kostenfreie WLAN mit
									Glasfaseranschluss schnelle Internetverbindungen garantiert.
									Für zusätzlichen Komfort gibt es eine Kofferablage und eine
									Mini-Bar. Das moderne Badezimmer verfügt über eine Dusche und
									ein WC. Das extra breite Bett misst 120cm x 200cm und kann auf
									Wunsch auch in der Überlänge von 120cm x 210 cm bereitgestellt
									werden. Dieses Einzelzimmer kombiniert Komfort und
									Funktionalität und bietet den perfekten Rückzugsort während
									Ihres Aufenthalts.
								</p>
							</div>

							<div class="room-actions">
								<button
									class="details-button"
									@click="toggleDetails('landhaus')"
								>
									<span class="details-icon">i</span>
									DETAILS & AUSSTATTUNG
								</button>

								<a href="#" class="booking-button"> ZIMMER BUCHEN </a>
							</div>
						</div>
					</div>

					<!-- Room item: DOPPELZIMMER -->
					<div class="room-item">
						<div class="room-gallery">
							<div class="gallery-image-container">
								<img
									:src="rooms.winzerglueck.images[winzerglueckImageIndex]"
									alt="Zimmer WINZERGLÜCK"
									class="gallery-image"
								/>

								<!-- Gallery navigation -->
								<button
									class="gallery-nav gallery-nav-prev"
									@click.prevent="prevImage('winzerglueck')"
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
									class="gallery-nav gallery-nav-next"
									@click.prevent="nextImage('winzerglueck')"
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
								<button
									class="gallery-fullscreen"
									@click.prevent="openFullscreen('winzerglueck')"
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
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>

								<!-- Room type overlay -->
								<div class="room-overlay">
									<span class="room-category">Zimmer overview</span>
									<h2 class="room-name">Doppelzimmer</h2>
								</div>
							</div>
						</div>

						<div class="room-info">
							<div class="room-specs">
								<span class="room-spec">2 Personen</span>
								<span class="room-spec">Ab 140,– / Nacht</span>
								<span class="room-spec">28 m²</span>
							</div>

							<div class="room-description">
								<p>
									Das Doppelzimmer, ist ideal für Geschäftsreisende und
									Radfahrer, bietet eine helle und gemütliche Atmosphäre auf
									etwa 25 m². Ausgestattet mit einer Klimaanlage sorgt es für
									angenehme Temperaturen. Ein praktischer Schreibtisch und ein
									Flat-TV stehen zur Verfügung, während das kostenfreie WLAN mit
									Glasfaseranschluss schnelle Internetverbindungen garantiert.
									Für zusätzlichen Komfort gibt es eine gemütliche
									Sitzgelegenheit, eine Kofferablage und eine Mini- Bar. Das
									moderne Badezimmer verfügt über eine Dusche und ein WC. Die
									Einzelbetten messen 100 x 200 cm und sind auf Wunsch auch in
									der Überlänge von 100 x 210 cm erhältlich. Dieses Doppelzimmer
									kombiniert Komfort und Funktionalität und bietet den perfekten
									Rückzugsort während Ihres Aufenthalts.
								</p>
							</div>

							<div class="room-actions">
								<button
									class="details-button"
									@click="toggleDetails('winzerglueck')"
								>
									<span class="details-icon">i</span>
									DETAILS & AUSSTATTUNG
								</button>

								<a href="#" class="booking-button"> ZIMMER BUCHEN </a>
							</div>
						</div>
					</div>

					<!-- Room item: APARTMENT -->
					<div class="room-item">
						<div class="room-gallery">
							<div class="gallery-image-container">
								<img
									:src="rooms.apartment.images[apartmentImageIndex]"
									alt="Apartment"
									class="gallery-image"
								/>

								<!-- Gallery navigation -->
								<button
									class="gallery-nav gallery-nav-prev"
									@click.prevent="prevImage('apartment')"
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
									class="gallery-nav gallery-nav-next"
									@click.prevent="nextImage('apartment')"
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
								<button
									class="gallery-fullscreen"
									@click.prevent="openFullscreen('apartment')"
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
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>

								<!-- Room type overlay -->
								<div class="room-overlay">
									<span class="room-category">Apartments overview</span>
									<h2 class="room-name">Apartment</h2>
								</div>
							</div>
						</div>

						<div class="room-info">
							<div class="room-specs">
								<span class="room-spec">2 Personen</span>
								<span class="room-spec">Ab 160,– / Nacht</span>
								<span class="room-spec">36 m²</span>
							</div>

							<div class="room-description">
								<p>
									Die Apartments bieten für zwei Personen eine komfortable
									Unterkunft auf 36 m². Jedes Apartment verfügt über separate
									Schlafzimmer, die Privatsphäre und Ruhe gewährleisten. Die
									Schlafzimmer sind mit einem luxuriösen Boxspringbett
									ausgestattet, das eine Größe von 180x 200cm hat und für
									erholsamen Schlaf sorgt. Das Bad ist modern und gut
									ausgestattet. Das Wohnzimmer lädt mit einem Flat TV zum
									Entspannen ein und geht nahtlos in den Essbereich über, der
									ausreichend Platz für gemütliche Mahlzeiten bietet. Eine gut
									ausgestattete Küchenzeile ermöglicht es den Gästen, sich
									selbst zu verpflegen. Darüber hinaus gehört zu jedem Apartment
									eine Terrasse, die zum Verweilen im Freien einlädt.
									Kostenloses WLAN mit Glasfaser sorgt für schnelle und
									zuverlässige Internetverbindungen.
								</p>
							</div>

							<div class="room-actions">
								<button
									class="details-button"
									@click="toggleDetails('apartment')"
								>
									<span class="details-icon">i</span>
									DETAILS & AUSSTATTUNG
								</button>

								<a href="#" class="booking-button"> APARTMENT BUCHEN </a>
							</div>
						</div>
					</div>

					<!-- Room item: STUDIO APARTMENT -->
					<div class="room-item">
						<div class="room-gallery">
							<div class="gallery-image-container">
								<img
									:src="rooms.studioApartment.images[studioApartmentImageIndex]"
									alt="Studio Apartment"
									class="gallery-image"
								/>

								<!-- Gallery navigation -->
								<button
									class="gallery-nav gallery-nav-prev"
									@click.prevent="prevImage('studioApartment')"
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
									class="gallery-nav gallery-nav-next"
									@click.prevent="nextImage('studioApartment')"
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
								<button
									class="gallery-fullscreen"
									@click.prevent="openFullscreen('studioApartment')"
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
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>

								<!-- Room type overlay -->
								<div class="room-overlay">
									<span class="room-category">Studio overview</span>
									<h2 class="room-name">Studio Apartment</h2>
								</div>
							</div>
						</div>

						<div class="room-info">
							<div class="room-specs">
								<span class="room-spec">1-2 Personen</span>
								<span class="room-spec">Ab 130,– / Nacht</span>
								<span class="room-spec">28 m²</span>
							</div>

							<div class="room-description">
								<p>
									Das Studio Apartment bietet auf einer großzügigen Fläche von
									circa 64 m² luxuriösen Komfort und moderne Annehmlichkeiten.
									Das Apartment verfügt über zwei gemütliche Schlafzimmer, die
									jeweils eine entspannende Nachtruhe garantieren. Im
									Hauptschlafzimmer befindet sich ein komfortables Boxspringbett
									mit den Maßen 180 x 200 cm, während das zweite Schlafzimmer
									ein ebenfalls bequemes Bett mit den Maßen 120 x 200 cm bietet.
									Das stilvoll eingerichtete Bad lädt mit seinen hochwertigen
									Armaturen und einer großzügigen Dusche zur Entspannung ein.
									Der Wohnbereich ist geschmackvoll dekoriert und bietet
									ausreichend Platz zum Entspannen und Verweilen. Ein Essbereich
									ist ebenfalls vorhanden und eignet sich perfekt für gemeinsame
									Mahlzeiten. Die vollwertige Küche ist mit modernen Geräten
									ausgestattet, darunter eine Spülmaschine, die den Aufenthalt
									noch angenehmer macht. So können Sie sich ganz auf Ihre
									Erholung konzentrieren, ohne sich um den Abwasch kümmern zu
									müssen. Eine Terrasse rundet das Angebot ab und bietet einen
									schönen Ort, um die frische Luft zu genießen oder gemütlich
									draußen zu sitzen. Das Apartment ist zudem mit drei Flat-TVs
									ausgestattet, sodass Sie in jedem Raum
									Unterhaltungsmöglichkeiten haben. Für eine schnelle und
									zuverlässige Internetverbindung sorgt das WLAN mit
									Glasfasertechnologie, das im gesamten Apartment verfügbar ist.
									Das Studio Apartment im Hotel Burgholz ist somit der ideale
									Rückzugsort für einen komfortablen und erholsamen Aufenthalt.
								</p>
							</div>

							<div class="room-actions">
								<button
									class="details-button"
									@click="toggleDetails('studioApartment')"
								>
									<span class="details-icon">i</span>
									DETAILS & AUSSTATTUNG
								</button>

								<a href="#" class="booking-button"> STUDIO BUCHEN </a>
							</div>
						</div>
					</div>

					<!-- Additional room items would go here following the same pattern -->
				</div>
			</ContentContainer>
		</section>

		<!-- Fullscreen gallery modal -->
		<div class="fullscreen-gallery" v-if="isFullscreenActive">
			<div class="fullscreen-content">
				<img
					:src="activeFullscreenImage"
					:alt="activeRoomName"
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

		<!-- Room details expanded section -->
		<div class="room-details-expanded" v-if="isDetailsActive">
			<ContentContainer>
				<div class="details-header">
					<h3>Details & Ausstattung: {{ activeRoomName }}</h3>
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
					<div
						class="details-column"
						v-for="(column, index) in activeRoomAmenities"
						:key="index"
					>
						<h4>{{ column.title }}</h4>
						<ul>
							<li v-for="(item, itemIndex) in column.items" :key="itemIndex">
								{{ item }}
							</li>
						</ul>
					</div>
				</div>
			</ContentContainer>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";

// Room gallery state
const landhausImageIndex = ref(0);
const winzerglueckImageIndex = ref(0);
const apartmentImageIndex = ref(0);
const studioApartmentImageIndex = ref(0);
const isFullscreenActive = ref(false);
const isDetailsActive = ref(false);
const activeRoomType = ref("");
const activeFullscreenImageIndex = ref(0);

// Room data
const rooms = {
	landhaus: {
		name: "Einzelzimmer",
		images: [
			new URL("@/assets/images/einzelzimmer1.jpg", import.meta.url).href,
			new URL("@/assets/images/einzelzimmer2.jpg", import.meta.url).href,
			new URL("@/assets/images/einzelzimmer3.jpg", import.meta.url).href,
		],
		amenities: [
			{
				title: "Zimmer",
				items: [
					"Doppelbett (180x200 cm)",
					"Sitzecke",
					"Klimaanlage",
					"Flachbild-TV",
					"Kostenfreies WLAN",
					"Telefon",
				],
			},
			{
				title: "Bad",
				items: [
					"Dusche",
					"WC",
					"Haartrockner",
					"Kosmetikspiegel",
					"Handtücher",
					"Pflegeprodukte",
				],
			},
			{
				title: "Service",
				items: [
					"Tägliche Reinigung",
					"Winzerfrühstücksbuffet inklusive",
					"Parkplatz am Hotel",
					"Gepäckservice",
					"Weckservice",
				],
			},
		],
	},
	winzerglueck: {
		name: "Doppelzimmer",
		images: [
			new URL("@/assets/images/doppelzimmer2.jpg", import.meta.url).href,
			new URL("@/assets/images/doppelzimmer.jpg", import.meta.url).href,
		],
		amenities: [
			{
				title: "Zimmer",
				items: [
					"Boxspringbett (180x200 cm)",
					"Sitzecke",
					"Klimaanlage",
					"Flachbild-TV",
					"Kostenfreies WLAN",
					"Telefon",
					"Minibar",
				],
			},
			{
				title: "Bad",
				items: [
					"Begehbare Dusche",
					"WC",
					"Haartrockner",
					"Kosmetikspiegel",
					"Handtücher",
					"Bademantel",
					"Pflegeprodukte",
				],
			},
			{
				title: "Service",
				items: [
					"Tägliche Reinigung",
					"Winzerfrühstücksbuffet inklusive",
					"Parkplatz am Hotel",
					"Gepäckservice",
					"Weckservice",
					"Wäscheservice",
				],
			},
		],
	},

	apartment: {
		name: "Apartment",
		images: [
			new URL("@/assets/images/apartment1.jpg", import.meta.url).href,
			new URL("@/assets/images/apartment2.jpg", import.meta.url).href,
			new URL("@/assets/images/apartment3.jpg", import.meta.url).href,
			new URL("@/assets/images/apartment4.jpg", import.meta.url).href,
		],
		amenities: [
			{
				title: "Wohnbereich",
				items: [
					"Separates Schlafzimmer",
					"Boxspringbett (180x200 cm)",
					"Wohnzimmer mit Sitzbereich",
					"Essbereich",
					"Voll ausgestattete Küchenzeile",
					"Flachbild-TV",
					"Kostenfreies WLAN mit Glasfaser",
					"Klimaanlage",
				],
			},
			{
				title: "Bad",
				items: [
					"Moderne Dusche",
					"WC",
					"Haartrockner",
					"Kosmetikspiegel",
					"Handtücher",
					"Bademantel",
					"Hochwertige Pflegeprodukte",
				],
			},
			{
				title: "Extras & Service",
				items: [
					"Eigene Terrasse",
					"Tägliche Reinigung",
					"Frühstück optional buchbar",
					"Kostenloser Parkplatz",
					"Gepäckservice",
					"Wäscheservice auf Anfrage",
					"Minibar",
				],
			},
		],
	},

	studioApartment: {
		name: "Studio Apartment",
		images: [
			new URL("@/assets/images/studio.jpg", import.meta.url).href,
			new URL("@/assets/images/studio2.jpg", import.meta.url).href,
			new URL("@/assets/images/studio3.jpg", import.meta.url).href,
      new URL("@/assets/images/studio4.jpg", import.meta.url).href,
      new URL("@/assets/images/studio5.jpg", import.meta.url).href,
		],
		amenities: [
			{
				title: "Wohn-/Schlafbereich",
				items: [
					"Offener Wohn- und Schlafbereich",
					"Boxspringbett (140x200 cm)",
					"Sitzecke",
					"Esstisch",
					"Flachbild-TV",
					"Kostenfreies WLAN mit Glasfaser",
					"Klimaanlage",
				],
			},
			{
				title: "Küche & Bad",
				items: [
					"Voll ausgestattete Küchenzeile",
					"Kühlschrank",
					"Kaffeemaschine",
					"Moderne Dusche",
					"WC",
					"Haartrockner",
					"Hochwertige Pflegeprodukte",
				],
			},
			{
				title: "Extras & Service",
				items: [
					"Balkon oder kleine Terrasse",
					"Tägliche Reinigung",
					"Frühstück optional buchbar",
					"Kostenloser Parkplatz",
					"Minibar",
					"Gepäckservice",
					"Wäscheservice auf Anfrage",
				],
			},
		],
	},
};

// Computed properties
const activeRoomName = computed(() => {
	if (!activeRoomType.value) return "";
	return rooms[activeRoomType.value]?.name || "";
});

const activeRoomImages = computed(() => {
	if (!activeRoomType.value) return [];
	return rooms[activeRoomType.value]?.images || [];
});

const activeFullscreenImage = computed(() => {
	if (!activeRoomType.value) return "";
	const images = activeRoomImages.value;
	return images[activeFullscreenImageIndex.value] || images[0];
});

const activeRoomAmenities = computed(() => {
	if (!activeRoomType.value) return [];
	return rooms[activeRoomType.value]?.amenities || [];
});

// Gallery navigation methods
const prevImage = (roomType: string) => {
	if (roomType === "landhaus") {
		const totalImages = rooms.landhaus.images.length;
		landhausImageIndex.value =
			(landhausImageIndex.value - 1 + totalImages) % totalImages;
	} else if (roomType === "winzerglueck") {
		const totalImages = rooms.winzerglueck.images.length;
		winzerglueckImageIndex.value =
			(winzerglueckImageIndex.value - 1 + totalImages) % totalImages;
	} else if (roomType === "apartment") {
		const totalImages = rooms.apartment.images.length;
		apartmentImageIndex.value =
			(apartmentImageIndex.value - 1 + totalImages) % totalImages;
	} else if (roomType === "studioApartment") {
		const totalImages = rooms.studioApartment.images.length;
		studioApartmentImageIndex.value =
			(studioApartmentImageIndex.value - 1 + totalImages) % totalImages;
	}
};

const nextImage = (roomType: string) => {
	if (roomType === "landhaus") {
		const totalImages = rooms.landhaus.images.length;
		landhausImageIndex.value = (landhausImageIndex.value + 1) % totalImages;
	} else if (roomType === "winzerglueck") {
		const totalImages = rooms.winzerglueck.images.length;
		winzerglueckImageIndex.value =
			(winzerglueckImageIndex.value + 1) % totalImages;
	} else if (roomType === "apartment") {
		const totalImages = rooms.apartment.images.length;
		apartmentImageIndex.value = (apartmentImageIndex.value + 1) % totalImages;
	} else if (roomType === "studioApartment") {
		const totalImages = rooms.studioApartment.images.length;
		studioApartmentImageIndex.value =
			(studioApartmentImageIndex.value + 1) % totalImages;
	}
};

const openFullscreen = (roomType: string) => {
	activeRoomType.value = roomType;

	// Set the correct image index based on room type
	if (roomType === "landhaus") {
		activeFullscreenImageIndex.value = landhausImageIndex.value;
	} else if (roomType === "winzerglueck") {
		activeFullscreenImageIndex.value = winzerglueckImageIndex.value;
	} else if (roomType === "apartment") {
		activeFullscreenImageIndex.value = apartmentImageIndex.value;
	} else if (roomType === "studioApartment") {
		activeFullscreenImageIndex.value = studioApartmentImageIndex.value;
	}

	isFullscreenActive.value = true;
	document.body.style.overflow = "hidden"; // Prevent scrolling
};

const closeFullscreen = () => {
	isFullscreenActive.value = false;
	document.body.style.overflow = ""; // Restore scrolling
};

const prevFullscreenImage = () => {
	const totalImages = activeRoomImages.value.length;
	activeFullscreenImageIndex.value =
		(activeFullscreenImageIndex.value - 1 + totalImages) % totalImages;
};

const nextFullscreenImage = () => {
	const totalImages = activeRoomImages.value.length;
	activeFullscreenImageIndex.value =
		(activeFullscreenImageIndex.value + 1) % totalImages;
};

// Details methods
const toggleDetails = (roomType: string) => {
	activeRoomType.value = roomType;
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

.zimmer-page {
	padding-top: 80px; // Account for fixed header
}

// Hero section styles (similar to homepage)
.hero-section {
	position: relative;
	width: 100%;
	height: 60vh;
	min-height: 400px;
	background-image: url("https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80");
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

// Rooms section
.rooms-section {
	padding: $spacing-section 0;

	.rooms-grid {
		display: flex;
		flex-direction: column;
		gap: $spacing-xxl;
	}

	.room-item {
		display: grid;
		grid-template-columns: 1fr;
		gap: $spacing-xl;

		@include responsive(min-lg) {
			grid-template-columns: 1fr 1fr;
		}
	}
}

// Room gallery styles - exactly matching reference
.room-gallery {
	position: relative;
	width: 100%;

	.gallery-image-container {
		position: relative;
		width: 100%;
		height: 400px;
		overflow: hidden;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	// Navigation controls - exact styling from reference image
	.gallery-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
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

		&-prev {
			left: 15px;
		}

		&-next {
			right: 15px;
		}

		svg {
			width: 20px;
			height: 20px;
		}
	}

	// Fullscreen button - exact styling from reference image
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

	// Room overlay - exact styling from reference image
	.room-overlay {
		position: absolute;
		bottom: 25px;
		left: 25px;
		color: white;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		z-index: 2;

		.room-category {
			display: block;
			font-size: 1rem;
			margin-bottom: 4px;
			position: relative;
			padding-left: 32px;

			&::before {
				content: "";
				position: absolute;
				left: 0;
				top: 50%;
				width: 24px;
				height: 1px;
				background-color: white;
			}
		}

		.room-name {
			font-size: 2.5rem;
			font-weight: 500;
			margin: 0;
			text-transform: uppercase;
		}
	}
}

// Room info section
.room-info {
	padding: $spacing-md 0;

	// Room specs - exact styling from reference image
	.room-specs {
		display: flex;
		gap: 24px;
		margin: 20px 0;

		.room-spec {
			font-size: 1rem;
			color: #666;
		}
	}

	// Room description
	.room-description {
		margin-bottom: 24px;

		p {
			margin: 0;
			line-height: 1.7;
			color: #666;
		}
	}

	// Action buttons
	.room-actions {
		display: flex;
		gap: 16px;
		margin-top: 24px;

		.details-button {
			display: inline-flex;
			align-items: center;
			gap: 8px;
			border: none;
			background: none;
			color: #666;
			font-size: 14px;
			font-weight: 500;
			cursor: pointer;
			padding: 0;

			.details-icon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 24px;
				height: 24px;
				border-radius: 50%;
				background-color: #666;
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

		.booking-button {
			display: inline-block;
			padding: 10px 24px;
			background-color: #555;
			color: white;
			text-decoration: none;
			font-size: 14px;
			font-weight: 500;
			transition: background-color $transition-speed ease;

			&:hover {
				background-color: $color-primary;
			}
		}
	}
}

// Fullscreen gallery modal - matches reference image 2
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

// Room details expanded
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

	.room-gallery {
		.gallery-image-container {
			height: 350px;
		}

		.room-overlay {
			.room-name {
				font-size: 30px;
			}
		}
	}
}

@include responsive(md) {
	.room-info {
		.room-specs {
			flex-wrap: wrap;
		}

		.room-actions {
			flex-wrap: wrap;
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

	.room-gallery {
		.gallery-image-container {
			height: 250px;
		}

		.gallery-nav,
		.gallery-fullscreen {
			width: 35px;
			height: 35px;

			svg {
				width: 16px;
				height: 16px;
			}
		}

		.room-overlay {
			bottom: 15px;
			left: 15px;

			.room-category {
				font-size: $font-size-base;
			}

			.room-name {
				font-size: 24px;
			}
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
