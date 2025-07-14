<script setup>
import { onMounted, ref } from 'vue'
import { useAnimateImage } from '~/composables/useAnimateImage'

// Props
const props = defineProps({
  src: String,
  alt: String,
  width: Number,
  height: Number,
  class: String
})

const wrapper = ref(null)

onMounted(() => {
  if (wrapper.value) {
    useAnimateImage(wrapper.value)
  }
})
</script>

<template>
  <div ref="wrapper" class="animate-image overflow-hidden" :class="props.class">
    <NuxtImg
      :src="props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      class="w-full h-auto object-cover"
    />
  </div>
</template>
