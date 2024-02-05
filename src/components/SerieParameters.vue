<template>
  <div id="serieParametersContainer">
    <h1>Configure your quiz:</h1>
    <section id="modeContainer">
      <p><span class="underline">Mode:</span> {{ modeToDisplay }}</p>
      <select
        id="serieModeSelector"
        @change="onChangeMode($event)"
      >
        <option value="englishToPinyin">English to pinyin</option>
        <option value="pinyinToDrawing">Pinyin to drawing</option>
        <!-- <option value="pinyinToEnglish">Pinyin to english</option> -->
      </select>
    </section>

    <section id="difficultyContainer" v-if="showDifficulty">
      <p><span class="underline">Difficulty:</span></p>
  
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
    </section>

    <!-- <p>Type: {{ serieParams.type }}</p> -->
    <section id="nbQuestionContainer">
      <p><span class="underline">Number of Question:</span></p>
      <input 
        type="number" 
        id="nbQuestion"
        min="1" 
        max="100"
        :value="serieParams.numberOfQuestions"
        @input="event => this.$emit('numberQuestionChange', event.target.value)" 
      />
    </section>
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
  methods: {
    onChangeMode(event) {
      const newMode = event.target.value
      if(["englishToPinyin", "pinyinToDrawing", "pinyinToEnglish"].includes(newMode)) {
        this.$emit('modeChange', newMode)
      }
    },
  },
  computed: {
    modeToDisplay() {
      const mode = this.serieParams.mode
      if(mode === "englishToPinyin") {
        return "Find corresponding pinyin from english word"
      } else if (mode === "pinyinToDrawing") {
        return "Draw the chinese charater corresponding to this pinyin"
      }
      return "Super mode"
    },
    showDifficulty() {
      return this.serieParams.mode !== 'pinyinToDrawing'
    },
  }
}
</script>

<style scoped>

#serieParametersContainer {
  margin-top: 5rem;
}

#nbQuestionContainer {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  gap: 5px;
}
.underline {
  text-decoration: underline;
}

#serieModeSelector {
  padding: 10px; 
}

p {
  margin: 0px;
}

section {
  margin: 20px 0px;
}

input[type=number] {
  border: 1px solid gray;
  border-radius: 10px;
  text-decoration: none;
  font-size: 20px;
  width: 40px;
  text-align: center;
}

input[type=number]:focus {
  outline: 2px solid #27ae60;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>
