<template>
  <a :href="url" :class="['action-button', type]">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  url: string;
  type: 'dark' | 'light';
}>();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.action-button {
  display: inline-block;
  padding: $spacing-sm $spacing-xl;
  text-decoration: none;
  font-size: $font-size-base;
  font-weight: 500;
  letter-spacing: 0.1em;
  transition: all $transition-speed ease;
  text-align: center;
  
  &.dark {
    background-color: $color-primary;
    color: $color-white;
    
    &:hover {
      background-color: $color-primary-dark;
    }
  }
  
  &.light {
    background-color: transparent;
    color: $color-text-dark;
    border: 1px solid $color-primary;
    
    &:hover {
      background-color: $color-primary;
      color: $color-white;
    }
  }
}
</style>