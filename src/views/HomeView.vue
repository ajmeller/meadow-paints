<script setup>
// function startDrag(event, id) {
//   event.dataTransfer.effectAllowed = 'move'
//   event.dataTransfer.setData('id', id)
//   event.dataTransfer.setData('layerX', event.layerX)
//   event.dataTransfer.setData('layerY', event.layerY)

//   const draggedEl = document.getElementById(id)
//   if (draggedEl) {
//     event.dataTransfer.setDragImage(draggedEl, event.layerX, event.layerY)
//   }
// }

// function onDrop(event) {
//   const id = event.dataTransfer.getData('id')
//   const draggedEl = document.getElementById(id)
//   const layerX = event.dataTransfer.getData('layerX')
//   const layerY = event.dataTransfer.getData('layerY')
//   if (draggedEl) {
//     draggedEl.style.top = (event.clientY - Number(layerY)).toString() + 'px'
//     draggedEl.style.left = (event.clientX - Number(layerX)).toString() + 'px'
//     draggedEl.style.zIndex = 1000
//   }
// }
</script>

<template>
  <main>
    <!-- <main class="drop-zone" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent> -->
    <section class="portfolio-block">
      <div class="heading">Meadow Paints</div>

      <!-- <div class="drag-el jelly" id="0" @dragstart="startDrag($event, 0)"> -->
      <a href="/mitosis" class="jelly"> <img src="../assets/img/mitosis/dropped.jpeg" /></a>
      <!-- </div> -->
      <!-- <div class="drag-el killifish" id="1" @dragstart="startDrag($event, 1)"> -->
      <a href="/available" class="killifish">
        <img src="../assets/img/taxonomy/indoor-fish.jpeg"
      /></a>
      <!-- </div> -->

      <a href="/about" class="belong"> <img src="../assets/img/mitosis/belong.jpeg" /></a>
      <a href="/paintings" class="sam"> <img src="../assets/img/paintings/sams-fire.jpeg" /></a>
      <a href="/murals" class="logperch">
        <img src="../assets/img/murals/logperch_cropped.jpeg"
      /></a>
      <a href="/illustration" class="dunes"> <img src="../assets/img/murals/dunes-mural.jpeg" /></a>
      <a href="/highland" class="chippy"> <img src="../assets/img/posts/chippy.jpeg" /></a>
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

  a,
  .drag-el {
    position: absolute;

    &:hover {
      animation: animate 0.5s linear infinite;
    }
  }

  img {
    border-radius: 4px;
  }

  .heading {
    position: absolute;
    left: 2%;
    top: 1%;
    z-index: 100;
    font-size: 60px;
  }

  .jelly {
    left: 7%;
    top: 13%;
    width: 260px;
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
