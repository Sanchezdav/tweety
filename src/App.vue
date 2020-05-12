<template>
  <div id="app">
    <Menu />
    <MainContent />
  </div>
</template>

<script>
import Menu from './components/Menu'
import MainContent from './components/MainContent'

export default {
  name: 'App',
  components: {
    Menu,
    MainContent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

html, body {
  font-family: 'Lato', sans-serif;
  height: 100%;
}

body {
  display: block;
  margin: 0;
  overflow-y: scroll;
  overscroll-behavior-y: none;
}

#app {
  display: flex;
  flex-direction: row;
  height: auto;
  min-height: 100%;
  justify-content: flex-start;
}
</style>
