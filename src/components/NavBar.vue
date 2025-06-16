<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen: Ref<boolean> = ref(false)

const paintingOpen: Ref<boolean> = ref(false)
const muralsOpen: Ref<boolean> = ref(false)
const contactOpen: Ref<boolean> = ref(false)
</script>

<template>
  <nav class="navbar navbar-expand">
    <div class="container">
      <span class="material-icons hamburger" @click="menuOpen = !menuOpen">
        {{ menuOpen ? 'close' : 'menu' }}
      </span>
      <div class="logo-box">
        <RouterLink to="/"> <img class="logo" src="../assets/img/logo-no-bg.png" /></RouterLink>
      </div>
      <div class="accordion" role="tablist" :class="{ show: menuOpen }">
        <div v-show="menuOpen" class="heading">Meadow Paints</div>
        <div class="accordion-item">
          <div class="accordion-header" role="tab">
            <button class="accordion-button" type="button" @click="paintingOpen = !paintingOpen">
              Paintings
              <span class="material-icons">{{ paintingOpen ? 'expand_less' : 'expand_more' }}</span>
            </button>
          </div>

          <ul class="accordion-body" role="tabpanel" v-if="paintingOpen">
            <li>
              <RouterLink to="/mitosis">Mitosis</RouterLink>
            </li>
            <li><RouterLink to="/abstract">Abstract Work</RouterLink></li>
            <li><RouterLink to="/paintings">Other Work</RouterLink></li>
          </ul>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" role="tab">
            <button class="accordion-button" type="button" @click="muralsOpen = !muralsOpen">
              Murals
              <span class="material-icons">{{ muralsOpen ? 'expand_less' : 'expand_more' }}</span>
            </button>
          </div>
          <ul class="accordion-body" role="tabpanel" v-if="muralsOpen">
            <li><RouterLink to="/highland">Park People</RouterLink></li>
            <li><RouterLink to="/fish">Mini Fish</RouterLink></li>
          </ul>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" role="tab">
            <button class="accordion-button" type="button" @click="contactOpen = !contactOpen">
              Contact
              <span class="material-icons">{{ contactOpen ? 'expand_less' : 'expand_more' }}</span>
            </button>
          </div>
          <div class="accordion-body form" role="tabpanel" v-if="contactOpen">
            <div class="msg">Please email me directly at meller.alyssa@gmail.com</div>
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
        <div class="accordion-button">
          <RouterLink to="/about">About</RouterLink>
        </div>
        <div>
          <a href="https://instagram.com/meadowpaints" target="_blank">
            <img src="..\assets\img\instagram.svg" class="ig" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.hamburger {
  display: none;
  font-size: 40px;
  cursor: pointer;
}

img.logo {
  width: 100px;
}

img.ig {
  width: 36px;
  color: #463d3d;
  margin-top: 8px;
}

.accordion {
  min-width: 180px;
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
  gap: 8px;
  color: #463d3d;
  padding: 0px;
}

.accordion-body {
  margin-bottom: 8px;
}

ul {
  list-style: none;
  margin: 0px;
  padding-left: 16px;
}

.justify-center {
  display: flex;
  justify-content: center;
  width: 100%;
}

.accordion-body.form {
  margin-left: 16px;
  max-width: 200px;
}

.msg {
  margin-bottom: 8px;
  font-size: 14px;
}

@media (max-width: 1040px) {
  .container {
    width: 100%;
    display: flex;
    gap: 24px;
    margin-top: -12px;
  }

  .accordion {
    display: flex;
    gap: 16px;
  }

  img.ig {
    margin-top: 12px;
    margin-left: 8px;
  }
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
