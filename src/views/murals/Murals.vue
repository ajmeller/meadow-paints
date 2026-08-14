<script setup lang="ts">
import Olek1 from '../../assets/img/murals/leaf-fall-day_mural.jpeg'
import Logperch from '../../assets/img/murals/logperch_cropped.jpeg'
import Dunes2 from '../../assets/img/murals/dunes-mural2.jpeg'
import Logperch_Trans from '../../assets/img/taxonomy/logperch_trans.jpeg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="mural-section">
      <div class="heading">Leaf Fall Day, 2026</div>
      <div class="location">Private residence</div>
      <div class="one-column">
        <img v-lazy="Olek1" />
      </div>
    </div>
    <div class="mural-section">
      <div class="heading">
        <a href="https://www.pleasantpeninsula.org/" target="_blank">Pleasant Peninsula</a>
        Murals, 2024 & 2025
      </div>
      <div class="location">Grand Rapids, Michigan</div>

      <div class="lighbox-gallery">
        <div class="two-img">
          <div>
            <img
              v-lazy="Dunes2"
              alt="Painting of Lake Michigan dunes at sunset with a pitcher's thistle and monarch in the foreground."
            />
          </div>
          <div>
            <img
              v-lazy="Logperch"
              alt="Painting of a logperch attached to 6th st. bridge in Grand Rapids, MI"
            />
          </div>
        </div>
      </div>

      <div class="one-column">
        <img v-lazy="Logperch_Trans" alt="Painting of a logperch" />
      </div>
    </div>
  </div>
</template>

<style>
.mural-section {
  margin-bottom: 60px;
}

.location {
  margin: -12px 0px 12px;
}

.two-img {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  img {
    width: 100%;
  }
}
</style>
