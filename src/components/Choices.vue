<template>
  <div class="choicesContainer">
    <div v-for="(choice, index) in choices" class="choice" @click="selectOption($event, choice, index)">
      {{choice.value}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Choices',
  props: {
    choices: Array,
  },
  // data () {
  //   return {
  //     anotherLabel: this.label, // you cannot use the same name as declared for props
  //   }
  // },
  methods: {
    selectOption(event, choice, index) {
      if(choice.isCorrect) {
        this.$emit('foundCorrectAnswer')
        const choices = document.querySelectorAll('.choice');
        choices.forEach(choiceElt => {
          choiceElt.classList.remove("wronglySelected")
        })
      } else {
        event.target.classList.add("wronglySelected")
      }
    }
  }
}
</script>

<style scoped>
.choicesContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.choice {
  border: 1px solid black;
  background: #dddddd;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
}

.choice.correctSelected {
  background: green;
}
.choice.wronglySelected {
  background: red;
}

</style>
