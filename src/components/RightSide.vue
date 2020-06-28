<template>
  <aside class="lg:w-2/5 lg:flex md:flex hidden border-solid border-gray-400 border-l">
    <div class="w-full py-3 px-8">
      <SearchBar />
      <div class="mt-5 bg-gray-200 rounded-lg">
        <div class="px-5 py-3 border-b border-gray-400">
          <h3 class="text-xl font-bold">What’s happening</h3>
        </div>
        <a href="/">
          <div class="px-5 py-3 border-b border-gray-400 hover:bg-gray-300">
            <p class="text-sm text-gray-600">Trending in Mexico</p>
            <p class="text-md font-bold mt-1">Earthquake</p>
            <p class="text-lg text-gray-600 mt-1">62k Tweets</p>
          </div>
        </a>
        <a href="/">
          <div class="px-5 py-3 border-b border-gray-400 hover:bg-gray-300">
            <p class="text-sm text-gray-600">Trending in Mexico</p>
            <p class="text-md font-bold mt-1">COVID 19</p>
            <p class="text-lg text-gray-600 mt-1">12k Tweets</p>
          </div>
        </a>
        <a href="/" class="text-blue-500">
          <div class="flex px-5 py-3 hover:cursor-pointer hover:bg-gray-300">
            Show more
          </div>
        </a>
      </div>
      <div class="mt-5 bg-gray-200 rounded-lg">
        <div class="px-5 py-3 border-b border-gray-400">
          <h3 class="text-xl font-bold">Who to follow</h3>
        </div>
        <a href="/">
          <div class="px-5 py-3 border-b border-gray-400 hover:bg-gray-300">
            <p class="text-sm text-gray-600">Trending in Mexico</p>
            <p class="text-md font-bold mt-1">Earthquake</p>
            <p class="text-lg text-gray-600 mt-1">62k Tweets</p>
          </div>
        </a>
        <a href="/">
          <div class="px-5 py-3 border-b border-gray-400 hover:bg-gray-300">
            <p class="text-sm text-gray-600">Trending in Mexico</p>
            <p class="text-md font-bold mt-1">COVID 19</p>
            <p class="text-lg text-gray-600 mt-1">12k Tweets</p>
          </div>
        </a>
        <a href="/" class="text-blue-500">
          <div class="flex px-5 py-3 hover:cursor-pointer hover:bg-gray-300">
            Show more
          </div>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import SearchBar from './SearchBar'
export default {
  name: 'RightSide',
  components: {
    SearchBar
  }
}
</script>
