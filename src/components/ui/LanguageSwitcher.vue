<template>
	<div class="language-switcher">
		<button
			v-for="language in languages"
			:key="language.code"
			:class="'language-button'"
			:aria-label="`Switch to ${language.name}`"
		>
			{{ language.label }}
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// import { useI18n } from 'vue-i18n';
// import { useRouter, useRoute } from 'vue-router';
// import { setLanguage } from '@/i18n';

// const { locale } = useI18n();
// const router = useRouter();
// const route = useRoute();

const languages = ref([
	{ code: "de", label: "DEUTSCH", name: "German" },
	{ code: "en", label: "ENGLISCH", name: "English" },
]);

// // Check if a language is currently active
// const isCurrentLanguage = (code: string): boolean => {
//   return locale.value === code;
// };

// // Change the current language and update the URL
// const changeLanguage = (code: string): void => {
//   if (!isCurrentLanguage(code)) {
//     // Set language in i18n and localStorage
//     setLanguage(code as 'de' | 'en');

//     // Update URL to reflect language change
//     const { params, name, query, hash } = route;
//     router.push({
//       name: name as string,
//       params: {
//         ...params,
//         locale: code
//       },
//       query,
//       hash
//     });
//   }
// };
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.language-switcher {
	display: flex;
	align-items: center;

	.language-button {
		background: none;
		border: none;
		color: $color-white;
		cursor: pointer;
		font-size: $font-size-small;
		letter-spacing: 0.1em;
		padding: 0.5rem;
		position: relative;
		text-decoration: none;
		transition: all $transition-speed ease;

		&:not(:last-child) {
			margin-right: 0.5rem;

			&::after {
				content: "";
				position: absolute;
				right: -4px;
				top: 50%;
				transform: translateY(-50%);
				height: 1em;
				width: 1px;
				background-color: $color-white;
				opacity: 0.6;
			}
		}

		&.active {
			position: relative;
			font-weight: 500;

			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0.5rem;
				right: 0.5rem;
				height: 2px;
				background-color: $color-white;
			}
		}

		&:hover {
			opacity: 0.8;
		}
	}
}

@include responsive(sm) {
	.language-switcher {
		.language-button {
			font-size: 12px;
			padding: 0.3rem;
		}
	}
}
</style>
