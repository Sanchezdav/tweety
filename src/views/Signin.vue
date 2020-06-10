<template>
  <div class="min-w-full bg-gray-300">
    <FullLogo />
    <div class="w-full max-w-xs md:max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
      <Errors :errors="errors" />
      <form @submit.prevent="signIn" class="mb-4">
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
        <div class="text-center flex flex-col">
          <button :class="disabled" class="w-full text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="submit">
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
import Errors from '@/components/Errors'

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  components: {
    FullLogo,
    Errors
  },
  computed: {
    isComplete () {
      return this.email && this.password
    },
    disabled () {
      return this.isComplete ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-300 cursor-not-allowed'
    },
  },
  methods: {
    signIn() {
      this.$store
        .dispatch('signIn', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.errors = []
          this.$router.push({ name: 'home' })
        })
        .catch(errors => {
          console.log(errors)
          this.errors = errors
        })
    }
  }
}
</script>
