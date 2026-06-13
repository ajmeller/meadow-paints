<template>
  <main>
    <section class="portfolio-block">
      <div class="heading">Meadow Paints</div>
      <a href="/highland" class="chippy"> <img src="../assets/img/posts/chippy.png" /></a>
      <a href="/about" class="belong"> <img src="../assets/img/mitosis/Belong.jpg" /></a>
      <a href="/murals" class="logperch">
        <img src="../assets/img/murals/logperch_cropped.png"
      /></a>
      <a href="/paintings" class="sam"> <img src="../assets/img/paintings/sams-fire.png" /></a>
      <a href="/mitosis" class="dropped"> <img src="../assets/img/mitosis/dropped.png" /></a>
      <a href="/available" class="killifish">
        <img src="../assets/img/species/indoor-fish.jpg"
      /></a>
      <a href="/illustration" class="dunes"> <img src="../assets/img/murals/dunes-mural.jpg" /></a>
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

  a {
    position: absolute;

    &:hover {
      animation: animate 0.5s linear infinite;
    }
  }

  img {
    border-radius: 4px;
  }

  .heading {
    left: 2%;
    top: 1%;
    z-index: 100;
    font-size: 60px;
    position: absolute;
  }

  .dropped {
    width: 260px;
    left: 7%;
    top: 13%;
  }

  .belong {
    left: 29%;
    top: 28%;
    width: 240px;
    z-index: 3;

    img {
      border-radius: 50%;
    }
  }

  .sam {
    width: 200px;
    left: 41%;
    top: 53%;
  }

  .killifish {
    width: 400px;
    top: 58%;
    left: 2%;

    img {
      border-radius: 10px;
    }
  }

  .logperch {
    width: 450px;
    right: 20%;
    top: 3%;
  }

  .chippy {
    width: 200px;
    right: 2%;
    top: 18%;
    z-index: 4;

    img {
      border-radius: 50% 50% 50% 50% / 34% 34% 0% 0%;
    }
  }

  .dunes {
    width: 240px;
    top: 54%;
    right: 13%;
    z-index: 5;
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
    top: 2%;
  }
}

@media (max-width: 700px) {
  .heading {
    display: none;
  }
}
</style>
