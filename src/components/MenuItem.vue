<template>
  <router-link :to=item.route>
    <div class="menu__item text-lg mb-1 text-gray-500 lg:pl-6 md:pl-0 text-center lg:text-left lg:pl-2 md:pl-2 py-3 rounded-full hover:cursor-pointer lg:w-56">
      <font-awesome-icon :icon=item.icon class="lg:mr-6 icon text-xl" />
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
