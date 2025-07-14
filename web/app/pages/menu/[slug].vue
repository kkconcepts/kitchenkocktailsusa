<script setup>
import { ogImage } from '~/constants'
import { productTypes } from '~/utils/productTypes'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

const route = useRoute()
const slug = route.params.slug

// Fetch the specific menu item
// Add the getToastUrl function
const getToastUrl = (item) => {
  if (!item.toastUrls) {
    console.log('No toastUrls found')
    return null
  }
  const url = item.toastUrls[selectedCity.value]
  return url
}

// Add selectedCity ref
const selectedCity = ref('atlanta')

// Update the Sanity query to include addOns
const { data: menuItem } = await useSanityQuery(
  groq`*[_type == "menuItem" && slug.current == $slug][0]{
    _id,
    name,
    price,
    productType,
    availableIn,
    description,
    "imageUrl": image.asset->url,
    toastUrls,
    addOns[] {
      name,
      price,
      description,
      isAvailable
    }
  }`,
  { slug }
)

// Computed properties for SEO
const title = computed(() =>
  menuItem.value ? `${menuItem.value.name} | Kitchen + Kocktails Menu` : 'Menu Item'
)
const pageDescription = computed(
  () => menuItem.value?.description || 'Discover our delicious menu items at Kitchen + Kocktails'
)
const itemImage = computed(() => menuItem.value?.imageUrl || ogImage)

// Add the helper function
const getProductTypeLabel = (value) => {
  return productTypes.find((type) => type.value === value)?.label || value
}

// SEO metadata
useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: itemImage,
  twitterCard: 'summary_large_image',
  ogType: 'article',
  // Add structured data for the menu item
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (!menuItem.value) return '{}'

        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MenuItem',
          name: menuItem.value.name,
          description: menuItem.value.description,
          offers: {
            '@type': 'Offer',
            price: menuItem.value.price,
            priceCurrency: 'USD'
          },
          image: menuItem.value.imageUrl,
          menuAddOn: menuItem.value.productType
        })
      })
    }
  ]
})

// Add cities array with all locations
const cities = [
  { label: 'Atlanta', value: 'atlanta' },
  { label: 'Charlotte', value: 'charlotte' },
  { label: 'Chicago', value: 'chicago' },
  { label: 'Dallas', value: 'dallas' },
  { label: 'Washington, D.C.', value: 'washington-dc' }
]
// Add a computed property for total price with null checks
const selectedAddOns = ref([])
const totalPrice = computed(() => {
  if (!menuItem.value) return 0
  const basePrice = menuItem.value.price || 0
  const addOnsTotal = selectedAddOns.value.reduce((sum, addOn) => sum + (addOn.price || 0), 0)
  return basePrice + addOnsTotal
})
</script>

<template>
  <div class="page page-menu-item">
    <section v-if="menuItem" class="h-[100vh] w-screen relative">
      <div class="absolute inset-0 top-[80px] grid md:grid-cols-2 overflow-hidden">
        <!-- Image Section -->
        <div class="relative h-full">
          <NuxtImg
            :src="menuItem.imageUrl"
            :alt="menuItem.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content Section -->
        <div class="h-full overflow-y-auto f-py-24-48">
          <div class="max-w-2xl mx-auto flex flex-col h-full">
            <div class="flex-grow"></div>

            <!-- Menu Item Details -->
            <div class="mb-8">
              <h1
                class="tracking-tight f-text-24-31 leading-[95%] font-gt-ultra text-start uppercase tracking-wide uppercase mb-4"
              >
                {{ menuItem.name }}
              </h1>
              <p class="mb-8">{{ menuItem.description }}</p>

              <!-- Add-ons Section -->
              <div v-if="menuItem.addOns && menuItem.addOns.length > 0" class="mb-8">
                <h2 class="mb-4">Add-ons</h2>
                <div class="grid grid-cols-1 gap-4">
                  <div
                    v-for="addOn in menuItem.addOns"
                    :key="addOn.name"
                    class="p-4 border border-stone-100"
                  >
                    <div class="flex justify-between items-center">
                      <span class="font-medium">{{ addOn.name }}</span>
                      <span class="text-brand-accent font-semibold"
                        >+${{ addOn.price ? addOn.price.toFixed(2) : '0.00' }}</span
                      >
                    </div>
                    <p v-if="addOn.description" class="mt-2">
                      {{ addOn.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Order Button Section -->
            <div class="sticky bottom-0 pt-6">
              <div class="flex items-center justify-between mb-4">
                <span class="font-semibold">Price:</span>
                <span class="font-bold"
                  >${{ menuItem.price ? menuItem.price.toFixed(2) : '0.00' }}</span
                >
              </div>
              <a
                :href="getToastUrl(menuItem)"
                target="_blank"
                class="w-full bg-brand-accent rounded-0.5 text-white font-semibold py-4 px-6 flex items-center justify-center gap-2 transition-colors duration-200"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
