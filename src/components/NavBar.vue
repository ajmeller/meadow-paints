<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

const paintingOpen: Ref<boolean> = ref(false)
const muralsOpen: Ref<boolean> = ref(false)
const contactOpen: Ref<boolean> = ref(false)
</script>

<template>
  <nav class="navbar navbar-expand">
    <div class="container">
      <div class="justify-center">
        <RouterLink to="/"> <img class="logo" src="../assets/img/logo-no-bg.png" /></RouterLink>
      </div>
      <div class="accordion" role="tablist">
        <div class="accordion-item">
          <div class="accordion-header" role="tab">
            <button class="accordion-button" type="button" @click="paintingOpen = !paintingOpen">
              Paintings
              <span class="material-icons">{{ paintingOpen ? 'expand_less' : 'expand_more' }}</span>
            </button>
          </div>

          <div class="accordion-body" role="tabpanel" v-if="paintingOpen">
            <ul>
              <li>
                <RouterLink to="/mitosis">Mitosis</RouterLink>
              </li>
              <li><RouterLink to="/abstract">Abstract Work</RouterLink></li>
              <li><RouterLink to="/paintings">Other Work</RouterLink></li>
            </ul>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" role="tab">
            <button class="accordion-button" type="button" @click="muralsOpen = !muralsOpen">
              Murals
              <span class="material-icons">{{ muralsOpen ? 'expand_less' : 'expand_more' }}</span>
            </button>
          </div>
          <div class="accordion-body" role="tabpanel" v-if="muralsOpen">
            <ul>
              <li><RouterLink to="/highland">Park People</RouterLink></li>
              <li><RouterLink to="/fish">Mini Fish</RouterLink></li>
            </ul>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header" role="tab">
            <button class="accordion-button" type="button" @click="contactOpen = !contactOpen">
              Contact
              <span class="material-icons">{{ contactOpen ? 'expand_less' : 'expand_more' }}</span>
            </button>
          </div>
          <div class="accordion-body form" role="tabpanel" v-if="contactOpen">
            <div class="msg">Email me at meller.alyssa@gmail.com or submit the form below.</div>
            <form method="post">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 240px;
  margin-top: 16px;
}

.accordion-header {
  margin: 8px;
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
}

ul {
  list-style: none;
  margin: 0px;
  padding-left: 24px;
}

.justify-center {
  display: flex;
  justify-content: center;
  width: 100%;
}

.accordion-body.form {
  margin-left: 24px;
  max-width: 200px;
}

img.logo {
  width: 100px;
}

.msg {
  margin-bottom: 8px;
  font-size: 14px;
}
</style>
