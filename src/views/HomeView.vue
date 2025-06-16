<template>
  <main>
    <section class="portfolio-block">
      <div class="heading absolute">Meadow Paints</div>
      <img src="../assets/img/posts/chippy.png" class="absolute chippy" />
      <img src="../assets/img/mitosis/belong.png" class="absolute belong" />
      <img src="../assets/img/logperch/logperch_cropped.png" class="absolute logperch" />
      <img src="../assets/img/abstract/sams-fire.png" class="absolute sam" />
      <img src="../assets/img/mitosis/dropped.png" class="absolute dropped" />
    </section>
  </main>
</template>

<style scoped>
.portfolio-block {
  margin-left: 32px;
}

img {
  width: 100%;
}

@media (max-width: 850px) {
  .heading {
    display: none;
  }
}

@media (min-width: 1040px) {
  main {
    position: relative;
    display: inline-block;
    width: 100%;
    min-height: 660px;
  }

  .absolute {
    position: absolute;
  }

  img {
    border-radius: 4px;
  }

  .heading {
    left: 6%;
    z-index: 100;
    font-size: 60px;
    width: 200px;
    text-wrap: auto;
  }

  .dropped {
    width: 350px;
    left: 2%;
    top: 26%;
  }

  .logperch {
    width: 450px;
    right: 12%;
    top: 2%;
  }

  .chippy {
    width: 200px;
    right: 3%;
    top: 31%;
    z-index: 4;
    border-top-left-radius: 39%;
    border-top-right-radius: 39%;
  }

  .belong {
    left: 35%;
    top: 48%;
    width: 200px;
    border-radius: 50%;
    z-index: 3;
  }

  .sam {
    width: 200px;
    left: 47%;
    top: 63%;
  }
}

@media (min-width: 1300px) {
  .heading {
    width: fit-content;
    top: 5%;
  }
}
</style>
