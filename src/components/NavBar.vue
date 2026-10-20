<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen: Ref<boolean> = ref(false)

const paintingOpen: Ref<boolean> = ref(false)
const contactOpen: Ref<boolean> = ref(false)

function toggleAccordion(accordionName: 'paintings' | 'contact') {
  switch (accordionName) {
    case 'paintings':
      paintingOpen.value = !paintingOpen.value
      if (paintingOpen.value === true) {
        contactOpen.value = false
      }
      break
    case 'contact':
      contactOpen.value = !contactOpen.value
      if (contactOpen.value === true) {
        paintingOpen.value = false
      }
      break
  }
}

function copyText() {
  navigator.clipboard.writeText('art@meadowpaints.com')
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
          <div class="clear-btn">
            <RouterLink to="/murals">Murals</RouterLink>
          </div>
          <div class="clear-btn">
            <RouterLink to="/public">Public Art</RouterLink>
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
                  >art@meadowpaints.com</span
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

          <div class="icons">
            <div class="icon-btn">
              <a href="https://meadowpaints.tumblr.com" target="_blank">
                <svg
                  fill="#463d3d"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 260 260"
                  xml:space="preserve"
                >
                  <path
                    d="M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511
	c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543
	h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397
	c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769
	c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026
	c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567
	c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417
	C213.484,200.108,212.476,198.418,210.857,197.545z"
                  />
                </svg>
              </a>
            </div>
            <div class="icon-btn">
              <a href="https://instagram.com/meadowpaints" target="_blank">
                <svg
                  fill="#463d3d"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 169.063 169.063"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z"
                    />
                    <path
                      d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
                    />
                    <path
                      d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z"
                    />
                  </g>
                </svg>
              </a>
            </div>
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

.icons {
  display: flex;
  align-items: center;
  gap: 12px;
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

  .msg {
    font-size: 14px;
    max-width: 90vw;
  }

  .icons {
    justify-content: flex-end;
  }
}
</style>
