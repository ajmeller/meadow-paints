<script setup lang="ts">
import LightboxImage from '../../components/LightboxImage.vue'
import Olek1 from '../../assets/img/murals/olek_mural.jpg'
import Olek2 from '../../assets/img/murals/olek_mural2.jpg'
</script>

<template>
  <div class="page-content">
    <div class="heading">Leaf Fall Day, 2026</div>
    <div class="description">Private residential commission</div>
    <div class="lighbox-gallery">
      <div class="two-img">
        <div>
          <LightboxImage :image="Olek1" />
        </div>
        <div>
          <LightboxImage :image="Olek2" />
        </div>
      </div>
    </div>
  </div>
</template>
