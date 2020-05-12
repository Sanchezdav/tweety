<template>
  <div class="menu h-full lg:w-1/4 w-1/5 bg-gray-100 px-8 py-5">
    <h1 class="menu__logo">
      <font-awesome-icon icon="kiwi-bird" class="text-twitter-blue" />
    </h1>
    <router-link to="/">
      <div class="menu__item">
        <font-awesome-icon icon="home" class="mr-5 icon" />
        <span class="lg:inline-block hidden font-bold">Home</span>
      </div>
    </router-link>
    <router-link to="/explore">
      <div class="menu__item">
        <font-awesome-icon icon="hashtag" class="mr-5 icon" />
        <span class="lg:inline-block hidden font-bold">Explore</span>
      </div>
    </router-link>
    <router-link to="/notifications">
      <div class="menu__item">
        <font-awesome-icon icon="bell" class="mr-5 icon" />
        <span class="lg:inline-block hidden font-bold">Notifications</span>
      </div>
    </router-link>
    <router-link to="/messages">
      <div class="menu__item">
        <font-awesome-icon icon="envelope" class="mr-5 icon" />
        <span class="lg:inline-block hidden font-bold">Messages</span>
      </div>
    </router-link>
    <router-link to="/bookmarks">
      <div class="menu__item">
        <font-awesome-icon icon="bookmark" class="mr-5 icon" />
        <span class="lg:inline-block hidden font-bold">Bookmarks</span>
      </div>
    </router-link>
    <router-link to="/profile">
      <div class="menu__item">
        <font-awesome-icon icon="user" class="mr-5 icon" />
        <span class="lg:inline-block hidden font-bold">Profile</span>
      </div>
    </router-link>
    <router-link to="/settings">
      <div class="menu__item">
        <font-awesome-icon icon="cog" class="mr-5 icon" />
        <span class="lg:inline-block hidden font-bold">Settings</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style lang="scss" scoped>
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
