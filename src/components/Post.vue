<template>
  <article class="w-full flex bg-white p-3 border-b border-gray-400 box-border">
    <figure class="mr-2">
      <img src="../assets/images/avatar.png" class="rounded-full" width="50" alt="avatar">
    </figure>
    <div class="flex flex-col w-full">
      <div class="flex w-full items-center">
        <p class="font-bold mr-2">{{ name || emailTruncated }}</p>
        <p class="text-gray-600 mr-2">@{{ username }}</p>
        <p v-if="isEdited" class="text-gray-600 text-sm">(edited)</p>
        <p class="flex text-gray-600 ml-auto">
          <span>{{ timeAgo }}</span>
        </p>
      </div>
      <div class="mt-1">
        <p v-if="!editing">{{ post.content }}</p>
        <div v-if="editing">
          <form @submit.prevent="updatePost">
            <textarea 
              v-model="post.content" 
              class="home__input mb-1 focus:outline-none bg-gray-200 border border-transparent rounded-lg py-2 px-4 block w-full appearance-none placeholder-gray-700 focus:placeholder-gray-400" 
              rows="2" 
              placeholder="What's happening..." 
              @keyup='remaincharCount()'>
            </textarea>
            <p class="pl-5 text-gray-500 text-sm">
              <span v-html="remainCharactersText"></span>
            </p>
            <div class="flex items-center px-5 mt-2">
              <button @click="cancelUpdate" class="bg-red-500 hover:bg-red-400 ml-auto text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline">
                Cancel
              </button>
              <button :class="disabled" class="ml-2 text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex items-center pt-3" v-if="!editing">
        <button class="link-icon mr-12 p-2 text-gray-500 hover:text-gray-600">
          <font-awesome-icon icon="comment" class="mr-1" />
          <span class="text-sm">10</span>
        </button>
        <button class="link-icon mr-12 p-2 text-gray-500 hover:text-blue-600">
          <font-awesome-icon icon="share" class="mr-1" />
          <span class="text-sm">10</span>
        </button>
        <button class="link-icon mr-12 p-2 text-gray-500 hover:text-red-600">
          <font-awesome-icon icon="heart" class="mr-1" />
          <span class="text-sm">10</span>
        </button>
        <button class="link-icon mr-12 p-2 text-gray-500 hover:text-green-600">
          <font-awesome-icon icon="bookmark" class="mr-1" />
        </button>
        <button v-if="userId == currentUserId && !editing" @click="editing = true" class="ml-2 text-blue-700">
          <font-awesome-icon icon="edit" />
        </button>
        <button v-if="userId == currentUserId" class="ml-2 text-red-700">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'
import api from '@/api'

export default {
  name: 'Post',
  data () {
    return {
      editing: false,
      maxCharacters: 150,
      remainCharactersText: '',
      activeButton: true,
      error: {},
      previousContent: this.post.content
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    userId() {
      return this.post.user.id
    },
    name() {
      return this.post.user.name
    },
    username() {
      return this.post.user.username
    },
    emailTruncated() {
      return this.post.user.email.split("@")[0].trim()
    },
    timeAgo() {
      return moment(this.post.created_at).fromNow()
    },
    currentUserId() {
      return this.$store.state.auth.user.id
    },
    isComplete () {
      return this.post.content && this.activeButton
    },
    disabled () {
      return this.isComplete ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-300 cursor-not-allowed'
    },
    isEdited () {
      return this.post.created_at != this.post.updated_at
    },
  },
  methods: {
    remaincharCount() {
      if (this.post.content.length > this.maxCharacters) {
        this.remainCharactersText = `<span class="text-red-500">Exceeded ${this.maxCharacters} characters limit</span>`
        this.activeButton = false
      }else{
        let remainCharacters = this.maxCharacters - this.post.content.length
        this.remainCharactersText = `${remainCharacters}`
        this.activeButton = true
      }

    },
    updatePost() {
      api
        .updatePost(this.post)
        .then((response) => {
          this.post.updated_at = response.data.updated_at
          this.editing = false
          this.error = {}
        })
        .catch((error) => {
          console.log(error)
          this.error = error
        })
    },
    cancelUpdate() {
      this.editing = false
      this.post.content = this.previousContent
    },
  }
}
</script>

<style scoped>
  .link-icon {
    transition: all ease .2s;
  }
</style>
