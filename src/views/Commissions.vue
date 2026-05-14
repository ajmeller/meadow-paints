<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Bookmark from '../assets/img/commissions/bookmark.jpg'
import Remus from '../assets/img/commissions/remus.png'
import dave from '../assets/img/commissions/dave.jpg'
import Gibby from '../assets/img/commissions/gibby.jpg'
import Olek2 from '../assets/img/murals/olek_mural.png'
</script>

<template>
  <div class="page-content">
    <div class="heading">Commissions</div>
    <div class="description">
      Have a spectacular idea for me to paint? Email me at meadowpaintsart@gmail.com! I am open to
      murals, design work, printed media, pet portraits, and more.
    </div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            :image="Bookmark"
            caption="Bookmark for Black Dog Books And Records in GR, MI"
          />
        </div>
        <div class="col item">
          <LightboxImage
            :image="Remus"
            alt="Painting of a cat in monochromatic pink"
            caption="Remus, oil on wood board. 2025."
          />
          <LightboxImage
            :image="dave"
            alt="Painting of a cat"
            caption="DAVE, oil on wood board. 2025."
          />
        </div>
        <div class="col item">
          <LightboxImage
            :image="Gibby"
            alt="Painting of a bleping cat in monochromatic pink"
            caption="Gibby, oil on wood board. 2025."
          />
          <LightboxImage :image="Olek2" />
        </div>
      </div>
    </div>
  </div>
</template>
