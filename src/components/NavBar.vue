<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen: Ref<boolean> = ref(false)

const paintingOpen: Ref<boolean> = ref(false)
const muralsOpen: Ref<boolean> = ref(false)
const contactOpen: Ref<boolean> = ref(false)

function copyText() {
  navigator.clipboard.writeText('meadowpaintsart@gmail.com')
}
</script>

<template>
  <nav class="navbar navbar-expand">
    <div class="container">
      <span class="material-icons hamburger" @click="menuOpen = !menuOpen">
        {{ menuOpen ? 'close' : 'menu' }}
      </span>
      <div class="space-between">
        <div class="logo-box">
          <RouterLink to="/"> <img class="logo" src="../assets/img/logo-no-bg.png" /></RouterLink>
        </div>
        <div class="accordion" role="tablist" :class="{ show: menuOpen }">
          <div v-show="menuOpen" class="heading">Meadow Paints</div>
          <div class="accordion-item paintings">
            <div class="accordion-header" role="tab">
              <button class="accordion-button" type="button" @click="paintingOpen = !paintingOpen">
                Paintings
                <span class="material-icons">{{
                  paintingOpen ? 'expand_less' : 'expand_more'
                }}</span>
              </button>
            </div>

            <ul class="accordion-body" role="tabpanel" v-if="paintingOpen">
              <li>
                <RouterLink to="/mitosis">Mitosis</RouterLink>
              </li>
              <li><RouterLink to="/paintings">Non-Series Paintings</RouterLink></li>
            </ul>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" role="tab">
              <button class="accordion-button" type="button" @click="muralsOpen = !muralsOpen">
                Murals & Public Art
                <span class="material-icons">{{ muralsOpen ? 'expand_less' : 'expand_more' }}</span>
              </button>
            </div>
            <ul class="accordion-body" role="tabpanel" v-if="muralsOpen">
              <li><RouterLink to="/murals">Murals</RouterLink></li>
              <li><RouterLink to="/highland">Park People</RouterLink></li>
              <li><RouterLink to="/pleasant-peninsula">Pleasant Peninsula</RouterLink></li>
            </ul>
          </div>
          <div class="accordion-button">
            <RouterLink to="/illustration">Illustration</RouterLink>
          </div>
          <div class="accordion-button">
            <RouterLink to="/available">Available Work</RouterLink>
          </div>
          <div class="accordion-button">
            <RouterLink to="/about">About Me</RouterLink>
          </div>
          <div class="accordion-item">
            <div class="accordion-header" role="tab">
              <button class="accordion-button" type="button" @click="contactOpen = !contactOpen">
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
                <span class="align"
                  >meadowpaintsart@gmail.com
                  <button
                    class="icon-btn copy"
                    type="button"
                    @click="copyText()"
                    title="Copy to clipboard"
                  >
                    <span class="material-icons">content_copy</span>
                  </button>
                </span>
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

          <div class="icons">
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
  padding: 12px 12px 0px;
  position: relative;
  box-shadow: 0px -19px 22px 6px #555e64;
}

.hamburger {
  display: none;
  font-size: 40px;
  cursor: pointer;
}

img.logo {
  width: 100px;
}

.space-between {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

.accordion {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  column-gap: 32px;
}

.paintings {
  min-width: 160px;
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.accordion-button {
  font-family: Gaegu, sans-serif;
  font-size: 28px;
  height: 60px;
  border-style: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  color: #463d3d;
  padding: 0px;
}

ul {
  list-style: none;
  margin: 0px;
  text-align: right;
  padding: 0px;
}

.accordion-body {
  margin-bottom: 8px;
}

.justify-center {
  display: flex;
  justify-content: center;
  width: 100%;
}

.accordion-body.form {
  margin-left: 16px;
  max-width: 400px;
  text-align: right;
}

.msg {
  margin-bottom: 8px;
  font-size: 14px;
}

.copy {
  font-size: 20px;
}

.align {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
}

.icons {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  height: fit-content;
}

img.ig {
  width: 36px;
  height: 36px;
  color: #463d3d;
}

@media (max-width: 700px) {
  .hamburger {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .accordion {
    display: none;
  }

  .show {
    display: block;
    margin-top: 8px;
  }
}
</style>
