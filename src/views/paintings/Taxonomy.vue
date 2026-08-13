<script setup lang="ts">
import LightboxImage from '../../components/LightboxImage.vue'
import IndoorFish from '../../assets/img/taxonomy/indoor-fish.jpeg'
import FringedOrchid from '../../assets/img/taxonomy/fringed-orchid_trans.jpeg'
import Lucky from '../../assets/img/taxonomy/lucky.jpeg'
import BigHeart from '../../assets/img/taxonomy/big-heart.jpeg'
import Logperch_Trans from '../../assets/img/taxonomy/logperch_trans.png'
import Neighbor from '../../assets/img/taxonomy/neighbor_full.jpeg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Taxonomy, 2024-</div>
    <div class="description"></div>

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
          <LightboxImage
            :image="Neighbor"
            caption="Neighbor | Northern Cardinal (Cardinalis cardinalis) | Oil on wood | 2026"
          />
        </div>
      </div>
    </div>
  </div>
</template>
