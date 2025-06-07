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

.heading {
  display: none;
}

img {
  width: 100%;
}

@media (min-width: 850px) {
  .heading {
    display: block;
    width: 200px;
    text-wrap: auto;
    top: 0%;
  }
}

@media (min-width: 1020px) {
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
    top: 4%;
    left: 0;
    z-index: 100;
    font-size: 60px;
  }

  .dropped {
    width: 350px;
    left: 0;
    top: 28%;
  }

  .logperch {
    width: 450px;
    right: 11%;
    top: 2%;
  }

  .chippy {
    width: 200px;
    right: 0;
    top: 31%;
    z-index: 4;
    border-top-left-radius: 39%;
    border-top-right-radius: 39%;
  }

  .belong {
    left: 38%;
    top: 50%;
    width: 200px;
    border-radius: 50%;
    z-index: 3;
  }

  .sam {
    width: 200px;
    left: 52%;
    top: 63%;
  }
}
</style>
