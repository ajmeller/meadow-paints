<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Sylvan from '../assets/img/sylvan.png'
import Remus from '../assets/img/commissions/remus.png'
import Sunset from '../assets/img/sunset-in-candy.png'
import Hi from '../assets/img/hi.jpg'
import Tree from '../assets/img/tree.png'
import IndoorFish from '../assets/img/indoor-fish.jpg'
import dave from '../assets/img/commissions/dave.jpg'
import Gibby from '../assets/img/commissions/gibby.jpg'
import LeafFallDay from '../assets/img/Leaf_Fall_Day.jpg'
import Doing from '../assets/img/abstract/doing.png'
import Earth from '../assets/img/abstract/earth.jpg'
import Sensitive from '../assets/img/abstract/sensitive.png'
import Iris from '../assets/img/abstract/iris.jpg'
import PBW from '../assets/img/abstract/pbw.png'
import Star from '../assets/img/abstract/star.png'
import LooseEnds from '../assets/img/abstract/loose_ends.png'
import Been from '../assets/img/abstract/been.png'
import SamsFire from '../assets/img/abstract/sams-fire.png'
import BigBright from '../assets/img/abstract/big-bright.png'
import YAK from '../assets/img/abstract/yak.jpg'
import AllOver from '../assets/img/abstract/All_Over.png'
import Rule from '../assets/img/abstract/rule.jpg'
import Carefully from '../assets/img/abstract/carefully.png'
import Wiz from '../assets/img/abstract/wiz.jpg'
import Snoozin from '../assets/img/abstract/snoozin.jpg'
import Tidepool from '../assets/img/abstract/tidepool.jpg'
import ColdToes from '../assets/img/abstract/cold-toes.png'
import Everything from '../assets/img/everything.jpg'
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
          <LightboxImage :image="LeafFallDay" caption="Leaf Fall Day, digital painting. 2026." />
          <LightboxImage :image="Doing" caption="Lotus eater, digital painting. 2023." />
          <LightboxImage :image="Earth" caption="Earth, acrylic on 4x4 wood panel. 2023." />
          <LightboxImage
            :image="BigBright"
            caption="Big Bright!, acrylic on 4x4 wood panel. 2022."
          />
          <LightboxImage
            :image="Sylvan"
            caption="Sylvan, acrylic on wood board in handbuilt frame. 2022."
            alt="Painting of coast in Marquette, MI"
          />
          <LightboxImage :image="AllOver" caption="All Over, digital painting. 2020." />
          <LightboxImage
            :image="PBW"
            caption="Pancake Boy World, acrylic on 4x4 wood panel. 2022."
          />
          <LightboxImage :image="Rule" caption="I made a rule, acrylic painting. 2022." />
          <LightboxImage :image="Iris" caption="Iris, digital painting. 2021." />
          <LightboxImage
            :image="Carefully"
            caption="Carefully orchestrated to LOOK casual, digital painting. 2022."
          />
        </div>

        <div class="col item">
          <LightboxImage :image="YAK" caption="Three pigs, acrylic on 4x4 wood panel. 2023." />
          <LightboxImage
            :image="Everything"
            caption="Everything is everything, acrylic on wood panel. 2025."
          />
          <LightboxImage
            :image="Remus"
            alt="Painting of a cat in monochromatic pink"
            caption="Remus, oil on wood board. 2025."
          />
          <LightboxImage
            :image="Been"
            caption="Been hearing my name be called, been far from home. Digital painting. 2021."
          />
          <LightboxImage :image="ColdToes" caption="Cold Toes. Digital painting. 2026." />
          <LightboxImage
            :image="Hi"
            alt="Painting of two capybaras in a grassy landscape in cool colors"
            caption="hi, acrylic on wood board. 2022."
          />
          <LightboxImage
            :image="dave"
            alt="Painting of a cat"
            caption="DAVE, oil on wood board. 2025."
          />
          <LightboxImage :image="Star" caption="*, digital painting. 2022." />
          <LightboxImage :image="Wiz" caption="wiz, acylic painting. 2022." />
        </div>

        <div class="col item">
          <LightboxImage :image="Tidepool" caption="Tidepool, oil on wood panel. 2025." />
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
          <LightboxImage :image="SamsFire" caption="Sam's Fire, digital painting. 2022." />
          <LightboxImage :image="Snoozin" caption="Snoozin', acrylic on 4x4 canvas. 2019." />
          <LightboxImage :image="Tree" alt="Digital painting of a tree with multi-color gradient" />
          <LightboxImage :image="Sensitive" caption="In the neon surf, digital painting. 2023." />
          <LightboxImage :image="LooseEnds" caption="Loose Ends, digital painting. 2022." />
        </div>
      </div>
    </div>
  </div>
</template>
