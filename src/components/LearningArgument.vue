<template>
  <section class="learningArgument">
    <img
      class="argumentImage"
      v-if="imagePosition === 'left'" 
      :src="require(`../assets/${imageUrl}`)"
      :alt="imageAlt"
    />
    <p class="argumentText">{{ text }}</p>
    <img 
      class="argumentImage"
      v-if="imagePosition === 'right'" 
      :src="require(`../assets/${imageUrl}`)"
      :alt="imageAlt"
    />
  </section>
</template>

<script>
export default {
  name: 'SerieParameters',
  props: {
    text: { type: String },   
    imageUrl: { type: String },
    imageAlt: { type: String },
    imagePosition: { 
      type: String,
      validator(value) {
        return [ 'left',  'right' ].includes(value)
      }
    }
  },
}
</script>

<style scoped>

.learningArgument {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  gap: 5px;
  margin: 50px;
}

.argumentImage {
  max-width: 400px;
  border-radius: 20px;
}

.argumentText {
  font-size: 20px;
}

</style>
