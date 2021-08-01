<template>
  <Hero />
  <Bio />
  <Mixes />
  <Videos />
</template>

<script lang="ts">
import Hero from '@/components/landing/Hero.vue'
import Bio from '@/components/landing/Bio.vue'
import Mixes from '@/components/landing/Mixes.vue'
import Videos from '@/components/landing/Videos.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Hero,
    Bio,
    Mixes,
    Videos
  }
})
</script>
