<template>
  <div class="home flex h-auto min-h-full">
    <div class="lg:w-3/5 w-full">
      <div class="border-solid border-gray-400 border-b p-3 flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <font-awesome-icon icon="star" />
      </div>
      <div class="min-h-full h-auto bg-gray-300">
        <PostForm v-on:addPost="createPost" />
        <div v-show="isLoading" class="mt-3">
          <EmptyPost />
          <EmptyPost />
          <EmptyPost />
        </div>
        <div class="mt-3">
          <transition-group name="fade">
            <div v-for="post in posts" :key="post.id">
              <Post :post="post" @removePost="deletePost" />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <RightSide />
  </div>
</template>

<script>
import api from '@/api'
import PostForm from '@/components/PostForm'
import Post from '@/components/Post'
import EmptyPost from '@/components/EmptyPost'
import RightSide from '@/components/RightSide'

export default {
  name: 'Home',
  components: {
    PostForm,
    Post,
    EmptyPost,
    RightSide
  },
  data() {
    return {
      posts: [],
      errors: [],
      isLoading: true
    }
  },
  created() {
    api
      .getPosts()
      .then(response => {
        this.posts = response.data
        this.isLoading = false
      })
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post)
    },
    deletePost(post) {
      api
        .deletePost(post)
        .then(() => {
          this.posts = this.posts.filter(item => item !== post)
        })
    },
  },
}
</script>
