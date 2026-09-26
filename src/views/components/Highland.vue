<script setup lang="ts">
import Asters from '../../assets/img/posts/asters.jpg'
import Cardinals from '../../assets/img/posts/cardinals.jpg'
import Chippy from '../../assets/img/posts/chippy_cropped.jpeg'
import Conehead from '../../assets/img/posts/coneflower.jpeg'
import Cottonwood from '../../assets/img/posts/cottonwood.jpeg'
import Gigi from '../../assets/img/posts/gigi.jpeg'
import Goldenrod from '../../assets/img/posts/goldenrod.jpeg'
import Milkweed from '../../assets/img/posts/milkweed.jpeg'
import Monarchs from '../../assets/img/posts/monarchs.jpeg'
import Mushroom from '../../assets/img/posts/mushroom.jpg'
import Mycellium from '../../assets/img/posts/mycellium.jpeg'
import Toads from '../../assets/img/posts/toads.jpg'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
}

const slides = [
  Mushroom,
  Cottonwood,
  Chippy,
  Cardinals,
  Asters,
  Gigi,
  Monarchs,
  Conehead,
  Toads,
  Mycellium,
  Milkweed,
  Goldenrod,
]
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in slides" :key="slides.indexOf(slide)">
      <img :src="slide" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
