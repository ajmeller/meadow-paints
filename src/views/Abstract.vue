<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
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
import InKnots from '../assets/img/abstract/in-knots.png'
import AllOver from '../assets/img/abstract/All_Over.png'
import Rule from '../assets/img/abstract/rule.jpg'
import NiceWay from '../assets/img/abstract/nice-way.png'
import Carefully from '../assets/img/abstract/carefully.png'
import IceCave from '../assets/img/abstract/ice-cave.png'
import Snoozin from '../assets/img/abstract/snoozin.jpg'
import Blush from '../assets/img/abstract/blush.png'
import MariposaI from '../assets/img/abstract/Mariposa_I.png'
</script>

<template>
  <div class="page-content">
    <div class="heading">Abstract Work, 2019-Present</div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage :image="Doing" caption="Doin' it all wrong, digital painting. 2023." />
          <LightboxImage :image="Earth" caption="Earth, acrylic on 4x4 wood panel. 2023." />
          <LightboxImage :image="Sensitive" caption="Sensitive, digital painting. 2023." />
          <LightboxImage :image="Iris" caption="Iris, digital painting. 2021." />
          <LightboxImage
            :image="PBW"
            caption="Pancake Boy World, acrylic on 4x4 wood panel. 2022."
          />
          <LightboxImage :image="Star" caption="*, digital painting. 2022." />
          <LightboxImage :image="LooseEnds" caption="Loose Ends, digital painting. 2022." />
        </div>
        <div class="col item">
          <LightboxImage
            :image="Been"
            caption="Been hearing my name be called, been far from home. Digital painting. 2021."
          />
          <LightboxImage :image="SamsFire" caption="Sam's Fire, digital painting. 2022." />
          <LightboxImage
            :image="BigBright"
            caption="Big Bright!, acrylic on 4x4 wood panel. 2022."
          />
          <LightboxImage
            :image="YAK"
            caption="You already know, acrylic on 4x4 wood panel. 2023."
          />
          <LightboxImage :image="InKnots" caption="In Knots, acrylic on wood board. 2022." />
          <LightboxImage :image="AllOver" caption="All Over, digital painting. 2020." />
        </div>
        <div class="col item">
          <LightboxImage :image="Rule" caption="I made a rule, acrylic on 4x4 wood panel. 2022." />
          <LightboxImage :image="NiceWay" caption="Nice way about ya, oil on wood panel. 2025." />
          <LightboxImage
            :image="Carefully"
            caption="Carefully orchestrated to LOOK casual, digital painting. 2022."
          />
          <LightboxImage :image="IceCave" caption="Ice Cave, digital painting. 2022." />
          <LightboxImage :image="Snoozin" caption="Snoozin', acrylic on 4x4 canvas. 2019." />
          <LightboxImage :image="Blush" caption="Blush, digital painting. 2022." />
          <LightboxImage :image="MariposaI" caption="Mariposa I, digital painting. 2020" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #fff8e3;
  background-image: none;
}
</style>
