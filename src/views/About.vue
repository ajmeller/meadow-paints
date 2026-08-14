<script setup lang="ts">
import Me2 from '../assets/img/ppme.jpg'
import Me3 from '../assets/img/murals/leaf-fall-day_mural2.jpeg'
</script>

<template>
  <div class="page-content">
    <div class="left">
      <div class="heading">Hello!</div>
      <div>
        I am Alyssa, a.k.a. Meadow. I have been an artist my whole life, and I do all kinds of art,
        but I love painting best.
        <br /><br />
        Through art, I explore themes of connectedness and nature. I practice art as a way to zoom
        in, notice, and pay homage to the natural world and mystery. I especially love drawing
        animals or making abstract compositions.
        <br /><br />
        I am currently based part-time in Grand Rapids, MI and part-time in Philadelphia, PA.
      </div>
      <br /><br />
      <div></div>
      <img v-lazy="Me3" alt="Photo of Meadow with a mural they painted" />
    </div>
    <div class="right">
      <img v-lazy="Me2" alt="Photo of Meadow painting" />
    </div>
  </div>
</template>

<style scoped>
.page-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 20px 40px;
}

img {
  width: 100%;
  margin-top: 0px;
  border-radius: 4px;
}

@media (max-width: 700px) {
  .page-content {
    grid-template-columns: 1fr;
  }
}
</style>
