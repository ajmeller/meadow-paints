<script setup lang="ts">
import Eastern from './components/Eastern.vue'
import Highland from './components/Highland.vue'
</script>

<template>
  <div class="page-content white-bg">
    <div class="heading">Park People, 2024</div>
    <div class="location">Highland Park, Grand Rapids, MI</div>
    <Highland></Highland>
    <div class="small-description">
      This project was commissioned by the Highland Park Neighborhood Arts Committee, and is located
      in Highland Park in Grand Rapids, MI. There are 33 posts, and each is painted with a species
      found in the park. Together, the posts pay homage to all the people that inhabit and play in
      the park, human and non. The posts are an invitation to explore and observe the great
      diversity of beings, activities, and landscapes found in this beautiful urban park.
    </div>

    <div class="heading">& Stuff, 2026</div>
    <div class="location">Eastern Park, Grand Rapids, MI</div>
    <Eastern></Eastern>
  </div>
</template>

<style>
.location {
  margin: -12px 0px 12px;
}

.small-description {
  font-size: 11pt;
  margin: 20px 12px 36px;
}
</style>
