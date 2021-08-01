<template>
  <main>
    <router-view />
    <Footer />
  </main>
</template>

<script lang="ts">
import Footer from '@/components/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Footer }
})
</script>
