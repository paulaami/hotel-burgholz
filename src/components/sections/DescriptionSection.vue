<template>
	<section class="hotel-description" ref="sectionRef">
		<ContentContainer>
			<div class="description-content" :class="{ 'image-first': imageFirst }">
				<div class="description-text" :class="{ 'animate': isVisible }">
					<p class="subtitle">{{ content.subtitle }}</p>
					<h2 class="title">{{ content.title }}</h2>
					<div class="description">
						<p v-for="(paragraph, index) in content.paragraphs" :key="index">
							{{ paragraph }}
						</p>
					</div>
					<div class="action-buttons">
						<ActionButton
							v-for="button in content.buttons"
							:key="button.text"
							:type="button.type"
							:text="button.text"
							:url="button.url"
						/>
					</div>
				</div>
				<div class="description-image" :class="{ 'animate': isVisible }">
					<img :src="content.image.src" :alt="content.image.alt" />
				</div>
			</div>
		</ContentContainer>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ActionButton from "@/components/ui/ActionButton.vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";

defineProps({
	content: {
		type: Object,
		required: true
	},
	imageFirst: {
		type: Boolean,
		default: false
	}
});

const sectionRef = ref(null);
const isVisible = ref(false);

// Function to check if the element is in viewport
const checkVisibility = () => {
	if (!sectionRef.value) return;
	
	const rect = sectionRef.value.getBoundingClientRect();
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	
	// Element is considered visible when its top is in the bottom 80% of the viewport
	if (rect.top <= windowHeight * 0.8) {
		isVisible.value = true;
		// Remove scroll listener once animation has triggered
		window.removeEventListener('scroll', checkVisibility);
	}
};

onMounted(() => {
	// Check visibility on mount (in case section is already in view)
	checkVisibility();
	// Add scroll listener
	window.addEventListener('scroll', checkVisibility);
});

onUnmounted(() => {
	// Clean up scroll listener
	window.removeEventListener('scroll', checkVisibility);
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.hotel-description {
	padding: $spacing-section 0;
	background-color: $color-white;
}

.description-content {
	display: flex;
	align-items: center;
	gap: $spacing-xxl;
	&.image-first {
		flex-direction: row-reverse;
	}
}

.description-text {
	flex: 3;
	opacity: 0;
	transform: translateX(-50px);
	transition: opacity 0.8s ease, transform 0.8s ease;
	
	&.animate {
		opacity: 1;
		transform: translateX(0);
	}
	
	// When image is first, text should slide from right
	.image-first & {
		transform: translateX(50px);
		
		&.animate {
			transform: translateX(0);
		}
	}

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
	gap: $spacing-sm;
	margin-top: $spacing-xl;
}

.description-image {
	flex: 2;
	opacity: 0;
	transform: translateX(50px);
	transition: opacity 0.8s ease, transform 0.8s ease;
	transition-delay: 0.2s; // Slight delay for staggered effect
	
	&.animate {
		opacity: 1;
		transform: translateX(0);
	}
	
	// When image is first, image should slide from left
	.image-first & {
		transform: translateX(-50px);
		
		&.animate {
			transform: translateX(0);
		}
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 4px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}
}

@include responsive(lg) {
	.description-content {
		flex-direction: column-reverse;
		gap: $spacing-xxl;
	}

	.description-text,
	.description-image {
		flex: 1;
		width: 100%;
	}
	
	// Reset the animation directions for mobile layout
	.description-text {
		transform: translateY(30px);
		
		.image-first & {
			transform: translateY(30px);
		}
		
		&.animate, .image-first &.animate {
			transform: translateY(0);
		}
	}
	
	.description-image {
		transform: translateY(30px);
		
		.image-first & {
			transform: translateY(30px);
		}
		
		&.animate, .image-first &.animate {
			transform: translateY(0);
		}
	}

	.description-text .title {
		font-size: 30px;
	}
}

@include responsive(md) {
	.hotel-description {
		padding: 60px 0;
	}

	.description-text {
		.subtitle {
			font-size: $font-size-medium;
		}

		.title {
			font-size: 26px;
		}
	}

	.action-buttons {
		flex-direction: column;
		gap: $spacing-sm;
		max-width: 200px;
	}
}

@include responsive(sm) {
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
}
</style>