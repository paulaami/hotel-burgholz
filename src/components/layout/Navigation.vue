<template>
	<div :class="['navigation', 'detect-nav', { navigation__active: isActive }]">
		<ul class="nav__list detect-nav">
			<li
				class="nav__list-item detect-nav"
				v-for="item in navigationItems"
				:key="item.text"
			>
				<router-link
					:to="item.url"
					class="nav__link"
					:class="{ active: isActiveRoute(item.route) }"
				>
					{{ item.text }}
				</router-link>
			</li>
		</ul>
		<div class="nav__icons detect-nav">
			<a href="https://www.instagram.com" target="_blank" class="social-icon">
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
					<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
					<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
				</svg>
			</a>
			<a href="https://www.facebook.com" target="_blank" class="social-icon">
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
					<path
						d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
					></path>
				</svg>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

defineProps<{
	isActive: boolean;
}>();

defineEmits<{
	(e: "close"): void;
}>();

const navigationItems = [
	{ text: "Home", url: "/", route: "home" },
	{ text: "Zimmer", url: "/zimmer", route: "room" },
	{ text: "Tagung", url: "/tagung", route: "restaurant" },
	{ text: "Bike Tours", url: "/bike-tours", route: "bike-tours" },
	// { text: "Weinkeller", url: "/weinkeller", route: "weinkeller" },
	{ text: "Kontakt", url: "/kontakt", route: "kontakt" },
];

// Function to check if the current route matches a navigation item
const isActiveRoute = (routeName: string) => {
	// Check the current route name or meta.activeMenu
	if (route.name === routeName) {
		return true;
	}

	// Check if the route has meta data for active menu
	return route.meta.activeMenu === routeName;
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.navigation {
	position: fixed;
	top: 80px;
	left: 0;
	width: 100%;
	background-color: #333;
	padding: $spacing-xxl 0;
	opacity: 0;
	visibility: hidden;
	transition: opacity $transition-speed ease, visibility $transition-speed ease;

	&__active {
		opacity: 1;
		visibility: visible;
	}

	.nav__list {
		list-style: none;
		padding: 0;
		margin: 0;
		text-align: center;

		&-item {
			padding: $spacing-sm 0;

			.nav__link {
				text-decoration: none;
				color: $color-white;
				font-size: $font-size-xl;
				letter-spacing: 0.1em;
				transition: color $transition-speed-fast ease;

				&:hover,
				&.active {
					color: $color-primary;
				}
			}
		}
	}

	.nav__icons {
		@include flex-center;
		margin-top: $spacing-xl;
		gap: $spacing-lg;

		.social-icon {
			display: flex;
			color: $color-white;

			svg {
				width: 24px;
				height: 24px;
			}

			&:hover {
				color: $color-primary;
			}
		}
	}
}
</style>
