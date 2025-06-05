<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
</script>

<template>
  <div>
    <div class="heading">Mitosis, 2022-2024</div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage
            img-ref="src/assets/img/mitosis/mitosis.jpg"
            caption="Mitosis, acrylic on cradled wood panel. 2022."
          />
          <LightboxImage
            img-ref="src/assets/img/mitosis/mitosis-ii.png"
            caption="Mitosis II, acrylic on wood board. 2023."
          />
          <LightboxImage
            img-ref="src/assets/img/mitosis/dropped.png"
            caption="(Dropped my) jelly donut, acrylic on wood board. 2023."
          />
          <LightboxImage
            img-ref="src/assets/img/mitosis/pollen.png"
            caption="Pollen, oil on wood board. 2024."
          />
        </div>
        <div class="col item">
          <LightboxImage
            img-ref="src/assets/img/mitosis/belong.png"
            caption="Belong?, oil on wood board. 2024."
          />
          <LightboxImage
            img-ref="src/assets/img/mitosis/beach-fossils.png"
            caption="Beach Fossils, oil on wood board. 2024."
          />
          <LightboxImage
            img-ref="src/assets/img/mitosis/commune.png"
            caption="Commune, acrylic on wood board. 2023."
          />
          <LightboxImage
            img-ref="src/assets/img/mitosis/cytoplasm.png"
            caption="Cytoplasm, acrylic on wood board. 2023."
          />
        </div>
        <div class="col item">
          <LightboxImage
            img-ref="src/assets/img/mitosis/egg.png"
            caption="The Egg, acrylic and oil on wood board. 2025."
          />
          <LightboxImage
            img-ref="src/assets/img/mitosis/cytoplasm-city.png"
            caption="Cytoplasm City, acrylic on wood board. 2023."
          />
        </div>
      </div>
    </div>
  </div>
</template>
