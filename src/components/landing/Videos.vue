<template>
  <div id="videos" class="videos">
    <div class="section">
      <SectionMarker
        name="videos"
        color="black"
        :threshold="1.0"
      />
      <div>
        <LazyLoader
          v-for="(t, i) in videos"
          :key="i"
        >
          <iframe
            class="youtube-player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            :src="videos[i]"
          />
        </LazyLoader>
      </div>
    </div>
    <svg
      class="arrow"
      width="52"
      height="27"
      viewBox="0 0 52 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="scrollToTop()"
    >
      <path d="M1 26L26 1L51 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<style scoped>
.videos {
  display: grid;
  place-content: center;
  position: relative;
  background-color: white;
}

.section {
  display: flex;
  flex-direction: row;
  max-width: 40rem;
  margin: 5rem 3rem;
}

.youtube-player {
  width: 30rem;
  height: 17rem;
}

@media only screen and (max-width: 500px) {
  .youtube-player {
    width: 25rem;
    height: 14rem;
  }
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
import SectionMarker from '@/components/SectionMarker.vue'
import LazyLoader from '@/components/LazyLoader.vue'
import config from '@/config.json'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

export default {
  name: 'Videos',
  components: {
    SectionMarker,
    LazyLoader
  },
  setup() {
    return {
      videos: config.videos,
      scrollToTop
    }
  }
}
</script>
