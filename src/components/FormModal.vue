<template>
  <Transition name="fade">
    <div 
      v-if="showing" 
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75 z-10" 
      @click.self="close">
      <div class="w-full max-w-xl bg-white shadow-lg rounded-lg">
        <div class="text-right">
          <button
            aria-label="close"
            class="text-2xl text-gray-600 my-2 mx-4" 
            @click.prevent="close"
          >
            ×
          </button>
        </div>
        <hr />
        <div class="p-5">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'FormModal',
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
}
</script>

<style scoped>
.bg-semi-75 {
  background-color: rgba(0, 0, 0, 0.75);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
