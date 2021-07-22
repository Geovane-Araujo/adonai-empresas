<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
html{
  font-size: 13px;
}
body{
  margin: 0px;
}
#app {
  height: 100vh;
  width: 100vw;
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2c3e50;
  color: aliceblue;
}
</style>
