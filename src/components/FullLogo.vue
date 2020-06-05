<template>
  <div class="w-full pt-5 p-3 my-5">
    <router-link to='/' class="flex justify-center items-center max-w-xs mx-auto">
      <img src="../assets/images/icons/bird.svg" alt="logo" width="80">
      <h2 class="title text-5xl ml-3">Tweety</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FullLogo'
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.title {
  font-family: 'Lobster', cursive;
}
</style>
