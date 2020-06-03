<template>
  <nav class="menu min-h-full h-auto fixed lg:w-1/4 w-1/5 pr-2 bg-gray-100 border-solid border-gray-400 border-r">
    <h1 class="text-3xl mb-5 lg:pl-5 md:pl-8 pl-2">
      <img src="@/assets/images/icons/bird.svg" alt="logo" width="60">
    </h1>
    <div v-for="(item, index) in menuItems" :key="index">
      <MenuItem :item="item" />
    </div>
  </nav>
</template>

<script>
import MenuItem from './MenuItem'
import menuItems from '@/data/menuItems'

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
.menu {
  height: fit-content;
  padding-left: 8%;
  padding-top: 15px;

  &__item {
    margin-left: -10px;

    .icon {
      width: 35px;
    }

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

@media (max-width: 768px) {
  .menu {
    padding-left: 4%;
    &__item {
      margin-left: 0;
    }
  }
}

@media (max-width: 1024px) {
  .menu {
    padding-left: 2%;
  }
}

@media (max-width: 1280px) {
  .menu {
    padding-left: 2%;
  }
}
</style>
