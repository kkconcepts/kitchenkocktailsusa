<script setup>
import { ref } from 'vue'

const title = 'Locations'
const pageClass = 'page-locations'

// Static location data
// Update the locations array to include ordering URLs
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
    imageUrl: '/hero-4.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-chicago',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-chicago-444-north-wabash-avenue'
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
    imageUrl: '/hero-8.jpeg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-dallas',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-dallas-1933-elm-street'
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
    imageUrl: '/hero-9.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-atlanta-dunwoody',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030'
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
    imageUrl: '/hero-6.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-charlotte',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-charlotte-210-e-trade-street-a104b'
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
    <section class="min-h-100vh mx-auto f-py-160-180">
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
            class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-warmGray-50 p-12 shadow-sm border-brand-accent border-4"
          >
            <!-- Left Column: Location Info -->
            <div class="space-y-8">
              <!-- Location Selector Dropdown -->
              <div class="mb-8">
                <label for="location-select" class="block text-sm font-medium text-gray-700 mb-2"
                  >Select Location</label
                >
                <div class="relative inline-flex items-center">
                  <Icon
                    name="uil:location-point"
                    class="absolute left-2 text-brand-accent w-4 h-4"
                  />
                  <select
                    id="location-select"
                    :value="selectedLocation.city"
                    @change="changeLocation($event.target.value)"
                    class="bg-white pl-8 pr-8 py-1 appearance-none focus:outline-none font-medium border border-cool-gray-300 rounded-md"
                  >
                    <option
                      v-for="location in locations"
                      :key="location.city"
                      :value="location.city"
                    >
                      {{ location.city }}
                    </option>
                  </select>
                  <Icon name="uil:angle-down" class="absolute right-2 text-brand-accent w-4 h-4" />
                </div>
              </div>

              <!-- Location Details -->
              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold mb-2">Address</h3>
                  <p>{{ selectedLocation.address }}</p>
                </div>
                <div>
                  <h3 class="font-semibold mb-2">Phone</h3>
                  <p>{{ selectedLocation.phone }}</p>
                </div>
                <div>
                  <h3 class="font-semibold mb-2">Hours</h3>
                  <p>Monday - Thursday: {{ selectedLocation.hours.mondayToThursday }}</p>
                  <p>Friday - Saturday: {{ selectedLocation.hours.fridayToSaturday }}</p>
                  <p>Sunday: {{ selectedLocation.hours.sunday }}</p>
                </div>
                <div class="pt-4 flex space-x-4">
                  <NuxtLink
                    :href="selectedLocation.reservationUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-brand-accent text-light font-medium px-6 py-3 transition-colors duration-200"
                  >
                    Make a Reservation
                  </NuxtLink>
                  <NuxtLink
                    :href="selectedLocation.orderUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-brand-dark text-white px-6 py-3 font-medium hover:bg-brand-accent transition-colors duration-200"
                  >
                    Order Online
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Right Column: Location Image -->
            <div class="h-full">
              <NuxtImg
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

<style></style>
