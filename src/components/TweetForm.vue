<template>
  <div class="tweet-form bg-white p-3">
    <div class="flex w-full">
      <div class="flex-shrink-0 mr-2">
        <router-link to="/profile" class="cursor-pointer font-bold bg-gray-300 flex items-center justify-center rounded-full">
          <img src="../assets/images/avatar.png" class="rounded-full" width="50" alt="avatar">
        </router-link>
      </div>
      <div class="flex-1">
        <form @submit.prevent="createPost">
          <textarea 
            v-model="post.content" 
            class="home__input mb-2 focus:outline-none border border-transparent rounded-lg py-2 px-4 block w-full appearance-none placeholder-gray-700 focus:placeholder-gray-400" 
            rows="2" 
            placeholder="What's happening..." 
            @keyup='remaincharCount()'>
          </textarea>
          <p class="pl-5 text-gray-500 text-sm">
            <span v-html="remainCharactersText"></span>
          </p>
          <div class="flex items-center px-5 mt-2">
            <button class="tweet-form__button-icon">
              <font-awesome-icon icon="image" class="text-gray-500 text-2xl" />
            </button>
            <button :class="disabled" class="ml-auto text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'TweetForm',
  data() {
    return {
      post:{
        content: ''
      },
      maxCharacters: 150,
      remainCharactersText: '150',
      activeButton: true
    }
  },
  computed: {
    isComplete () {
      return this.post.content && this.activeButton
    },
    disabled () {
      return this.isComplete ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-300 cursor-not-allowed'
    },
  },
  methods: {
    createPost() {
      api
        .createPost(this.post)
        .then((response) => {
          this.$emit('addPost', response.data)
          this.reset()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    reset() {
      this.post.content = ''
    },
    remaincharCount() {
      if (this.post.content.length > this.maxCharacters) {
        this.remainCharactersText = `<span class="text-red-500">Exceeded ${this.maxCharacters} characters limit</span>`
        this.activeButton = false
      }else{
        let remainCharacters = this.maxCharacters - this.post.content.length
        this.remainCharactersText = `${remainCharacters}`
        this.activeButton = true
      }

    }
  },
}
</script>

<style lang="scss" scoped>
.tweet-form {
  &__input {
    &::placeholder {
      font-weight: bold;
    }
  }

  &__button-icon {
    &:hover {
      color: red;
    }
  }
}
</style>
