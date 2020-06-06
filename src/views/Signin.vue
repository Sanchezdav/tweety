<template>
  <div class="min-w-full bg-gray-300">
    <FullLogo />
    <div class="max-w-xs md:max-w-md mx-auto bg-white shadow-md rounded px-8 py-8">
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white" v-model.trim="email" id="email" type="text" placeholder="batman@gmail.com" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white" v-model.trim="password" id="password" type="password" placeholder="**********************" required>
        </div>
        <div class="text-center flex flex-col">
          <button class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <router-link to="/sign_up" class="font-bold text-sm text-blue-500 hover:text-blue-800 mt-3">
            Need an account?
          </router-link>
          <a class="font-bold text-sm text-blue-500 hover:text-blue-800 mt-3" href="/">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FullLogo from '@/components/FullLogo'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  components: {
    FullLogo
  },
  methods: {
    signIn() {
      console.log(this.email)
    }
  }
};
</script>
