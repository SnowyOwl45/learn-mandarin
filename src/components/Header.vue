<template>
  <header id="headerContainer">
    <div class="headerSubContainer">
      <div>
        <router-link :to="{ name: 'Home' }">
          <img id="homeImage" src="../assets/flagChina.png" />
        </router-link>
      </div>
      <nav>
        <ul class="menuItems">
          <li><router-link :to="{ name: 'Training' }" data-item='Training'>Training</router-link></li>
          <li><router-link :to="{ name: 'Quiz' }" data-item='Quiz'>Quiz</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
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

#homeImage {
  border-radius: 5px;
  width: 100px;
}

#headerContainer {
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 3px 5px rgba(0,0,0,0);
  padding: 0px 20px;
  display: flex;
  font-family: Hack, monospace;
}

.headerSubContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}


nav {
  .menuItems {
    list-style: none;
    display: flex;
    margin: 0px;
    padding: 0px;

    li {
      margin: 30px 50px;

      a {
        text-decoration: none;
        color: black;
        font-size: 24px;
        font-weight: 400;
        transition: all 0.5s ease-in-out;
        position: relative;
        text-transform: uppercase;

        &::before {
          content: attr(data-item);
          transition: 0.5s;
          color: #27ae60;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          overflow: hidden;
        }

        &:hover {
          &::before {
            width: 100%;
            transition: all 0.5s ease-in-out;
          }
        }
      }

      a.router-link-exact-active {
        color: #27ae60;
      }
    }
  }
}

</style>
