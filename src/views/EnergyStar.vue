<template>
  <div class="energy-star-page">
    <!-- Hero section with title overlay -->
    <section class="hero-section fullwidth-section">
      <div class="hero-content">
        <ContentContainer>
          <h1 class="hero-title">OUR ENERGY-STAR</h1>
          <p class="hero-subtitle">
            Umweltschutz, Nachhaltigkeit und Energieeffizienz
          </p>
        </ContentContainer>
      </div>
    </section>

    <!-- Content section -->
    <section class="content-section">
      <ContentContainer>
        <!-- Main content -->
        <div class="content-container">
          <h2 class="content-title">Sehr geehrter Gast,</h2>
          <div class="content-text">
            <p>
              Umweltschutz, Nachhaltigkeit und Energieeffizienz sind Themen die uns sehr wichtig sind.
            </p>
            <p>
              Aus diesem Grund wird der Energiebedarf des „Hotel Burgholz" nahezu ausschließlich mit regenerativ erzeugter Energie gedeckt. Moderne PV-Technik sowie BHKW Kraftwerke sorgen umweltfreundlich für Strom und Wärme.
            </p>
            <p>
              Energiebewusste Technik, wie z.B. LED-Beleuchtungen, Anwesenheitssensoren und aufwendige Wärmedämmung sind ebenso Teil dieses Konzeptes.
            </p>
            <p>
              Uns liegt aber nicht nur die Umwelt, sondern auch die Gesundheit jedes Gastes am Herzen. Daher gilt im Gebäude <strong>absolutes Rauchverbot</strong>. Speziell eingerichtete Bereiche (vor dem Nachteingang und auf der Terrasse) bieten außerhalb des Gebäudes Gelegenheit zum Rauchen.
            </p>
            <p>
              Die Apartments sind außerdem mit bequemen Sitzbänken im Außenbereich ausgestattet.
            </p>
            <p class="important-notice">
              <strong>Bitte beachten Sie:</strong> Das Gebäude ist mit Rauchmeldern ausgerüstet. Rauchen innerhalb des Gebäudes löst Feueralarm und somit eine sofortige Evakuierung, sowie einen Feuerwehr-Einsatz aus.
            </p>
            
            <div class="no-smoking-image">
              <img src="/src/assets/images/rauchen_verboten.png" alt="No Smoking Sign" />
            </div>
          </div>
        </div>

        <!-- Features section -->
        <div class="energy-features">
          <div class="features-column">
            <h3 class="features-title">Energieeffiziente Technologien</h3>
            <ul class="features-list">
              <li>Moderne PV-Technik (Photovoltaik)</li>
              <li>BHKW Kraftwerke für Strom und Wärme</li>
              <li>LED-Beleuchtung im gesamten Hotel</li>
              <li>Anwesenheitssensoren für optimalen Energieverbrauch</li>
              <li>Aufwendige Wärmedämmung</li>
              <li>Regenerativ erzeugte Energie</li>
            </ul>
          </div>
          <div class="features-column">
            <h3 class="features-title">Gesundheit & Komfort</h3>
            <ul class="features-list">
              <li>Absolutes Rauchverbot im Gebäude</li>
              <li>Speziell eingerichtete Raucherbereiche im Außenbereich</li>
              <li>Rauchbereich vor dem Nachteingang</li>
              <li>Rauchbereich auf der Terrasse</li>
              <li>Bequeme Sitzbänke im Außenbereich</li>
              <li>Gesunde und saubere Raumluft</li>
            </ul>
          </div>
        </div>

        <!-- Call to action -->
        <div class="cta-container">
          <router-link to="/zimmer" class="cta-button">
            Entdecken Sie unsere umweltfreundlichen Zimmer
          </router-link>
        </div>
      </ContentContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContentContainer from "@/components/layout/ContentContainer.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

// Hero section - matching room page style
.hero-section {
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  background-image: url("/src/assets/images/eco.jpg");
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

// Content section
.content-section {
  padding: $spacing-section 0;
  
  .content-container {
    text-align: center;
    max-width: 800px;
    margin: 0 auto $spacing-xl;
    
    .content-title {
      font-size: 1.8rem;
      font-weight: 400;
      color: #333;
      margin: 0 0 $spacing-lg 0;
    }
    
    .content-text {
      color: #666;
      line-height: 1.8;
      text-align: left;
      
      p {
        margin: 0 0 $spacing-md 0;
        
        strong {
          color: #333;
          font-weight: 600;
        }
      }
      
      .important-notice {
        background-color: #f8f9fa;
        padding: $spacing-md;
        border-left: 4px solid $color-primary;
        margin-top: $spacing-lg;
        
        strong {
          color: $color-primary;
        }
      }
      
      .no-smoking-image {
        text-align: center;
        margin: $spacing-lg 0;
        
        img {
          max-width: 300px;
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  
  .energy-features {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-xl;
    background-color: #f7f7f7;
    padding: $spacing-xl;
    margin-bottom: $spacing-xl;
    
    @include responsive(min-md) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .features-column {
      .features-title {
        font-size: 1.2rem;
        font-weight: 500;
        color: #333;
        margin: 0 0 $spacing-lg 0;
        padding-bottom: $spacing-sm;
        border-bottom: 1px solid #ddd;
      }
      
      .features-list {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
        
        li {
          position: relative;
          padding-left: $spacing-md;
          margin-bottom: $spacing-sm;
          line-height: 1.6;
          color: #666;
          
          &::before {
            content: "•";
            position: absolute;
            left: 0;
            color: $color-primary;
          }
        }
      }
    }
  }
  
  .cta-container {
    text-align: center;
    
    .cta-button {
      display: inline-block;
      padding: $spacing-md $spacing-xxl;
      background-color: $color-primary;
      color: white;
      text-decoration: none;
      text-transform: none;
      font-size: 1rem;
      font-weight: 400;
      transition: background-color 0.3s ease;
      
      &:hover {
        background-color: darken($color-primary, 10%);
      }
    }
  }
}

// Responsive styles - matching room page
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
  
  .content-section {
    .content-container {
      .content-title {
        font-size: 1.5rem;
      }
    }
    
    .cta-container {
      .cta-button {
        width: 100%;
        padding: $spacing-md;
      }
    }
  }
}
</style>