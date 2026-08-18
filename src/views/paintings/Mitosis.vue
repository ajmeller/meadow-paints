<script setup lang="ts">
import LightboxImage from '../../components/LightboxImage.vue'
import Mitosis from '../../assets/img/mitosis/mitosis.jpg'
import MitosisII from '../../assets/img/mitosis/mitosis-ii.jpeg'
import Dropped from '../../assets/img/mitosis/dropped.jpeg'
import Pollen from '../../assets/img/mitosis/pollen.jpeg'
import Belong from '../../assets/img/mitosis/belong.jpeg'
import BeachFossils from '../../assets/img/mitosis/beach-fossils_full.jpeg'
import Commune from '../../assets/img/mitosis/commune_full.jpeg'
import Cytoplasm from '../../assets/img/mitosis/cytoplasm_full.jpeg'
import Egg from '../../assets/img/mitosis/egg_full2.jpeg'
import CytoplasmCity from '../../assets/img/mitosis/cytoplasm-city.jpeg'
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
        <LightboxImage
          :image="MitosisII"
          caption="Mitosis II | Acrylic on wood | 2023"
          :is-lazy="false"
        />
      </Slide>
      <Slide :key="1">
        <LightboxImage :image="Belong" caption="Belong? | Oil on wood | 2024" :is-lazy="false" />
      </Slide>
      <Slide :key="2" class="egg">
        <LightboxImage
          :image="Egg"
          caption="The Egg | Acrylic and oil on wood | 2025"
          :is-lazy="false"
        />
      </Slide>
      <Slide :key="3">
        <LightboxImage
          :image="Pollen"
          caption="Pollen | Oil on wood board | 2026"
          :is-lazy="false"
        />
      </Slide>

      <Slide :key="4">
        <LightboxImage
          :image="BeachFossils"
          caption="Beach Fossils | Oil on wood | 2024"
          :is-lazy="false"
        />
      </Slide>
      <Slide :key="5">
        <LightboxImage
          :image="Cytoplasm"
          caption="Cytoplasm | Acrylic on wood | 2023"
          :is-lazy="false"
        />
      </Slide>

      <Slide :key="6">
        <LightboxImage
          :image="Commune"
          caption="Commune | Acrylic on wood | 2023"
          :is-lazy="false"
        />
      </Slide>
      <Slide :key="7">
        <LightboxImage
          :image="CytoplasmCity"
          caption="Cytoplasm City | Acrylic on wood | 2023"
          :is-lazy="false"
        />
      </Slide>

      <Slide :key="8">
        <LightboxImage
          :image="Dropped"
          caption="(Dropped my) jelly donut | Acrylic on wood | 2023"
          :is-lazy="false"
        />
      </Slide>

      <Slide :key="9">
        <LightboxImage
          :image="Mitosis"
          caption="Mitosis | Acrylic on cradled wood | 2022"
          :is-lazy="false"
        />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="description">
      This series started as an abstract exploration, when shapes that looked like cells began to
      emerge. I named that first piece Mitosis, and the rest of the series came from the one, as one
      cell cleaves into two, and two become four, and so on. The complexity began to grow
      subsequently. In some, I zoom into the inner workings of a cell: the cytoplasm. In others, I
      zoom out to a single cell becoming a seed which becomes an organism and then a community. As
      this project continues to evolve, I am interested in exploring the history of these organisms
      and our Earth's geology.
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
    width: 85%;
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

@media (max-width: 850px) {
  .carousel__slide {
    img {
      width: 28vw;
    }
  }

  .carousel__viewport {
    width: 84%;
    left: 8%;
  }
}
</style>
