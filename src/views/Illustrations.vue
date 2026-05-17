<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Bookmark from '../assets/img/commissions/bookmark.jpg'
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Illustration</div>
    <div class="description">
      Email me at meadowpaintsart@gmail.com to inquire about commissions.
    </div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            :image="Bookmark"
            caption="Bookmark for Black Dog Books And Records in GR, MI"
          />
        </div>
      </div>
    </div>
  </div>
</template>
