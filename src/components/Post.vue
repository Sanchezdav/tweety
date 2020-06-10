<template>
  <article class="w-full flex bg-white p-3 border-b border-gray-400 box-border">
    <figure class="mr-2">
      <img src="../assets/images/avatar.png" class="rounded-full" width="50" alt="avatar">
    </figure>
    <div class="flex flex-col w-full">
      <div class="flex w-full items-center">
        <p class="font-bold mr-2">{{ name || emailTruncated }}</p>
        <p class="text-gray-600">@{{ username }}</p>
        <p class="flex text-gray-600 ml-auto">
          <span>{{ timeAgo }}</span>
        </p>
      </div>
      <div class="mt-1">
        <p>{{ post.content }}</p>
      </div>
      <div class="flex items-center pt-3">
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
        <button v-if="userId == currentUserId" class="ml-2 text-blue-700">
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

export default {
  name: 'Post',
  data () {
    return {
      editing: false,
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
  },
}
</script>

<style scoped>
  .link-icon {
    transition: all ease .2s;
  }
</style>
