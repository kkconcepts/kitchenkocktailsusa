<script setup>
import { ref, computed, onMounted } from 'vue'
import { locations } from '~/utils/locations'

const searchQuery = ref('')

const filteredLocations = computed(() => {
  if (!searchQuery.value) return locations
  const query = searchQuery.value.toLowerCase()
  return locations.filter(
    (location) =>
      location.city.toLowerCase().includes(query) || location.address.toLowerCase().includes(query)
  )
})

// Use a ref instead of computed for slidesPerView to avoid hydration mismatch
const slidesPerView = ref(3) // Default for both SSR and client
const currentSlide = ref(0)

// Update slidesPerView after mount to ensure client-side only
onMounted(() => {
  // Now it's safe to check window width
  if (window.innerWidth < 768)
    slidesPerView.value = 1 // Mobile
  else if (window.innerWidth < 1024)
    slidesPerView.value = 2 // Tablet
  else slidesPerView.value = 3 // Desktop

  // Add resize listener if needed
  window.addEventListener('resize', updateSlidesPerView)
})

const updateSlidesPerView = () => {
  if (window.innerWidth < 768)
    slidesPerView.value = 1 // Mobile
  else if (window.innerWidth < 1024)
    slidesPerView.value = 2 // Tablet
  else slidesPerView.value = 3 // Desktop
}

const totalSlides = computed(() => Math.ceil(locations.length / slidesPerView.value))

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const visibleLocations = computed(() => {
  const start = currentSlide.value * slidesPerView.value
  return filteredLocations.value.slice(start, start + slidesPerView.value)
})
</script>

<template>
  <div class="text-white">
    <LayoutContain class="f-pt-32-48 mx-auto max-w-90rem f-py-64-96">
      <div class="w-full">
        <div class="flex flex-col w-full stagger-container mb-12">
          <div class="flex justify-between items-end w-full">
            <div class="flex flex-col justify-start items-start">
              <p
                class="f-text-11-12 mb-12 text-start tracking-0.75 font-semibold uppercase text-brand-accent"
              >
                Find Your City
              </p>
              <h1
                class="f-text-24-40 leading-9 tracking-0.25 font-gt-ultra font-medium text-start uppercase mb-2"
              >
                Plan Your Next Visit
              </h1>
            </div>
            <div class="flex gap-4">
              <div class="btn-contain relative group">
                <button
                  @click="prevSlide"
                  :disabled="currentSlide === 0"
                  class="f-text-11-12 uppercase px-4 py-2 leading-tight font-semibold tracking-wider transition-colors duration-300"
                  :class="{
                    'text-white': currentSlide > 0,
                    'text-neutral-200 opacity-50 cursor-not-allowed': currentSlide === 0
                  }"
                >
                  <span class="inline-block relative">
                    Prev
                    <span
                      v-if="currentSlide > 0"
                      class="absolute left-0 bottom-[-4px] h-[1.5px] w-0 bg-brand-accent transition-all duration-300 group-hover:w-full"
                    />
                  </span>
                </button>
              </div>
              <div class="btn-contain relative group">
                <button
                  @click="nextSlide"
                  :disabled="currentSlide === totalSlides - 1"
                  class="f-text-11-12 py-2 font-semibold uppercase leading-tight tracking-wider transition-colors duration-300"
                  :class="{
                    'text-white ': currentSlide < totalSlides - 1,
                    'text-neutral-200 opacity-50': currentSlide === totalSlides - 1
                  }"
                >
                  <span class="inline-block relative">
                    Next
                    <span
                      v-if="currentSlide < totalSlides - 1"
                      class="absolute left-0 bottom-[-4px] h-[1.5px] w-0 bg-brand-accent transition-all duration-300 group-hover:w-full"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="divider bg-black/10 h-0.25 mb-6 hidden"></div>
      </div>
      <div class="relative min-h-15rem">
        <Transition name="fade" mode="out-in">
          <div
            :key="currentSlide"
            class="grid justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden transition-opacity duration-400"
          >
            <div
              v-for="location in visibleLocations"
              :key="location.city"
              class="border-l border-l-2 border-brand-accent f-pl-24-32 shadow-sm backdrop-blur-10 overflow-hidden transition-all duration-300"
            >
              <div class="f-pt-24-32">
                <h3 class="f-text-17-18 font-semibold leading-tight tracking-tight mb-1">
                  {{ location.city }}
                </h3>
                <p class="f-text-13-15 text-neutral-500 mb-5.5">{{ location.address }}</p>
                <div class="flex space-between space-x-4 w-full">
                  <div class="space-y-2 f-text-13-15 mb-4">
                    <p><span class="font-semibold mr-0.5">Phone:</span> {{ location.phone }}</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <NuxtLink
                      :to="location.facebookUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Kitchen + Kocktails on Facebook"
                    >
                      <Icon
                        name="uil:facebook-f"
                        class="w-5 h-5 p-2 hover:opacity-60 transition-opacity duration-300 ease-in-out"
                      />
                    </NuxtLink>
                    <NuxtLink
                      :to="location.instagramUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Kitchen + Kocktails on Facebook"
                    >
                      <Icon
                        name="uil:instagram"
                        class="w-5 h-5 p-2 hover:opacity-60 transition-opacity duration-300 ease-in-out"
                      />
                    </NuxtLink>
                  </div>
                </div>
                <div class="flex flex-row w-full gap-2">
                  <NuxtLink
                    :href="location.reservationUrl"
                    target="_blank"
                    class="f-text-12-13 font-semibold text-center uppercase w-full rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                  >
                    Reserve a table
                  </NuxtLink>
                  <NuxtLink
                    :href="location.orderUrl"
                    target="_blank"
                    class="f-text-12-13 font-semibold inline-block text-center uppercase w-full rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                  >
                    Order Online
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </LayoutContain>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
  position: absolute;
  width: 100%;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(0.5px);
}
</style>
