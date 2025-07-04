<script setup>
import { ref, computed } from 'vue'

const isSearchExpanded = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)
const categoryContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

// Add the cities data
const cities = [
  { label: 'Atlanta', value: 'atlanta' },
  { label: 'Charlotte', value: 'charlotte' },
  { label: 'Chicago', value: 'chicago' },
  { label: 'Dallas', value: 'dallas' },
  { label: 'Washington, D.C.', value: 'washington-dc' }
]

// Add the product types data
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

// Add state for selected values
const selectedCity = ref(cities[0].value)
const activeSection = ref('appetizers')

const toggleSearch = () => {
  isSearchExpanded.value = !isSearchExpanded.value
  if (isSearchExpanded.value) {
    nextTick(() => {
      searchInputRef.value?.focus()
    })
  }
}

const scrollContainer = (direction) => {
  if (!categoryContainer.value) return
  const container = categoryContainer.value
  const scrollAmount = container.clientWidth * 0.8
  container.scrollBy({
    left: direction === 'right' ? scrollAmount : -scrollAmount,
    behavior: 'smooth'
  })
}

const checkScroll = () => {
  if (!categoryContainer.value) return
  const container = categoryContainer.value
  canScrollLeft.value = container.scrollLeft > 0
  canScrollRight.value = container.scrollLeft < container.scrollWidth - container.clientWidth
}

// Add scroll to section function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  activeSection.value = sectionId
}

onMounted(() => {
  checkScroll()
  window.addEventListener('resize', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScroll)
})

// Emit events for parent component
const emit = defineEmits(['update:selectedCity', 'update:searchQuery'])

// Watch for changes and emit events
watch(selectedCity, (newValue) => {
  emit('update:selectedCity', newValue)
})

watch(searchQuery, (newValue) => {
  emit('update:searchQuery', newValue)
})
</script>

<template>
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

        <!-- Category links -->
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
            <Icon name="uil:location-point" class="absolute left-2 text-brand-accent w-4 h-4" />
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

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
