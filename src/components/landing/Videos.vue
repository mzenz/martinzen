<template>
  <div id="videos" class="videos">
    <div class="section">
      <SectionMarker
        name="videos"
        color="black"
        threshold="1.0"
      />
      <div>
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
  width: 100%;
}
</style>

<script lang="ts">
import SectionMarker from '@/components/SectionMarker.vue'
import config from '@/config.json'

export default {
  name: 'Videos',
  components: { SectionMarker },
  setup() {
    return {
      videos: config.videos
    }
  }
}
</script>
