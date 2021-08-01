<template>
  <div id="bio" class="bio">
    <div class="section">
      <SectionMarker name="bio" color="white" />
      <div>
        <p>Hailing from cosmopolitan Buenos Aires, Argentina, Martin Zen – a.k.a. MARTIAN – discovered the underground house music scene early in life, rapidly becoming enmeshed in the local DJ community, and ultimately developing a passion for record-collecting and DJing, which continues to this day.</p>
        <p>Heavily influenced by the roots of house music as well as many other genres, MARTIAN's live performances are highly danceable, vibrant, yet eclectic – almost educational at times. Fusing old school with avant garde, he's always on the lookout for opportunities to delight the crowd while bringing people together through the unique power of music.</p>
        <p>He produced underground remixes of classics by Sade, The Jackson 5, plus a few more in the works, having released most of them on vinyl as limited-edition pressings aimed at DJs in the know.</p>
        <p>MARTIAN's favourite medium is vinyl, making every live set artisanal in nature, with Logic Pro as his weapon of choice when it comes to music production.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SectionMarker from '@/components/SectionMarker.vue'

export default {
  name: 'Bio',
  components: { SectionMarker }
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
