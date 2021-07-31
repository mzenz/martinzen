<template>
  <div id="bio" class="bio">
    <div class="section">
      <h2 class="section-marker">bio</h2>
      <div ref="separator" class="section-separator" />
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'Bio',
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
      observer
    }
  }
}
</script>

<style scoped>
.bio {
  display: grid;
  place-content: center;
  position: relative;
  /* display: block; */
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
