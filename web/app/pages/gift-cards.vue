<script setup>
import { ref } from 'vue'
import { ogImage } from '~/constants'
import { transition } from '../utils/transition'

definePageMeta({
  transition: transition
})

const title = ref('Gift Cards')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="page-content">
    <section></section>
  </div>
</template>

<style scoped></style>
