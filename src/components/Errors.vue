<template>
  <div v-if="hasErrors()" class="mb-5 pb-3 border-b-2 border-red-500">
    <ul class="text-red-500 text-center">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Errors',
    props: {
      errors: {
        type: Array,
        required: true
      }
    },
    methods: {
      hasErrors() {
        return this.errors.length > 0
      }
    }
  }
</script>
