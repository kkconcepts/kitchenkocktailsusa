<script setup>
import { ogImage } from '~/constants'

const title = ref('Reserve a Table')
const pageDescription = ref(
  'Book your table online at any of our locations. Whether it’s a night out or private event, reserve your spot today.'
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
      <section class="min-h-100vh w-full f-py-160-180">
        <div class="flex items-center justify-center flex-col w-full">
          <h1 class="text-4xl text-center font-bold mb-10 uppercase">{{ title }}</h1>
          <p class="text-lg text-center mb-12">
            Great food, great vibes, and great company are just around the corner. Discover our
            growing family of restaurants and join us for a dining experience you won't forget.
          </p>
        </div>
      </section>
    </LayoutContain>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
}
</style>
