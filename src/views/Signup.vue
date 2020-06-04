<template>
  <div class="min-w-full bg-gray-300">
    <div class="w-full pt-5 p-3 my-5">
      <router-link to='/' class="flex justify-center items-center max-w-xs mx-auto">
        <img src="../assets/images/icons/bird.svg" alt="logo" width="80">
        <h2 class="title text-5xl ml-3">Tweety</h2>
      </router-link>
    </div>
    <div class="w-full max-w-md mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username or nickname">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email address">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        </div>
        <div class="text-center flex flex-col">
          <button class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Up
          </button>
          <router-link to="/sign_in" class="font-bold text-sm text-blue-500 hover:text-blue-800 mt-3">
            Sign In
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    signUp() {
      console.log(this.email)
    }
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.title {
  font-family: 'Lobster', cursive;
}
</style>
