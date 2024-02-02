<template>
  <!-- <h2>{{ message }}</h2>
  <div class="color-picker">
    <div v-for="color in colors" class="color-box" :style="{ backgroundColor: color }" @click="changeColor(color)"></div>
  </div> -->
  <div id="canvasContainer">
    <canvas @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw" id="canvas"></canvas>
    <div id="characterContainer" v-if="drawingIsFinished">
      <div>{{  character }}</div>
    </div>
  </div>
  <div id="canvasButtons" v-if="!drawingIsFinished" >
    <a class="validate-button" @click.prevent="validateCanvas">Validate Drawing</a>
    <a class="clear-button" @click.prevent="clearCanvas">Clear Drawing</a>
  </div>
  <div id="canvasButtons" v-else >
    <a class="validate-button" @click.prevent="isCorrectClick">Is correct</a>
    <a class="clear-button" @click.prevent="isWrongClick">Is wrong</a>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  emits: ["hasAnsweredQuestion"],
  data() {
    return {
      drawingIsFinished: false,
      message: "Drawing App",
      painting: false,
      canvas: null,
      ctx: null,
    }
  },
  props: {
    character: String,
  },
  methods: {
    isCorrectClick() {
      this.drawingIsFinished = false
      this.$emit('hasAnsweredQuestion', 'correct')
      this.clearCanvas()
    },
    isWrongClick() {
      this.drawingIsFinished = false
      this.$emit('hasAnsweredQuestion', 'wrong')
      this.clearCanvas()
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    validateCanvas() {
      this.drawingIsFinished = true
    },
    draw(e) {
      if (!this.painting) return;

      const x = e.clientX - this.canvas.offsetLeft
      const y = e.clientY - this.canvas.offsetTop + window.scrollY

      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
    },
    startPainting(e) {      
      this.ctx.lineWidth = 10;
      this.ctx.lineCap = "round";

      this.painting = true;
      this.draw(e);
    },
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath();
    },
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = "round";

    // this.canvas.height = window.innerHeight * 0.5;
    this.canvas.height = 500;
    this.canvas.width = 500;
  },
}
</script>

<style scoped>
  #canvasContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  #characterContainer {
    width: 500px;
    height: 500px; 
    font-size: 200px; 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  canvas {
    display: block;
    background-color: #ffffff;
    border: 2px solid #333;
    border-radius: 5px;
    cursor: crosshair;
  }

  #canvasButtons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .color-box {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 50%;
  }
  
  .color-picker {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .validate-button {
    display: block;
    margin: 10px 0px;
    padding: 0.5rem 1rem;
    background-color: #27ae60;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
  }
  .validate-button:hover {
    opacity: 0.8;
  }
  .clear-button {
    display: block;
    margin: 10px 0px;
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
  }
  
  .clear-button:hover {
    opacity: 0.8;
  }
  

</style>