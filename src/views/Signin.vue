<template>
  <div class="min-w-full bg-gray-300">
    <FullLogo />
    <div class="max-w-xs md:max-w-md mx-auto bg-white shadow-md rounded px-8 py-8">
      <form>
        <div class="mb-4">
          <Input id="email" label="Email address" placeholder="batman@gmail.com" />
        </div>
        <div class="mb-6">
          <Input id="password" label="Password" type="password" placeholder="*******************" />
        </div>
        <div class="text-center flex flex-col">
          <button class="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <router-link to="/sign_up" class="font-bold text-sm text-blue-500 hover:text-blue-800 mt-3">
            Need an account?
          </router-link>
          <a class="font-bold text-sm text-blue-500 hover:text-blue-800 mt-3" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FullLogo from '@/components/FullLogo'
import Input from '@/components/Input'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  components: {
    FullLogo,
    Input
  },
  methods: {
    signIn() {
      console.log(this.email)
    }
  }
};
</script>
