<template>
  <h1>Learn Mandarin</h1>
  <div v-if="!serieIsInProgress" class="serie_parameters">
    
    <SerieParameters 
      :serieParams="serieParams"
      @modeChange="onChangeMode"
      @difficultyChange="onChangeDifficulty"
      @numberQuestionChange="onChangeQuestionsNumber"
    >
    </SerieParameters>
    
    <Button id="startSerieButton" @click="startSerie" text="Start" bgColor="#27ae60"></Button>
  </div>
  <div v-if="serieIsInProgress" class="bilan">
    <div>{{ actualSerie.actualQuestion }} / {{ serieParams.numberOfQuestions }}</div>
    <Button id="endSerieButton" @click="endSerie" text="Stop" bgColor="red"></Button>
  </div>
  <div v-if="serieIsInProgress" class="questionsBloc">
    <Question :serieMode="serieParams.mode" :text="getQuestion"></Question>
    <div v-if="showChoices" class="choicesContainer">
      <Choices :choices="getChoices" @foundCorrectAnswer="goToNextQuestion"></Choices>
    </div>
    <div v-else>
      <DrawingQuestion :character="getChararter" @hasAnsweredQuestion="hasAnsweredQuestion"/>
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Question from './components/Question.vue'
import Choices from './components/Choices.vue'
import SerieParameters from './components/SerieParameters.vue'
import DrawingQuestion from './components/DrawingQuestion.vue'

export default {
  name: 'App',
  data() {
    return {
      serieIsInProgress: false,
      serieParams: {
        mode: "englishToPinyin", //pinyinToEnglish - pinyinToDrawing - englishToPinyin
        type: "QCM",
        difficulty: "hard",
        numberOfQuestions: 3,
      },
      actualSerie: { actualQuestion: 0, content: [] },
      score: 0,
      hsk1: [
        { chinese: "我", pinyin: "wǒ", trad: { en: "I, me", fr: "Je, moi" }},
        { chinese: "我们", pinyin: "wǒmen", trad: { en: "we, us (pl.)" }},
        { chinese: "你", pinyin: "nǐ", trad: { en: "you" }},
        { chinese: "他", pinyin: "tā", trad: { en: "he, him" }},
        { chinese: "她", pinyin: "tā", trad: { en: "she, her" }},
        { chinese: "一", pinyin: "yī", trad: { en: "one" } },
        { chinese: "二", pinyin: "èr", trad: { en: "two" } },
        { chinese: "三", pinyin: "sān", trad: { en: "three" } },
        { chinese: "四", pinyin: "sì", trad: { en: "four" } },
        { chinese: "五", pinyin: "wǔ", trad: { en: "five" } },
        { chinese: "六", pinyin: "liù", trad: { en: "six" } },
        { chinese: "七", pinyin: "qī", trad: { en: "seven" } },
        { chinese: "八", pinyin: "bā", trad: { en: "eight" } },
        { chinese: "九", pinyin: "jiǔ", trad: { en: "nine" } },
        { chinese: "十", pinyin: "shí", trad: { en: "ten" } },
      ]
    }
  },
  methods: {
    startSerie() {
      const newSerie = this.generateSerie(this.serieParams)
      this.actualSerie = { actualQuestion: 1, content: newSerie }
      this.serieIsInProgress = true
    },
    hasAnsweredQuestion(autoValidationAnswer) {
      const isCorrect = autoValidationAnswer === "correct"
      this.goToNextQuestion()
    },
    endSerie() {
      this.serieIsInProgress = false
    },
    onChangeDifficulty(newDifficulty) {
      this.serieParams.difficulty = newDifficulty
    },
    onChangeMode(newMode) {
      if(["englishToPinyin", "pinyinToDrawing", "pinyinToEnglish"].includes(newMode)) {
        this.serieParams.mode = newMode
      }
    },
    onChangeQuestionsNumber(newNumber) {
      const integerRegex = /^\d+$/
      const isIntegerStr = integerRegex.test(newNumber)
      if(isIntegerStr) {
        const newNb = parseInt(newNumber) <= 100 ? parseInt(newNumber) : 100
        this.serieParams.numberOfQuestions = newNb
      }
    },
    goToNextQuestion() {
      const { actualQuestion } = this.actualSerie
      const { numberOfQuestions } = this.serieParams
      const hasReachedLastQuestion = actualQuestion >= numberOfQuestions
      if(hasReachedLastQuestion) {
        this.serieIsInProgress = false
      } else {
        this.actualSerie.actualQuestion++
      }
    },
    getNbChoicesFromDifficulty(diff) {
      if(diff === "hard") return 4
      else if(diff === "medium") return 3
      else if(diff === "easy") return 2
      else return 4
    },
    generateClassicSerie(serieParams) {
      const { numberOfQuestions, difficulty } = serieParams
      const allWordsNb = this.hsk1.length
      return Array(numberOfQuestions).fill(true).map(() => {
        const correctAnswerIndex = Math.floor(Math.random() * allWordsNb)
        const correctLine = this.hsk1[correctAnswerIndex]
        const question = `${correctLine.trad.en} (${correctLine.chinese})` 
        const correctAnswer = correctLine.pinyin
        const nbWrongChoices = this.getNbChoicesFromDifficulty(difficulty) - 1
        let wrongAnswersIndexes = [];
        while(wrongAnswersIndexes.length < nbWrongChoices){
          let rand = Math.floor(Math.random() * allWordsNb)
          const isNotAlreadyInList = wrongAnswersIndexes.indexOf(rand) === -1
          const isTheGoodChoice = rand === correctAnswerIndex
          const canBeAddedToWrongChoices = isNotAlreadyInList && !isTheGoodChoice

          if(canBeAddedToWrongChoices) wrongAnswersIndexes.push(rand)
        }

        let initialAcc = [{value: correctAnswer, isCorrect: true}]
        const choices = wrongAnswersIndexes.reduce((acc, indexToUse) => {
          const line = this.hsk1[indexToUse]
          return [...acc, {value: line.pinyin, isCorrect: false}]
        }, initialAcc)
        
        const shuffledChoices = choices.sort((a, b) => 0.5 - Math.random())

        return { question: question, choices: shuffledChoices }
      })
    },
    generateDrawingSerie(serieParams) {
      const { numberOfQuestions } = serieParams
      const allWordsNb = this.hsk1.length
      return Array(numberOfQuestions).fill(true).map(() => {
        const correctAnswerIndex = Math.floor(Math.random() * allWordsNb)
        const correctLine = this.hsk1[correctAnswerIndex]
        return { question: `${correctLine.pinyin}`, correctChinese: `${correctLine.chinese}` }
      })
    },
    generateSerie(serieParams) {
      const { mode } = serieParams
      if(mode === "englishToPinyin") {
        return this.generateClassicSerie(serieParams)
      } else if(mode === "pinyinToDrawing") {
        return this.generateDrawingSerie(serieParams)
      }
    },
  },
  computed: {
    showChoices() {
      return this.serieParams.mode === 'englishToPinyin'
    },
    getChoices() {
      const { actualQuestion, content } = this.actualSerie
      if(actualQuestion <= 0) return []
      return content[actualQuestion -1].choices
    },
    getQuestion() { 
      const { actualQuestion, content } = this.actualSerie
      if(actualQuestion <= 0 || content === undefined || content.length < actualQuestion) return ""
      return content[actualQuestion -1].question
    },
    getChararter() { 
      const { actualQuestion, content } = this.actualSerie
      if(actualQuestion <= 0 || content === undefined || content.length < actualQuestion) return ""
      return content[actualQuestion -1].correctChinese
    },
  },
  components: {
    Button,
    Question,
    Choices,
    SerieParameters,
    DrawingQuestion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
