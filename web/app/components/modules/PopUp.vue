<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  hasCloseButton: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body" :disabled="!isOpen">
    <div v-if="isOpen" class="fixed inset-0 z-51 flex items-center justify-center p-8 md:p-0">
      <div class="fixed inset-0 bg-zinc-900/80" @click="handleClose"></div>
      <div
        class="relative border-brand-accent border-4 w-full max-w-md bg-dark-800 shadow-md transform transition-all overflow-hidden mx-auto md:rounded-none"
        @click.stop
      >
        <button
          v-if="hasCloseButton"
          @click="handleClose"
          class="absolute top-3 right-3 md:top-4 md:right-4 z-10 text-white/60 hover:text-white transition-colors duration-200 p-1 bg-dark-800/80 rounded-full"
        >
          <Icon name="uil:times" class="w-5.5 h-5.5 md:w-6 md:h-6" />
        </button>

        <div class="relative">
          <slot name="image">
            <div class="w-full h-[300px] md:h-[540px]"></div>
          </slot>

          <div
            class="absolute inset-x-0 bottom-0 px-4 md:px-8 py-6 md:py-12 text-center bg-gradient-to-t from-black/80 to-transparent"
          >
            <h2 class="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">{{ title }}</h2>
            <div class="text-sm md:text-md max-w-md m-auto text-white/90">
              <slot></slot>
            </div>
          </div>
        </div>

        <slot name="action">
          <div class="bg-red-600">
            <NuxtLink
              to="/reservations"
              class="block w-full text-white py-3 md:py-4 text-base md:text-lg font-josefin text-center hover:bg-red-700 transition-colors duration-200 bg-red-600"
            >
              Reserve a table
            </NuxtLink>
          </div>
        </slot>
      </div>
    </div>
  </Teleport>
</template>
