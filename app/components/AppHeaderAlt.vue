<script setup>
import { ref, watch } from 'vue'

const isMenuOpen = ref(false)
const isOrderingDropdownOpen = ref(false)

const navigationLinks = [
  { path: '/menu', label: 'Menu' },
  { path: '/locations', label: 'Locations' },
  { path: '/private-events', label: 'Private Dining' },
  { path: '/events', label: 'Events' },
  { path: '/about', label: 'About' }
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

const isLocationModalOpen = ref(false)
const selectedCity = ref(cities[0])

const selectCity = (city) => {
  selectedCity.value = city
  isLocationModalOpen.value = false
}
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50 flex flex-col">
    <div class="banner md:block hidden relative z-50 bg-dark-400/95 backdrop-blur-sm">
      <LayoutContain>
        <div class="banner-inner flex items-center justify-end px-24-32 py-2.5">
          <Icon name="uil:location" class="text-white w-3.5 h-3.5 mr-0.75 mb-0.85" />
          <p class="text-sm text-white">{{ selectedCity.name }}</p>
          <button
            @click="isLocationModalOpen = true"
            class="text-sm text-brand-accent ml-2 hover:opacity-80 transition-opacity duration-200"
          >
            Change
          </button>
        </div>
      </LayoutContain>
    </div>

    <!-- Location Modal -->
    <Teleport to="body" class="md:block hidden">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isLocationModalOpen"
          class="fixed inset-0 bg-dark-700/50 shadow-md z-50 flex items-center justify-center"
        >
          <div
            class="bg-dark-800 w-full max-w-md mx-4 overflow-hidden transform transition-all"
            @click.stop
          >
            <!-- Modal Header -->
            <div class="px-6 py-4 border-b border-white/10 flex justify-between items-center">
              <h2 class="text-lg font-semibold text-white">Select Location</h2>
              <button
                @click="isLocationModalOpen = false"
                class="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Icon name="uil:times" class="w-5 h-5" />
              </button>
            </div>

            <!-- Modal Content -->
            <div class="p-6">
              <div class="grid gap-3">
                <button
                  v-for="city in cities"
                  :key="city.name"
                  @click="selectCity(city)"
                  class="flex items-center justify-between p-4 text-white transition-colors duration-200 group hover:bg-dark-700"
                  :class="{ 'bg-dark-700': selectedCity.name === city.name }"
                >
                  <span>{{ city.name }}</span>
                  <span
                    class="w-2 h-2 bg-red-600 opacity-0 rounded-full group-hover:opacity-100 transition-opacity duration-200"
                    :class="{ 'opacity-100': selectedCity.name === city.name }"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Location Dropdown -->
    <div
      class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full right-0 w-48 bg-dark-800 z-50 transition-all duration-200 mt-1"
    >
      <button
        v-for="city in cities"
        :key="city.name"
        @click="selectCity(city)"
        class="block w-full px-4 py-2 text-left text-white hover:bg-dark-700 transition-colors duration-200 relative group/item"
        :class="{ 'bg-dark-700': selectedCity.name === city.name }"
      >
        <span class="relative inline-flex items-center">
          {{ city.name }}
          <span
            class="ml-2 w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
          ></span>
        </span>
      </button>
    </div>
    <!-- Remove the extra closing div tag that was here -->
    <header class="w-full bg-gradient-to-b from-black/50 to-transparent">
      <LayoutContain>
        <nav class="mx-auto py-2 h-20 flex items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="relative z-52 w-[400px]">
            <img
              src="/logo-transparent.png"
              alt="Kitchen + Cocktails"
              class="md:h-14 h-13 w-auto"
            />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex flex-1 items-center justify-center">
            <div class="absolute left-1/2 -translate-x-1/2 flex items-center space-x-8">
              <NuxtLink
                v-for="link in navigationLinks"
                :key="link.path"
                :to="link.path"
                class="text-white font-medium"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="hidden lg:flex items-center space-x-4 w-[400px] justify-end">
            <div class="relative group">
              <button
                id="ordering-button"
                class="bg-primary/10 text-white px-4 py-2 rounded-full hover:bg-primary/20 transition-colors duration-200 flex items-start"
              >
                Order Online
                <Icon
                  name="uil:angle-down"
                  class="ml-1.2 w-5 h-5 transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <!-- Dropdown Menu -->
              <div
                id="ordering-dropdown"
                class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 w-48 z-50 duration-200"
              >
                <a
                  v-for="city in cities"
                  :key="city.name"
                  :href="city.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block px-4 py-1 color-white hover:text-brand-accent transition-colors duration-200 relative group/item"
                >
                  <span class="relative inline-flex items-center">
                    {{ city.name }}
                  </span>
                </a>
              </div>
            </div>

            <NuxtLink
              to="/reservations"
              class="bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white px-6 py-2"
            >
              Reserve a table
            </NuxtLink>

            <!-- Hidden Shopping Cart Icon -->
            <button
              class="bg-primary/10 text-white p-2 rounded-full hover:bg-primary/20 transition-colors duration-200"
            >
              <Icon name="uil:shopping-cart" class="w-6 h-6" />
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="lg:hidden flex ml-auto z-60 p-2"
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
            class="lg:hidden fixed inset-0 bg-brand-dark/96 backdrop-blur-md z-40 transition-opacity duration-300"
            :class="{ 'opacity-100': isMenuOpen, 'opacity-0 pointer-events-none': !isMenuOpen }"
          >
            <div
              class="container mx-auto px-6 md:pt-40 pt-30 flex flex-col items-start space-y-2.5"
            >
              <NuxtLink
                v-for="link in navigationLinks"
                :key="link.path"
                :to="link.path"
                class="text-xl text-white hover:text-primary transition-colors duration-200"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </NuxtLink>

              <!-- Social Icons -->
              <div class="fixed bottom-8 left-0 w-full flex flex-col">
                <div class="flex flex-col space-y-3 w-full px-6 mb-8">
                  <NuxtLink
                    to="/reservations"
                    class="bg-primary/10 px-8 py-3 mt-4 bg-white text-black transition-colors duration-200 text-md text-center"
                    @click="isMenuOpen = false"
                  >
                    Order Online
                  </NuxtLink>
                  <NuxtLink
                    to="/reservations"
                    class="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors duration-200 text-md text-center"
                    @click="isMenuOpen = false"
                  >
                    Reservations
                  </NuxtLink>
                </div>
                <div class="w-full flex px-6 justify-center space-x-4 mb-3">
                  <a
                    v-for="link in socialLinks"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white transition-colors duration-200"
                    :aria-label="link.label"
                  >
                    <Icon :name="link.icon" class="w-5 h-5" />
                  </a>
                </div>
                <div class="flex items-center justify-center w-full px-6">
                  <p class="text-sm text-white tracking-[2.5px]">
                    ATL <span class="text-brand-accent">|</span> CHI
                    <span class="text-brand-accent">|</span> CLT
                    <span class="text-brand-accent">|</span> DAL
                    <span class="text-brand-accent">|</span> D.C.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </LayoutContain>
    </header>
  </div>
</template>
