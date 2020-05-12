<template>
  <router-link :to=item.route>
    <div class="menu__item">
      <font-awesome-icon :icon=item.icon class="mr-5 icon" />
      <span class="lg:inline-block hidden font-bold">{{ item.title }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: Object
  }
}
</script>
