<script setup lang="ts">
import { ogImage } from '~/constants'

const title = ref('Our Locations')
const pageDescription = ref(
  'Find your nearest Kitchen + Kocktails location. Each city brings its own unique flavor and unforgettable dining experience.'
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
  <Contain>
    <section>
      <h1>Our Locations</h1>
    </section>
  </Contain>
</template>
