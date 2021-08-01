<template>
  <div id="footer" class="footer">
    <span>Designed by <a target="_blank" style="color: #ccc" href="https://apsistechnologies.com">Apsis Technologies</a>™</span>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  display: flex;
  place-content: center;
  flex-direction: row;
  font-size: 0.7rem;

  color: #aaa;
  background-color: black;
}

a {
  color: #aaa;
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: none;
}
</style>

<script lang="ts">
export default {
  name: 'Footer'
}
</script>
