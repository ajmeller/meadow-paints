<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <div class="side-by-side">
    <NavBar />
    <RouterView />
    <SpeedInsights />
  </div>
</template>
