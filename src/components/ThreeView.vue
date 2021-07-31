<template>
  <canvas
    ref="canvas"
    class="canvas"
  />
  <!-- <div class="my_div" /> -->
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three';

export default {
  name: 'TreeView',
  setup() {
    const canvas = ref(null)
    let renderer: THREE.WebGLRenderer
    let scene: THREE.Scene
    let resizeObserver : ResizeObserver

    const onDraw = () => {
      // console.debug('onDraw')
      renderer.clear();
    }

    const onResize = (entries: ResizeObserverEntry[]) => {
      // console.debug('onResize', entries[0].contentRect.width, entries[0].contentRect.height)
      const w = entries[0].contentRect.width
      const h = entries[0].contentRect.height
      renderer.setSize(w, h, false);

      onDraw();
    }

    onMounted(() => {
      const canvasElement: any = canvas.value;

      resizeObserver = new ResizeObserver(onResize)
      resizeObserver.observe(canvasElement);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
        antialias: true
      });
      renderer.setClearColor(0x00ff00);
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight, false);

      const geometry = new THREE.BufferGeometry();
      // create a simple square shape. We duplicate the top left and bottom right
      // vertices because each vertex needs to appear once per triangle.
      const vertices = new Float32Array([
        -1.0, -1.0,  1.0,
        1.0, -1.0,  1.0,
        1.0,  1.0,  1.0,

        1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0, -1.0,  1.0
      ]);

      // itemSize = 3 because there are 3 values (components) per vertex
      geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
      const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
      const mesh = new THREE.Mesh( geometry, material );

      // const camera = new THREE.OrthographicCamera();
      // scene = new THREE.Scene();

    })

    onBeforeUnmount(() => {
      resizeObserver.disconnect()
    })

    return {
      // renderer,
      // scene,
      canvas
    }
  },
}
</script>

<style scoped>
.canvas {
  position: relative;
  display: block;
  /* border: 1px solid red; */
  width: 100%;
  /* height: 100%; */
}
</style>
