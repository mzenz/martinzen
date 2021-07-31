<template>
  <div id="mixes" class="mixes">
    <div class="section">
      <h2 class="section-marker">mixes</h2>
      <div ref="separator" class="section-separator" />
      <div>
        <!-- embedded Mixcloud players -->
        <iframe
          v-for="(t, i) in mixes"
          :key="i"
          class="mixcloud-player"
          frameborder="0"
          :src="mixes[i]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import mixes from '@/config/mixes.json'

export default {
  name: 'Mixes',
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
      mixes
    }
  }
}
</script>

<style scoped>
.mixes {
  display: grid;
  place-content: center;
  position: relative;
  background-color: white;
  width: 100%;
}

.section {
  display: flex;
  flex-direction: row;
  color: black;
  max-width: 40rem;
  margin: 5rem 3rem;
}

.section-marker {
  color: black;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  margin-top: .2rem;
}

.section-separator {
  opacity: 0;
  border-left: 1px solid black;
  padding-right: 1rem;
  margin-left: .3rem;
  margin-top: .2rem;
  margin-bottom: 1rem;
}

.mixcloud-player {
  width: 100%;
  /* height: 30rem; */
}
</style>
