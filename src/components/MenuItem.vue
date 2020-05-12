<template>
  <router-link :to=item.route>
    <div class="menu__item text-xl mb-3 text-gray-600 pl-5 py-3 rounded-full hover:cursor-pointer">
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
