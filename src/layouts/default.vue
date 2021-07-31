<template>
  <main>
    <!-- <Nav /> -->
    <router-view />
  </main>
</template>

<script lang="ts">
import Nav from '@/components/Nav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Nav }
})
</script>
