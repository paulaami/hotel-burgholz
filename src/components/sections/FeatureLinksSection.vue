<template>
	<section class="feature-links">
		<ContentContainer>
			<div class="feature-links-grid">
				<FeatureCard
					v-for="feature in features"
					:key="feature.title"
					:title="feature.title"
					:subtitle="feature.subtitle"
					:image="feature.image"
					:url="feature.url"
				/>
			</div>
		</ContentContainer>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FeatureCard from "@/components/ui/FeatureCard.vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";
import zimmer from "@/assets/images/apartment1.jpg";
import bike from "@/assets/images/bike.jpg";
import restaurant from "@/assets/images/restaurant.jpg";


// This could be loaded from an API or CMS
const features = ref([
	{
		title: "ZIMMER",
		subtitle: "Wohlfühlen",
		image: zimmer,
		url: "#zimmer",
	},
	{
		title: "UMGEBUNG",
		subtitle: "unsere Fahrradtouren",
		image: bike,
		url: "#umgebung",
	},
	{
		title: "FRUHSTUCK",
		subtitle: "Genießen",
		image:
    restaurant,
		url: "#restaurant",
	},
]);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.feature-links {
	padding: $spacing-section 0;
	background-color: $color-background-light;
}

.feature-links-grid {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: $spacing-xl;
}

@include responsive(min-md) {
	.feature-links-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@include responsive(min-lg) {
	.feature-links-grid {
		grid-template-columns: repeat(3, 1fr);
	}
}
</style>
