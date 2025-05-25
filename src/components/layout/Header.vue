<template>
	<div>
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
					<div class="hamburger-icon">
						<span :class="['hamburger-line', { active: isMenuActive }]"></span>
						<span :class="['hamburger-line', { active: isMenuActive }]"></span>
						<span :class="['hamburger-line', { active: isMenuActive }]"></span>
					</div>
					<span class="menu-text">{{ isMenuActive ? "ZURÜCK" : "MENÜ" }}</span>
				</button>
			</div>

			<!-- Right side - Icons -->
			<div class="header-right">
				<LanguageSwitcher class="header-language-switcher" />
			</div>

			<!-- Navigation panel that appears when menu is clicked -->
			<Navigation :is-active="isNavigationActive" @close="closeNav" />
		</header>

		<!-- Center - Hotel logo (MOVED OUTSIDE THE FIXED HEADER) -->
		<div class="header-center">
			<router-link to="/" class="logo-link">
				<Logo
					:class="[
						{
							'not-home-logo': !isHomePage,
						},
					]"
				/>
			</router-link>
		</div>
	</div>
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
	// Scroll to top before opening menu
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

	// Use setTimeout to ensure menu opens after scroll animation completes
	setTimeout(() => {
		isMenuActive.value = !isMenuActive.value;
		isNavigationActive.value = !isNavigationActive.value;

		// Add overflow hidden to body when menu is active to prevent scrolling
		if (isMenuActive.value) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, 300); // Adjust timing as needed based on your scroll animation duration
};

const closeNav = () => {
	isMenuActive.value = false;
	isNavigationActive.value = false;
	document.body.style.overflow = "";
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
	document.body.style.overflow = "";
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
	height: 123px;
	z-index: 1000;
	@include flex-between;
	padding: 0 $spacing-lg;
	transition: background-color $transition-speed ease,
		box-shadow $transition-speed ease;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);

	&.transparent {
		background-color: transparent;
		box-shadow: none;
		.menu-text {
			color: $color-white;
		}
		.hamburger-line {
			background-color: $color-white;
		}
		:deep(.social-icon) {
			color: $color-white;
		}
	}

	&.not-home {
		.menu-text {
			// color: $color-text-dark;
		}
		.hamburger-line {
			// background-color: $color-text-dark;
		}
		:deep(.social-icon) {
			// color: $color-text-dark;
		}
	}

	&.solid {
		background-color: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(5px);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

		.menu-text {
			color: $color-text-dark;
		}
		.hamburger-line {
			background-color: $color-text-dark;
		}
		:deep(.social-icon) {
			color: $color-text-dark;
		}
	}
}

.not-home {
	height: 80px;
	.hotel-logo {
		max-width: 600px;
	}
}

.header-left,
.header-center,
.header-right {
	@include flex-center;
	height: auto;
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
		gap: $spacing-sm;

		.hamburger-icon {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 24px;
			height: 16px;
			position: relative;

			.hamburger-line {
				display: block;
				width: 100%;
				height: 2px;
				transition: all $transition-speed ease;

				&.active {
					&:nth-child(1) {
						transform: translateY(7px) rotate(45deg);
					}

					&:nth-child(2) {
						opacity: 0;
					}

					&:nth-child(3) {
						transform: translateY(-7px) rotate(-45deg);
					}
				}
			}
		}

		.menu-text {
			font-size: $font-size-medium;
			font-weight: 500;
			letter-spacing: 0.1em;
			transition: color $transition-speed ease;
		}

		&.menu--active .menu-text {
			font-weight: 600;
		}
	}
}

.header-center {
	position: absolute;
	top: 80px;
	left: 51%;
	transform: translateX(-50%);
	flex: 2;
	justify-content: center;
	overflow: hidden;
	z-index: 998; /* Below the navigation but above other content */
	.logo-link {
		text-decoration: none;
	}
}

.header-right {
	flex: 1;
	justify-content: flex-end;
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

//Media query for desktop view (992px and above)
@media (min-width: 992px) {
	.header-center {
		top: -35px;
	}
	.hotel-header {
		border-bottom: none;
	}

	.hotel-header.solid {
		height: 80px;
	}
}
</style>
