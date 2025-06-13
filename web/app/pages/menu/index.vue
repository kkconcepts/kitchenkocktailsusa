<script setup>
import { ogImage } from '~/constants'

const title = ref('Menu | Kitchen + Kocktails')
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

// Update the default selected city to 'atlanta'
const selectedCity = ref('atlanta')
const selectedType = ref('all')

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

// Add search functionality
const searchQuery = ref('')

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

// Update the getToastUrl function to add logging
const getToastUrl = (item) => {
  if (!item.toastUrls) {
    console.log('No toastUrls found')
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
  { label: 'Desserts', value: 'desserts' },
  { label: 'Cocktails', value: 'cocktails' }
]
</script>

<template>
  <div class="page page-menu bg-light-200">
    <AppHeader>
      <template #menu-categories>
        <!-- Location Dropdown Section -->
        <div class="w-full bg-brand-light py-3">
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

        <!-- Existing Filters Section remains unchanged -->
        <div
          class="w-full shadow-sm bg-white backdrop-blur-xl border-t border-t-cool-gray-300 border-b border-b-cool-gray-200"
        >
          <div class="container mx-auto">
            <div class="h-14 flex items-center justify-center space-x-4">
              <!-- Existing search and filters remain unchanged -->
              <!-- Add search input -->
              <div class="relative flex items-center mr-4">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search menu..."
                  class="pl-10 pr-4 py-1.5 rounded border border-true-gray-300 focus:outline-none focus:border-primary text-gray-900"
                />
                <Icon name="uil:search" class="absolute left-3 text-gray-600 w-4.5 h-4.5" />
              </div>

              <!-- Existing type filters -->
              <template v-for="(type, index) in productTypes" :key="type.value">
                <button @click="selectedType = type.value" class="focus:outline-none px-2">
                  <span
                    :class="[
                      'transition-colors duration-200 whitespace-nowrap',
                      selectedType === type.value
                        ? 'text-brand-accent font-medium'
                        : 'text-gray-500 font-medium hover:text-brand-accent'
                    ]"
                  >
                    {{ type.label.replace('All Items', 'Menu') }}
                  </span>
                </button>
                <span
                  v-if="index < productTypes.length - 1"
                  class="text-cool-gray-300 select-none"
                  aria-hidden="true"
                >
                  |
                </span>
              </template>
            </div>
          </div>
        </div>
      </template>
    </AppHeader>

    <!-- Main content -->
    <LayoutContain>
      <section>
        <div class="container mx-auto f-py-160-250">
          <div class="space-y-14">
            <!-- Page Title -->
            <div class="text-center">
              <h1 class="text-4xl text-center font-bold mb-6">
                {{
                  selectedType === 'all'
                    ? 'MENU'
                    : productTypes.find((t) => t.value === selectedType)?.label.toUpperCase()
                }}
              </h1>
              <p class="text-lg text-center max-w-3xl m-auto">
                Our menu offers enticing choices of southern comfort food delights. Menu items are
                offered À la Carte with an additional brunch menu offered on Saturday and Sunday.
              </p>
            </div>

            <!-- Menu Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-12">
              <div
                v-for="item in filteredItems"
                :key="item._id"
                class="overflow-hidden shadow-md backdrop-blur-lg bg-white"
              >
                <NuxtLink :to="`/menu/${item.slug}`" class="block">
                  <NuxtImg :src="item.imageUrl" :alt="item.name" class="w-full h-48 object-cover" />
                </NuxtLink>
                <div class="p-4">
                  <h3 class="text-lg font-bold">{{ item.name }}</h3>
                  <div class="flex justify-between items-center mt-2">
                    <p class="font-semibold">${{ item.price.toFixed(2) }}</p>
                    <ClientOnly>
                      <a
                        v-if="getToastUrl(item)"
                        :href="getToastUrl(item)"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-4 py-2 rounded font-semibold text-brand-primary hover:text-red-600 transition-colors duration-200"
                      >
                        Order Now
                      </a>
                    </ClientOnly>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutContain>
  </div>
</template>
