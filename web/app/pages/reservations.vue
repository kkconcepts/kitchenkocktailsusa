<script setup>
import { ogImage } from '~/constants'
import { ref } from 'vue'
const title = ref('Reservations')
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
  <div>
    <LayoutContain>
      <section class="min-h-100vh"></section>
    </LayoutContain>
  </div>
</template>
