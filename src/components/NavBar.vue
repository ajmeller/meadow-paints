<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen: Ref<boolean> = ref(false)

const paintingOpen: Ref<boolean> = ref(false)
const muralsOpen: Ref<boolean> = ref(false)
const contactOpen: Ref<boolean> = ref(false)

function toggleAccordion(accordionName: 'paintings' | 'murals' | 'contact') {
  switch (accordionName) {
    case 'paintings':
      paintingOpen.value = !paintingOpen.value
      if (paintingOpen.value === true) {
        muralsOpen.value = false
        contactOpen.value = false
      }
      break
    case 'murals':
      muralsOpen.value = !muralsOpen.value
      if (muralsOpen.value === true) {
        paintingOpen.value = false
        contactOpen.value = false
      }
      break
    case 'contact':
      contactOpen.value = !contactOpen.value
      if (contactOpen.value === true) {
        paintingOpen.value = false
        muralsOpen.value = false
      }
      break
  }
}

function copyText() {
  navigator.clipboard.writeText('meadowpaintsart@gmail.com')
}
</script>

<template>
  <nav class="navbar">
    <div class="space-between">
      <div class="logo-box">
        <RouterLink to="/"> <img class="logo" src="../assets/img/logo-no-bg.png" /></RouterLink>
      </div>
      <div>
        <div class="mobile-header">
          <div class="heading">Meadow Paints</div>
          <button class="icon-btn hamburger" @click="menuOpen = !menuOpen">
            <span class="material-icons">
              {{ menuOpen ? 'close' : 'menu' }}
            </span>
          </button>
        </div>
        <div class="accordion-menu" role="tablist" :class="{ show: menuOpen }">
          <div class="accordion-item">
            <div class="accordion-header" role="tab">
              <button class="clear-btn" type="button" @click="toggleAccordion('paintings')">
                Paintings
                <span class="material-icons">{{
                  paintingOpen ? 'expand_less' : 'expand_more'
                }}</span>
              </button>
            </div>

            <ul class="accordion-body" role="tabpanel" v-if="paintingOpen">
              <li><RouterLink to="/taxonomy">Taxonomy</RouterLink></li>
              <li>
                <RouterLink to="/mitosis">Mitosis</RouterLink>
              </li>
              <li><RouterLink to="/paintings">Non-Series Paintings</RouterLink></li>
              <li><RouterLink to="/available">Available Work</RouterLink></li>
            </ul>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" role="tab">
              <button class="clear-btn" type="button" @click="toggleAccordion('murals')">
                Murals & Public Art
                <span class="material-icons">{{ muralsOpen ? 'expand_less' : 'expand_more' }}</span>
              </button>
            </div>
            <ul class="accordion-body" role="tabpanel" v-if="muralsOpen">
              <li><RouterLink to="/murals">Murals</RouterLink></li>
              <li><RouterLink to="/highland">Park People</RouterLink></li>
            </ul>
          </div>
          <div class="clear-btn">
            <RouterLink to="/illustration">Illustration</RouterLink>
          </div>
          <div class="clear-btn">
            <RouterLink to="/about">About Me</RouterLink>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" role="tab">
              <button class="clear-btn" type="button" @click="toggleAccordion('contact')">
                Contact
                <span class="material-icons">{{
                  contactOpen ? 'expand_less' : 'expand_more'
                }}</span>
              </button>
            </div>
            <div class="accordion-body form" role="tabpanel" v-if="contactOpen">
              <div class="msg">
                Have a spectacular idea for me to paint? I am open to murals, design work, printed
                media, pet portraits, and more. Please email me directly at
                <span class="copy" title="Click to copy" @click="copyText()"
                  >meadowpaintsart@gmail.com</span
                >
              </div>
              <!-- <form method="post">
              <div>
                <input
                  class="form-control"
                  type="text"
                  id="name-2"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  class="form-control"
                  type="email"
                  id="email-2"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  class="form-control"
                  id="message-2"
                  name="message"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="justify-center">
                <button class="btn btn-primary" type="submit">Send</button>
              </div>
            </form> -->
            </div>
          </div>

          <div class="icon-btn">
            <a href="https://instagram.com/meadowpaints" target="_blank">
              <img src="..\assets\img\instagram.svg" class="ig" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 8px;
  position: relative;
  box-shadow: 0px -19px 22px 6px #555e64;
}

.mobile-header {
  display: none;
}

.space-between {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

img.logo {
  width: 100px;
}

.accordion-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  column-gap: 32px;
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.clear-btn {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

ul.accordion-body {
  list-style: none;
  margin: 0px 0px 4px;
  text-align: right;
  padding: 0px;
}

.msg {
  margin-bottom: 8px;
  font-size: 14px;
  position: absolute;
  right: 72px;
  max-width: 50vw;
  text-align: right;
}

.copy {
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #fb5098;
  }
}

.icon-btn {
  margin-top: 12px;
  height: fit-content;
  text-align: right;
}

.accordion-body {
  animation: fade-in 0.5s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: 700px) {
  .space-between {
    margin: 0px 8px;
  }

  .mobile-header {
    display: flex;
    gap: 24px;

    .heading {
      margin-bottom: 0px;
    }
  }

  .accordion-menu {
    display: none;

    &.show {
      display: block;
    }
  }

  img.logo {
    width: 70px;
  }
}
</style>
