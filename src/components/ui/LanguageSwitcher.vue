<template>
	<div class="nav__icons">
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
    <a href="https://wa.me/yourphonenumber" target="_blank" class="social-icon">
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
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
	</div>
</template>

<script setup lang="ts">
// Script content remains empty as we're not using any language switching logic
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.nav__icons {
  display: flex;
  align-items: center;

  .social-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    position: relative;
    text-decoration: none;
    transition: all $transition-speed ease;

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover {
      opacity: 0.8;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
}

@include responsive(sm) {
  .nav__icons {
    .social-icon {
      padding: 0.3rem;
      
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>