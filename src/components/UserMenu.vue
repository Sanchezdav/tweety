<template>
  <div v-on:click="isVisible = !isVisible" class="menu__user flex items-center justify-around absolute rounded-full cursor-pointer p-3">
    <div>
      <img src="../assets/images/avatar.png" class="rounded-full" alt="avatar" width="50">
    </div>
    <div class="hidden lg:inline-block">
      <p class="font-bold">{{ name || emailTruncated }}</p>
      <p class="text-gray-600">@{{ username }}</p>
    </div>
    <div class="hidden lg:inline-block ml-5">
      <font-awesome-icon icon="angle-down" class="transform text-xl" :class="{ 'rotate-180': isVisible }" />
    </div>
    <transition name="fade">
      <div v-show="isVisible" class="menu__user__submenu absolute p-3">
        <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
          <div class="menu__user__triangle absolute w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-b border-r border-gray-200 rounded-sm pointer-events-none"></div>
          <div class="relative">
            <a href="/" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Add another account</a>
            <a @click="signOut" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Sign Out</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  computed: {
    name() {
      return this.$store.state.auth.user.name
    },
    username() {
      return this.$store.state.auth.user.username
    },
    emailTruncated() {
      return this.$store.state.auth.user.email.split("@")[0].trim()
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    signOut: function() {
      this.$store
        .dispatch('signOut')
        .then(() => {
          this.$router.push({ name: 'signin' })
        })
        .catch(errors => {
          this.errors = errors
        });
    }
  },
}
</script>
