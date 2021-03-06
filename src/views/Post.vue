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
        <Post v-show="!isLoading" :post="post" :key="post.id" @removePost="deletePost" />
        <div class="flex items-center bg-white p-5 text-gray-500">
          <div>
            <font-awesome-icon icon="clock" class="mr-3" />
            <span>{{ timeAgo }}</span>
          </div>
          <div class="ml-auto ">
            <button 
              class="text-white bg-green-500 hover:bg-green-400 font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline" 
              @click="showingModal = true">
              Comment
            </button>
          </div>
        </div>
        <FormModal :showing="showingModal" @close="showingModal = false">
          <PostForm 
            button-text="Comment" 
            input-placeholder="What's your comment..." 
            is-comment 
            v-on:addComment="createComment" />
        </FormModal>
        <div v-show="isLoadingComments" class="mt-3 p-8 text-center">
          <h3 class="text-xl">Loading comments...</h3>
        </div>
        <div v-show="!isLoadingComments && comments.length == 0" class="mt-3 pt-12 text-center">
          <font-awesome-icon icon="comment" class="text-2xl text-gray-600" />
          <h3 class="text-xl text-gray-600">
            Be the first to comment!
          </h3>
        </div>
        <div v-show="!isLoadingComments && comments.length > 0" class="comments mt-3 pl-8">
          <transition-group name="fade">
            <div v-for="comment in comments" :key="comment.id">
              <Comment :comment="comment" />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <RightSide />
  </div>
</template>

<script>
import moment from 'moment'
import api from '@/api'
import Post from '@/components/Post'
import RightSide from '@/components/RightSide'
import EmptyPost from '@/components/EmptyPost'
import Comment from '@/components/Comment'
import FormModal from '@/components/FormModal'
import PostForm from '@/components/PostForm'

export default {
  name: 'PostView',
  components: {
    Post,
    RightSide,
    EmptyPost,
    Comment,
    FormModal,
    PostForm
  },
  data () {
    return {
      postId: this.$route.params.id,
      post: {},
      comments: [],
      isLoading: true,
      isLoadingComments: true,
      showingModal: false,
    }
  },
  computed: {
    timeAgo() {
      return moment(this.post.created_at).format('LLL')
    },
  },
  created() {
    api
      .getPost(this.postId)
      .then(response => {
        this.post = response.data
        this.isLoading = false
      })

    api
      .getComments(this.postId)
      .then((response) => {
        this.comments = response.data
        this.isLoadingComments = false
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
    createComment(comment) {
      this.showingModal = false
      this.comments.unshift(comment)
      this.post.comments_count += 1
    },
  },
}
</script>

<style lang="scss" scoped>
.comments {
  position: relative;

  &::after {
    border-left: solid 5px $twitter-blue;
    border-bottom: solid 5px $twitter-blue;
    content: '';
    position: absolute;
    top: -12px;
    left: 13px;
    height: 80%;
    width: 20px;
    z-index: 2;
  }

}
</style>
