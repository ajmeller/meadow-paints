<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Mitosis from '../assets/img/mitosis/mitosis.jpg'
import MitosisII from '../assets/img/mitosis/mitosis-ii.png'
import Dropped from '../assets/img/mitosis/dropped.png'
import Pollen from '../assets/img/mitosis/pollen.png'
import Belong from '../assets/img/mitosis/Belong.jpg'
import BeachFossils from '../assets/img/mitosis/beach-fossils.jpg'
import Commune from '../assets/img/mitosis/commune.png'
import Cytoplasm from '../assets/img/mitosis/cytoplasm.png'
import Egg from '../assets/img/mitosis/egg.jpg'
import CytoplasmCity from '../assets/img/mitosis/cytoplasm-city.png'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
}
</script>

<template>
  <div class="page-content">
    <div class="heading">Mitosis, 2022-</div>
    <Carousel v-bind="carouselConfig">
      <Slide :key="0">
        <LightboxImage :image="MitosisII" caption="Mitosis II, acrylic on wood board. 2023." />
      </Slide>
      <Slide :key="1">
        <LightboxImage
          :image="Dropped"
          caption="(Dropped my) jelly donut, acrylic on wood board. 2023."
        />
      </Slide>
      <Slide :key="2">
        <LightboxImage :image="Commune" caption="Commune, acrylic on wood board. 2023." />
      </Slide>

      <Slide :key="3">
        <LightboxImage
          :image="CytoplasmCity"
          caption="Cytoplasm City, acrylic on wood board. 2023."
        />
      </Slide>
      <Slide :key="4">
        <LightboxImage :image="Cytoplasm" caption="Cytoplasm, acrylic on wood board. 2023."
      /></Slide>

      <Slide :key="5">
        <LightboxImage :image="Belong" caption="Belong?, oil on wood board. 2024." />
      </Slide>
      <Slide :key="6" class="egg">
        <LightboxImage :image="Egg" caption="The Egg, acrylic and oil on wood board. 2025." />
      </Slide>
      <Slide :key="7">
        <LightboxImage :image="Pollen" caption="Pollen, oil on wood board. 2024." />
      </Slide>

      <Slide :key="8">
        <LightboxImage :image="BeachFossils" caption="Beach Fossils, oil on wood board. 2024." />
      </Slide>
      <Slide :key="9">
        <LightboxImage :image="Mitosis" caption="Mitosis, acrylic on cradled wood panel. 2022." />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="description">
      It can be difficult to convert something that was initally a visual language into a written
      language. This series started as an abstract exploration, when shapes that looked like cells
      began to emerge. I named that first piece Mitosis, and the rest of the series came from the
      one, as one cell cleaves into two, and two become four, and so on. The complexity began to
      grow subsequently. In some, I zoom into the inner workings of a cell: the cytoplasm. In
      others, I zoom out to a single cell becoming a seed which becomes an organism and then a
      community. As this project continues to evolve, I am interested in exploring the history of
      these organisms and our Earth's geology.
    </div>
  </div>
</template>

<style>
.carousel__slide {
  img {
    width: 35vw;
    cursor: pointer;
  }
}

.egg {
  img {
    width: 120px;
  }
}

.carousel__viewport {
  width: 92%;
  position: relative;
  left: 4%;
}

.carousel {
  --vc-nav-color: #463d3d;
  --vc-nav-color-hover: #fb5098;
  --vc-nav-border-radius: 50%;
  --vc-nav-width: 40px;
  --vc-nav-height: 40px;
  margin: 40px 0px 60px;
}
</style>
