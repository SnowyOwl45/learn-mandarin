<template>
  <div id="serieParametersContainer">
    <h1>Parameters</h1>
    <!-- <p>Configure your serie here:</p> -->
    <p>Actual serie configuration: </p>
    
    <p>Mode: {{ modeToDisplay }}</p>
    <p>Difficulty: </p>

    <input
      style="accentColor: green;"
      type="radio" 
      id="easy" 
      value="easy" 
      :checked="serieParams.difficulty === 'easy'" 
      @change="this.$emit('difficultyChange', `easy`)" 
    />
    <label for="easy" style="color: green">easy</label>

    <input 
      style="accentColor: orange;"
      type="radio" 
      id="medium" 
      value="medium"
      :checked="serieParams.difficulty === 'medium'" 
      @change="this.$emit('difficultyChange', `medium`)" 
    />
    <label for="medium" style="color: orange">medium</label>

    <input
      style="accentColor: red;"
      type="radio" 
      id="hard" 
      value="hard"
      :checked="serieParams.difficulty === 'hard'" 
      @change="this.$emit('difficultyChange', `hard`)" 
    />
    <label for="hard" style="color: red">hard</label>

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
