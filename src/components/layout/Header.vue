<template>
	<header
		:class="[
			'hotel-header',
			{
				transparent: !isHeaderSolid,
				solid: isHeaderSolid,
				'not-home': !isHomePage,
			},
		]"
	>
		<!-- Left side - Menu button -->
		<div class="header-left">
			<button
				:class="['nav__menu', 'detect-nav', { 'menu--active': isMenuActive }]"
				@click="handleNav"
			>
				<span class="menu-text">MENÜ</span>
			</button>
		</div>

		<!-- Center - Hotel logo -->
		<div class="header-center">
			<router-link to="/" class="logo-link">
				<Logo />
			</router-link>
		</div>

		<!-- Right side - Icons -->
		<div class="header-right">
			<LanguageSwitcher class="header-language-switcher" />
			<!-- <div class="header-icons">
				<a href="#" class="icon-link">
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
							d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"
						></path>
						<rect x="9" y="9" width="12" height="12" rx="2"></rect>
					</svg>
				</a>
				<a href="tel:+123456789" class="icon-link">
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
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						></path>
					</svg>
				</a>
				<a href="#" class="icon-link">
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
				</a>
			</div> -->
		</div>

		<!-- Navigation panel that appears when menu is clicked -->
		<Navigation :is-active="isNavigationActive" @close="closeNav" />
	</header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import Logo from "@/components/ui/Logo.vue";
import Navigation from "@/components/layout/Navigation.vue";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher.vue";

const route = useRoute();

// Reactive state
const isMenuActive = ref(false);
const isNavigationActive = ref(false);
const isHeaderSolid = ref(false);

// Methods
const handleNav = () => {
	isMenuActive.value = !isMenuActive.value;
	isNavigationActive.value = !isNavigationActive.value;
};

const closeNav = () => {
	isMenuActive.value = false;
	isNavigationActive.value = false;
};

const clickOutsideNav = (e: MouseEvent) => {
	// Check if click was inside navigation elements
	const target = e.target as HTMLElement;
	if (
		target.classList.contains("detect-nav") ||
		target.closest(".detect-nav")
	) {
		return;
	}
	closeNav();
};

// Handle scroll for header transparency
const handleScroll = () => {
	if (window.scrollY > 100) {
		isHeaderSolid.value = true;
	} else {
		isHeaderSolid.value = false;
	}
};

const isHomePage = computed(() => route.name === "home");

// Close navigation when route changes
watch(
	() => route.fullPath,
	() => {
		closeNav();
	}
);

// Lifecycle hooks
onMounted(() => {
	window.addEventListener("click", clickOutsideNav);
	window.addEventListener("scroll", handleScroll);

	// Check initial scroll position
	handleScroll();
});

onUnmounted(() => {
	window.removeEventListener("click", clickOutsideNav);
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.hotel-header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	z-index: 1000;
	@include flex-between;
	padding: 0 $spacing-lg;
	transition: background-color $transition-speed ease,
		box-shadow $transition-speed ease;

	&.transparent {
		background-color: transparent;
		box-shadow: none;
		.menu-text,
		.icon-link {
			color: $color-white;
		}
	}

	&.not-home {
		.menu-text,
		.icon-link {
			color: $color-text-dark;
		}
	}

	&.solid {
		background-color: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(5px);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

		.menu-text,
		.icon-link {
			color: $color-text-dark;
		}
	}
}

.header-left,
.header-center,
.header-right {
	@include flex-center;
	height: 100%;
}

.header-left {
	flex: 1;
	justify-content: flex-start;

	.nav__menu {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		padding: $spacing-sm 0;

		.menu-text {
			font-size: $font-size-medium;
			font-weight: 500;
			letter-spacing: 0.1em;
			transition: color $transition-speed ease;
		}

		&.menu--active .menu-text {
			color: $color-primary;
			font-weight: 600;
		}
	}
}

.header-center {
	flex: 2;
	justify-content: center;
	overflow: hidden;
	.logo-link {
		text-decoration: none;
	}
}

.header-right {
	flex: 1;
	justify-content: flex-end;

	.header-icons {
		display: flex;
		gap: $spacing-lg;

		.icon-link {
			transition: color $transition-speed ease;

			&:hover {
				color: $color-primary;
			}

			svg {
				width: 22px;
				height: 22px;
			}
		}
	}
}

@include responsive(md) {
	.header-icons {
		gap: $spacing-md;
	}
}

@include responsive(sm) {
	.hotel-header {
		padding: 0 $spacing-sm;
	}

	.header-right .header-icons {
		gap: $spacing-sm;
	}
}
</style>
