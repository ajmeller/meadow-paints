<script setup lang="ts">
import Butters from '../../assets/img/posts/hammock/butters.jpeg'
import Cats from '../../assets/img/posts/hammock/cats.jpeg'
import Feathers from '../../assets/img/posts/hammock/feathers.jpeg'
import Fish1 from '../../assets/img/posts/hammock/fish1.jpeg'
import Fish2 from '../../assets/img/posts/hammock/fish2.jpeg'
import Snek from '../../assets/img/posts/hammock/snek.jpeg'
import Pebbles from '../../assets/img/posts/hammock/pebbles.jpeg'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
}

const slides = [Fish1, Fish2, Butters, Snek, Cats, Feathers, Pebbles]
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
