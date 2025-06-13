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
    <section class="min-h-100vh max-w-3xl m-auto f-py-160-180">
      <LayoutContain>
        <div class="flex flex-col f-gap-32-48">
          <div class="flex flex-col">
            <h1 class="text-4xl text-center font-bold mb-10 uppercase">{{ title }}</h1>
            <p class="text-lg text-center">
              Great food, great vibes, and great company are just around the corner. Discover our
              growing family of restaurants and join us for a dining experience you won’t forget.
            </p>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
