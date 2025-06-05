<script setup lang="ts">
import { ref, type Ref } from 'vue'

defineProps({
  imgRef: String,
  caption: String,
  alt: String,
})

const showLighbox: Ref<boolean> = ref(false)
</script>

<template>
  <img class="grid-img" :src="imgRef" :alt="alt" @click="showLighbox = true" />

  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showLighbox" class="modal-mask">
        <div class="modal-container">
          <div class="inner-container">
            <button @click="showLighbox = false" class="close-btn">
              <span class="material-icons">close</span>
            </button>
            <div class="lightbox-img"><img :src="imgRef" alt="" /></div>
          </div>
          <div v-if="caption" class="caption">{{ caption }}</div>
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
  max-width: 75vw;
  max-height: 90vh;
  margin: auto;
  padding: 20px 36px 20px 5px;
  background-color: #fff8e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.inner-container {
  display: flex;
  align-items: start;
  gap: 8px;

  img {
    max-width: 70vw;
    max-height: 80vh;
  }

  .close-btn {
    border: none;
    background: none;
    cursor: pointer;
  }
}

.caption {
  margin-left: 44px;
  margin-top: 8px;
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
