<script setup lang="ts">
import Olek from '../assets/img/murals/leaf-fall-day_mural.jpeg'
import Casim from '../assets/img/murals/casim.jpeg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="mural-section">
      <div class="heading">Leaf Fall Day, 2026</div>
      <div class="location">Private residence</div>
      <div class="one-column">
        <img v-lazy="Olek" />
      </div>
    </div>
    <div class="mural-section">
      <div class="heading">Nothing Comes From Nothing, 2026</div>
      <div class="location">Private residence</div>
      <div class="one-column">
        <img v-lazy="Casim" />
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
