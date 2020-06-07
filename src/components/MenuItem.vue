<template>
  <router-link :to=item.route>
    <div class="menu__item text-lg mb-1 text-gray-500 lg:pl-5 md:pl-8 pl-2 py-3 rounded-full hover:cursor-pointer lg:w-64">
      <font-awesome-icon :icon=item.icon class="mr-8 icon" />
      <span class="lg:inline-block hidden font-bold tracking-wide">{{ item.title }}</span>
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
