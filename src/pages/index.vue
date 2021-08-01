<template>
  <Hero />
  <Bio />
  <Mixes />
  <Production />
  <Videos />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
import Hero from '@/components/landing/Hero.vue'
import Bio from '@/components/landing/Bio.vue'
import Mixes from '@/components/landing/Mixes.vue'
import Production from '@/components/landing/Production.vue'
import Videos from '@/components/landing/Videos.vue'

export default defineComponent({
  components: {
    Hero,
    Bio,
    Mixes,
    Production,
    Videos
  }
})
</script>
