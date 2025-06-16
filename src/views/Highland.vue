assets/img/
<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
</script>

<template>
  <div class="page-content">
    <div class="heading">Park People, 2024</div>
    <div class="description">
      This mural was commissioned by the Highland Park Neighborhood Arts Committee, and is located
      in Highland Park in Grand Rapids, MI. There are 33 posts, and each is painted with a species
      found in the park. Together, the posts pay homage to all the people that inhabit and play in
      the park, human and non. The posts are an invitation to explore and observe the great
      diversity of beings, activities, and landscapes found in this beautiful urban park.
    </div>
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
