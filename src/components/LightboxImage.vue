<script setup lang="ts">
import { ref } from 'vue'
import Placeholder from '../assets/img/background.png'

defineProps({
  image: {
    type: String,
    default: '',
  },
  caption: String,
  alt: String,
})

const showLighbox = ref(false)

function close(event: Event) {
  const eventTarget = event.target as HTMLElement
  if (eventTarget.id === 'modalMask') {
    showLighbox.value = false
  }
}
</script>

<template>
  <img
    class="grid-img"
    v-lazy="{ src: image, loading: Placeholder }"
    :alt="alt"
    @click="showLighbox = true"
  />

  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showLighbox" class="modal-mask" id="modalMask" @click="close($event)">
        <div class="modal-container">
          <button @click="showLighbox = false" class="close">
            <span class="material-icons">close</span>
          </button>
          <div class="inner-container">
            <div class="lightbox-img"><img v-lazy="image" :alt="alt" /></div>
            <div v-if="caption" class="caption">{{ caption }}</div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  max-height: 95vh;
  margin: auto;
  position: relative;
  background-color: #fffdf7;
  border-radius: 2px;
  box-shadow: 0 2px 8px #555e64;
  transition: all 0.3s ease;
}

.inner-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;

  img {
    max-height: 80vh;
    max-width: 90vw;
  }
}

.close {
  border: none;
  background-color: #463d3d80;
  border-radius: 50%;
  cursor: pointer;
  color: #fffdf7;
  padding: 4px;
  position: absolute;
  right: 4px;
  top: 4px;

  &:hover {
    background-color: #463d3d;
  }
}

.caption {
  margin: 4px auto;
  text-align: center;
  width: 90%;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
