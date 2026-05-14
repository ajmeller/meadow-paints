<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Tidepool from '../assets/img/abstract/tidepool.jpg'
import Everything from '../assets/img/everything.jpg'
import Pollen from '../assets/img/mitosis/pollen.png'
import Belong from '../assets/img/mitosis/Belong.jpg'
import BeachFossils from '../assets/img/mitosis/beach-fossils.jpg'
import Egg from '../assets/img/mitosis/egg.jpg'
import IndoorFish from '../assets/img/indoor-fish.jpg'
</script>

<template>
  <div class="page-content">
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
            :image="Everything"
            caption="Everything is everything | Acrylic on wood panel | $--"
          />
        </div>
        <div class="col item">
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
            :image="Egg"
            caption='The Egg | Acrylic and oil on wood board | Approx. 2.5" x 7" x 0.6" | $1--'
          />
        </div>
      </div>
    </div>
  </div>
</template>
