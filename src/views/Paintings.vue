<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Sylvan from '../assets/img/paintings/sylvan.png'
import Remus from '../assets/img/paintings/remus.png'
import Sunset from '../assets/img/paintings/sunset-in-candy.png'
import Hi from '../assets/img/paintings/hi.jpg'
import dave from '../assets/img/paintings/dave.jpg'
import Gibby from '../assets/img/paintings/gibby.jpg'
import LeafFallDay from '../assets/img/paintings/leaf-fall-day.jpg'
import LotusEater from '../assets/img/paintings/lotus-eater.png'
import Earth from '../assets/img/paintings/earth.jpg'
import NeonSurf from '../assets/img/paintings/neon-surf.png'
import Iris from '../assets/img/paintings/iris.jpg'
import SamsFire from '../assets/img/paintings/sams-fire.png'
import BigBright from '../assets/img/paintings/big-bright.png'
import ThreePigs from '../assets/img/paintings/three-pigs.jpg'
import AllOver from '../assets/img/paintings/all-over.png'
import Snoozin from '../assets/img/paintings/snoozin.jpg'
import Tidepool from '../assets/img/paintings/tidepool.jpg'
import ColdToes from '../assets/img/paintings/cold-toes.png'
import Everything from '../assets/img/paintings/everything.jpg'
import Carefully from '../assets/img/paintings/carefully.png'
import Dunes from '../assets/img/murals/dunes-mural.jpg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            :image="Remus"
            alt="Painting of a cat in monochromatic pink"
            caption="Remus | Oil on wood | 2025"
          />
          <LightboxImage :image="ThreePigs" caption="Three pigs | Acrylic on wood | 2023." />
          <LightboxImage :image="ColdToes" caption="Cold Toes | Digital painting | 2026" />
          <LightboxImage
            :image="Sylvan"
            caption="Sylvan | Acrylic on wood | 2022"
            alt="Painting of coast in Marquette, MI"
          />
          <LightboxImage
            :image="dave"
            alt="Painting of a cat"
            caption="DAVE | Oil on wood | 2025"
          />
          <LightboxImage :image="AllOver" caption="All Over | Digital painting | 2020" />
          <LightboxImage :image="NeonSurf" caption="In the neon surf | Digital painting | 2023" />
        </div>

        <div class="col item">
          <LightboxImage
            :image="Dunes"
            caption="Pitcher's Thistle On Dune | Acrylic on plaster board | 2025 | Available"
            alt="Painting of Lake Michigan dunes at sunset with a pitcher's thistle and monarch in the foreground."
          />
          <LightboxImage
            :image="Everything"
            caption="Everything is everything | Acrylic on wood | 2025 | Available"
          />
          <LightboxImage :image="LotusEater" caption="Lotus eater | Digital painting | 2023" />
          <LightboxImage :image="Earth" caption="Earth | Acrylic on wood | 2023" />

          <LightboxImage :image="SamsFire" caption="Sam's Fire | Digital painting | 2022" />
          <LightboxImage :image="LeafFallDay" caption="Leaf Fall Day | Digital painting | 2026" />
          <LightboxImage :image="Iris" caption="Iris | Digital painting | 2021" />
        </div>

        <div class="col item">
          <LightboxImage :image="Tidepool" caption="Tidepool | Oil on wood | 2025 | Available" />
          <LightboxImage :image="BigBright" caption="Big Bright! | Acrylic on wood | 2022" />
          <LightboxImage
            :image="Sunset"
            alt="Painting of a snowy tree bathed in sunset"
            caption="Sunset in Candy | Acrylic on wood | 2022"
          />
          <LightboxImage
            :image="Gibby"
            alt="Painting of a bleping cat in monochromatic pink"
            caption="Gibby | Oil on wood | 2025"
          />
          <LightboxImage :image="Snoozin" caption="Snoozin' | Acrylic on canvas | 2019" />
          <LightboxImage
            :image="Hi"
            alt="Painting of two capybaras in a grassy landscape in cool colors"
            caption="hi | Acrylic on wood | 2022"
          />
          <LightboxImage
            :image="Carefully"
            caption="Carefully orchestrated to LOOK casual | Digital painting | 2022"
          />
        </div>
      </div>
    </div>
  </div>
</template>
