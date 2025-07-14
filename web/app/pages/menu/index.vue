<script setup>
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useScrollGridAnimation } from '~/composables/useScrollGridAnimation'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'
import { useMenuFilter } from '~/composables/useMenuFilter'

definePageMeta({
  pageTransition: transition
})

useScrollContentAnimation()
useParallaxEffects()
useScrollGridAnimation()

// Get the menu filter state
const { searchQuery, selectedCity, selectedType } = useMenuFilter()

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
  <div class="page-content relative">
    <LayoutContain class="max-w-90rem f-py-180-240">
      <FeaturesMenuList :items="menuItems" />
    </LayoutContain>
  </div>
</template>

<style scope>
.divider {
  position: relative;
  overflow: visible;
}
</style>
