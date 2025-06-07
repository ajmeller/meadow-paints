<template>
  <div class="page-content">
    <div class="left">
      <div class="heading">Hello!</div>
      <div>
        I am Meadow, and I am also Alyssa. You may call me either. I have been an artist my whole
        life, and I do all kinds of art, but I love painting best.
        <br /><br />
        Through art, I explore themes of connectedness and nature. I practice art as a way to zoom
        in, notice, and pay homage to the natural world and mystery. I especially love drawing
        animals or making abstract compositions.
      </div>
    </div>
    <div class="right">
      <img src="../assets/img/me.png" />
    </div>
  </div>
</template>

<style scoped>
img {
  min-height: 300px;
  border-radius: 4px;
  width: 100%;
  margin-top: 40px;
}

@media (min-width: 850px) {
  img {
    width: 50%;
  }
}

@media (min-width: 1040px) {
  .page-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin: 20px 40px;
  }

  img {
    width: 100%;
    margin-top: 0px;
  }
}
</style>
