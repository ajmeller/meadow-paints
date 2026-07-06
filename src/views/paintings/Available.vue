<script setup lang="ts">
import LightboxImage from '../../components/LightboxImage.vue'
import Tidepool from '../../assets/img/paintings/tidepool.jpg'
import Everything from '../../assets/img/paintings/everything.jpg'
import Pollen from '../../assets/img/mitosis/pollen.jpg'
import Belong from '../../assets/img/mitosis/Belong.jpg'
import BeachFossils from '../../assets/img/mitosis/beach-fossils.jpg'
import Egg from '../../assets/img/mitosis/egg.jpg'
import IndoorFish from '../../assets/img/taxonomy/indoor-fish.jpg'
import Lucky from '../../assets/img/taxonomy/lucky.jpg'
import FringedOrchid from '../../assets/img/taxonomy/fringed-orchid.jpg'
import Dunes from '../../assets/img/murals/dunes-mural.jpg'
import BigHeart from '../../assets/img/taxonomy/big-heart.jpg'
import Neighbor from '../../assets/img/taxonomy/neighbor_full.jpg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Available Work</div>
    <div class="description">
      The work on this page is available to purchase at in-person events or via local pick up. Check
      my instagram to get updates on where I'll be selling. Click an image to learn more, including
      approximate price.
    </div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            :image="IndoorFish"
            caption='Indoor Fish | Oil on wood board | Approx. 8.5" x 5" x 0.75" | $1--'
            alt="Painting of banded killifish"
          />
          <LightboxImage
            :image="Tidepool"
            caption='Tidepool | Oil on wood panel | Approx. 5.25" x 7" x 0.75" | $1--'
          />
          <LightboxImage
            :image="Egg"
            caption='The Egg | Acrylic and oil on wood board | Approx. 2.5" x 7" x 0.6" | $1--'
          />
        </div>

        <div class="col item">
          <LightboxImage
            :image="Dunes"
            caption="The Dunes | Latex paint on wood board | Can be placed outside | 4' x 4' | $3--"
          />
          <LightboxImage
            :image="Lucky"
            caption='Lucky | Oil on wood panel | Approx. 5.5" x 3.5" x 0.75" | $--'
          />
          <LightboxImage
            :image="Neighbor"
            caption='Neighbor | Oil on wood panel | Approx. 5.5" x 3.5" x 0.75" | $--'
          />
          <LightboxImage
            :image="Belong"
            caption='Belong? | Oil on wood board | 5.5" diameter, 0.75" depth | $1--'
          />
          <LightboxImage
            :image="BeachFossils"
            caption='Beach Fossils | Oil on wood board | 3.5" x 3.5" x 0.75" | $--'
          />
          <LightboxImage
            :image="Pollen"
            caption='Pollen | Oil on wood board | 4" diameter, 0.75" depth | $--'
          />
        </div>
        <div class="col item">
          <LightboxImage
            :image="FringedOrchid"
            caption='Purple Fringed Orchid | Acrylic on wood panel | Approx. 44" x 13.5" | $2--'
          />
          <LightboxImage
            :image="Everything"
            caption='Everything is everything | Acrylic on wood panel | 6" x 6.25" x 1.25" | $--'
          />
          <LightboxImage
            :image="BigHeart"
            caption='Big Heart | Oil on wood panel | 8" x 4.5" x 0.75 | $1--'
          />
        </div>
      </div>
    </div>
  </div>
</template>
