<template>
  <h2
    class="section-marker"
    :style="`color: ${color}`"
  >
    {{ name }}
  </h2>
  <div
    ref="separator"
    class="section-separator"
    :style="`border-color: ${color}`"
  />
</template>

<style scoped>
.section-marker {
  writing-mode: vertical-rl;
  text-orientation: sideways;
  margin-top: .2rem;
}
.section-separator {
  opacity: 0;
  border-left: .2rem solid;
  padding-right: 1rem;
  margin-left: .3rem;
}
</style>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'SectionMarker',
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    threshold: {
      type: Number,
      required: false,
      default: 0.5
    },
    color: {
      type: String,
      required: false,
      default: 'black'
    }
  },
  setup(props) {
    const separator = ref(null)

    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        separator.value.classList.add('expand-vertical');
      } else {
        separator.value.classList.remove('expand-vertical');
      }
    }
    const observer = new IntersectionObserver(onIntersection, { root: null, threshold: props.threshold })

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
