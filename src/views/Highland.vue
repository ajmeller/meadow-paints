<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Chippy from '../assets/img/posts/chippy.png'
import Goldenrod2 from '../assets/img/posts/goldenrod2.png'
import Asters from '../assets/img/posts/asters.jpg'
import Monarchs from '../assets/img/posts/monarchs.png'
import Toads from '../assets/img/posts/toads.jpg'
import All2 from '../assets/img/posts/all2.jpg'
import WhiteRot from '../assets/img/posts/white-rot.jpg'
import Mycellium from '../assets/img/posts/mycellium.png'
import Gigi from '../assets/img/posts/gigi.png'
import Conehead from '../assets/img/posts/conehead.jpg'
import All from '../assets/img/posts/all.jpg'
import Cottonwood from '../assets/img/posts/cottonwood.png'
import Bluejays from '../assets/img/posts/bluejays.png'
import Milkweed from '../assets/img/posts/milkweed.png'
import Goldenrod from '../assets/img/posts/goldenrod.png'
import Cardinals from '../assets/img/posts/cardinals.jpg'
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
          <LightboxImage :image="Chippy" />
          <LightboxImage :image="Goldenrod2" />
          <LightboxImage :image="Asters" />
          <LightboxImage :image="Monarchs" />
          <LightboxImage :image="Toads" />
        </div>
        <div class="col item">
          <LightboxImage :image="All2" />
          <LightboxImage :image="WhiteRot" />
          <LightboxImage :image="Mycellium" />
          <LightboxImage :image="Gigi" />
          <LightboxImage :image="Conehead" />
        </div>
        <div class="col item">
          <LightboxImage :image="All" />
          <LightboxImage :image="Cottonwood" />
          <LightboxImage :image="Bluejays" />
          <LightboxImage :image="Milkweed" />
          <LightboxImage :image="Goldenrod" />
          <LightboxImage :image="Cardinals" />
        </div>
      </div>
    </div>
  </div>
</template>
