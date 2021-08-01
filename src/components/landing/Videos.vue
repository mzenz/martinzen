<template>
  <div id="videos" class="videos">
    <div class="section">
      <h2 class="section-marker">videos</h2>
      <div ref="separator" class="section-separator" />
      <div>
        <!-- embedded YouTube players -->
        <iframe
          v-for="(t, i) in videos"
          :key="i"
          class="youtube-player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          :src="videos[i]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import config from '@/config.json'

export default {
  name: 'Videos',
  setup() {
    const separator = ref(null)
    const threshold = 0.3

    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        separator.value.classList.add('expand-vertical');
      } else {
        separator.value.classList.remove('expand-vertical');
      }
    }
    const observer = new IntersectionObserver(onIntersection, { root: null, threshold: threshold })

    onMounted(() => {
      observer.observe(separator.value)
    })

    onBeforeUnmount(() => {
      observer.disconnect();
    })

    return {
      separator,
      observer,
      videos: config.videos
    }
  }
}
</script>

<style scoped>
.videos {
  display: grid;
  place-content: center;
  position: relative;
  background-color: black;
  width: 100%;
}

.section {
  display: flex;
  flex-direction: row;
  color: white;
  max-width: 40rem;
  /* width: 100%; */
  margin: 5rem 3rem;
}

.section-marker {
  color: white;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  margin-top: .2rem;
}

.section-separator {
  opacity: 0;
  border-left: 1px solid white;
  padding-right: 1rem;
  margin-left: .3rem;
  margin-top: .2rem;
  margin-bottom: 1rem;
}

.youtube-player {
  width: 100%;
}
</style>
