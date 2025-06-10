<script setup lang="ts">
import { ogImage } from '~/constants'

const title = ref('Home')
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
  <section class="section">
    <SectionsHero />
  </section>
</template>

<style scoped>
.section {
  width: 100%;
}
</style>
