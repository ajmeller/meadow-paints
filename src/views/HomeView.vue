<template>
  <main>
    <section class="portfolio-block">
      <div class="heading absolute">Meadow Paints</div>
      <img src="../assets/img/posts/chippy.png" class="absolute chippy animate" />
      <img src="../assets/img/mitosis/Belong.jpg" class="absolute belong animate" />
      <img src="../assets/img/murals/logperch_cropped.png" class="absolute logperch animate" />
      <img src="../assets/img/paintings/sams-fire.png" class="absolute sam animate" />
      <img src="../assets/img/mitosis/dropped.png" class="absolute dropped animate" />
      <img src="../assets/img/paintings/indoor-fish.jpg" class="absolute fish animate" />
      <img src="../assets/img/murals/dunes-mural.jpg" class="absolute dunes animate" />
    </section>
  </main>
</template>

<style scoped>
img {
  width: 100%;
}

@media (min-width: 700px) {
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
    left: 2%;
    top: 3%;
    z-index: 100;
    font-size: 60px;
  }

  .dropped {
    width: 260px;
    left: 9%;
    top: 16%;
  }

  .logperch {
    width: 450px;
    right: 20%;
    top: 5%;
  }

  .chippy {
    width: 200px;
    right: 2%;
    top: 26%;
    z-index: 4;
    border-radius: 50% 50% 50% 50% / 34% 34% 0% 0%;
  }

  .fish {
    width: 400px;
    border-radius: 10px;
    top: 63%;
    left: 3%;
  }

  .belong {
    left: 31%;
    top: 38%;
    width: 240px;
    border-radius: 50%;
    z-index: 3;
  }

  .sam {
    width: 200px;
    left: 46%;
    top: 61%;
  }

  .dunes {
    width: 240px;
    top: 65%;
    right: 12%;
    z-index: 5;
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
}

@media (max-width: 1040px) {
  .heading {
    font-size: 40px;
    background-color: #fffdf7ce;
    border-radius: 40px;
    padding: 4px 20px;
  }
}

@media (max-width: 700px) {
  .heading {
    display: none;
  }
}
</style>
