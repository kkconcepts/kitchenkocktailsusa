<script setup>
import { ogImage } from '~/constants'

const title = ref('Private Events')
const pageDescription = ref(
  'Plan unforgettable private events with Kitchen + Kocktails. Reserve stylish spaces for birthdays, corporate dinners, celebrations, and more.'
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
