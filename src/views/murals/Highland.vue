<script setup lang="ts">
import All from '../../assets/img/posts/all.jpg'
import Asters from '../../assets/img/posts/asters.jpg'
import Susan from '../../assets/img/posts/bes.jpeg'
import Bluejays from '../../assets/img/posts/bluejays.jpeg'
import Cardinals from '../../assets/img/posts/cardinals.jpg'
import Cardinals2 from '../../assets/img/posts/cardinals2.jpeg'
import Chippy from '../../assets/img/posts/chippy.jpeg'
import Conehead from '../../assets/img/posts/coneflower.jpeg'
import Cottonwood from '../../assets/img/posts/cottonwood.jpeg'
import Gigi from '../../assets/img/posts/gigi.jpeg'
import Goldenrod from '../../assets/img/posts/goldenrod.jpeg'
import Milkweed from '../../assets/img/posts/milkweed.jpeg'
import Monarchs from '../../assets/img/posts/monarchs.jpeg'
import Mushroom from '../../assets/img/posts/mushroom.jpg'
import Mycellium from '../../assets/img/posts/mycellium.jpeg'
import Rabbits from '../../assets/img/posts/rabbits.jpg'
import River from '../../assets/img/posts/river.jpg'
import Squirrels from '../../assets/img/posts/squirrels.jpg'
import Toads from '../../assets/img/posts/toads.jpg'
import Toads2 from '../../assets/img/posts/toads2.jpg'
</script>

<template>
  <div class="page-content white-bg">
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
          <img v-lazy="Chippy" />
          <img v-lazy="Asters" />
          <img v-lazy="Monarchs" />
          <img v-lazy="Bluejays" />
          <img v-lazy="Milkweed" />
          <img v-lazy="Conehead" />
          <img v-lazy="Cardinals2" />
        </div>
        <div class="col item">
          <img v-lazy="Mushroom" />
          <img v-lazy="Cottonwood" />
          <img v-lazy="Gigi" />
          <img v-lazy="Rabbits" />
          <img v-lazy="Toads" />
          <img v-lazy="Toads2" />
        </div>
        <div class="col item">
          <img v-lazy="All" />
          <img v-lazy="Goldenrod" />
          <img v-lazy="Cardinals" />
          <img v-lazy="Susan" />
          <img v-lazy="Mycellium" />
          <img v-lazy="River" />
          <img v-lazy="Squirrels" />
        </div>
      </div>
    </div>
  </div>
</template>
