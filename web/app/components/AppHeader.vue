<script setup>
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const isOrderingDropdownOpen = ref(false)

const navigationLinks = [
  { path: '/menu', label: 'Our Menu' },
  { path: '/locations', label: 'Locations' },
  { path: '/about', label: 'About' },
  { path: '/private-events', label: 'Private Events' },
  { path: '/reservations', label: 'Reservations' }
]

const cities = [
  {
    name: 'Atlanta',
    url: 'https://order.toasttab.com/online/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030'
  },
  {
    name: 'Chicago',
    url: 'https://order.toasttab.com/online/kitchen-kocktails-chicago-444-north-wabash-avenue'
  },
  {
    name: 'Charlotte',
    url: 'https://order.toasttab.com/online/kitchen-kocktails-charlotte-210-e-trade-street-a104b'
  },
  {
    name: 'Dallas',
    url: 'https://order.toasttab.com/online/kitchen-kocktails-dallas-1933-elm-street'
  },
  {
    name: 'Washington D.C.',
    url: 'https://order.toasttab.com/online/kitchen-kocktails-dc-300-i-street-nw'
  }
]

const socialLinks = [
  { icon: 'uil:instagram', url: 'https://instagram.com/kitchenkocktails', label: 'Instagram' },
  { icon: 'uil:facebook-f', url: 'https://facebook.com/kitchenkocktails', label: 'Facebook' },
  { icon: 'uil:twitter', url: 'https://twitter.com/kitchenkocktails', label: 'Twitter' }
]

// Close mobile menu when route changes
watch(
  () => useRoute().fullPath,
  () => {
    isMenuOpen.value = false
    isOrderingDropdownOpen.value = false
  }
)

// Close dropdown when clicking outside
const closeDropdown = (event) => {
  const dropdown = document.getElementById('ordering-dropdown')
  const button = document.getElementById('ordering-button')
  if (!dropdown?.contains(event.target) && !button?.contains(event.target)) {
    isOrderingDropdownOpen.value = false
  }
}

// Remove click event listener since we're using hover
onMounted(() => {
  document.removeEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})

// Add a computed property to check if we're on the menu page
// Add this computed property
const route = useRoute()
const isHomePage = computed(() => route.path === '/')

// Add a ref for the header
// Remove these lines since we won't need them anymore
// const headerRef = ref(null)
// const isHeaderDark = ref(false)
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-dark text-white bg-brand-body shadow-sm'
    ]"
  >
    <LayoutContainAlt>
      <nav class="mx-auto py-2 h-20 flex items-center mr-auto">
        <!-- Logo -->
        <NuxtLink to="/" class="relative z-52 w-[350px]">
          <img
            src="/logo-transparent.png"
            alt="Kitchen + Cocktails"
            class="h-12 w-auto transition-opacity duration-300"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex flex-1 items-center justify-center">
          <div class="absolute left-1/2 -translate-x-1/2 flex items-center space-x-8">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              class="transition-colors text-md duration-200 font-semibold hover:text-primary"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="lg:flex items-center space-x-1 w-[350px] justify-end">
          <div class="relative group hidden">
            <!-- Location -->

            <!-- Dropdown Menu -->
            <div
              id="ordering-dropdown"
              class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-2 w-48 bg-white rounded shadow-md z-50 transition-all duration-200"
            >
              <a
                v-for="city in cities"
                :key="city.name"
                :href="city.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
              >
                {{ city.name }}
              </a>
            </div>
          </div>

          <NuxtLink
            to="/reservations"
            class="border-3 hidden text-brand-light px-5.5 py-2 tracking-wide uppercase text-sm font-bold hover:text-brand-light transition-colors duration-200"
          >
            Reserve a table
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden fixed top-6 right-4 z-60 p-2"
          aria-label="Toggle menu"
        >
          <div class="w-6 h-4 flex flex-col justify-between">
            <span
              class="w-full h-0.5 bg-white transition-all duration-200 origin-center"
              :class="{ 'rotate-45 translate-y-[7px]': isMenuOpen }"
            />
            <span
              class="w-full h-0.5 bg-white transition-opacity duration-200"
              :class="{ 'opacity-0': isMenuOpen }"
            />
            <span
              class="w-full h-0.5 bg-white transition-all duration-200 origin-center"
              :class="{ '-rotate-45 -translate-y-[7px]': isMenuOpen }"
            />
          </div>
        </button>

        <!-- Mobile Menu -->
        <div
          class="lg:hidden fixed inset-0 bg-brand-dark backdrop-blur-md z-40 transition-opacity duration-300"
          :class="{ 'opacity-100': isMenuOpen, 'opacity-0 pointer-events-none': !isMenuOpen }"
        >
          <div class="container mx-auto px-4 pt-32 flex flex-col items-center space-y-6">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              class="text-xl text-white hover:text-primary transition-colors duration-200"
              @click="isMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>

            <!-- Mobile Action Buttons -->
            <div class="flex flex-col space-y-4 w-full max-w-xs mt-4">
              <NuxtLink
                to="/reservations"
                class="bg-brand-accent text-white px-8 py-3 hover:bg-brand-accent/90 transition-colors duration-200 text-xl text-center"
                @click="isMenuOpen = false"
              >
                Reservations
              </NuxtLink>
            </div>

            <!-- Social Icons -->
            <div class="fixed bottom-8 left-0 w-full flex justify-center space-x-6">
              <a
                v-for="link in socialLinks"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-primary transition-colors duration-200"
                :aria-label="link.label"
              >
                <Icon :name="link.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </LayoutContainAlt>

    <!-- Menu Categories Bar (removed v-if condition) -->
    <div class="bg-white">
      <slot name="menu-categories"></slot>
    </div>
  </header>
</template>

<style>
/* Remove the .scrolled class as we're using GSAP for animations */
</style>
