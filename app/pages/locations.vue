<script setup>
import { ogImage } from '~/constants'

const title = ref('Our Locations')
const pageDescription = ref(
  'Find your nearest Kitchen + Kocktails location. Each city brings its own unique flavor and unforgettable dining experience.'
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
