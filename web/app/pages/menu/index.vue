<script setup>
import { ogImage } from '~/constants'

const title = ref('Menu')
const pageDescription = ref(
  'Explore our full menu featuring Southern classics, modern favorites, and handcrafted cocktails served with style. From appetizers to desserts, discover our unique dining experience.'
)

// Add smooth scrolling behavior
// Add active section tracking
const activeSection = ref('appetizers')

// Add these near the top of your script section
const categoryContainer = ref(null)
// Add these refs for scroll state
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

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

// Remove the scrollToSection function since we'll use native hash navigation
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Update the checkScroll function
const checkScroll = () => {
  if (!categoryContainer.value) return

  const container = categoryContainer.value
  const { scrollLeft, scrollWidth, clientWidth } = container

  canScrollLeft.value = scrollLeft > 0
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 1
}

// Update the scrollContainer function
const scrollContainer = (direction) => {
  if (!categoryContainer.value) return

  const container = categoryContainer.value
  const scrollAmount = container.clientWidth / 2

  if (direction === 'right') {
    container.scrollLeft += scrollAmount
  } else {
    container.scrollLeft -= scrollAmount
  }
}

// Add this to onMounted
onMounted(() => {
  if (process.client) {
    document.documentElement.style.scrollBehavior = 'smooth'
    checkScroll()
    window.addEventListener('resize', checkScroll)

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px'
      }
    )

    document.querySelectorAll('[id].scroll-mt-32').forEach((section) => {
      observer.observe(section)
    })
  }
})

const isSearchExpanded = ref(false)
const searchInputRef = ref(null)

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
</script>

<template>
  <div class="page page-menu">
    <div class="hero-menu hidden relative min-h-45vh">
      <NuxtImg src="/hero-3.jpg" class="absolute object-cover w-full h-full" />
    </div>
    <AppHeader>
      <template #menu-categories>
        <!-- Category Navigation -->
        <div class="w-full bg-white border-y border-stone-200">
          <div class="relative flex items-center">
            <!-- Left Arrow Container -->
            <div
              class="shrink-0 relative flex items-center justify-start border-r border-stone-200"
              :class="{ 'opacity-0': !canScrollLeft }"
            >
              <div
                class="absolute inset-y-0 -right-12 w-12 bg-gradient-to-l from-transparent to-stone-100"
              ></div>
              <button
                @click="scrollContainer('left')"
                class="p-4 transition-colors duration-200 bg-stone-100"
              >
                <Icon name="uil:angle-left" class="w-6 h-6 text-stone-600" />
              </button>
            </div>

            <!-- Category Container -->
            <div
              ref="categoryContainer"
              class="filter-categories flex-1 flex items-center overflow-x-auto scroll-smooth no-scrollbar"
              @scroll="checkScroll"
            >
              <!-- Search Container -->
              <div
                class="shrink-0 flex items-start transition-all duration-200 ease-out border-r border-stone-200"
                :class="{
                  'w-64': isSearchExpanded,
                  'w-16': !isSearchExpanded
                }"
              >
                <div class="flex items-center w-full">
                  <button
                    @click="toggleSearch"
                    class="p-1 rounded-full transition-colors duration-200 shrink-0"
                    :class="{ 'text=wh': isSearchExpanded }"
                  >
                    <Icon name="uil:search" class="md:w-5 md:h-5 w-4 h-4 text-stone-500" />
                  </button>

                  <input
                    ref="searchInputRef"
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search Menu"
                    class="ml-2 w-full rounded-lg f-text-13-14 text-stone-900 placeholder-stone-500 ring-0 focus:ring-0 border-none focus:border-none outline-none focus:outline-none transition-all duration-200"
                    :class="{
                      'opacity-100 px-3 py-1': isSearchExpanded,
                      'w-0 px-0 py-0 opacity-0': !isSearchExpanded
                    }"
                    @blur="isSearchExpanded = false"
                  />
                </div>
              </div>

              <!-- Category links with added left padding -->
              <template v-for="(type, index) in productTypes" :key="type.value">
                <button
                  v-if="type.value !== 'all'"
                  @click="scrollToSection(type.value)"
                  class="shrink-0 px-8 py-4 f-text-13-14 border-b-2 text-medium transition-colors duration-200"
                  :class="{
                    'text-brand-accent border-brand-accent font-gt-ultra uppercase tracking-wider border-b-3':
                      activeSection === type.value,
                    'text-stone-600 border-transparent font-gt-ultra uppercase tracking-wider hover:text-stone-900':
                      activeSection !== type.value
                  }"
                >
                  {{ type.label }}
                </button>
                <div
                  v-if="type.value !== 'all' && index < productTypes.length - 1"
                  class="h-6 border-r border-stone-200"
                ></div>
              </template>
            </div>

            <!-- Right Arrow Container -->
            <div
              class="shrink-0 relative flex items-center justify-end border-l border-stone-200"
              :class="{ 'opacity-0': !canScrollRight }"
            >
              <div
                class="absolute inset-y-0 -left-12 w-12 bg-gradient-to-r from-transparent to-stone-100"
              ></div>
              <button
                @click="scrollContainer('right')"
                class="p-4 transition-colors duration-200 bg-stone-100"
              >
                <Icon name="uil:angle-right" class="w-6 h-6 text-stone-600" />
              </button>
            </div>
          </div>
        </div>
        <!-- Location Dropdown Section -->
        <div class="w-full bg-none py-3">
          <LayoutContainAlt>
            <div class="flex justify-end">
              <div class="flex items-center whitespace-nowrap">
                <span class="text-brand-dark font-light text-sm">Ordering From</span>
                <div class="relative inline-flex items-center ml-3">
                  <Icon
                    name="uil:location-point"
                    class="absolute left-2 text-brand-accent w-4 h-4"
                  />
                  <select
                    v-model="selectedCity"
                    class="pl-8 pr-8 py-1 bg-white appearance-none text-sm text-brand-dark focus:outline-none font-medium border"
                  >
                    <option v-for="city in cities" :key="city.value" :value="city.value">
                      {{ city.label }}
                    </option>
                  </select>
                  <Icon name="uil:angle-down" class="absolute text-brand-dark right-2 w-4 h-4" />
                </div>
              </div>
            </div>
          </LayoutContainAlt>
        </div>
      </template>
    </AppHeader>

    <!-- Main content -->
    <div class="bg-brand-light">
      <LayoutContain>
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
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          <div
                            v-for="item in menuByCategory[type.value]"
                            :key="item._id"
                            class="bg-white shadow-lg menu-card flex flex-col h-full"
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
                                  class="f-text-14-18 tracking-tight font-semibold line-clamp-2 flex-1"
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
      </LayoutContain>
    </div>

    <div class="nutrition-info bg-brand-dark flex items-center justify-center py-12">
      <p class="max-w-6xl text-xs text-white">
        *CONTAINS (OR MAY CONTAIN) RAW OR UNDERCOOKED INGREDIENTS. CONSUMING RAW OR UNDERCOOKED
        MEATS, POULTRY, SEAFOOD, SHELLFISH OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS,
        ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS. BEFORE PLACING YOUR ORDER, PLEASE INFORM
        YOUR SERVER IF A PERSON IN YOUR PARTY HAS A FOOD ALLERGY. 2,000 CALORIES A DAY IS USED FOR
        GENERAL NUTRITION ADVICE, BUT CALORIE NEEDS VARY. ADDITIONAL NUTRITION INFORMATION AVAILABLE
        UPON REQUEST. GLUTEN-SENSITIVE FLATBREAD (add 20 cal) +2
      </p>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Add this to ensure the divider aligns with the container */
.divider {
  position: relative;
  overflow: visible;
}
</style>
