<script setup lang="ts">
import LightboxImage from '../../components/LightboxImage.vue'
import IndoorFish from '../../assets/img/taxonomy/indoor-fish.jpeg'
import FringedOrchid from '../../assets/img/taxonomy/fringed-orchid_trans.jpeg'
import Lucky from '../../assets/img/taxonomy/lucky_full3.jpeg'
import BigHeart from '../../assets/img/taxonomy/big-heart.jpeg'
import Logperch_Trans from '../../assets/img/taxonomy/logperch_trans.jpeg'
import Neighbor from '../../assets/img/taxonomy/neighbor_full.jpeg'
import Liz from '../../assets/img/taxonomy/liz_full1.jpeg'
import Sal from '../../assets/img/taxonomy/sal_full1.jpeg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Taxonomy, 2024-</div>
    <div class="description"></div>

    <div class="lightbox-gallery">
      <div>
        <LightboxImage
          :image="FringedOrchid"
          caption="Purple Fringed Orchid (Platanthera psycodes) | Acrylic on wood | 2025"
          klass="left-img"
        />
      </div>
      <div class="grid2">
        <LightboxImage
          :image="BigHeart"
          caption="Big Heart | Mummichog (Fundulus heteroclitus) | Oil on wood | 2026"
        />
        <LightboxImage
          :image="Lucky"
          caption="Lucky | Thirteen-lined ground squirrel (Ictidomys tridecemlineatus) | Oil on wood | 2026"
        />

        <LightboxImage
          :image="Logperch_Trans"
          klass="span2"
          caption="Loggy | Logperch (Percina caprodes) | Acrylic on wood | 2024"
        />
        <LightboxImage
          :image="Liz"
          caption="Liz | Eastern Glass Lizard (Ophisaurus ventralis) | Acrylic on wood | 2026"
          klass="span2"
        />
        <LightboxImage
          :image="Sal"
          caption="Sal | Longtail Salamander (Eurycea longicauda) | Acrylic on wood | 2026"
          klass="span2"
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
</template>

<style>
.lightbox-gallery {
  display: flex;
  gap: 12px;

  .left-img {
    width: 32vw;
  }
}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  > img {
    width: 100%;
    margin-bottom: 8px;
  }

  .col {
    position: relative;
    width: 100%;
  }

  img.grid-img,
  .img-fluid {
    width: 100%;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .span2 {
    grid-column: 1 / 3;
  }
}

@media (max-width: 850px) {
  .lightbox-gallery {
    flex-direction: column-reverse;

    .left-img {
      width: 95vw;
    }
  }

  .grid2 {
    grid-template-columns: 1fr;
  }
}
</style>
