<template>
  <Hero />
  <Bio />
  <Mixes />
  <Production />
  <Videos />
</template>

<script lang="ts">
import Hero from '@/components/landing/Hero.vue'
import Mixes from '@/components/landing/Mixes.vue'
import Production from '@/components/landing/Production.vue'
import Videos from '@/components/landing/Videos.vue'
import Bio from '@/components/landing/Bio.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Hero,
    Mixes,
    Production,
    Videos,
    Bio,
  }
})
</script>
