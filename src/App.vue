<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import cookies from "vue-cookies";

    export default {
      name: "App",

      data() {
        return {
          loginToken: cookies.get("RPSLoginToken")
        }
      },
    }
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  background: whitesmoke;
}
</style>
