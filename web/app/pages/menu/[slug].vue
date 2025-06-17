<script setup>
import { ogImage } from '~/constants'

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

// Add the product types array
const productTypes = [
  { label: 'Appetizers', value: 'appetizers' },
  { label: 'Soups & Salads', value: 'soups-salads' },
  { label: 'Entrees', value: 'entrees' },
  { label: 'Specialty Items', value: 'specialty-items' },
  { label: 'Sides', value: 'sides' },
  { label: 'Premium Sides', value: 'premium-sides' },
  { label: 'Brunch', value: 'brunch' },
  { label: 'Brunch Sides', value: 'brunch-sides' },
  { label: 'Desserts', value: 'desserts' },
  { label: 'Cocktails', value: 'cocktails' }
]

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
  <div class="page page-menu-item bg-light-500">
    <AppHeader>
      <template #menu-categories>
        <!-- Location Dropdown and Breadcrumb Container -->
        <div class="w-full bg-stone-50 py-3 hidden">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between">
              <!-- Breadcrumb Navigation -->
              <div class="flex items-center space-x-2 text-gray-700">
                <NuxtLink to="/menu" class="hover:text-primary transition-colors duration-200">
                  Back to Menu
                </NuxtLink>
                <span class="text-gray-400">&gt;</span>
                <span class="text-brand-accent">{{
                  getProductTypeLabel(menuItem?.productType)
                }}</span>
              </div>

              <!-- Location Dropdown -->
              <div class="flex items-center whitespace-nowrap">
                <span class="text-gray-600 font-medium">Ordering From</span>
                <div class="relative inline-flex items-center ml-2">
                  <Icon
                    name="uil:location-point"
                    class="absolute left-2 text-brand-accent w-4 h-4"
                  />
                  <select
                    v-model="selectedCity"
                    class="bg-white pl-8 pr-8 py-1 appearance-none focus:outline-none font-medium border border-cool-gray-300"
                  >
                    <option v-for="city in cities" :key="city.value" :value="city.value">
                      {{ city.label }}
                    </option>
                  </select>
                  <Icon name="uil:angle-down" class="absolute right-2 text-brand-dark w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </AppHeader>
    <section v-if="menuItem" class="h-[100vh] w-screen relative">
      <!-- Title Section -->
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-4xl font-bold text-brand-dark">{{ menuItem.name }}</h1>
      </div>

      <div class="absolute inset-0 top-[80px] grid md:grid-cols-2 bg-white overflow-hidden">
        <!-- Image Section -->
        <div class="relative h-full">
          <img :src="menuItem.imageUrl" :alt="menuItem.name" class="w-full h-full object-cover" />
        </div>

        <!-- Content Section -->
        <div class="h-full overflow-y-auto p-8">
          <div class="max-w-2xl mx-auto flex flex-col h-full">
            <div class="flex-grow"></div>

            <!-- Menu Item Details -->
            <div class="mb-8">
              <h1 class="text-3xl font-bold tracking-tight text-brand-dark mb-4">
                {{ menuItem.name }}
              </h1>
              <p class="text-warmGray-600 mb-8">{{ menuItem.description }}</p>

              <!-- Add-ons Section -->
              <div v-if="menuItem.addOns && menuItem.addOns.length > 0" class="mb-8">
                <h2 class="text-xl font-semibold text-brand-accent mb-4">Add-ons</h2>
                <div class="grid grid-cols-1 gap-4">
                  <div
                    v-for="addOn in menuItem.addOns"
                    :key="addOn.name"
                    class="p-4 bg-stone-50 border border-stone-100"
                  >
                    <div class="flex justify-between items-center">
                      <span class="font-medium text-warmgray-700">{{ addOn.name }}</span>
                      <span class="text-brand-accent font-semibold"
                        >+${{ addOn.price.toFixed(2) }}</span
                      >
                    </div>
                    <p v-if="addOn.description" class="text-sm text-gray-500 mt-2">
                      {{ addOn.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Order Button Section -->
            <div class="sticky bottom-0 bg-white pt-6 border-t border-stone-100">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xl font-semibold text-gray-900">Price:</span>
                <span class="text-2xl font-bold text-brand-primary"
                  >${{ menuItem.price.toFixed(2) }}</span
                >
              </div>
              <a
                :href="getToastUrl(menuItem)"
                target="_blank"
                class="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 px-6 flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <Icon name="uil:shopping-cart" class="w-5 h-5" />
                Order Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
