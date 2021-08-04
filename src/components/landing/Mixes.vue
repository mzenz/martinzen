<template>
  <div id="mixes" class="mixes">
    <div class="section">
      <SectionMarker name="live mixes" color="#555" />
      <div>
        <!-- embedded Mixcloud players -->
        <LazyLoader
          v-for="(t, i) in mixes"
          :key="i"
        >
          <iframe
            class="mixcloud-player"
            frameborder="0"
            :src="mixes[i]"
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
  name: 'Mixes',
  components: {
    SectionMarker,
    LazyLoader
  },
  setup() {
    return {
      mixes: config.mixes
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
  background-image: url('@/assets/images/martian-full.jpg');
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}

.section {
  display: flex;
  flex-direction: row;
  max-width: 40rem;
  margin: 5rem 3rem;
  opacity: 0.9;
}

.mixcloud-player {
  width: 100%;
}
</style>
