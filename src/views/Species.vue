<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import IndoorFish from '../assets/img/species/indoor-fish.jpg'
import FringedOrchid from '../assets/img/species/fringed-orchid.jpg'
import Lucky from '../assets/img/species/lucky.jpg'
import BigHeart from '../assets/img/species/big-heart.jpg'
import Logperch_Trans from '../assets/img/species/logperch_trans.png'
</script>

<template>
  <div class="page-content white-bg">
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            :image="FringedOrchid"
            caption="Purple Fringed Orchid (Platanthera psycodes) | Acrylic on wood | 2025"
          />
        </div>

        <div class="col item">
          <LightboxImage
            :image="BigHeart"
            caption="Big Heart | Mummichog (Fundulus heteroclitus) | Oil on wood | 2026"
          />
          <LightboxImage
            :image="Lucky"
            caption="Lucky | Thirteen-lined ground squirrel (Ictidomys tridecemlineatus) | Oil on wood | 2026 "
          />
        </div>

        <div class="col item">
          <LightboxImage
            :image="Logperch_Trans"
            caption="Loggy | Logperch (Percina caprodes) | Acrylic on wood | 2024"
          />
          <LightboxImage
            :image="IndoorFish"
            caption="Indoor Fish | Banded Killifish (Fundulus diaphanus) | Oil on wood | 2025"
            alt="Painting of banded killifish"
          />
        </div>
      </div>
    </div>
  </div>
</template>
