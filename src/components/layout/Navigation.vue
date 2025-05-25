<template>
	<div :class="['navigation', 'detect-nav', { navigation__active: isActive }]">
		<div class="navigation__overlay detect-nav">
			<div class="nav__container detect-nav">
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

				<!-- Icons in the menu -->
				<div class="menu__icons detect-nav">
					<a href="https://www.instagram.com" target="_blank" class="menu-icon">
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
					<a href="https://www.facebook.com" target="_blank" class="menu-icon">
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
					<a
						href="https://wa.me/yourphonenumber"
						target="_blank"
						class="menu-icon"
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
							<path
								d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
							></path>
						</svg>
					</a>
				</div>
			</div>
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
	{ text: "Energy Star", url: "/energy-star", route: "energy-star" },
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
	top: 80px; // Height of the header
	left: 0;
	width: 100%;
	height: calc(100vh - 80px); // Full height minus header
	z-index: 999;
	opacity: 0;
	visibility: hidden;
	transition: opacity $transition-speed ease, visibility $transition-speed ease;
	overflow-y: auto;

	&__active {
		opacity: 1;
		visibility: visible;
	}

	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(51, 51, 51, 0.6);
		-webkit-backdrop-filter: blur(15px);
		backdrop-filter: blur(15px);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.nav__container {
		width: 100%;
		padding: $spacing-xl;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.nav__list {
		list-style: none;
		padding: 0;
		margin: 0 0 $spacing-xl;
		text-align: center;
		width: 100%;

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

	.menu__icons {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: $spacing-xl;
		gap: $spacing-xl;

		.menu-icon {
			display: flex;
			color: $color-white;

			svg {
				width: 28px;
				height: 28px;
			}

			&:hover {
				color: $color-primary;
			}
		}
	}
}

// Media query for desktop layout (992px and above)
@media (min-width: 992px) {
	.navigation {
		.nav__list {
			&-item {
				.nav__link {
					font-size: $font-size-xl;
				}
			}
		}
	}
}
</style>
