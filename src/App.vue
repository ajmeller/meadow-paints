<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import UpButton from '././components/UpButton.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <UpButton />
  <!-- <SpeedInsights /> -->
</template>
