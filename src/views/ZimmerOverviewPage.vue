<template>
  <div class="zimmer-page">
    <!-- Hero section with room image background -->
    <section class="hero-section fullwidth-section">
      <div class="hero-content">
        <ContentContainer>
          <h1 class="hero-title">ZIMMER & SUITEN</h1>
          <p class="hero-subtitle">
            Erholung und Komfort im Herzen des Schwarzwaldes
          </p>
        </ContentContainer>
      </div>
    </section>

    <!-- Room listings section -->
    <section class="rooms-section">
      <ContentContainer>
        <div class="rooms-grid">
          <!-- Room card: EINZELZIMMER -->
          <div class="room-card" v-for="(room, key) in rooms" :key="key">
            <router-link :to="'/zimmer/' + key" class="room-image-link">
              <div class="room-image">
                <img :src="room.images[0]" :alt="room.name" class="gallery-image" />
                <div class="room-overlay">
                  <span class="room-category" v-if="room.category">{{ room.category }}</span>
                  <h2 class="room-name">{{ room.name }}</h2>
                </div>
              </div>
            </router-link>
            <div class="room-info">
              <div class="room-description">
                <p>{{ truncatedDescription(room.description) }}</p>
              </div>

              <div class="room-actions">
                <router-link :to="'/zimmer/' + key" class="read-more-button">
                  read more
                </router-link>
                <router-link :to="'/buchen/' + key" class="booking-button">
                  Book
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContentContainer from "@/components/layout/ContentContainer.vue";

// Truncate description to two lines (approximately 150 characters)
const truncatedDescription = (text) => {
  const maxLength = 150;
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Room data
const rooms = {
  einzelzimmer: {
    name: "Einzelzimmer",
    category: "Zimmer overview",
    images: [
      new URL("@/assets/images/einzelzimmer1.jpg", import.meta.url).href,
      new URL("@/assets/images/einzelzimmer2.jpg", import.meta.url).href,
      new URL("@/assets/images/einzelzimmer3.jpg", import.meta.url).href,
    ],
    description: "Unser Einzelzimmer, ist ideal für Geschäftsreisende und Radfahrer, bietet eine helle und gemütliche Atmosphäre auf etwa 16 m². Ausgestattet mit einer Klimaanlage sorgt es für angenehme Temperaturen.",
    capacity: "1 Person",
    price: "Ab 112,– / Nacht",
    size: "16 m²",
  },
  doppelzimmer: {
    name: "Doppelzimmer",
    category: "Zimmer overview",
    images: [
      new URL("@/assets/images/doppelzimmer2.jpg", import.meta.url).href,
      new URL("@/assets/images/doppelzimmer.jpg", import.meta.url).href,
    ],
    description: "Das Doppelzimmer bietet eine helle und gemütliche Atmosphäre auf etwa 25 m². Mit Klimaanlage, Schreibtisch, Flat-TV und kostenfreiem WLAN mit Glasfaseranschluss für schnelle Internetverbindungen.",
    capacity: "2 Personen",
    price: "Ab 140,– / Nacht",
    size: "25 m²",
  },
  apartment: {
    name: "Apartment",
    category: "Apartments overview",
    images: [
      new URL("@/assets/images/apartment1.jpg", import.meta.url).href,
      new URL("@/assets/images/apartment2.jpg", import.meta.url).href,
      new URL("@/assets/images/apartment3.jpg", import.meta.url).href,
      new URL("@/assets/images/apartment4.jpg", import.meta.url).href,
    ],
    description: "Die Apartments bieten für zwei Personen eine komfortable Unterkunft auf 36 m². Jedes Apartment verfügt über separate Schlafzimmer, die Privatsphäre und Ruhe gewährleisten.",
    capacity: "2 Personen",
    price: "Ab 160,– / Nacht",
    size: "36 m²",
  },
  studioApartment: {
    name: "Studio Apartment",
    category: "Studio overview",
    images: [
      new URL("@/assets/images/studio.jpg", import.meta.url).href,
      new URL("@/assets/images/studio2.jpg", import.meta.url).href,
      new URL("@/assets/images/studio3.jpg", import.meta.url).href,
      new URL("@/assets/images/studio4.jpg", import.meta.url).href,
      new URL("@/assets/images/studio5.jpg", import.meta.url).href,
    ],
    description: "Das Studio Apartment bietet auf einer großzügigen Fläche von circa 64 m² luxuriösen Komfort und moderne Annehmlichkeiten. Mit zwei gemütlichen Schlafzimmern für entspannende Nachtruhe.",
    capacity: "1-2 Personen",
    price: "Ab 130,– / Nacht",
    size: "28 m²",
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

// .zimmer-page {
//   padding-top: 80px; // Account for fixed header
// }

// Hero section styles
.hero-section {
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  background-image: url("https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $color-white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    width: 100%;

    .hero-title {
      font-size: $font-size-hero;
      font-weight: 500;
      letter-spacing: 0.1em;
      margin: 0 0 $spacing-sm 0;
    }

    .hero-subtitle {
      font-size: $font-size-large;
      font-weight: 300;
      margin: 0;
    }
  }
}

// Rooms section
.rooms-section {
  padding: $spacing-section 0;
  background-color: #f8f8f8;

  .rooms-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-xl;
    
    @include responsive(min-md) {
      grid-template-columns: repeat(2, 1fr);
      gap: $spacing-lg;
    }
  }
}

// Room card styles
.room-card {
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: $spacing-md;
  
  .room-image-link {
    text-decoration: none;
    display: block;
  }
  
  .room-image {
    position: relative;
    width: 100%;
    padding-bottom: 70%; /* Aspect ratio matching reference design */
    overflow: hidden;
    cursor: pointer;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
    
    .room-overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      padding: $spacing-md $spacing-md $spacing-lg;
      text-align: left;
      background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1), rgba(0,0,0,0));
      
      .room-category {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 4px;
        position: relative;
        padding-left: 32px;
        color: $color-white;
        
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 24px;
          height: 1px;
          background-color: white;
        }
      }
      
      .room-name {
        color: $color-white;
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        text-transform: none;
      }
    }
  }
  
  .room-info {
    padding: $spacing-md;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
    .room-description {
      flex-grow: 1;
      margin-bottom: $spacing-md;
      
      p {
        margin: 0;
        line-height: 1.5;
        color: #666;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    
    .room-actions {
      display: flex;
      gap: $spacing-md;
      
      .read-more-button, 
      .booking-button {
        flex: 1;
        padding: $spacing-sm;
        text-align: center;
        text-decoration: none;
        font-weight: 400;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        border: 1px solid $color-primary;
        transition: all 0.3s ease;
        text-transform: none;
      }
      
      .read-more-button {
        color: $color-primary;
        background-color: transparent;
        
        &:hover {
          background-color: $color-primary;
          color: $color-white;
        }
      }
      
      .booking-button {
        color: $color-primary;
        background-color: transparent;
        
        &:hover {
          background-color: $color-primary;
          color: $color-white;
        }
      }
    }
  }
}

// Responsive styles
@include responsive(lg) {
  .hero-section {
    .hero-title {
      font-size: 32px;
    }

    .hero-subtitle {
      font-size: $font-size-medium;
    }
  }
}

@include responsive(md) {
  .room-card {
    .room-info {
      .room-actions {
        padding: $spacing-sm 0;
      }
    }
  }
}

@include responsive(sm) {
  .hero-section {
    min-height: 300px;

    .hero-title {
      font-size: 28px;
    }

    .hero-subtitle {
      font-size: $font-size-base;
    }
  }
  
  .room-card {    
    .room-image {
      .room-overlay {
        .room-name {
          font-size: 1.3rem;
        }
      }
    }
    
    .room-info {
      .room-actions {
        flex-direction: column;
        gap: $spacing-sm;
      }
    }
  }
}
</style>