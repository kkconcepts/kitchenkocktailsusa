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

// Update the Sanity query to include toastUrls
const { data: menuItem } = await useSanityQuery(
  groq`*[_type == "menuItem" && slug.current == $slug][0]{
    _id,
    name,
    price,
    productType,
    availableIn,
    description,
    "imageUrl": image.asset->url,
    toastUrls
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
</script>

<template>
  <div class="page page-menu-item bg-light-500">
    <AppHeader>
      <template #menu-categories>
        <!-- Location Dropdown Section -->
        <div class="w-full bg-stone-50 py-3">
          <div class="container mx-auto">
            <div class="flex justify-end">
              <div class="flex items-center whitespace-nowrap">
                <span class="text-gray-600 font-medium">Ordering From</span>
                <div class="relative inline-flex items-center ml-2">
                  <Icon
                    name="uil:location-point"
                    class="absolute left-2 text-brand-accent w-4 h-4"
                  />
                  <select
                    v-model="selectedCity"
                    class="bg-white pl-8 pr-8 py-1 appearance-none focus:outline-none font-medium border border-cool-gray-300 rounded-md"
                  >
                    <option v-for="city in cities" :key="city.value" :value="city.value">
                      {{ city.label }}
                    </option>
                  </select>
                  <Icon name="uil:angle-down" class="absolute right-2 text-brand-accent w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Existing breadcrumb navigation -->
        <div class="w-full border-t-cool-gray-300 border-t shadow-sm backdrop-blur-md">
          <div class="container mx-auto">
            <div class="h-14 flex items-center justify-start px-4 space-x-2 text-gray-700">
              <NuxtLink to="/menu" class="hover:text-primary transition-colors duration-200">
                Back to Menu
              </NuxtLink>
              <span class="text-gray-400">&gt;</span>
              <span class="text-red-600">{{ getProductTypeLabel(menuItem?.productType) }}</span>
            </div>
          </div>
        </div>
      </template>
    </AppHeader>

    <LayoutContain>
      <section v-if="menuItem" class="container mx-auto px-4 py-8 f-py-160-180">
        <!-- Remove the old back link and continue with existing content -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-white overflow-hidden shadow-lg backdrop-blur-sm">
            <!-- Image Section -->
            <img :src="menuItem.imageUrl" :alt="menuItem.name" class="w-full h-96 object-cover" />

            <!-- Content Section -->
            <div class="p-8">
              <div class="flex justify-between items-start mb-4">
                <h1 class="text-3xl font-bold">{{ menuItem.name }}</h1>
                <div class="text-right">
                  <p class="text-2xl text-red-600 font-bold mb-2">
                    ${{ menuItem.price.toFixed(2) }}
                  </p>
                  <ClientOnly>
                    <a
                      v-if="getToastUrl(menuItem)"
                      :href="getToastUrl(menuItem)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="px-4 py-2 rounded font-semibold text-brand-accent hover:text-red-600 transition-colors duration-200"
                    >
                      Order Now
                    </a>
                  </ClientOnly>
                </div>
              </div>

              <div class="mb-6">
                <p class="text-gray-700">{{ menuItem.description }}</p>
              </div>

              <!-- Additional Details -->
              <div class="space-y-4">
                <div>
                  <h2 class="font-semibold text-gray-900">Category</h2>
                  <p class="text-gray-600">{{ menuItem.productType }}</p>
                </div>

                <div>
                  <h2 class="font-semibold text-gray-900">Available Locations</h2>
                  <ul class="list-disc list-inside text-gray-600">
                    <li v-for="location in menuItem.availableIn" :key="location">
                      {{ location.charAt(0).toUpperCase() + location.slice(1) }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Loading State -->
      <section v-else class="container mx-auto px-4 py-8 text-center">Loading...</section>
    </LayoutContain>
  </div>
</template>
