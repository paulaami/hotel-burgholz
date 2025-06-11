<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
  if (target.classList.contains('detect-nav') || target.closest('.detect-nav')) {
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

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('click', clickOutsideNav);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('click', clickOutsideNav);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Hero section with background image -->
  <div class="hero-section">
    <!-- Navigation arrows for slider functionality -->
    <button class="slider-arrow slider-arrow-left">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="slider-arrow slider-arrow-right">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    
    <!-- Hero content - seasonal message -->
    <div class="hero-content">
      <h1 class="hero-title">Hotel Burgholz</h1>
      <p class="hero-subtitle">Herzlich Willkommen</p>
    </div>
    
    <!-- Action buttons -->
    <div class="hero-actions">
      <a href="/zimmer" class="hero-button">Unsere Zimmer</a>
      <a href="/tagung" class="hero-button">Tagung</a>
      <a href="/kontakt" class="hero-button">Kontakt</a>
    </div>
  </div>

  <header :class="['hotel-header', { 'transparent': !isHeaderSolid, 'solid': isHeaderSolid }]">
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
      <div class="hotel-logo">
        <div class="logo-text">
          <span class="logo-name">Hotel</span>
          <span class="logo-type">BURGHOLZ</span>
          <span class="logo-subtitle">Business & Bike Hotel – Kreuzau-Stockheim</span>
        </div>
      </div>
    </div>

    <!-- Right side - Icons -->
    <div class="header-right">
      <div class="header-icons">
        <a href="#" class="icon-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"></path>
            <rect x="9" y="9" width="12" height="12" rx="2"></rect>
          </svg>
        </a>
        <a href="tel:+123456789" class="icon-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
        <a href="#" class="icon-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>
      </div>
    </div>

    <!-- Navigation panel that appears when menu is clicked -->
    <div :class="['navigation', 'detect-nav', { 'navigation__active': isNavigationActive }]">
      <ul class="nav__list detect-nav">
        <li class="nav__list-item detect-nav"><a href="#">Home</a></li>
        <li class="nav__list-item detect-nav"><a href="#">Zimmer & Suiten</a></li>
        <li class="nav__list-item detect-nav"><a href="#">Fruhstuck</a></li>
        <li class="nav__list-item detect-nav"><a href="#">Weinbar</a></li>
        <li class="nav__list-item detect-nav"><a href="#">Weinkeller</a></li>
        <li class="nav__list-item detect-nav"><a href="#">Kontakt</a></li>
      </ul>
      <div class="nav__icons detect-nav">
        <a href="#" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      </div>
    </div>
  </header>

  <!-- Hotel description section -->
  <section class="hotel-description">
    <div class="container">
      <div class="description-content">
        <div class="description-text">
          <p class="subtitle">Business & Bike Hotel</p>
          <h2 class="title">DAS WEINHOTEL PFEFFER & SALZ</h2>
          <div class="description">
            <p>Das Weinhotel Pfeffer & Salz in Gengenbach ist mehr als nur ein Hotel – es ist ein Ort der Begegnung und des Genusses. Eingebettet in die malerische Landschaft des Mittleren Schwarzwaldes, vereint unser Haus den Charme eines familiengeführten Weinguts mit modernem Komfort.</p>
            <p>Erleben Sie Genuss und Entspannung am Rande von Gengenbach, einem der schönsten Städtchen Deutschlands. Unser idyllisch im Grünen gelegenes Haus bietet Ihnen maximalen Genuss, Entspannung und Natur.</p>
            <p>Fröhlich und authentisch, modern und traditionsbewusst, erholsam und romantisch – das Leben wird hier reichlich genossen.</p>
          </div>
          <div class="action-buttons">
            <a href="#" class="action-button dark">ZIMMER</a>
            <a href="#" class="action-button light">WEINHOTEL</a>
          </div>
        </div>
        <div class="description-image">
          <img src="https://img.freepik.com/free-vector/christmas-golden-bell_24877-82263.jpg?t=st=1743531800~exp=1743535400~hmac=5e8a8b12fdd19b06c1eb7d7c390b8300bccc7796f6c27ab5f66de0546548f118&w=740" alt="Hotel service bell" />
        </div>
      </div>
    </div>
  </section>

  <!-- Feature Links Section -->
  <section class="feature-links">
    <div class="container">
      <div class="feature-links-grid">
        <!-- Zimmer Card -->
        <a href="#" class="feature-card">
          <div class="feature-image-container">
            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Zimmer im Weinhotel" class="feature-image" />
            <div class="feature-overlay"></div>
          </div>
          <div class="feature-content">
            <span class="feature-subtitle">Wohlfühlen</span>
            <h3 class="feature-title">ZIMMER</h3>
          </div>
        </a>

        <!-- Umgebung Card -->
        <a href="#" class="feature-card">
          <div class="feature-image-container">
            <img src="https://images.unsplash.com/photo-1516900448138-898720b936b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="Schwarzwald Umgebung" class="feature-image" />
            <div class="feature-overlay"></div>
          </div>
          <div class="feature-content">
            <span class="feature-subtitle">Unser Schwarzwald</span>
            <h3 class="feature-title">UMGEBUNG</h3>
          </div>
        </a>

        <!-- Restaurant Card -->
        <a href="#" class="feature-card">
          <div class="feature-image-container">
            <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Restaurant im Weinhotel" class="feature-image" />
            <div class="feature-overlay"></div>
          </div>
          <div class="feature-content">
            <span class="feature-subtitle">Genießen</span>
            <h3 class="feature-title">Fruhstuck</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// Common mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// Container
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

// Hero Section Styles
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://img.freepik.com/free-photo/business-network-background-connecting-dots-technology-design_53876-160202.jpg?t=st=1743531659~exp=1743535259~hmac=ebcebb8273435e5b7cc476f51a4ffc060a337ce2a5d376c2126ae4877bc55326&w=900'); /* Replace with actual image path */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4));
    z-index: 1;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 40px;
  
  .hero-title {
    font-size: 42px;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin: 0 0 10px 0;
  }
  
  .hero-subtitle {
    font-size: 18px;
    font-weight: 300;
    margin: 0;
  }
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
  
  .hero-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid white;
    color: white;
    text-decoration: none;
    letter-spacing: 0.1em;
    font-size: 14px;
    transition: all 0.3s ease;    
    &:hover {
      background-color: #52a7a7;
      color: white;
      border-color: #52a7a7;
    }
  }
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &-left {
    left: 20px;
  }
  
  &-right {
    right: 20px;
  }
  
  svg {
    width: 30px;
    height: 30px;
  }
}

// Hotel Description Section
.hotel-description {
  padding: 100px 0;
  background-color: #fff;
}

.description-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.description-text {
  flex: 3;
  
  .subtitle {
    font-size: 18px;
    color: #52a7a7;
    margin: 0 0 15px 0;
    position: relative;
    padding-left: 40px;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 30px;
      height: 1px;
      background-color: #52a7a7;
    }
  }
  
  .title {
    font-size: 36px;
    color: #3a3a3a;
    margin: 0 0 30px 0;
    font-weight: 500;
  }
  
  .description {
    color: #666;
    line-height: 1.7;
    margin-bottom: 30px;
    
    p {
      margin-bottom: 20px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.action-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  .action-button {
    display: inline-block;
    padding: 12px 30px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
    
    &.dark {
      background-color: #52a7a7;
      color: white;
      
      &:hover {
        background-color: darken(#52a7a7, 10%);
      }
    }
    
    &.light {
      background-color: transparent;
      color: #3a3a3a;
      border: 1px solid #52a7a7;
      
      &:hover {
        background-color: #52a7a7;
        color: white;
      }
    }
  }
}

.description-image {
  flex: 2;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}

.hotel-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  @include flex-between;
  padding: 0 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
  &.transparent {
    background-color: transparent;
    box-shadow: none;
    
    .menu-text, .logo-name, .logo-type, .logo-subtitle, .icon-link {
      color: white;
    }
  }
  
  &.solid {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
    .menu-text, .logo-name, .icon-link {
      color: #333;
    }
    
    // .logo-type {
    //   color: #52a7a7;
    // }
    
    // .logo-subtitle {
    //   color: #666;
    // }
  }
}

.header-left, .header-center, .header-right {
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
    padding: 8px 0;
    
    .menu-text {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.1em;
      transition: color 0.3s ease;
    }
    
    &.menu--active .menu-text {
      color: #52a7a7;
      font-weight: 600;
    }
  }
}

.header-center {
  flex: 2;
  justify-content: center;
  overflow: hidden;
  // .hotel-logo {
  //   text-align: center;
    
  //   .logo-text {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //   }
    
  //   .logo-name {
  //     font-family: 'Playfair Display', serif;
  //     font-size: 28px;
  //     font-weight: 500;
  //     line-height: 1;
  //     transition: color 0.3s ease;
  //   }
    
  //   .logo-type {
  //     font-size: 22px;
  //     font-weight: 600;
  //     letter-spacing: 0.2em;
  //     margin-top: 4px;
  //     transition: color 0.3s ease;
  //   }
    
  //   .logo-subtitle {
  //     font-size: 12px;
  //     font-weight: 400;
  //     margin-top: 6px;
  //     transition: color 0.3s ease;
  //   }
  // }
}

.header-right {
  flex: 1;
  justify-content: flex-end;
  
  .header-icons {
    display: flex;
    gap: 20px;
    
    .icon-link {
      transition: color 0.3s ease;
      
      &:hover {
        color: #52a7a7;
      }
      
      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
}

// Navigation panel styling
.navigation {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
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
      padding: 12px 0;
      
      a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        letter-spacing: 0.1em;
        transition: color 0.2s ease;
        
        &:hover {
          color: #52a7a7;
        }
      }
    }
  }
  
  .nav__icons {
    @include flex-center;
    margin-top: 30px;
    gap: 20px;
    
    a {
      display: flex;
      color: white;
      
      svg {
        width: 24px;
        height: 24px;
      }
      
      &:hover {
        color: #52a7a7;
      }
    }
  }
}

// Feature Links Section Styles
.feature-links {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.feature-links-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
}

@media (min-width: 768px) {
  .feature-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .feature-links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  display: block;
  text-decoration: none;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  
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
  transition: transform 0.5s ease, filter 0.5s ease;
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
  padding: 2rem;
  z-index: 2;
  text-align: left;
}

.feature-subtitle {
  font-size: 1rem;
  font-weight: 300;
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.feature-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

// Media queries for responsiveness
@media (max-width: 992px) {
  .description-content {
    flex-direction: column-reverse;
    gap: 40px;
  }
  
  .description-text, .description-image {
    flex: 1;
    width: 100%;
  }
  
  .description-text .title {
    font-size: 30px;
  }
  
  .feature-image-container {
    height: 350px;
  }
}

@media (max-width: 768px) {
  // .header-center .hotel-logo .logo-name {
  //   font-size: 22px;
  // }
  
  // .header-center .hotel-logo .logo-type {
  //   font-size: 18px;
  // }
  
  // .header-center .hotel-logo .logo-subtitle {
  //   font-size: 10px;
  // }
  
  .hero-content .hero-title {
    font-size: 32px;
  }
  
  .hero-content .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .description-text .subtitle {
    font-size: 16px;
  }
  
  .description-text .title {
    font-size: 26px;
  }
  
  .hotel-description {
    padding: 60px 0;
  }
  
  .action-buttons {
    flex-direction: column;
    gap: 10px;
    max-width: 200px;
  }
  
  .feature-image-container {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hotel-header {
    padding: 0 10px;
  }
  
  // .header-center .hotel-logo .logo-name {
  //   font-size: 18px;
  // }
  
  // .header-center .hotel-logo .logo-type {
  //   font-size: 16px;
  // }
  
  // .header-center .hotel-logo .logo-subtitle {
  //   font-size: 8px;
  // }
  
  .header-right .header-icons {
    gap: 15px;
  }
  
  .hero-content .hero-title {
    font-size: 28px;
  }
  
  .hero-content .hero-subtitle {
    font-size: 14px;
  }
  
  .slider-arrow {
    width: 40px;
    height: 40px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  .description-text .subtitle {
    font-size: 14px;
    padding-left: 30px;
    
    &::before {
      width: 20px;
    }
  }
  
  .description-text .title {
    font-size: 22px;
  }
  
  .feature-image-container {
    height: 250px;
  }
  
  .feature-title {
    font-size: 1.5rem;
  }
  
  .feature-subtitle {
    font-size: 0.875rem;
  }
}
</style>