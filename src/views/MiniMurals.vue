<script setup lang="ts">
import LightboxImage from '../components/LightboxImage.vue'
import Logperch2 from '../assets/img/pp/logperch2.png'
import Logperch3 from '../assets/img/pp/logperch3.png'
import Logperch4 from '../assets/img/pp/logperch4.png'
import Logperch from '../assets/img/pp/logperch.png'
import Orchid from '../assets/img/pp/fringed-orchid.JPG'
import Orchid2 from '../assets/img/pp/fringed-orchid2.JPG'
import Orchid3 from '../assets/img/pp/fringed-orchid3.JPG'
import Dunes from '../assets/img/pp/dunes-mural.JPG'
import Dunes2 from '../assets/img/pp/dunes-mural2.JPG'
</script>

<template>
  <div class="page-content">
    <div class="heading">Pleasant Peninsula Ecosystem Mural, 2025</div>
    <div class="description">
      The pleasant peninsula festival is an annual gathering of artists and educators in Grand
      Rapids, MI held to celebrate and highlight the ecological wonders found in Michigan. In 2025,
      I completed a 4' x 4' mural on the Great Lakes dune ecosystem, which was displayed on the day
      of the festival.
    </div>
    <div class="dunes">
      <div class="dunes-img">
        <LightboxImage
          :image="Dunes"
          alt="Painting of Lake Michigan dunes at sunset with a pitcher's thistle and monarch in the foreground."
        />
      </div>
      <div class="dunes-img">
        <LightboxImage
          :image="Dunes2"
          alt="Painting of Lake Michigan dunes at sunset with a pitcher's thistle and monarch in the foreground."
        />
      </div>
    </div>
    <div class="extra-description">
      <b>About this mural:</b> Within the dunes systems of the Great Lakes, a beautiful thistle
      finds its home. The dunes and thistle are alike in that they are not found any where else in
      the world. A pitcher's thistle only flowers once during its 5-8 year life. After flowering,
      the plant dies. Pitcher’s thistle boasts an impressive (up to 6 ft. long) taproot, which not
      only helps stabilize our resplendent dunes, but it also stores a lot of energy. When the
      thistle does flower, it produces flowers with high sugar content in their nectar, thanks to
      this stored energy in the taproot. This makes the pitcher's thistle a top choice among
      pollinators, as it is an efficient place to fuel up. The plant may be of special importance to
      monarch butterflies during their long migration to Mexico. (<a
        href="https://xerces.org/sites/default/files/2018-05/16-029_01_XercesSoc_Native-Thistles-Conservation-Guide_web.pdf"
        >Source</a
      >)
    </div>

    <div class="heading">Pleasant Peninsula Native Fish Mural, 2024</div>
    <div class="description">
      For the 2024 pleasant peninsula festival, 50 different artists painted 50 species of fish that
      are native to the Grand River. My species was the logperch. Learn more and see the others
      <a href="https://www.pleasantpeninsula.org/2024">here</a>!
    </div>
    <div class="lighbox-gallery">
      <img
        class="big-img"
        v-lazy="Logperch"
        alt="Painting of a logperch attached to 6th st. bridge in Grand Rapids, MI"
      />
      <div class="grid">
        <div class="col item">
          <LightboxImage :image="Logperch4" />
        </div>
        <div class="col item">
          <LightboxImage :image="Logperch3" />
        </div>
        <div class="col item">
          <LightboxImage :image="Logperch2" />
        </div>
      </div>
    </div>

    <div class="heading">Pleasant Peninsula Native Flower Mural, 2025</div>
    <div class="description">
      In 2025, 100 artists painted 50 pollinators and 50 flowers native to Michigan. My species was
      the purple fringed orchid. Learn more and see the others
      <a href="https://www.pleasantpeninsula.org/2025">here</a>!
    </div>
    <div class="lighbox-gallery">
      <div class="grid">
        <div class="col item">
          <LightboxImage :image="Orchid" />
        </div>
        <div class="col item">
          <LightboxImage :image="Orchid2" />
        </div>
        <div class="col item">
          <LightboxImage :image="Orchid3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.big-img {
  width: calc(100% - 12px);
}

.grid,
.extra-description {
  margin-bottom: 60px;
}

.dunes {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.dunes-img > img {
  width: 100%;
  cursor: pointer;
}
</style>
