<template>
  <div id="hero" class="hero">
    <img
      class="hero-image"
      src="@/assets/images/martian.png"
      alt="DJ Martian's half face"
    />
    <div class="content">
      <h1>Martin Zen</h1>
      <h1>{ a.k.a. Martian }</h1>
      <h2>DJ & Producer</h2>
      <ul>
        <li class="enter" style="animation-delay: .1s">
          <a @click="scrollToBio()">bio</a>
        </li>

        <li class="enter" style="animation-delay: .5s">
          <a @click="scrollToMixes()">live mixes</a>
        </li>

        <li class="enter" style="animation-delay: .9s">
          <a @click="scrollToProduction()">production</a>
        </li>

        <li class="enter" style="animation-delay: 1.3s">
          <a @click="scrollToVideos()">videos</a>
        </li>

        <li class="enter" style="animation-delay: 1.7s">
          <a :href="`mailto:${config.contact.address}?subject=${config.contact.subject}&body=${config.contact.message}`">bookings</a>
        </li>
      </ul>

      <svg
        class="arrow"
        width="52" height="27"
        viewBox="0 0 52 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="scrollToMixes()"
      >
        <path d="M1 1L26 26L51 1" stroke="#58008E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: block;
  background: linear-gradient(270deg, #7124BE 0%, #C496FF 100%);

  width: 100%;
  height: 100vh;
}

.hero-image {
  display: flow-root;
  position: relative;
  float: right;
  shape-outside: url('@/assets/images/martian.png');
  height: 100%;
}

@media only screen and (max-width: 500px) {
  .hero-image {
    float: none;
    position: absolute;
    opacity: .4;
    right: 0;
  }
}

.content {
  padding-top: 5rem;
  margin-left: 4rem;
}

.arrow {
  position: absolute;
  transform-origin: center center;
  left: 50%;
  transform: translateX(-50%);

  animation: bounce 600ms ease-in-out;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  cursor: pointer;
}

@keyframes bounce {
  0% {
    bottom: 1rem;
  }
  100% {
    bottom: 2rem;
  }
}
</style>

<script lang="ts">
import config from '@/config.json'

const scrollToElement = (elementName: String) => {
  document.getElementById(elementName).scrollIntoView({behavior: "smooth"})
}

const scrollToBio = () => scrollToElement('bio')
const scrollToMixes = () => scrollToElement('mixes')
const scrollToProduction = () => scrollToElement('production')
const scrollToVideos = () => scrollToElement('videos')

export default {
  name: 'Hero',
  setup() {
    return {
      scrollToBio,
      scrollToMixes,
      scrollToProduction,
      scrollToVideos,
      config
    }
  }
}
</script>
