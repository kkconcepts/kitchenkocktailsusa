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
    address: '4400 Ashford Dunwoody Rd NE Suite 3030, Perimeter Mall Dunwoody, GA 30346-1518',
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

// Default to first location
const selectedLocation = ref(locations[0])

// Function to handle location change
const changeLocation = (city) => {
  selectedLocation.value = locations.find((loc) => loc.city === city)
}
</script>

<template>
  <div :class="pageClass">
    <section class="h-100vh">
      <!-- Location Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 bg-brand-light h-full">
        <!-- Left Column: Location Info -->
        <div class="max-w-xl mx-auto w-full px-8 f-py-160-180 space-y-8">
          <!-- Location Selector Dropdown -->
          <h1 class="font-gt-ultra text-4xl uppercase">Locations</h1>
          <p class="font-light">
            Great food, great vibes, and great company are just around the corner. Discover our
            growing family of restaurants and join us for a dining experience you won’t forget.
          </p>
          <div class="mb-8">
            <label
              for="location-select"
              class="block text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2"
              >Select Location</label
            >
            <div class="relative inline-flex items-center">
              <Icon name="uil:location-point" class="absolute left-2 text-brand-accent w-4 h-4" />
              <select
                id="location-select"
                :value="selectedLocation.city"
                @change="changeLocation($event.target.value)"
                class="bg-white pl-8 pr-8 py-2 appearance-none focus:outline-none font-medium border border-stone-200 text-sm"
              >
                <option v-for="location in locations" :key="location.city" :value="location.city">
                  {{ location.city }}
                </option>
              </select>
              <Icon name="uil:angle-down" class="absolute right-2 w-4 h-4" />
            </div>
          </div>

          <!-- Location Details -->
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                Address
              </h3>
              <p class="text-stone-600">{{ selectedLocation.address }}</p>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                Phone
              </h3>
              <p class="text-stone-600">{{ selectedLocation.phone }}</p>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">
                Hours
              </h3>
              <p class="text-stone-600">
                Monday - Thursday: {{ selectedLocation.hours.mondayToThursday }}
              </p>
              <p class="text-stone-600">
                Friday - Saturday: {{ selectedLocation.hours.fridayToSaturday }}
              </p>
              <p class="text-stone-600">Sunday: {{ selectedLocation.hours.sunday }}</p>
            </div>
            <div class="pt-4 flex space-x-4">
              <NuxtLink
                :href="selectedLocation.reservationUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block text-sm bg-brand-dark text-white px-8 py-3 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
              >
                Make a Reservation
              </NuxtLink>
              <NuxtLink
                :href="selectedLocation.orderUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block text-sm bg-brand-accent text-white px-8 py-3 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-accent/90"
              >
                Order Online
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right Column: Location Image -->
        <div class="h-full min-h-[600px]">
          <NuxtImg
            :src="selectedLocation.imageUrl"
            :alt="`${selectedLocation.city} location`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Leaflet Map Section -->
    <section class="w-screen relative z-1 hidden">
      <client-only>
        <div class="h-[480px] w-full">
          <LMap
            style="height: 100%"
            :zoom="5"
            :center="[39.8283, -98.5795]"
            :use-global-leaflet="false"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            />
            <LMarker
              v-for="location in locations"
              :key="location.city"
              :lat-lng="location.coordinates"
            >
            </LMarker>
          </LMap>
        </div>
      </client-only>
    </section>
  </div>
</template>

<style></style>
