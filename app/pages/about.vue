<script setup>
import { ogImage } from '~/constants'

const title = ref('About')
const pageDescription = ref(
  'Learn the story behind Kitchen + Kocktails — where culture, comfort food, and community come together for an unforgettable experience.'
)

const pageClass = computed(() => `page page-${title.value.toLowerCase()}`)

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
  <div :class="pageClass">
    <LayoutContain>
      <section>
        <h1></h1>
      </section>
    </LayoutContain>
  </div>
</template>
