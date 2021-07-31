<template>
  <!-- <ThreeView /> -->
  <Hero />
  <Bio />
</template>

<script lang="ts">
import Hero from '@/components/landing/Hero.vue'
import Bio from '@/components/landing/Bio.vue'
import ThreeView from '@/components/ThreeView.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Hero,
    Bio,
    ThreeView
  }
})
</script>
