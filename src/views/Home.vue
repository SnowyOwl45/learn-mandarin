<template>
  <div class="home">
    <div id="homeFullImage">
      <div id="caption">
        <span class="imageText">Learn Chinese: Open the Doors to a New Culture!</span>
        <!-- <span class="imageText">Welcome to my website, your destination to master Chinese. Discover a unique learning experience that will enable you to communicate with over a billion native speakers worldwide.</span> -->
      </div>
    </div>
    <div id="arguments">
      <div>
        <LearningArgument
          text="Develop a Valuable Skill: Proficiency in Chinese is a sought-after skill in the global job market."
          imageUrl="job-market.jpg"
          imageAlt="professional conversation"
          imagePosition="left"
        ></LearningArgument>
        <LearningArgument
          text="Explore a Rich Culture: Learning Chinese will open doors to a fascinating culture with millennia of history and growing contemporary influence."
          imageUrl="culture.jpg"
          imageAlt="Chinese culture"
          imagePosition="right"
        ></LearningArgument>
        <LearningArgument
          text="Broaden Your Horizons: Traveling to China or other Chinese-speaking countries will be even more enriching with language knowledge."
          imageUrl="travel.jpg"
          imageAlt="Chinese temple"
          imagePosition="left"
        ></LearningArgument>
        <LearningArgument
          text="Connect with the World: Chinese is one of the most spoken languages globally. By learning it, you'll connect with millions of people worldwide."
          imageUrl="chinese-speaking.jpg"
          imageAlt="Chinese conversation"
          imagePosition="right"
        ></LearningArgument>
  
      </div>
    </div>
  
    <footer>
      <div class="footer-copyright text-center">&copy; Developed with ❤️ by Thibaut Devigne
      </div>
    </footer>
  </div>
</template>

<script>
import LearningArgument from '../components/LearningArgument.vue'

export default {
  name: 'App',
  components: {
    LearningArgument,
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
}
h1 {
  margin: 0px;
}
#homeFullImage {
  background-image: url("../assets/homePage.jpg");
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
#caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.imageText {
  background-color: #111;
  border: 1px solid white;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

#arguments {
  padding: 0px 20%;
}
body {
  margin: 0px;
}
footer {
  font-size: 12px;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  background-color: #f1f1f1;
  color: #000000;
  text-align: center;
}
</style>
