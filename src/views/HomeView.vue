<template>
  <main>
    <section class="portfolio-block">
      <div class="heading absolute">Meadow Paints</div>
      <img src="../assets/img/posts/chippy.png" class="absolute chippy" />
      <img src="../assets/img/mitosis/belong.png" class="absolute belong" />
      <img src="../assets/img/pp/logperch_cropped.png" class="absolute logperch" />
      <img src="../assets/img/abstract/sams-fire.png" class="absolute sam" />
      <img src="../assets/img/mitosis/dropped.png" class="absolute dropped" />
      <img src="../assets/img/indoor-fish.JPG" class="absolute fish" />
      <img src="../assets/img/pp/dunes-mural.JPG" class="absolute dunes" />
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
    margin-bottom: 40px;
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
    width: 260px;
    left: 12%;
    top: 24%;
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
    border-radius: 50% 50% 50% 50% / 34% 34% 0% 0%;
  }

  .fish {
    width: 400px;
    border-radius: 10px;
    top: 70%;
    left: 7%;
  }

  .belong {
    left: 35%;
    top: 43%;
    width: 240px;
    border-radius: 50%;
    z-index: 3;
  }

  .sam {
    width: 240px;
    left: 52%;
    top: 62%;
  }

  .dunes {
    width: 200px;
    top: 75%;
    left: 74%;
    z-index: 5;
  }
}

@media (min-width: 1300px) {
  .heading {
    width: fit-content;
    top: 5%;
  }
}
</style>
