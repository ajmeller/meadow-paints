<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Sylvan from '../assets/img/paintings/sylvan.png'
import Remus from '../assets/img/paintings/remus.png'
import Sunset from '../assets/img/paintings/sunset-in-candy.png'
import Hi from '../assets/img/paintings/hi.jpg'
import IndoorFish from '../assets/img/paintings/indoor-fish.jpg'
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
import FringedOrchid from '../assets/img/paintings/fringed-orchid.jpg'
import Chippy from '../assets/img/paintings/chippy.jpg'
import InKnots from '../assets/img/paintings/in-knots.png'
import Carefully from '../assets/img/paintings/carefully.png'
import Dunes from '../assets/img/murals/dunes-mural.jpg'
import Logperch_Trans from '../assets/img/murals/logperch_trans.png'
</script>

<template>
  <div class="page-content white-bg">
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            :image="IndoorFish"
            caption="Indoor Fish, oil on wood board. 2025."
            alt="Painting of banded killifish"
          />
          <LightboxImage :image="Tidepool" caption="Tidepool, oil on wood panel. 2025." />
          <LightboxImage
            :image="ThreePigs"
            caption="Three pigs, acrylic on 4x4 wood panel. 2023."
          />
          <LightboxImage :image="ColdToes" caption="Cold Toes. Digital painting. 2026." />
          <LightboxImage
            :image="Sylvan"
            caption="Sylvan, acrylic on wood board in handbuilt frame. 2022."
            alt="Painting of coast in Marquette, MI"
          />
          <LightboxImage
            :image="dave"
            alt="Painting of a cat"
            caption="DAVE, oil on wood board. 2025."
          />
          <LightboxImage :image="AllOver" caption="All Over, digital painting. 2020." />
          <LightboxImage :image="NeonSurf" caption="In the neon surf, digital painting. 2023." />

          <LightboxImage
            :image="Carefully"
            caption="Carefully orchestrated to LOOK casual, digital painting. 2022."
          />
        </div>

        <div class="col item">
          <LightboxImage
            :image="Dunes"
            alt="Painting of Lake Michigan dunes at sunset with a pitcher's thistle and monarch in the foreground."
          />

          <LightboxImage :image="Chippy" caption="Untitled. 2026." />
          <LightboxImage
            :image="Everything"
            caption="Everything is everything, acrylic on wood panel. 2025."
          />
          <LightboxImage :image="LotusEater" caption="Lotus eater, digital painting. 2023." />
          <LightboxImage :image="Earth" caption="Earth, acrylic on 4x4 wood panel. 2023." />
          <LightboxImage
            :image="Remus"
            alt="Painting of a cat in monochromatic pink"
            caption="Remus, oil on wood board. 2025."
          />
          <LightboxImage :image="SamsFire" caption="Sam's Fire, digital painting. 2022." />
          <LightboxImage :image="LeafFallDay" caption="Leaf Fall Day, digital painting. 2026." />
          <LightboxImage :image="Iris" caption="Iris, digital painting. 2021." />

          <!-- <LightboxImage :image="InKnots" caption="In Knots, acrylic on wood panel. 2022." /> -->
        </div>

        <div class="col item">
          <LightboxImage
            :image="BigBright"
            caption="Big Bright!, acrylic on 4x4 wood panel. 2022."
          />
          <LightboxImage :image="FringedOrchid" caption="Purple Fringed Orchid. 2025." />
          <LightboxImage
            :image="Sunset"
            alt="Painting of a snowy tree bathed in sunset"
            caption="Sunset in Candy, acrylic on wood board. 2022."
          />
          <LightboxImage
            :image="Gibby"
            alt="Painting of a bleping cat in monochromatic pink"
            caption="Gibby, oil on wood board. 2025."
          />
          <LightboxImage :image="Snoozin" caption="Snoozin', acrylic on 4x4 canvas. 2019." />
          <LightboxImage
            :image="Hi"
            alt="Painting of two capybaras in a grassy landscape in cool colors"
            caption="hi, acrylic on wood board. 2022."
          />
        </div>
      </div>
    </div>
  </div>
</template>
