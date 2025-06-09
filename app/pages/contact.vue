<script setup lang="ts">
import { ogImage } from '~/constants'

const title = ref('Contact')
const pageDescription = ref(
  'Have questions, feedback, or event inquiries? Reach out to our team and we’ll be in touch.'
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
      <h1>Contact</h1>
    </section>
  </Contain>
</template>
