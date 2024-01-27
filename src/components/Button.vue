<template>
  <button class="hello" :style="{ 'background': bgColor }">
    {{  text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    bgColor: String
  }
}
</script>

<style scoped>
button {
  color: white;
  margin: 10px;
  padding: 10px;
  background: #29a851;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

</style>
