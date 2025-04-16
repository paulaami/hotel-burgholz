<template>
  <a :href="url" class="feature-card">
    <div class="feature-image-container">
      <img :src="image" :alt="title" class="feature-image" />
      <div class="feature-overlay"></div>
    </div>
    <div class="feature-content">
      <span class="feature-subtitle">{{ subtitle }}</span>
      <h3 class="feature-title">{{ title }}</h3>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  image: string;
  url: string;
}>();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.feature-card {
  display: block;
  text-decoration: none;
  color: $color-white;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow $transition-speed ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
}

.feature-image-container {
  position: relative;
  overflow: hidden;
  height: 400px;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform $transition-speed-slow ease, filter $transition-speed-slow ease;
}

.feature-card:hover .feature-image {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.feature-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%);
  z-index: 1;
}

.feature-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: $spacing-lg;
  z-index: 2;
  text-align: left;
}

.feature-subtitle {
  font-size: $font-size-base;
  font-weight: 300;
  display: block;
  margin-bottom: $spacing-xs;
  color: rgba(255, 255, 255, 0.9);
}

.feature-title {
  font-size: $font-size-xl;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@include responsive(lg) {
  .feature-image-container {
    height: 350px;
  }
}

@include responsive(md) {
  .feature-image-container {
    height: 300px;
  }
}

@include responsive(sm) {
  .feature-image-container {
    height: 250px;
  }
  
  .feature-title {
    font-size: $font-size-large;
  }
  
  .feature-subtitle {
    font-size: $font-size-small;
  }
  
  .feature-content {
    padding: $spacing-md;
  }
}
</style>