<template>
  <div id="production" class="production">
    <div class="section">
      <SectionMarker name="production" />
      <div>
        <!-- embedded SoundCloud players -->
        <iframe
          v-for="(t, i) in production"
          :key="i"
          class="soundcloud-player"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="production[i]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SectionMarker from '@/components/SectionMarker.vue'
import config from '@/config.json'

export default {
  name: 'Production',
  components: { SectionMarker },
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

.soundcloud-player {
  height: 10rem;
}
</style>
