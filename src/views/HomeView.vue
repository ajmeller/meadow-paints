<template>
  <main>
    <section class="portfolio-block">
      <div class="heading absolute">Meadow Paints</div>
      <img src="../assets/img/posts/chippy.png" class="absolute chippy animate" />
      <img src="../assets/img/mitosis/Belong.jpg" class="absolute belong animate" />
      <img src="../assets/img/pp/logperch_cropped.png" class="absolute logperch animate" />
      <img src="../assets/img/abstract/sams-fire.png" class="absolute sam animate" />
      <img src="../assets/img/mitosis/dropped.png" class="absolute dropped animate" />
      <img src="../assets/img/indoor-fish.jpg" class="absolute fish animate" />
      <img src="../assets/img/pp/dunes-mural.jpg" class="absolute dunes animate" />
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

@media (max-width: 1040px) {
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
    left: 1%;
    z-index: 100;
    font-size: 60px;
  }

  .dropped {
    width: 260px;
    left: 7%;
    top: 16%;
  }

  .logperch {
    width: 450px;
    right: 15%;
    top: 4%;
  }

  .chippy {
    width: 200px;
    right: 1%;
    top: 31%;
    z-index: 4;
    border-radius: 50% 50% 50% 50% / 34% 34% 0% 0%;
  }

  .fish {
    width: 400px;
    border-radius: 10px;
    top: 63%;
    left: 1%;
  }

  .belong {
    left: 30%;
    top: 42%;
    width: 240px;
    border-radius: 50%;
    z-index: 3;
  }

  .sam {
    width: 240px;
    left: 48%;
    top: 59%;
  }

  .dunes {
    width: 200px;
    top: 75%;
    left: 71%;
    z-index: 5;
  }
}

.animate:hover {
  animation: animate 0.5s linear infinite;
}

@keyframes animate {
  10% {
    transform: rotate(-0.5deg);
  }

  25% {
    transform: rotate(-1deg);
  }

  75% {
    transform: rotate(1deg);
  }

  90% {
    transform: rotate(0.5deg);
  }
}
</style>
