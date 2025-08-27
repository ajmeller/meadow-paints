<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Chippy from '../assets/img/posts/chippy.png'
import Chippy2 from '../assets/img/posts/chippy2.JPG'
import BES from '../assets/img/posts/bes.JPG'
import Goldenrod2 from '../assets/img/posts/goldenrod2.png'
import Asters from '../assets/img/posts/asters.jpg'
import Monarchs from '../assets/img/posts/monarchs.png'
import Monarchs2 from '../assets/img/posts/monarchs2.jpg'
import Toads from '../assets/img/posts/toads.jpg'
import Toads2 from '../assets/img/posts/toads2.jpg'
import All2 from '../assets/img/posts/all2.jpg'
import WhiteRot from '../assets/img/posts/white-rot.jpg'
import Mycellium from '../assets/img/posts/mycellium.png'
import Gigi from '../assets/img/posts/gigi.png'
import Conehead from '../assets/img/posts/conehead.jpg'
import All from '../assets/img/posts/all.jpg'
import Cottonwood from '../assets/img/posts/cottonwood.png'
import Bluejays from '../assets/img/posts/bluejays.png'
import Milkweed from '../assets/img/posts/milkweed.png'
import Milkweed2 from '../assets/img/posts/milkweed2.JPG'
import Goldenrod from '../assets/img/posts/goldenrod.png'
import Cardinals from '../assets/img/posts/cardinals.jpg'
import Cardinals2 from '../assets/img/posts/cardinals2.JPG'
import Cardinals3 from '../assets/img/posts/cardinals3.JPG'
import Rabbits from '../assets/img/posts/rabbits.JPG'
import River from '../assets/img/posts/river.JPG'
import Sparrows from '../assets/img/posts/sparrows.JPG'
import Squirrels from '../assets/img/posts/squirrels.JPG'
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
          <LightboxImage :image="Conehead" />
          <LightboxImage :image="Toads" />
          <LightboxImage :image="River" />
          <LightboxImage :image="Chippy2" />
          <LightboxImage :image="Cardinals2" />
        </div>
        <div class="col item">
          <LightboxImage :image="All2" />
          <LightboxImage :image="WhiteRot" />
          <LightboxImage :image="Mycellium" />
          <LightboxImage :image="Gigi" />
          <LightboxImage :image="BES" />
          <LightboxImage :image="Cardinals" />
          <LightboxImage :image="Milkweed2" />
          <LightboxImage :image="Rabbits" />
          <LightboxImage :image="Toads2" />
        </div>
        <div class="col item">
          <LightboxImage :image="All" />
          <LightboxImage :image="Cottonwood" />
          <LightboxImage :image="Bluejays" />
          <LightboxImage :image="Milkweed" />
          <LightboxImage :image="Goldenrod" />
          <LightboxImage :image="Monarchs2" />
          <LightboxImage :image="Squirrels" />
          <LightboxImage :image="Sparrows" />
          <LightboxImage :image="Cardinals3" />
        </div>
      </div>
    </div>
  </div>
</template>
