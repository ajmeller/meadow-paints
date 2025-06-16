<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Mitosis from '../assets/img/mitosis/mitosis.jpg'
import MitosisII from '../assets/img/mitosis/mitosis-ii.png'
import Dropped from '../assets/img/mitosis/dropped.png'
import Pollen from '../assets/img/mitosis/pollen.png'
import Belong from '../assets/img/mitosis/belong.png'
import BeachFossils from '../assets/img/mitosis/beach-fossils.png'
import Commune from '../assets/img/mitosis/commune.png'
import Cytoplasm from '../assets/img/mitosis/cytoplasm.png'
import Egg from '../assets/img/mitosis/egg.png'
import CytoplasmCity from '../assets/img/mitosis/cytoplasm-city.png'
</script>

<template>
  <div class="page-content">
    <div class="heading">Mitosis, 2022-2025</div>
    <div class="description">
      It can be difficult to convert something that was initally a visual language into a written
      language. This series started as an abstract exploration, when shapes that looked like cells
      began to emerge. I named that first piece Mitosis, and the rest of the series came from the
      one, as one cell cleaves into two, and two become four, and so on. The complexity began to
      grow subsequently. In some, I zoom into the inner workings of a cell: the cytoplasm. In
      others, I zoom out to a single cell becoming a seed which becomes an organism and then a
      community. As this project continues to evolve, I am interested in exploring the history of
      these organisms and our Earth's geology.
    </div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage :image="Mitosis" caption="Mitosis, acrylic on cradled wood panel. 2022." />
          <LightboxImage :image="MitosisII" caption="Mitosis II, acrylic on wood board. 2023." />
          <LightboxImage
            :image="Dropped"
            caption="(Dropped my) jelly donut, acrylic on wood board. 2023."
          />
          <LightboxImage :image="Pollen" caption="Pollen, oil on wood board. 2024." />
        </div>
        <div class="col item">
          <LightboxImage :image="Belong" caption="Belong?, oil on wood board. 2024." />
          <LightboxImage :image="BeachFossils" caption="Beach Fossils, oil on wood board. 2024." />
          <LightboxImage :image="Commune" caption="Commune, acrylic on wood board. 2023." />
          <LightboxImage :image="Cytoplasm" caption="Cytoplasm, acrylic on wood board. 2023." />
        </div>
        <div class="col item">
          <LightboxImage :image="Egg" caption="The Egg, acrylic and oil on wood board. 2025." />
          <LightboxImage
            :image="CytoplasmCity"
            caption="Cytoplasm City, acrylic on wood board. 2023."
          />
        </div>
      </div>
    </div>
  </div>
</template>
