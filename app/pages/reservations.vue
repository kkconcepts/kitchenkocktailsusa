<script setup lang="ts">
import { ogImage } from '~/constants'

const title = ref('Reserve a Table')
const pageDescription = ref(
  'Book your table online at any of our locations. Whether it’s a night out or private event, reserve your spot today.'
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
