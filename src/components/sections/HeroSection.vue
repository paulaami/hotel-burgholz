<template>
	<section class="hero-section fullwidth-section">
		<!-- Navigation arrows for slider functionality -->
		<button class="slider-arrow slider-arrow-left" @click="prevSlide">
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
		<button class="slider-arrow slider-arrow-right" @click="nextSlide">
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

		<!-- Slide indicators -->
		<div class="slide-indicators">
			<span
				v-for="(_, index) in slides"
				:key="index"
				:class="['indicator', { active: currentSlide === index }]"
				@click="setSlide(index)"
			></span>
		</div>

		<!-- Slides -->
		<div class="slides-container">
			<div
				v-for="(slide, index) in slides"
				:key="index"
				:class="['slide', { active: currentSlide === index }]"
				:style="{
					'background-image': `url(${slide.image})`,
					'z-index': currentSlide === index ? 1 : 0,
				}"
			></div>
		</div>

		<!-- Hero content - seasonal message -->
		<div class="hero-content">
			<ContentContainer>
				<h1 class="hero-title">{{ heroContent.title }}</h1>
				<p class="hero-subtitle">{{ heroContent.subtitle }}</p>
			</ContentContainer>
		</div>

		<!-- Action buttons -->
		<div class="hero-actions">
			<ContentContainer>
				<a
					v-for="button in heroContent.buttons"
					:key="button.text"
					:href="button.url"
					class="hero-button"
				>
					{{ button.text }}
				</a>
			</ContentContainer>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";
// import { useI18n } from 'vue-i18n';
// const { t } = useI18n();
// Hero content
const heroContent = ref({
	title: "Hotel Burgholz",
	subtitle: "Herzlich Willkommen!",
	buttons: [
		{ text: "Zimmer", url: "#" },
		{ text: "Tagung", url: "#" },
		{ text: "Kontakt", url: "#" },
	],
});

// Slide images and configuration
import heroImage1 from "@/assets/images/burgholz_hero.jpg";
import heroImage2 from "@/assets/images/burgholz_hero2.jpg";
import heroImage3 from "@/assets/images/burgholz_hero3.jpg";

const slides = ref([
	{
		image: heroImage1,
	},
	{
		image: heroImage2,
	},
	{
		image: heroImage3,
	},
]);

const currentSlide = ref(0);
const autoSlideInterval = ref<number | null>(null);
const slideInterval = 8000; // Time between auto slides in ms

// Set slide by index
const setSlide = (index: number) => {
	currentSlide.value = index;
	resetAutoSlideTimer();
};

// Slide functionality
const prevSlide = () => {
	const prevIndex =
		(currentSlide.value - 1 + slides.value.length) % slides.value.length;
	currentSlide.value = prevIndex;
	resetAutoSlideTimer();
};

// Next slide function - cleaner transition
const nextSlide = () => {
	const nextIndex = (currentSlide.value + 1) % slides.value.length;
	currentSlide.value = nextIndex;
	resetAutoSlideTimer();
};

// Auto-slide functionality
const startAutoSlide = () => {
	autoSlideInterval.value = window.setInterval(() => {
		nextSlide();
	}, slideInterval);
};

const resetAutoSlideTimer = () => {
	if (autoSlideInterval.value) {
		clearInterval(autoSlideInterval.value);
	}
	startAutoSlide();
};

// Lifecycle hooks
onMounted(() => {
	startAutoSlide();
});

onBeforeUnmount(() => {
	if (autoSlideInterval.value) {
		clearInterval(autoSlideInterval.value);
	}
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.hero-section {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	color: $color-white;
}

.slides-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
}

.slide {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	opacity: 0;
	transition: opacity 1.8s ease;
	transform: scale(1);
	will-change: opacity, transform;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
	}

	&.active {
		opacity: 1;
		animation: slowZoomIn 8s ease-out forwards;
	}
}

// Slide indicators
.slide-indicators {
	position: absolute;
	bottom: $spacing-xl;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: $spacing-sm;
	z-index: 3;

	.indicator {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.4);
		cursor: pointer;
		transition: all $transition-speed ease;

		&.active {
			background-color: $color-white;
			transform: scale(1.2);
		}

		&:hover {
			background-color: rgba(255, 255, 255, 0.7);
		}
	}
}

.hero-content {
	position: relative;
	z-index: 2;
	text-align: center;
	margin-bottom: $spacing-xxl;
	animation: fadeUp 1.2s ease-out 0.3s both;

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

.hero-actions {
	display: flex;
	gap: $spacing-md;
	margin-bottom: $spacing-section;
	position: relative;
	z-index: 2;
	animation: fadeUp 1.2s ease-out 0.6s both;

	.hero-button {
		display: inline-block;
		padding: $spacing-sm $spacing-lg;
		background-color: rgba(255, 255, 255, 0.2);
		border: 1px solid $color-white;
		color: $color-white;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: $font-size-base;
		transition: all $transition-speed ease;
		margin-right: 10px;

		&:hover {
			background-color: $color-primary;
			color: $color-white;
			border-color: $color-primary;
		}
	}
}

.slider-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(0, 0, 0, 0.2);
	border: 1px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	color: $color-white;
	cursor: pointer;
	z-index: 2;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all $transition-speed ease;

	&:hover {
		background: rgba(0, 0, 0, 0.4);
	}

	&-left {
		left: $spacing-lg;
	}

	&-right {
		right: $spacing-lg;
	}

	svg {
		width: 30px;
		height: 30px;
	}
}

// Animation keyframes
@keyframes fadeUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes zoomIn {
	from {
		transform: scale(1.1);
	}
	to {
		transform: scale(1);
	}
}

@keyframes slowZoomIn {
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(1.08);
	}
}

// Initial page load animation - removed as it's unnecessary now

@include responsive(lg) {
	.hero-content {
		.hero-title {
			font-size: 32px;
		}

		.hero-subtitle {
			font-size: $font-size-medium;
		}
	}
}

@include responsive(md) {
	.hero-actions {
		flex-direction: column;
		gap: $spacing-sm;
	}
}

@include responsive(sm) {
	.hero-content {
		.hero-title {
			font-size: 28px;
		}

		.hero-subtitle {
			font-size: $font-size-base;
		}
	}

	.slider-arrow {
		width: 40px;
		height: 40px;

		svg {
			width: 24px;
			height: 24px;
		}

		&-left {
			left: $spacing-sm;
		}

		&-right {
			right: $spacing-sm;
		}
	}

	.hero-actions {
		width: 100%;
		padding: 0 $spacing-md;

		.content-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			row-gap: $spacing-md;
		}

		.hero-button {
			min-width: 120px;
			text-align: center;
			padding: $spacing-sm $spacing-md;
			margin-right: $spacing-sm;

			&:nth-child(1),
			&:nth-child(2) {
				margin-bottom: 0;
			}

			&:nth-child(2) {
				margin-right: 0;
			}

			&:nth-child(3) {
				flex-basis: 100%;
				margin-right: 0;
				max-width: 160px;
			}
		}
	}
}
</style>
