<template>
  <div class="menu min-h-full h-auto fixed lg:w-1/4 w-1/5 pr-2 bg-gray-100 border-solid border-gray-400 border-r">
    <h1 class="text-3xl mb-5 px-2">
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
  padding-left: 8%;
  padding-top: 15px;

  &__item {
    margin-left: -10px;

    &:hover {
      background-color: $light-blue;
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

@media (max-width: 768px) {
  .menu {
    padding-left: 4%;
    &__item {
      margin-left: 0;
    }
  }
}
</style>
