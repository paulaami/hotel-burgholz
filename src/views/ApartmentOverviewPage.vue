<template>
	<div class="apartment-page">
		<!-- Hero section -->
		<section class="hero-section fullwidth-section">
			<div class="hero-content">
				<ContentContainer>
					<h1 class="hero-title">APARTMENTS</h1>
					<p class="hero-subtitle">Großzügiger Wohnkomfort im Schwarzwald</p>
				</ContentContainer>
			</div>
		</section>

		<!-- Apartment listings section -->
		<section class="apartments-section">
			<ContentContainer>
				<div class="apartments-grid">
					<!-- Apartment cards -->
					<div
						class="apartment-card"
						v-for="(apartment, key) in apartments"
						:key="key"
					>
						<router-link
							:to="'/zimmer/apartment/' + key"
							class="apartment-image-link"
						>
							<div class="apartment-image">
								<img
									:src="apartment.images[0]"
									:alt="apartment.name"
									class="gallery-image"
								/>
								<div class="apartment-overlay">
									<span class="apartment-category" v-if="apartment.category">{{
										apartment.category
									}}</span>
									<h2 class="apartment-name">{{ apartment.name }}</h2>
								</div>
							</div>
						</router-link>
						<div class="apartment-info">
							<div class="apartment-description">
								<p>{{ truncatedDescription(apartment.description) }}</p>
							</div>

							<div class="apartment-actions">
								<router-link
									:to="'/zimmer/apartment/' + key"
									class="read-more-button"
								>
									read more
								</router-link>
								<router-link
									:to="'/buchen/apartment/' + key"
									class="booking-button"
								>
									Book
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</ContentContainer>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";

// Truncate description to two lines (approximately 150 characters)
const truncatedDescription = (text) => {
	const maxLength = 150;
	if (text.length <= maxLength) return text;
	return text.substring(0, maxLength) + "...";
};

// Apartment data
const apartments = {
	einzelzimmer: {
		name: "Apartment Einzelzimmer",
		category: "Apartment",
		images: [
			new URL(
				"@/assets/images/apartament/einzelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-100.jpg",
				import.meta.url
			).href,
		],
		description:
			"Komfortables Apartment mit separatem Schlafzimmer für eine Person. Ausgestattet mit Küchenzeile, Wohnbereich und eigener Terrasse für maximalen Komfort und Privatsphäre.",
		capacity: "1 Person",
		price: "Ab 140,– €",
		size: "30 m²",
	},
	doppelzimmer: {
		name: "Apartment Doppelzimmer",
		category: "Apartment",
		images: [
			new URL(
				"@/assets/images/apartament/doppelzimmer/Hotel Burgholz_Uschi Kitschke Fotografie-88.jpg",
				import.meta.url
			).href,
			,
		],
		description:
			"Geräumiges Apartment mit separatem Schlafzimmer für zwei Personen. Mit luxuriösem Boxspringbett, Küchenzeile, Wohnbereich und eigener Terrasse für einen komfortablen Aufenthalt.",
		capacity: "2 Personen",
		price: "Ab 160,– €",
		size: "36 m²",
	},
};
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
	background-image: url("@/assets/images/apartament/Hotel Burgholz_Uschi Kitschke Fotografie-85.jpg");
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

// Apartments section
.apartments-section {
	padding: $spacing-section 0;
	background-color: #f8f8f8;

	.apartments-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: $spacing-xl;

		@include responsive(min-md) {
			grid-template-columns: repeat(2, 1fr);
			gap: $spacing-lg;
		}
	}
}

// Apartment card styles (same as room cards)
.apartment-card {
	display: flex;
	flex-direction: column;
	background-color: $color-white;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	margin-bottom: $spacing-md;

	.apartment-image-link {
		text-decoration: none;
		display: block;
	}

	.apartment-image {
		position: relative;
		width: 100%;
		padding-bottom: 70%; /* Aspect ratio matching reference design */
		overflow: hidden;
		cursor: pointer;

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.5s ease;
		}

		&:hover img {
			transform: scale(1.05);
		}

		.apartment-overlay {
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			padding: $spacing-md $spacing-md $spacing-lg;
			text-align: left;
			background: linear-gradient(
				to top,
				rgba(0, 0, 0, 0.7),
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0)
			);

			.apartment-category {
				display: block;
				font-size: 0.9rem;
				margin-bottom: 4px;
				position: relative;
				padding-left: 32px;
				color: $color-white;

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

			.apartment-name {
				color: $color-white;
				font-size: 1.6rem;
				font-weight: 400;
				margin: 0;
				text-transform: none;
			}
		}
	}

	.apartment-info {
		padding: $spacing-md;
		flex-grow: 1;
		display: flex;
		flex-direction: column;

		.apartment-description {
			flex-grow: 1;
			margin-bottom: $spacing-md;

			p {
				margin: 0;
				line-height: 1.5;
				color: #666;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}

		.apartment-actions {
			display: flex;
			gap: $spacing-md;

			.read-more-button,
			.booking-button {
				flex: 1;
				padding: $spacing-sm;
				text-align: center;
				text-decoration: none;
				font-weight: 400;
				font-size: 0.9rem;
				letter-spacing: 0.5px;
				border: 1px solid $color-primary;
				transition: all 0.3s ease;
				text-transform: none;
			}

			.read-more-button {
				color: $color-primary;
				background-color: transparent;

				&:hover {
					background-color: $color-primary;
					color: $color-white;
				}
			}

			.booking-button {
				color: $color-primary;
				background-color: transparent;

				&:hover {
					background-color: $color-primary;
					color: $color-white;
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
}

@include responsive(md) {
	.apartment-card {
		.apartment-info {
			.apartment-actions {
				padding: $spacing-sm 0;
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

	.apartment-card {
		.apartment-image {
			.apartment-overlay {
				.apartment-name {
					font-size: 1.3rem;
				}
			}
		}

		.apartment-info {
			.apartment-actions {
				flex-direction: column;
				gap: $spacing-sm;
			}
		}
	}
}
</style>
