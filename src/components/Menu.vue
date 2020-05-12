<template>
  <div class="menu h-full lg:w-1/4 w-1/5 bg-gray-100 px-8 py-5 border-solid border-gray-400 border-r">
    <h1 class="menu__logo">
      <font-awesome-icon icon="kiwi-bird" class="text-twitter-blue" />
    </h1>
    <div v-for="(item, index) in menuItems" :key="index">
      <MenuItem :item="item" />
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import menuItems from '../data/menuItems'

export default {
  name: 'Menu',
  components: {
    MenuItem
  },
  data() {
    return {
      menuItems: menuItems
    }
  },
}
</script>

<style lang="scss">
$twitter-blue: #1DA1F2;
$light-blue: #e1f5fe;

.menu {
  height: fit-content;
  min-height: 100%;

  &__logo {
    @apply text-3xl mb-5 px-2;
  }

  &__item {
    @apply text-xl mb-3 text-gray-600 py-3 px-2;

    &:hover {
      background-color: $light-blue;
      @apply rounded-full cursor-pointer;
    }
  }

  .router-link-exact-active {
    .menu__item {
      color: $twitter-blue;
    }
  }
}

.text-twitter-blue {
  color: $twitter-blue;
}

.icon {
  width: 35px;
}
</style>
