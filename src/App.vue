<template>
  <div id="app">
    <!-- Showing the user which page they're currently viewing  -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: whitesmoke;
}

* {
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}
</style>
