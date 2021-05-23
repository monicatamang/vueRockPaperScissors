<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
      name: "App",
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
