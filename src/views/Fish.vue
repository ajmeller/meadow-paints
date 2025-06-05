<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
</script>

<template>
  <div>
    <div class="heading">Pleasant Peninsula Mini Fish Mural, 2024</div>
    <div class="lighbox-gallery">
      <img
        class="big-img"
        src="../assets/img/logperch/logperch.png"
        alt="Painting of a logperch attached to 6th st. bridge in Grand Rapids, MI"
      />
      <div class="grid">
        <div class="col item">
          <LightboxImage img-ref="src/assets/img/logperch/logperch4.png" />
        </div>
        <div class="col item">
          <LightboxImage img-ref="src/assets/img/logperch/logperch3.png" />
        </div>
        <div class="col item">
          <LightboxImage img-ref="src/assets/img/logperch/logperch2.png" />
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
