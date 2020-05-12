<template>
  <div class="main-content h-auto w-full">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
}
</script>

<style>
.main-content {
  padding-left: 25%;
}

@media (max-width: 1024px) {
  .main-content {
    padding-left: 20%;
  }
}
</style>
