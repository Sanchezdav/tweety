<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import VueCookies from 'vue-cookie'

export default {
  beforeCreate() {
    const existingSession = VueCookies.get('session')

    if (existingSession && existingSession.length) {
      const session = JSON.parse(existingSession)
      this.$store.commit('setUser', session.user)
      this.$store.commit('setAuth', session.tokens)
    } else {
      this.$store.commit('setUser', null)
      this.$store.commit('setAuth', null)
    }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
