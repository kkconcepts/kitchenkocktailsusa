<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { citiesFilter } from '~/utils/citiesFilter'
import { productTypes } from '~/utils/productTypes'

const isSearchExpanded = ref(false)
const searchInputRef = ref(null)
const categoryContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)
const activeSection = ref('appetizers')

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  },
  selectedCity: {
    type: String,
    default: 'atlanta'
  },
  selectedType: {
    type: String,
    default: 'all'
  }
})

const emit = defineEmits(['update:searchQuery', 'update:selectedCity', 'update:selectedType'])

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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  activeSection.value = sectionId
  emit('update:selectedType', sectionId)
}

onMounted(() => {
  checkScroll()
  window.addEventListener('resize', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScroll)
})
</script>

<template>
  <div class="w-full py-4">
    <LayoutContainAlt>
      <div class="grid md:grid-cols-3 gap-4">
        <!-- Search Filter -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="uil:search" class="h-5 w-5 text-stone-400" />
          </div>
          <input
            type="text"
            :value="searchQuery"
            @input="emit('update:searchQuery', $event.target.value)"
            class="block w-full pl-10 pr-3 py-2 border border-stone-200 rounded-md text-sm placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
            placeholder="Search menu items..."
          />
        </div>

        <!-- City Filter -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="uil:location-point" class="h-5 w-5 text-stone-400" />
          </div>
          <select
            :value="selectedCity"
            @change="emit('update:selectedCity', $event.target.value)"
            class="block w-full pl-10 pr-10 py-2 border border-stone-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
          >
            <option v-for="city in citiesFilter" :key="city.value" :value="city.value">
              {{ city.label }}
            </option>
          </select>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon name="uil:angle-down" class="h-5 w-5 text-stone-400" />
          </div>
        </div>

        <!-- Type Filter -->
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="uil:apps" class="h-5 w-5 text-stone-400" />
          </div>
          <select
            :value="selectedType"
            @change="emit('update:selectedType', $event.target.value)"
            class="block w-full pl-10 pr-10 py-2 border border-stone-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
          >
            <option v-for="type in productTypes" :key="type.value" :value="type.value">
              {{ type.label }}
            </option>
          </select>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon name="uil:angle-down" class="h-5 w-5 text-stone-400" />
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
