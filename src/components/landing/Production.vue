<template>
  <div id="production" class="production">
    <div class="section">
      <SectionMarker name="music production" color="#ccc" />
      <div>
        <LazyLoader
          v-for="(t, i) in production"
          :key="i"
        >
          <!-- embedded SoundCloud players -->
          <iframe
            class="soundcloud-player"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="production[i]"
          />
        </LazyLoader>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SectionMarker from '@/components/SectionMarker.vue'
import LazyLoader from '@/components/LazyLoader.vue'
import config from '@/config.json'

export default {
  name: 'Production',
  components: {
    SectionMarker,
    LazyLoader
  },
  setup() {
    return {
      production: config.production
    }
  }
}
</script>

<style scoped>
.production {
  display: grid;
  place-content: center;
  position: relative;
  background-color: black;
  width: 100%;
}

.section {
  display: flex;
  flex-direction: row;
  /* color: black; */
  max-width: 40rem;
  margin: 5rem 3rem;
}

.soundcloud-player {
  width: 100%;
}
</style>
