<template>
  <div class="min-w-full bg-gray-300">
    <FullLogo />
    <div class="w-full max-w-xs md:max-w-md mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
         <Input id="username" label="Username" placeholder="Username or Nickname" />
        </div>
        <div class="mb-4">
          <Input id="email" label="Email address" placeholder="batman@gmail.com" />
        </div>
        <div class="mb-6">
          <Input id="password" label="Password" type="password" placeholder="*******************" />
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
import FullLogo from '@/components/FullLogo'
import Input from '@/components/Input'

export default {
  data() {
    return {
      username: '',
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
    signUp() {
      console.log(this.email)
    }
  }
};
</script>
