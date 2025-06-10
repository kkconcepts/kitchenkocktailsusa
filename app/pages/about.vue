<script setup lang="ts">
import { ogImage } from '~/constants'

const title = ref('About')
const pageDescription = ref(
  'Learn the story behind Kitchen + Kocktails — where culture, comfort food, and community come together for an unforgettable experience.'
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
      <h1></h1>
    </section>
  </Contain>
</template>
