<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="side-by-side">
    <NavBar />
    <RouterView />
  </div>
</template>
