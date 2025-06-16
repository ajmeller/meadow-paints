<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Logperch2 from '../assets/img/logperch/logperch2.png'
import Logperch3 from '../assets/img/logperch/logperch3.png'
import Logperch4 from '../assets/img/logperch/logperch4.png'
</script>

<template>
  <div class="page-content">
    <div class="heading">Pleasant Peninsula Mini Fish Mural, 2024</div>
    <div class="description"></div>
    <div class="lighbox-gallery">
      <img
        class="big-img"
        src="../assets/img/logperch/logperch.png"
        alt="Painting of a logperch attached to 6th st. bridge in Grand Rapids, MI"
      />
      <div class="grid">
        <div class="col item">
          <LightboxImage :image="Logperch4" />
        </div>
        <div class="col item">
          <LightboxImage :image="Logperch3" />
        </div>
        <div class="col item">
          <LightboxImage :image="Logperch2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.big-img {
  width: calc(100% - 12px);
}
</style>
