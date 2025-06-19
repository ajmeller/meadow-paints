<script setup lang="ts">
function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button class="up" @click="goToTop()" title="Go to top">
    <span class="material-icons">keyboard_arrow_up</span>
  </button>
</template>

<style>
button.up {
  color: #fff8e3;
  background-color: #463d3d;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 20px;
  cursor: pointer;
}
</style>
