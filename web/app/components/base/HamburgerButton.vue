<script setup>
import { ref, watch } from 'vue'
import { useAnimateMenu } from '~/composables/useAnimateMenu'

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['toggle'])

const buttonRef = ref(null)

useAnimateMenu(props.isOpen, buttonRef, 'hamburger')
</script>

<template>
  <button
    ref="buttonRef"
    class="fixed top-6 right-6 z-[120] flex flex-col justify-between w-8 h-6 cursor-pointer"
    @click="$emit('toggle')"
  >
    <span class="block h-[2px] bg-black w-full"></span>
    <span class="block h-[2px] bg-black w-full"></span>
    <span class="block h-[2px] bg-black w-full"></span>
  </button>
</template>
