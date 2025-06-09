<script setup lang="ts">
import { ogImage } from '~/constants'

const title = ref('Private Events')
const pageDescription = ref(
  'Plan unforgettable private events with Kitchen + Kocktails. Reserve stylish spaces for birthdays, corporate dinners, celebrations, and more.'
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
      <h1>Private Events</h1>
    </section>
  </Contain>
</template>
