<script setup>
import { ogImage } from '~/constants'

const title = ref('Menu')
const pageDescription = ref(
  'Explore our full menu featuring Southern classics, modern favorites, and handcrafted cocktails served with style. From appetizers to desserts, discover our unique dining experience.'
)

const isSearchExpanded = ref(false)
const searchInputRef = ref(null)
const selectedCity = ref('atlanta')
const selectedType = ref('all')
const searchQuery = ref('')

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  // Add structured data for the menu page
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

const { data: menuItems } = await useSanityQuery(groq`
  *[_type == "menuItem"] {
    _id,
    name,
    price,
    productType,
    availableIn,
    "imageUrl": image.asset->url,
    "slug": slug.current,
    toastUrls
  }
`)

// Update the computed filtered items to include search
const filteredItems = computed(() => {
  let items = menuItems.value || []

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) || item.productType.toLowerCase().includes(query)
    )
  }

  // Apply type filter
  if (selectedType.value !== 'all') {
    items = items.filter((item) => item.productType === selectedType.value)
  }

  // Apply city filter
  items = items.filter(
    (item) => item.availableIn.includes('all') || item.availableIn.includes(selectedCity.value)
  )

  return items
})

const toggleSearch = () => {
  isSearchExpanded.value = !isSearchExpanded.value
  if (isSearchExpanded.value) {
    // Focus the input when expanded
    nextTick(() => {
      searchInputRef.value?.focus()
    })
  } else {
    // Clear search when collapsed
    searchQuery.value = ''
  }
}

// Update the getToastUrl function to add logging
const getToastUrl = (item) => {
  if (!item.toastUrls) {
    return null
  }
  const url = item.toastUrls[selectedCity.value]
  return url
}

// Filter options
const cities = [
  { label: 'Atlanta', value: 'atlanta' },
  { label: 'Charlotte', value: 'charlotte' },
  { label: 'Chicago', value: 'chicago' },
  { label: 'Dallas', value: 'dallas' },
  { label: 'Washington, D.C.', value: 'washington-dc' }
]

const productTypes = [
  { label: 'All Items', value: 'all' },
  { label: 'Appetizers', value: 'appetizers' },
  { label: 'Soups & Salads', value: 'soups-salads' },
  { label: 'Entrees', value: 'entrees' },
  { label: 'Specialty Items', value: 'specialty-items' },
  { label: 'Sides', value: 'sides' },
  { label: 'Premium Sides', value: 'premium-sides' },
  { label: 'Brunch', value: 'brunch' },
  { label: 'Brunch Sides', value: 'brunch-sides' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Waffles', value: 'waffles' },
  { label: 'Desserts', value: 'desserts' },
  { label: 'Kocktails', value: 'kocktails' },
  { label: 'Frozens', value: 'frozens' },
  { label: 'To-Go Frozens', value: 'to-go-frozens' }
]

// Group menu items by category
const menuByCategory = computed(() => {
  const grouped = {}

  // Use filteredItems instead of menuItems
  productTypes.forEach((type) => {
    if (type.value !== 'all') {
      grouped[type.value] = filteredItems.value.filter((item) => item.productType === type.value)
    }
  })

  return grouped
})

import { useMenuAnimations } from '~/composables/useMenuAnimations'

const { initializeAnimations, cleanupAnimations } = useMenuAnimations()

onMounted(() => {
  initializeAnimations()
})

onUnmounted(() => {
  cleanupAnimations()
})
</script>

<template>
  <div class="">
    <div class="hero-menu hidden relative min-h-45vh">
      <NuxtImg src="/hero-3.jpg" class="absolute object-cover w-full h-full" />
    </div>

    <!-- Main content -->
    <div class="">
      <section id="main-content" class="section">
        <SectionsHeroPage title="Our Menu" image="/slider-8.jpg" />
      </section>
      <LayoutContain class="max-w-90rem">
        <section class="w-full">
          <div class="f-py-220-240">
            <div class="space-y-14">
              <!-- Title section -->
              <div class="text-center">
                <h1
                  class="text-5xl text-center tracking-tight font-gt-ultra uppercase tracking-wide mb-6"
                >
                  {{ title }}
                </h1>
                <p class="f-text-16-19 text-center font-light max-w-3xl tracking-tight mx-auto">
                  Our menu offers enticing choices of southern comfort food delights. Menu items are
                  offered À la Carte with an additional brunch menu offered on Saturday and Sunday.
                </p>
              </div>

              <!-- Menu Categories -->
              <div class="space-y-16">
                <template v-for="type in productTypes" :key="type.value">
                  <div v-if="type.value !== 'all'" :id="type.value" class="scroll-mt-32">
                    <template v-if="menuByCategory[type.value]?.length > 0">
                      <h2 class="f-text-21-31 font-gt-ultra uppercase tracking-wide mb-2">
                        {{ type.label }}
                      </h2>
                      <div class="divider h-0.25 bg-black w-full">
                        <div class="h-full bg-black"></div>
                      </div>
                      <!-- Menu Grid Section -->
                      <div class="py-6">
                        <!-- Grid Container -->
                        <div
                          id="main-content"
                          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        >
                          <div
                            v-for="item in menuByCategory[type.value]"
                            :key="item._id"
                            class="bg-white shadow-lg menu-card flex flex-col h-full"
                            ref="menuCards"
                          >
                            <NuxtLink :to="`/menu/${item.slug}`" class="block h-44">
                              <NuxtImg
                                :src="item.imageUrl"
                                :alt="item.name"
                                class="w-full h-full object-cover"
                              />
                            </NuxtLink>
                            <div class="p-4 flex flex-col flex-grow">
                              <div
                                class="flex md:flex-row flex-col justify-between items-start gap-2"
                              >
                                <h3
                                  class="f-text-14-16 tracking-tight font-semibold line-clamp-2 flex-1"
                                >
                                  {{ item.name }}
                                </h3>
                                <p class="f-text-14-18 font-semibold whitespace-nowrap">
                                  ${{ item.price.toFixed(2) }}
                                </p>
                              </div>

                              <div class="mt-auto hidden f-gap-4-8">
                                <NuxtLink
                                  :href="getToastUrl(item)"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  class="block w-full py-2 text-center font-semibold bg-brand-dark text-white hover:bg-brand-dark/90 transition-colors duration-200"
                                >
                                  Order Online
                                </NuxtLink>
                                <NuxtLink
                                  :to="`/menu/${item.slug}`"
                                  class="block w-full py-2 text-center font-semibold bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-200"
                                >
                                  See Details
                                </NuxtLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div class="hidden">{{ type.label }}</div>
                    </template>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </section>
        <section class="">
          <SectionsLocationsAlt />
        </section>
      </LayoutContain>
    </div>
  </div>
</template>

<style scope>
.divider {
  position: relative;
  overflow: visible;
}
</style>
