<template>
  <div class="tweet-form bg-white p-3">
    <div class="flex w-full">
      <div class="flex-shrink-0 mr-2">
        <router-link to="/profile" class="cursor-pointer font-bold w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full">
          <img src="../assets/images/avatar.png" class="rounded-full w-full h-full" alt="avatar">
        </router-link>
      </div>
      <div class="flex-1">
        <textarea 
          class="home__input mb-2 focus:outline-none border border-transparent rounded-lg py-2 px-4 block w-full appearance-none placeholder-gray-700 focus:placeholder-gray-400" 
          rows="3"
          placeholder="What's happening..."></textarea>
        <div class="px-5 ">
          <button class="tweet-form__button-icon">
            <font-awesome-icon icon="image" class="text-gray-500 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TweetForm'
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
