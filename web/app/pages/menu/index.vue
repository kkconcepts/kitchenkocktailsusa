<script setup>
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useFirstScreenAnimation } from '~/composables/useFirstScreenAnimation'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

useScrollContentAnimation()
useParallaxEffects()

onMounted(() => {
  useFirstScreenAnimation('.page')
})

// Pre-fetch data at the page level
const { getAllMenuItems } = useMenu()
const { data: menuItems } = await getAllMenuItems()

const title = ref('Menu')
const pageDescription = ref(
  'Explore our full menu featuring Southern classics, modern favorites, and handcrafted cocktails served with style. From appetizers to desserts, discover our unique dining experience.'
)

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: 'Kitchen + Kocktails',
        hasMenu: {
          '@type': 'Menu',
          name: 'Kitchen + Kocktails Menu',
          description: pageDescription
        }
      })
    }
  ]
})
</script>

<template>
  <div class="">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <!-- Pass the pre-fetched data -->
        <LayoutContain class="max-w-90rem f-py-180-240 fade-group">
          <FeaturesMenuList :items="menuItems" />
        </LayoutContain>
      </div>
    </div>
  </div>
</template>

<style scope>
.divider {
  position: relative;
  overflow: visible;
}
</style>
