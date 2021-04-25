<template>
  <div id="app">
    <!-- Showing the user which page they're currently viewing  -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: whitesmoke;
}

* {
  margin: 0;
  padding: 0;
}
</style>
