<script setup lang="ts">
import { ogImage } from '~/constants'

const title = ref('Menu')
const pageDescription = ref(
  'Explore our full menu featuring Southern classics, modern favorites, and handcrafted cocktails served with style.'
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
      <h1>About</h1>
    </section>
  </Contain>
</template>
