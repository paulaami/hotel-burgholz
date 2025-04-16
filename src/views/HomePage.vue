<template>
	<div class="home-page">
		<HeroSection />
		<DescriptionSection :content="aboutContent" :image-first="false" />
		<DescriptionSection :content="hostsContent" :image-first="true" />
		<FeatureLinksSection />
	</div>
</template>

<script setup>
import { ref } from "vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import DescriptionSection from "@/components/sections/DescriptionSection.vue";
import FeatureLinksSection from "@/components/sections/FeatureLinksSection.vue";
import uberUnsImage from "@/assets/images/uber_uns.jpg";
import hostsImage from "@/assets/images/apartment1.jpg";
// Content for the "About Hotel" section
const aboutContent = ref({
	subtitle: "Über uns",
	title: "DAS HOTEL BURGHOLZ",
	paragraphs: [
		"Das Hotel Burgholz, ein im Winter 2013 fertiggestellter Neubau, bietet Ihnen eine ruhige Lage am Rande des Burgauer Waldes, dem Burgholz. Mit seiner modernen Architektur, hochwertigen Ausstattung und großzügigen Räumlichkeiten sorgt unser Hotel-Team dafür, dass Ihr Aufenthalt bei uns komfortabel und unvergesslich wird.",
		"Unser Hotel verfügt über ausreichend hoteleigene Parkplätze sowie eine Garage für Fahrräder und Motorräder, sodass Sie sich keine Gedanken um die Unterbringung Ihres Fahrzeugs machen müssen.",
		"Für Ihren Komfort bieten wir ein 24/7 Check-in-System, das sich direkt am Nachteingang befindet und Ihnen eine flexible An- und Abreise ermöglicht.",
	],
	// buttons: [
	// 	{ text: "ZIMMER", url: "#", type: "dark" },
	// 	{ text: "WEINHOTEL", url: "#", type: "light" },
	// ],
	image: {
		src: uberUnsImage,
		alt: "Nachtengang",
	},
});

// Content for the "Hosts" section
const hostsContent = ref({
	subtitle: "Willkommen in unserer Heimat",
	title: "IHRE GASTGEBER",
	paragraphs: [
		"Wir bieten Ihnen eine Vielzahl an Unterkünften, die Ihren individuellen Bedürfnissen gerecht werden:",
		"– moderne Einzel- und Doppelzimmer: Perfekt für Geschäftsreisende oder Paare.",
    "– Ein großzügiges Studio-Apartment: Ideal für Familien oder Gruppen, die gemeinsam reisen",
    "– Ein- und Zwei-Personen-Apartments: Für längere Aufenthalte oder Gäste, die sich etwas mehr Platz und Privatsphäre wünschen.",
	],
  buttons: [
		{ text: "ZIMMER", url: "#", type: "dark" },
		{ text: "KONTAKT", url: "#", type: "light" },
	],
	image: {
		src: hostsImage,
		alt: "Familie Huber - Ihre Gastgeber",
	},
});
</script>
