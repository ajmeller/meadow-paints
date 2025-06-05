<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="page-footer">
    <div class="links">
      <RouterLink to="/about">About</RouterLink>
      <a href="https://instagram.com/meadowpaints"
        ><font-awesome-icon :icon="['fab', 'instagram']"
      /></a>
    </div>
  </footer>
</template>

<style>
footer {
  position: relative;
  bottom: 0;
  border-style: none;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

i {
  font-size: 30px;
  margin-top: 4px;
}
</style>
