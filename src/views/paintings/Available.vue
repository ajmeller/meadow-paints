<script setup lang="ts">
import LightboxImage from '../../components/LightboxImage.vue'
import Tidepool from '../../assets/img/paintings/tidepool.jpeg'
import BeachFossils from '../../assets/img/mitosis/beach-fossils.jpeg'
import Egg from '../../assets/img/mitosis/egg.jpeg'
import IndoorFish from '../../assets/img/taxonomy/indoor-fish.jpeg'
import Lucky from '../../assets/img/taxonomy/lucky_full3.jpeg'
import FringedOrchid from '../../assets/img/taxonomy/fringed-orchid.jpg'
import Dunes from '../../assets/img/murals/dunes-mural.jpeg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Available Work</div>
    <div class="description">
      The work on this page is available to purchase at in-person events or via local pick up. Email
      or message me if you are interested in purchasing. Click an image to learn more, including
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
            :image="BeachFossils"
            caption='Beach Fossils | Oil on wood board | 3.5" x 3.5" x 0.75" | $--'
          />
          <LightboxImage
            :image="Tidepool"
            caption='Tidepool | Oil on wood panel | Approx. 5.25" x 7" x 0.75" | $1--'
          />
        </div>
        <div class="col item">
          <LightboxImage
            :image="FringedOrchid"
            caption='Purple Fringed Orchid | Acrylic on wood panel | Approx. 44" x 13.5" | $3--'
          />
          <!-- <LightboxImage
            :image="Everything"
            caption='Everything is everything | Acrylic on wood panel | 6" x 6.25" x 1.25" | $--'
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
