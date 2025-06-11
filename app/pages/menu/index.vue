<script setup>
import { ogImage } from '~/constants'

const title = ref('Menu')
const pageDescription = ref(
  'Explore our full menu featuring Southern classics, modern favorites, and handcrafted cocktails served with style.'
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
