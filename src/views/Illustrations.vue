<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Bookmark from '../assets/img/illustration/bookmark.jpg'

function copyText() {
  navigator.clipboard.writeText('meadowpaintsart@gmail.com')
}
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Illustration</div>
    <div class="description">
      Email me at
      <span class="copy" title="Click to copy" @click="copyText()"> meadowpaintsart@gmail.com</span>
      to inquire about commissions.
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

<style>
.copy {
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #fb5098;
  }
}
</style>
