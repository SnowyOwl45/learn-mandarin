<template>
  <Canvas :character="character"></Canvas>
</template>

<script>
import Canvas from './Canvas.vue'

export default {
  name: 'DrawingQuestion',
  data() {
    return {
      drawingIsFinished: false,
    }
  },
  props: {
    character: String,
  },
  components: {
    Canvas,
  }
}
</script>

<style scoped>

</style>