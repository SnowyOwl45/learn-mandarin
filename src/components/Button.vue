<template>
  <button class="hello" :style="{ 'background-color': bgColor }">
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
  border-radius: 5px;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

</style>
