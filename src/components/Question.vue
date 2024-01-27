<template>
  <p v-if="serieMode === 'englishToPinyin'" class="question">
    What is the corresponding translation ?
  </p>
  <p v-else-if="serieMode === 'pinyinToEnglish'" class="question">
    What is the meaning of this pinyin ?
  </p>
  <p v-else class="question">
    What is the corresponding translation ?
  </p>
  <p>{{ text }}</p>
</template>

<script>

export default {
  name: 'Question',
  props: {
    text: String,
    serieMode: {
      validator(value) {
        return ['englishToPinyin', 'pinyinToEnglish'].includes(value)
      }
    },
  }
}
</script>

<style scoped>
.question {
  color: black;
}

</style>
