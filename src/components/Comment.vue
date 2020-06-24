<template>
  <article :id="`comment-${comment.id}`" class="comment w-full flex bg-white p-3 border-b border-l border-gray-400 box-border">
    <figure class="mr-2">
      <img src="../assets/images/avatar.png" class="rounded-full" width="50" alt="avatar">
    </figure>
    <div class="flex flex-col w-full">
      <div class="flex md:flex-row flex-col w-full md:items-center items-start">
        <p class="font-bold mr-2">{{ name || emailTruncated }}</p>
        <p class="text-gray-600 mr-2">@{{ username }}</p>
        <p class="hidden md:flex text-gray-600 ml-auto">
          <span>{{ timeAgo }}</span>
        </p>
      </div>
      <div class="mt-1">
        <p class="py-1">
          {{ comment.content }}
        </p>
      </div>
      <div class="flex items-center pt-3">
        <button class="link-icon md:mr-12 mr-6 p-2 text-gray-500 hover:text-blue-600">
          <font-awesome-icon icon="thumbs-up" class="mr-1" />
          <span class="text-sm">10</span>
        </button>
        <button class="link-icon md:mr-12 mr-6 p-2 text-gray-500 hover:text-red-600">
          <font-awesome-icon icon="thumbs-down" class="mr-1" />
          <span class="text-sm">5</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  computed: {
    userId() {
      return this.comment.user?.id
    },
    name() {
      return this.comment.user?.name
    },
    username() {
      return this.comment.user?.username
    },
    emailTruncated() {
      return this.comment.user?.email.split("@")[0].trim()
    },
    timeAgo() {
      return moment(this.comment.created_at).fromNow()
    },
  },
}
</script>
