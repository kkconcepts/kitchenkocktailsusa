<script setup>
import { ref, computed } from 'vue'
import { ogImage } from '~/constants'

const title = ref('Locations')
const pageDescription =
  'Explore our diverse locations and book a table for a memorable dining experience.'
const pageClass = computed(() => `page page-${title.value.toLowerCase()}`)

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})

const locations = [
  {
    city: 'Chicago',
    address: '444 N Wabash Ave, Chicago, IL 60618',
    phone: '312-847-5543',
    coordinates: [41.8902, -87.6279], // Chicago coordinates
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-4.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-chicago',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-chicago-444-north-wabash-avenue'
  },
  {
    city: 'Dallas',
    address: '1933 Elm Street, Dallas, TX 75201',
    phone: '469-917-9036',
    coordinates: [32.7831, -96.7954], // Dallas coordinates
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-8.jpeg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-dallas',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-dallas-1933-elm-street'
  },
  {
    city: 'Atlanta',
    address: '30 Ivan Allen Jr Blvd, Atlanta, GA 30308',
    phone: '404-596-8714',
    coordinates: [33.7627, -84.3909], // Atlanta coordinates
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-9.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-atlanta-dunwoody',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030'
  },
  {
    city: 'Charlotte',
    address: '225 E 6th St, Charlotte, NC 28202',
    phone: '980-209-0099',
    coordinates: [35.2271, -80.8431], // Charlotte coordinates
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-6.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-charlotte',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-charlotte-210-e-trade-street-a104b'
  },
  {
    city: 'Washington, D.C.',
    address: '1300 I St NW, Washington, DC 20005',
    phone: '202-289-4300',
    coordinates: [38.9012, -77.03], // DC coordinates
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-7.jpeg',
    reservationUrl:
      'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-dc-washington',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-dc-300-i-street-nw'
  }
]

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
  <div class="bg-brand-light" :class="pageClass">
    <!-- Header Section -->
    <section class="bg-brand-body text-dark">
      <LayoutContain class="f-pt-100-120 f-pb-40-60">
        <div class="flex flex-col max-w-3xl mx-auto text-center mb-6">
          <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
          <p class="text-lg text-gray-400">{{ pageDescription }}</p>
        </div>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto hidden">
          <div
            class="flex items-center bg-white shadow-md backdrop-blur-10 overflow-hidden border-brand-accent border"
          >
            <div class="flex-1 flex items-center">
              <Icon name="uil:location-point" class="text-brand-accent w-5 h-5 ml-4" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Enter city, state or ZIP code"
                class="w-full py-4 px-4 outline-none text-warmgray-700 bg-transparent"
              />
            </div>
            <button
              class="bg-brand-accent text-white px-8 py-4 hover:bg-brand-accent/90 transition-colors"
            >
              GO
            </button>
          </div>
        </div>
      </LayoutContain>
    </section>

    <!-- Map Section -->
    <div class="h-[400px] w-full bg-brand-light hidden">
      <client-only>
        <l-map
          :zoom="6"
          :center="[39.8283, -98.5795]"
          :use-global-leaflet="false"
          class="h-full w-full z-0"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          />
          <l-marker
            v-for="location in locations"
            :key="location.city"
            :lat-lng="location.coordinates"
          >
            <l-popup>
              <div class="text-center">
                <h3 class="font-bold">{{ location.city }}</h3>
                <p class="text-sm">{{ location.address }}</p>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </client-only>
    </div>

    <!-- Location Cards -->
    <LayoutContain class="py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="location in filteredLocations"
          :key="location.city"
          class="bg-white border border-brand-accent shadow-md backdrop-blur-10 overflow-hidden"
        >
          <div class="relative h-48">
            <NuxtImg
              :src="location.imageUrl"
              :alt="location.city"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ location.city }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ location.address }}</p>
            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <p><span class="font-semibold">Phone:</span> {{ location.phone }}</p>
              <div>
                <p class="font-semibold mb-1">Hours:</p>
                <p>Mon-Thu: {{ location.hours.mondayToThursday }}</p>
                <p>Fri-Sat: {{ location.hours.fridayToSaturday }}</p>
                <p>Sun: {{ location.hours.sunday }}</p>
              </div>
            </div>
            <div class="flex space-x-3">
              <NuxtLink
                :href="location.reservationUrl"
                target="_blank"
                class="flex-1 text-center bg-brand-primary text-white py-2 hover:bg-brand-primary/90 transition-colors"
              >
                Reserve
              </NuxtLink>
              <NuxtLink
                :href="location.orderUrl"
                target="_blank"
                class="flex-1 text-center bg-brand-dark text-white py-2 hover:bg-brand-dark/90 transition-colors"
              >
                Order Online
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </LayoutContain>
  </div>
</template>

<style scoped>
.leaflet-container {
  z-index: 0;
}
</style>
