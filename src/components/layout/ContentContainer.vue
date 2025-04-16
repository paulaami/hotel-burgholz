<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.content-container {
  max-width: $content-max-width;
  margin: 0 auto;
  padding: 0 $spacing-xl;
  width: 100%;
  
  @include responsive(md) {
    padding: 0 $spacing-lg;
  }
  
  @include responsive(sm) {
    padding: 0 $spacing-md;
  }
}
</style>