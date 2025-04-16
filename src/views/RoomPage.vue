<template>
  <div class="room-page">
    <div class="room-gallery">
      <div class="gallery-container">
        <div class="gallery-image-container">
          <img :src="rooms[activeRoomIndex].images[activeImageIndex]" :alt="rooms[activeRoomIndex].name" class="gallery-image" />
          
          <!-- Navigation controls -->
          <button class="gallery-nav gallery-nav-prev" @click="prevImage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="gallery-nav gallery-nav-next" @click="nextImage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <button class="gallery-fullscreen" @click="openFullscreen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <!-- Room type overlay -->
          <div class="room-overlay">
            <span class="room-category">{{ rooms[activeRoomIndex].category }}</span>
            <h2 class="room-name">{{ rooms[activeRoomIndex].name }}</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="room-details">
      <ContentContainer>
        <div class="room-details-grid">
          <div class="room-info">
            <div class="room-specs">
              <div class="room-spec">
                <span>{{ rooms[activeRoomIndex].capacity }} Personen</span>
              </div>
              <div class="room-spec">
                <span>Ab {{ rooms[activeRoomIndex].price }},– / Nacht</span>
              </div>
              <div class="room-spec" v-if="rooms[activeRoomIndex].size">
                <span>{{ rooms[activeRoomIndex].size }} m²</span>
              </div>
            </div>
            
            <div class="room-description">
              <p v-for="(paragraph, index) in rooms[activeRoomIndex].description" :key="index">
                {{ paragraph }}
              </p>
            </div>

            <div class="room-actions">
              <button class="details-button" @click="toggleDetails">
                <span class="button-icon">i</span>
                DETAILS & AUSSTATTUNG
              </button>
              
              <a :href="rooms[activeRoomIndex].bookingLink" class="booking-button">
                ZIMMER BUCHEN
              </a>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>

    <!-- Fullscreen gallery modal -->
    <div class="fullscreen-gallery" v-if="isFullscreenActive">
      <div class="fullscreen-content">
        <img :src="rooms[activeRoomIndex].images[activeImageIndex]" :alt="rooms[activeRoomIndex].name" class="fullscreen-image" />
        
        <button class="fullscreen-close" @click="closeFullscreen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <button class="fullscreen-nav fullscreen-nav-prev" @click="prevImage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="fullscreen-nav fullscreen-nav-next" @click="nextImage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>

    <!-- Room details expanded -->
    <div class="room-details-expanded" v-if="isDetailsActive">
      <ContentContainer>
        <div class="details-header">
          <h3>Details & Ausstattung</h3>
          <button class="close-details" @click="toggleDetails">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="details-content">
          <div class="details-column" v-for="(column, index) in rooms[activeRoomIndex].amenities" :key="index">
            <h4>{{ column.title }}</h4>
            <ul>
              <li v-for="(item, itemIndex) in column.items" :key="itemIndex">{{ item }}</li>
            </ul>
          </div>
        </div>
      </ContentContainer>
    </div>

    <!-- Room navigation -->
    <div class="room-navigation">
      <ContentContainer>
        <div class="room-nav-grid">
          <div 
            v-for="(room, index) in rooms" 
            :key="room.id"
            class="room-nav-item"
            :class="{ 'active': index === activeRoomIndex }"
            @click="changeRoom(index)"
          >
            <div class="room-nav-image">
              <img :src="room.thumbnail" :alt="room.name" />
            </div>
            <div class="room-nav-info">
              <span class="room-nav-category">{{ room.category }}</span>
              <h3 class="room-nav-name">{{ room.name }}</h3>
              <span class="room-nav-price">Ab {{ room.price }},– / Nacht</span>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ContentContainer from '@/components/layout/ContentContainer.vue';

const route = useRoute();
const router = useRouter();

// State
const activeRoomIndex = ref(0);
const activeImageIndex = ref(0);
const isFullscreenActive = ref(false);
const isDetailsActive = ref(false);

// Sample data - this would typically come from an API
const rooms = ref([
  {
    id: 'landhaus',
    name: 'LANDHAUS',
    category: 'Doppelzimmer',
    capacity: 2,
    price: '112',
    size: '28',
    thumbnail: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1560448204-603b3fc33dab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    ],
    description: [
      'Unser Doppelzimmer im Landhausstil vereint rustikalen Charme mit modernem Komfort. Es verfügt über ein bequemes Doppelbett, ein Badezimmer und teils über einen Balkon oder eine Terrasse.',
      'Warme Farben und natürliche Materialien schaffen eine einladende Atmosphäre. Im Preis ist das Winzerfrühstücksbuffet inbegriffen.'
    ],
    bookingLink: '#',
    amenities: [
      {
        title: 'Zimmer',
        items: [
          'Doppelbett (180x200 cm)',
          'Sitzecke',
          'Klimaanlage',
          'Flachbild-TV',
          'Kostenfreies WLAN',
          'Telefon'
        ]
      },
      {
        title: 'Bad',
        items: [
          'Dusche',
          'WC',
          'Haartrockner',
          'Kosmetikspiegel',
          'Handtücher',
          'Pflegeprodukte'
        ]
      },
      {
        title: 'Service',
        items: [
          'Tägliche Reinigung',
          'Winzerfrühstücksbuffet inklusive',
          'Parkplatz am Hotel',
          'Gepäckservice',
          'Weckservice'
        ]
      }
    ]
  },
  {
    id: 'winzerglueck',
    name: 'WINZERGLÜCK',
    category: 'Doppelzimmer',
    capacity: 2,
    price: '140',
    size: '28',
    thumbnail: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    images: [
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    ],
    description: [
      'Unser Doppelzimmer der Kategorie Winzerglück bietet ein Boxspringbett, eine Sitzecke, ein großzügiges Bad mit begehbarer Dusche und Balkon oder Terrasse.',
      'Sie können zwischen Zimmern mit oder ohne Teppichboden wählen. Im Preis ist das Winzerfrühstücksbuffet inbegriffen. Genießen Sie die idyllische Umgebung und entspannen Sie nach einem erlebnisreichen Tag.'
    ],
    bookingLink: '#',
    amenities: [
      {
        title: 'Zimmer',
        items: [
          'Boxspringbett (180x200 cm)',
          'Sitzecke',
          'Klimaanlage',
          'Flachbild-TV',
          'Kostenfreies WLAN',
          'Telefon',
          'Minibar'
        ]
      },
      {
        title: 'Bad',
        items: [
          'Begehbare Dusche',
          'WC',
          'Haartrockner',
          'Kosmetikspiegel',
          'Handtücher',
          'Bademantel',
          'Pflegeprodukte'
        ]
      },
      {
        title: 'Service',
        items: [
          'Tägliche Reinigung',
          'Winzerfrühstücksbuffet inklusive',
          'Parkplatz am Hotel',
          'Gepäckservice',
          'Weckservice',
          'Wäscheservice'
        ]
      }
    ]
  }
]);

// Methods
const prevImage = () => {
  if (activeImageIndex.value > 0) {
    activeImageIndex.value--;
  } else {
    activeImageIndex.value = rooms.value[activeRoomIndex.value].images.length - 1;
  }
};

const nextImage = () => {
  if (activeImageIndex.value < rooms.value[activeRoomIndex.value].images.length - 1) {
    activeImageIndex.value++;
  } else {
    activeImageIndex.value = 0;
  }
};

const openFullscreen = () => {
  isFullscreenActive.value = true;
  document.body.style.overflow = 'hidden';
};

const closeFullscreen = () => {
  isFullscreenActive.value = false;
  document.body.style.overflow = '';
};

const toggleDetails = () => {
  isDetailsActive.value = !isDetailsActive.value;
};

const changeRoom = (index: number) => {
  activeRoomIndex.value = index;
  activeImageIndex.value = 0;
  router.push({ name: 'room', params: { id: rooms.value[index].id } });
};

// Initialize based on route
onMounted(() => {
  const roomId = route.params.id;
  if (roomId) {
    const index = rooms.value.findIndex(room => room.id === roomId);
    if (index !== -1) {
      activeRoomIndex.value = index;
    } else {
      // If room ID not found, redirect to first room
      router.replace({ name: 'room', params: { id: rooms.value[0].id } });
    }
  } else {
    // If no room ID in route, redirect to first room
    router.replace({ name: 'room', params: { id: rooms.value[0].id } });
  }
});

// Watch for route changes
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      const index = rooms.value.findIndex(room => room.id === newId);
      if (index !== -1) {
        activeRoomIndex.value = index;
        activeImageIndex.value = 0;
      }
    }
  }
);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

.room-page {
  padding-top: 80px; // To account for fixed header
}

// Gallery section
.room-gallery {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  background-color: #f5f5f5;
  
  .gallery-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .gallery-image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .gallery-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: background-color $transition-speed ease;
    z-index: 2;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
    
    &-prev {
      left: 20px;
    }
    
    &-next {
      right: 20px;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  .gallery-fullscreen {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: background-color $transition-speed ease;
    z-index: 2;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  .room-overlay {
    position: absolute;
    bottom: 50px;
    left: 50px;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 2;
    
    .room-category {
      display: block;
      font-size: $font-size-medium;
      margin-bottom: $spacing-xs;
    }
    
    .room-name {
      font-size: 42px;
      font-weight: 500;
      margin: 0;
    }
  }
}

// Room details section
.room-details {
  padding: $spacing-xl 0;
  
  .room-details-grid {
    display: grid;
    grid-template-columns: 1fr;
  }
  
  .room-info {
    .room-specs {
      display: flex;
      gap: $spacing-xl;
      margin-bottom: $spacing-lg;
      
      .room-spec {
        font-size: $font-size-medium;
        color: $color-text-dark;
      }
    }
    
    .room-description {
      p {
        margin-bottom: $spacing-md;
        line-height: 1.6;
        color: $color-text-light;
      }
    }
    
    .room-actions {
      display: flex;
      gap: $spacing-md;
      margin-top: $spacing-xl;
      
      .details-button {
        display: inline-flex;
        align-items: center;
        gap: $spacing-sm;
        border: none;
        background: none;
        color: $color-text-dark;
        font-size: $font-size-base;
        font-weight: 500;
        cursor: pointer;
        padding: 0;
        
        .button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: $color-text-dark;
          color: white;
          font-style: italic;
          font-weight: bold;
        }
        
        &:hover {
          color: $color-primary;
          
          .button-icon {
            background-color: $color-primary;
          }
        }
      }
      
      .booking-button {
        display: inline-block;
        padding: $spacing-sm $spacing-xl;
        background-color: $color-text-dark;
        color: white;
        text-decoration: none;
        font-size: $font-size-base;
        font-weight: 500;
        transition: background-color $transition-speed ease;
        
        &:hover {
          background-color: $color-primary;
        }
      }
    }
  }
}

// Fullscreen gallery
.fullscreen-gallery {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .fullscreen-content {
    position: relative;
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .fullscreen-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .fullscreen-close {
    position: absolute;
    top: -40px;
    right: 0;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  .fullscreen-nav {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: background-color $transition-speed ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
    
    &-prev {
      left: -70px;
    }
    
    &-next {
      right: -70px;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
}

// Room details expanded
.room-details-expanded {
  padding: $spacing-xl 0;
  background-color: $color-background-light;
  
  .details-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-lg;
    
    h3 {
      font-size: $font-size-large;
      font-weight: 500;
      margin: 0;
    }
    
    .close-details {
      background: none;
      border: none;
      cursor: pointer;
      padding: $spacing-xs;
      
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  
  .details-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-xl;
    
    .details-column {
      h4 {
        font-size: $font-size-medium;
        font-weight: 500;
        margin: 0 0 $spacing-md 0;
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          margin-bottom: $spacing-xs;
          padding-left: $spacing-md;
          position: relative;
          
          &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: $color-primary;
          }
        }
      }
    }
  }
}

// Room navigation
.room-navigation {
  padding: $spacing-xl 0;
  background-color: white;
  
  .room-nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-xl;
  }
  
  .room-nav-item {
    cursor: pointer;
    transition: transform $transition-speed ease;
    
    &:hover {
      transform: translateY(-5px);
    }
    
    &.active {
      .room-nav-name {
        color: $color-primary;
      }
    }
  }
  
  .room-nav-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-bottom: $spacing-sm;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform $transition-speed ease;
    }
  }
  
  .room-nav-item:hover .room-nav-image img {
    transform: scale(1.05);
  }
  
  .room-nav-info {
    .room-nav-category {
      font-size: $font-size-small;
      color: $color-text-light;
      display: block;
      margin-bottom: $spacing-xs;
    }
    
    .room-nav-name {
      font-size: $font-size-medium;
      font-weight: 500;
      margin: 0 0 $spacing-xs 0;
      transition: color $transition-speed ease;
    }
    
    .room-nav-price {
      font-size: $font-size-small;
      color: $color-text-light;
    }
  }
}

@include responsive(lg) {
  .room-gallery {
    height: 60vh;
    
    .room-overlay {
      left: 30px;
      bottom: 30px;
      
      .room-name {
        font-size: 32px;
      }
    }
  }
  
  .room-details-expanded {
    .details-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include responsive(md) {
  .room-gallery {
    height: 50vh;
    
    .gallery-nav {
      width: 40px;
      height: 40px;
    }
    
    .gallery-fullscreen {
      width: 40px;
      height: 40px;
    }
  }
  
  .room-details {
    .room-info {
      .room-specs {
        flex-direction: column;
        gap: $spacing-sm;
      }
      
      .room-actions {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  
  .room-details-expanded {
    .details-content {
      grid-template-columns: 1fr;
    }
  }
}

@include responsive(sm) {
  .room-gallery {
    min-height: 300px;
    
    .room-overlay {
      left: 20px;
      bottom: 20px;
      
      .room-category {
        font-size: $font-size-base;
      }
      
      .room-name {
        font-size: 28px;
      }
    }
    
    .gallery-nav {
      width: 35px;
      height: 35px;
    }
    
    .gallery-fullscreen {
      width: 35px;
      height: 35px;
    }
  }
  
  .fullscreen-gallery {
    .fullscreen-nav {
      &-prev {
        left: -50px;
      }
      
      &-next {
        right: -50px;
      }
    }
  }
}
</style>