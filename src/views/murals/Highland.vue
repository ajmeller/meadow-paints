<script setup lang="ts">
import Chippy from '../../assets/img/posts/chippy.png'
import Chippy2 from '../../assets/img/posts/chippy2.jpg'
import BES from '../../assets/img/posts/bes.jpg'
import Goldenrod2 from '../../assets/img/posts/goldenrod2.png'
import Asters from '../../assets/img/posts/asters.jpg'
import Monarchs from '../../assets/img/posts/monarchs.png'
import Monarchs2 from '../../assets/img/posts/monarchs2.jpg'
import Toads from '../../assets/img/posts/toads.jpg'
import Toads2 from '../../assets/img/posts/toads2.jpg'
import All2 from '../../assets/img/posts/all2.jpg'
import WhiteRot from '../../assets/img/posts/white-rot.jpg'
import Mycellium from '../../assets/img/posts/mycellium.png'
import Gigi from '../../assets/img/posts/gigi.png'
import Conehead from '../../assets/img/posts/conehead.jpg'
import All from '../../assets/img/posts/all.jpg'
import Cottonwood from '../../assets/img/posts/cottonwood.png'
import Bluejays from '../../assets/img/posts/bluejays.png'
import Milkweed from '../../assets/img/posts/milkweed.png'
import Milkweed2 from '../../assets/img/posts/milkweed2.jpg'
import Goldenrod from '../../assets/img/posts/goldenrod.png'
import Cardinals from '../../assets/img/posts/cardinals.jpg'
import Cardinals2 from '../../assets/img/posts/cardinals2.jpg'
import Cardinals3 from '../../assets/img/posts/cardinals3.jpg'
import Rabbits from '../../assets/img/posts/rabbits.jpg'
import River from '../../assets/img/posts/river.jpg'
import Sparrows from '../../assets/img/posts/sparrows.jpg'
import Squirrels from '../../assets/img/posts/squirrels.jpg'
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
          <img v-lazy="Goldenrod2" />
          <img v-lazy="Asters" />
          <img v-lazy="Monarchs" />
          <img v-lazy="Conehead" />
          <img v-lazy="Toads" />
          <img v-lazy="River" />
          <img v-lazy="Chippy2" />
          <img v-lazy="Cardinals2" />
        </div>
        <div class="col item">
          <img v-lazy="All2" />
          <img v-lazy="WhiteRot" />
          <img v-lazy="Mycellium" />
          <img v-lazy="Gigi" />
          <img v-lazy="BES" />
          <img v-lazy="Cardinals" />
          <img v-lazy="Milkweed2" />
          <img v-lazy="Rabbits" />
          <img v-lazy="Toads2" />
        </div>
        <div class="col item">
          <img v-lazy="All" />
          <img v-lazy="Cottonwood" />
          <img v-lazy="Bluejays" />
          <img v-lazy="Milkweed" />
          <img v-lazy="Goldenrod" />
          <img v-lazy="Monarchs2" />
          <img v-lazy="Squirrels" />
          <img v-lazy="Sparrows" />
          <img v-lazy="Cardinals3" />
        </div>
      </div>
    </div>
  </div>
</template>
