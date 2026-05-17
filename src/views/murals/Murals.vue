<script setup lang="ts">
import Olek1 from '../../assets/img/murals/olek_mural.png'
import Olek2 from '../../assets/img/murals/olek_mural2.png'
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Leaf Fall Day, 2026</div>
    <div class="description">Private residence</div>
    <div class="one-column">
      <img v-lazy="Olek1" />
      <img v-lazy="Olek2" />
    </div>
  </div>
</template>
