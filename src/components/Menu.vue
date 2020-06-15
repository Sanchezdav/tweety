<template>
  <nav class="menu min-h-full h-auto fixed lg:w-1/4 md:w-1/12 lg:pl-10 bg-gray-100 border-solid border-gray-400 border-r">
    <h1 class="text-3xl mb-5 lg:pl-2 md:pl-2 pl-2">
      <img src="@/assets/images/icons/bird.svg" alt="logo" width="60">
    </h1>
    <div v-for="(item, index) in menuItems" :key="index">
      <MenuItem :item="item" />
    </div>
    <UserMenu />
  </nav>
</template>

<script>
import MenuItem from './MenuItem'
import UserMenu from './UserMenu'
import menuItems from '@/data/menuItems'

export default {
  name: 'Menu',
  components: {
    MenuItem,
    UserMenu
  },
  data() {
    return {
      menuItems: menuItems,
    }
  },
}
</script>

<style lang="scss">
.menu {
  height: fit-content;
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

  &__user {
    bottom: 30px;
    left: 30px;
    width: 250px;

    &:hover {
      background-color: $light-blue;
    }

    &__submenu {
      left: 50px;
      top: -110px;
    }

    &__triangle {
      bottom: -16px;
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

    &__user {
      left: 5px;
      width: 85%;
    }
  }
}

@media (max-width: 1280px) {
  .menu {
    padding-left: 0;
  }
}
</style>
