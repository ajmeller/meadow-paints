<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
</script>

<template>
  <div class="page-content">
    <div class="heading">Other Work, 2020-2025</div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            img-ref="src/assets/img/sylvan.png"
            caption="Sylvan, acrylic on wood board in handbuilt frame. 2022."
            alt="Painting of coast in Marquette, MI"
          />
          <LightboxImage
            img-ref="src/assets/img/remus.png"
            alt="Painting of a cat in monochromatic pink"
            caption="Remus, oil on wood board. 2025."
          />
        </div>
        <div class="col item">
          <LightboxImage
            img-ref="src/assets/img/sunset-in-candy.png"
            alt="Painting of a snowy tree bathed in sunset"
            caption="Sunset in Candy, acrylic on wood board. 2022."
          />
          <LightboxImage
            img-ref="src/assets/img/hi.jpg"
            alt="Painting of a two capybaras in a grassy landscape in cool colors"
            caption="hi, acrylic on wood board. 2022."
          />
        </div>
        <div class="col item">
          <LightboxImage
            img-ref="src/assets/img/tree.png"
            alt="Digital painting of a tree with multi-color gradient"
          />
        </div>
      </div>
    </div>
  </div>
</template>
