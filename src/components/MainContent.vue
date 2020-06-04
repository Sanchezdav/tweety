<template>
  <Fragment>
    <Menu />
    <main class="main-content h-auto w-full">
      <router-view></router-view>
    </main>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Menu from './Menu'

export default {
  name: 'MainContent',
  components: {
    Fragment,
    Menu
  }
}
</script>

<style>
.main-content {
  padding-left: 25%;
}

@media (max-width: 1024px) {
  .main-content {
    padding-left: 25%;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding-left: 20%;
  }
}
</style>
