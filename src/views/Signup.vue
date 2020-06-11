<template>
  <div class="min-w-full bg-gray-300">
    <FullLogo />
    <div class="w-full max-w-xs md:max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
      <Errors :errors="errors" />
      <form @submit.prevent="signUp" class="mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white" v-model.trim="username" id="username" type="text" placeholder="Username or Nickname" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white" v-model.trim="email" id="email" type="email" placeholder="batman@gmail.com" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white" v-model.trim="password" id="password" type="password" placeholder="**********************" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password_confirmation">
            Password Confirmation
          </label>
          <input class="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white" v-model.trim="password_confirmation" id="password_confirmation" type="password" placeholder="**********************" required>
        </div>
        <div class="text-center flex flex-col">
          <button :disabled='!isComplete' :class="disabled" class="w-full text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
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
import FullLogo from '@/components/FullLogo'
import Errors from '@/components/Errors'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: []
    };
  },
  components: {
    FullLogo,
    Errors
  },
  computed: {
    isComplete () {
      return this.username && this.email && this.password && this.password_confirmation
    },
    disabled () {
      return this.isComplete ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-300 cursor-not-allowed'
    },
  },
  methods: {
    signUp() {
      this.$store
        .dispatch('signUp', {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(() => {
          this.errors = []
          this.$router.push({ name: 'home' })
        })
        .catch(errors => {
          this.errors = errors.full_messages
        })
    }
  }
}
</script>
