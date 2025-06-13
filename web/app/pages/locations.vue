<script setup>
import { ref } from 'vue'

const title = 'Locations'
const pageClass = 'page-locations'

// Static location data
const locations = [
  {
    city: 'Chicago',
    address: '444 N Wabash Ave, Chicago, IL 60618',
    phone: '312-847-5543',
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-1.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-chicago'
  },
  {
    city: 'Dallas',
    address: '1933 Elm Street, Dallas, TX 75201',
    phone: '469-917-9036',
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-2.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-dallas'
  },
  {
    city: 'Atlanta',
    address: '30 Ivan Allen Jr Blvd, Atlanta, GA 30308',
    phone: '404-596-8714',
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-3.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-atlanta-dunwoody'
  },
  {
    city: 'Charlotte',
    address: '225 E 6th St, Charlotte, NC 28202',
    phone: '980-209-0099',
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-4',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-charlotte'
  },
  {
    city: 'Washington, D.C.',
    address: '1300 I St NW, Washington, DC 20005',
    phone: '202-289-4300',
    hours: {
      mondayToThursday: '5pm - 10pm',
      fridayToSaturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-2.jpg',
    reservationUrl:
      'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-dc-washington'
  }
]

// Default to first location
const selectedLocation = ref(locations[0])

// Function to update selected location
const changeLocation = (location) => {
  selectedLocation.value = location
}
</script>

<template>
  <div :class="pageClass">
    <section class="min-h-100vh bg-light-300 m-auto f-py-160-180">
      <LayoutContain>
        <div class="flex max-w-6xl m-auto flex-col f-gap-32-48">
          <div class="flex flex-col max-w-3xl mx-auto">
            <h1 class="text-4xl text-center font-bold mb-10 uppercase">{{ title }}</h1>
            <p class="text-lg text-center mb-12">
              Great food, great vibes, and great company are just around the corner. Discover our
              growing family of restaurants and join us for a dining experience you won't forget.
            </p>
          </div>

          <!-- Location Content -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-12 shadow-sm border-brand-accent border-4"
          >
            <!-- Left Column: Location Info -->
            <div class="space-y-8">
              <!-- City Selector -->
              <div class="flex items-center gap-2 mb-8">
                <h2 class="text-2xl font-bold">{{ selectedLocation.city }}</h2>
                <button
                  class="text-brand-accent transition-colors duration-200"
                  @click="
                    () => {
                      // Show city selector
                      document
                        .getElementById('city-selector')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                  "
                >
                  change city
                </button>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-2">
                <Icon name="uil:map-marker" class="w-5 h-5 mt-1" />
                <p>{{ selectedLocation.address }}</p>
              </div>

              <!-- Phone -->
              <div class="flex items-center gap-2">
                <Icon name="uil:phone" class="w-5 h-5" />
                <p>{{ selectedLocation.phone }}</p>
              </div>

              <!-- Hours -->
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <Icon name="uil:clock" class="w-5 h-5" />
                  <p class="font-semibold">Hours</p>
                </div>
                <div class="ml-7 space-y-1">
                  <p>Monday - Thursday {{ selectedLocation.hours.mondayToThursday }}</p>
                  <p>Friday - Saturday {{ selectedLocation.hours.fridayToSaturday }}</p>
                  <p>Sunday {{ selectedLocation.hours.sunday }}</p>
                </div>
              </div>

              <!-- Find a Table Button -->
              <NuxtLink
                :href="selectedLocation.reservationUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-8 px-6 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
              >
                Find a Table
              </NuxtLink>
            </div>

            <!-- Right Column: Location Image -->
            <div class="relative h-[400px] overflow-hidden">
              <img
                :src="selectedLocation.imageUrl"
                :alt="`${selectedLocation.city} location`"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
