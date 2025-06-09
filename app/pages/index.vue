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
  <LayoutContain>
    <section class="section min-h-20">
      <h1 class="text-center"></h1>
    </section>
  </LayoutContain>
</template>

<style scoped>
.section {
  width: 100%;
}
</style>
