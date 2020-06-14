<template>
  <aside class="lg:w-2/5 lg:flex hidden border-solid border-gray-400 border-l">
    <div class="w-full py-3 px-8">
      <SearchBar />
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
