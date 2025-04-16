<template>
  <div class="hotel-logo">
    <img src="@/assets/images/burgholz-logo.jpg" alt="" srcset="">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.hotel-logo {
  text-align: center;
  width: 100px;
  
  .logo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo-name {
    font-family: $font-family-heading;
    font-size: $font-size-xxl;
    font-weight: 500;
    line-height: 1;
    transition: color $transition-speed ease;
  }
  
  .logo-type {
    font-size: $font-size-xl;
    font-weight: 600;
    letter-spacing: 0.2em;
    margin-top: $spacing-xs;
    transition: color $transition-speed ease;
  }
  
  .logo-subtitle {
    font-size: $font-size-small;
    font-weight: 400;
    margin-top: $spacing-xs;
    transition: color $transition-speed ease;
  }
}

// Additional styles in the parent component control colors based on header state
:deep(.solid) {
  .logo-name {
    color: $color-text-dark;
  }
  
  .logo-type {
    color: $color-primary;
  }
  
  .logo-subtitle {
    color: $color-text-light;
  }
}

:deep(.transparent) {
  .logo-name, .logo-type, .logo-subtitle {
    color: $color-white;
  }
}

@include responsive(md) {
  .hotel-logo {
    .logo-name {
      font-size: $font-size-xl;
    }
    
    .logo-type {
      font-size: 18px;
    }
    
    .logo-subtitle {
      font-size: 10px;
    }
  }
}

@include responsive(sm) {
  .hotel-logo {
    .logo-name {
      font-size: 18px;
    }
    
    .logo-type {
      font-size: 16px;
    }
    
    .logo-subtitle {
      font-size: 8px;
    }
  }
}
</style>