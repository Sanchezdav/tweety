<template>
  <div class="home flex h-auto min-h-full">
    <div class="lg:w-3/5 w-full">
      <div class="border-solid border-gray-400 border-b p-3 flex items-center">
        <router-link :to="{ name: 'home' }" class="hover:text-blue-500">
          <font-awesome-icon icon="arrow-left" />
        </router-link>
        <h1 class="text-xl font-bold ml-10">Tweety</h1>
      </div>
      <div class="min-h-full h-auto bg-gray-300">
        <div v-show="isLoading" class="mt-3">
          <EmptyPost />
        </div>
        <Post :post="post" :key="post.id" @removePost="deletePost" />
      </div>
    </div>
    <RightSide />
  </div>
</template>

<script>
import api from '@/api'
import Post from '@/components/Post'
import RightSide from '@/components/RightSide'
import EmptyPost from '@/components/EmptyPost'

export default {
  name: 'PostView',
  components: {
    Post,
    RightSide,
    EmptyPost
  },
  data () {
    return {
      postId: this.$route.params.id,
      post: {},
      isLoading: true
    }
  },
  created() {
    api
      .getPost(this.postId)
      .then(response => {
        this.post = response.data
        this.isLoading = false
      })
  },
  methods: {
    deletePost(post) {
      api
        .deletePost(post)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    },
  },
}
</script>
