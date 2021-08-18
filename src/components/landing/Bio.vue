<template>
  <div id="bio" class="bio">
    <div class="section">
      <SectionMarker name="bio" color="white" />
      <BioCopy />
    </div>
  </div>
</template>

<script lang="ts">
import SectionMarker from '@/components/SectionMarker.vue'
import BioCopy from '@/assets/copy/en/Bio.md'

export default {
  name: 'Bio',
  components: { BioCopy, SectionMarker }
}
</script>

<style scoped>
.bio {
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
</style>
