<script setup>
import { ref, computed } from 'vue'
import { ogImage } from '~/constants'
import { locations } from '~/utils/locations'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useFirstScreenAnimation } from '~/composables/useFirstScreenAnimation'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

const title = ref('Locations')
const pageDescription =
  'Explore our diverse locations and book a table for a memorable dining experience.'

useScrollContentAnimation()
useParallaxEffects()

onMounted(async () => {
  await useFirstScreenAnimation('.page-content') // or whatever wraps your content
})

// Set up page metadata
useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})

const searchQuery = ref('')

const filteredLocations = computed(() => {
  if (!searchQuery.value) return locations
  const query = searchQuery.value.toLowerCase()
  return locations.filter(
    (location) =>
      location.city.toLowerCase().includes(query) || location.address.toLowerCase().includes(query)
  )
})
</script>

<template>
  <div class="bg-black">
    <section class="locations">
      <LayoutContain class="f-py-160-180">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-group">
          <div
            v-for="location in filteredLocations"
            :key="location.city"
            class="bg-dark-800 rounded-1 shadow-sm backdrop-blur-10 overflow-hidden"
          >
            <div class="relative h-48">
              <NuxtImg
                :src="location.imageUrl"
                :alt="location.city"
                class="w-full h-full object-cover"
                quality="80"
                format="webp"
              />
            </div>
            <div class="p-6">
              <h3 class="f-text-17-20 font-semibold leading-tight tracking-tight mb-2">
                {{ location.city }}
              </h3>
              <p class="f-text-14-16 text-neutral-500 mb-6">{{ location.address }}</p>
              <div class="flex space-between space-x-4 w-full">
                <div class="space-y-2 f-text-15-16 mb-4">
                  <p><span class="">Phone:</span> {{ location.phone }}</p>
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
              <div class="space-y-2 f-text-15-16 mb-6">
                <div>
                  <p class="font-semibold mb-1">Hours:</p>
                  <p>Mon-Thu: {{ location.hours.mondayToThursday }}</p>
                  <p>Fri: {{ location.hours.friday }}</p>
                  <p>Sat: {{ location.hours.saturday }}</p>
                  <p>Sun: {{ location.hours.sunday }}</p>
                </div>
              </div>
              <div class="flex space-x-3 mb-3">
                <NuxtLink
                  :href="location.reservationUrl"
                  target="_blank"
                  class="inline-block w-full text-center font-semibold f-text-11-12 leading-tight uppercase rounded-0.5 tracking-wider f-py-10-12 f-px-24-32 bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-375 hover:transition-ease-in-out"
                >
                  Reserve a table
                </NuxtLink>
                <NuxtLink
                  :href="location.orderUrl"
                  target="_blank"
                  class="inline-block w-full text-center font-semibold f-text-11-12 leading-tight uppercase rounded-0.5 tracking-wider f-py-10-12 f-px-24-32 bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-375 hover:transition-ease-in-out"
                >
                  Order Online
                </NuxtLink>
              </div>
              <NuxtLink
                :href="location.giftCardUrl"
                target="_blank"
                class="inline-block cursor-pointer w-full text-center font-semibold f-text-11-12 leading-tight uppercase rounded-0.5 tracking-wider f-py-10-12 f-px-24-32 bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-375 hover:transition-ease-in-out"
              >
                Purchase a gift card
              </NuxtLink>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
    <section>
      <SectionsLocationsAlt />
    </section>
  </div>
</template>

<style scoped></style>
