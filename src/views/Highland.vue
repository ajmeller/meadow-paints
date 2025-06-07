assets/img/
<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
</script>

<template>
  <div class="page-content">
    <div class="heading">Park People, 2024</div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage img-ref="src/assets/img/posts/chippy.png" />
          <LightboxImage img-ref="src/assets/img/posts/goldenrod2.png" />
          <LightboxImage img-ref="src/assets/img/posts/asters.jpg" />
          <LightboxImage img-ref="src/assets/img/posts/monarchs.png" />
          <LightboxImage img-ref="src/assets/img/posts/toads.jpg" />
        </div>
        <div class="col item">
          <LightboxImage img-ref="src/assets/img/posts/all2.jpg" />
          <LightboxImage img-ref="src/assets/img/posts/white-rot.jpg" />
          <LightboxImage img-ref="src/assets/img/posts/mycellium.png" />
          <LightboxImage img-ref="src/assets/img/posts/gigi.png" />
          <LightboxImage img-ref="src/assets/img/posts/conehead.jpg" />
        </div>
        <div class="col item">
          <LightboxImage img-ref="src/assets/img/posts/all.jpg" />
          <LightboxImage img-ref="src/assets/img/posts/cottonwood.png" />
          <LightboxImage img-ref="src/assets/img/posts/bluejays.png" />
          <LightboxImage img-ref="src/assets/img/posts/milkweed.png" />
          <LightboxImage img-ref="src/assets/img/posts/goldenrod.png" />
          <LightboxImage img-ref="src/assets/img/posts/cardinals.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
