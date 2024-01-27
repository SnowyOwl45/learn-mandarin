<template>
  <div id="serieParametersContainer">
    <h1>Parameters</h1>
    <!-- <p>Configure your serie here:</p> -->
    <p>Actual serie configuration: </p>
    
    <p>Mode: {{ modeToDisplay }}</p>
    <p>Difficulty: 
      <span :style="{ 'color': difficultyColor }">{{ serieParams.difficulty }}</span>
    </p>
    <p>Type: {{ serieParams.type }}</p>
    <p>Number of Question: {{ serieParams.numberOfQuestions }}</p>
  </div>
</template>

<script>
export default {
  name: 'SerieParameters',
  props: {
    serieParams: {
      type: Object,
      default(rawProps) {
        return { 
          mode: rawProps.mode,
          type: rawProps.type,
          difficulty: rawProps.difficulty,
          numberOfQuestions: rawProps.numberOfQuestions,
        }
      }
    },
  },
  computed: {
    modeToDisplay() {
      const mode = this.serieParams.mode
      if(mode === "englishToPinyin") {
        return "Find corresponding pinyin from english word"
      }
      return "Super mode"
    },
    difficultyToDisplay() {
      const difficulty = this.serieParams.difficulty
      if(difficulty === "hard") return "Hard"
      return "Hard"
    },
    difficultyColor() {
      const difficulty = this.serieParams.difficulty
      if(difficulty === "hard") return "red"
      else if(difficulty === "medium") return "orange"
      else if(difficulty === "easy") return "green"
      return "black"
    }
  }
}
</script>

<style scoped>
/* button {
  color: white;
  margin: 10px;
  padding: 10px;
  background: #29a851;
  border-radius: 5px;
  border: none;
  cursor: pointer;
} */

</style>
