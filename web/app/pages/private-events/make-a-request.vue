<script setup>
import { useRouter } from 'vue-router'
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

useScrollContentAnimation()
useParallaxEffects()

const title = ref('Private Events Request')
const pageDescription = ref(
  'Request a private event at Kitchen + Kocktails. Perfect for birthdays, corporate events, and special occasions.'
)

// Set up page metadata
useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})

const router = useRouter()

const handleCancel = () => {
  router.push('/private-events')
}
</script>

<template>
  <div class="page-content relative min-h-screen w-full f-py-60-100 bg-black/90">
    <section>
      <BaseRequestForm @cancel="handleCancel" />
    </section>
  </div>
</template>
