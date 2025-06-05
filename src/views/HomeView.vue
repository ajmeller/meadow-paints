<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="page" style="width: 100%">
    <section
      class="portfolio-block block-intro"
      style="position: relative; height: auto; min-height: 740px"
    >
      <div
        class="heading"
        style="position: absolute; top: 11%; left: 2%; z-index: 100; font-size: 60px"
      >
        Meadow Paints
      </div>
      <img
        src="../assets/img/posts/chippy.png"
        style="
          width: 200px;
          position: absolute;
          right: 0%;
          top: 31%;
          z-index: 4;
          border-top-left-radius: 39%;
          border-top-right-radius: 39%;
        "
      />
      <button
        class="btn btn-primary"
        type="button"
        style="position: absolute; right: 5%; bottom: 11%"
      >
        <RouterLink to="/about">About Me!</RouterLink>
      </button>
      <img
        src="../assets/img/mitosis/belong.png"
        style="
          left: 41%;
          top: 51%;
          width: 200px;
          position: absolute;
          border-radius: 50%;
          z-index: 3;
        "
      />
      <img
        src="../assets/img/logperch_cropped.png"
        style="width: 450px; position: absolute; right: 11%; top: 4%"
      />
      <img
        src="../assets/img/abstract/sams-fire.png"
        style="width: 200px; position: absolute; left: 55%; top: 63%"
      />
      <img
        src="../assets/img/mitosis/dropped.png"
        style="width: 350px; position: absolute; left: 3%; top: 33%"
      />
    </section>
  </main>
</template>
