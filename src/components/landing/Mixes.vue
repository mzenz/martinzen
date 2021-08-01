<template>
  <div id="mixes" class="mixes">
    <div class="section">
      <SectionMarker name="live mixes" color="#555" />
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
import SectionMarker from '@/components/SectionMarker.vue'
import config from '@/config.json'

export default {
  name: 'Mixes',
  components: { SectionMarker },
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
  /* background-color: #fcfcfc; */
  background-color: #f0f0f0;
  background-image: url('@/assets/images/martian-full.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
