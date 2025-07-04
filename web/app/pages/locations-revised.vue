<script setup>
import { ref, computed } from 'vue'
import { ogImage } from '~/constants'

const title = ref('Locations')
const pageDescription =
  'Explore our diverse locations and book a table for a memorable dining experience.'

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
    coordinates: [41.8902, -87.6279],
    hours: {
      mondayToThursday: '5pm - 10pm',
      friday: '11am - 12am',
      saturday: '11am - 12am',
      sunday: '11am - 11pm'
    },
    imageUrl: '/hero-4.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-chicago',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-chicago-444-north-wabash-avenue',
    giftCardUrl:
      'https://www.toasttab.com/kitchen-kocktails-chicago-444-north-wabash-avenue/giftcards'
  },
  {
    city: 'Dallas',
    address: '1933 Elm Street, Dallas, TX 75201',
    phone: '469-917-9036',
    coordinates: [32.7831, -96.7954],
    hours: {
      mondayToThursday: '11am - 10pm',
      friday: '11am - 11pm',
      saturday: '10am - 11pm',
      sunday: '10am - 11pm'
    },
    imageUrl: '/hero-8.jpeg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-dallas',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-dallas-1933-elm-street',
    giftCardUrl: 'https://www.toasttab.com/kitchen-kocktails-dallas-1933-elm-street/giftcards'
  },
  {
    city: 'Atlanta',
    address: '30 Ivan Allen Jr Blvd, Atlanta, GA 30308',
    phone: '404-596-8714',
    coordinates: [33.7627, -84.3909],
    hours: {
      mondayToThursday: '11am - 10pm',
      friday: '11am - 11pm',
      saturday: '10am - 11pm',
      sunday: '10am - 11pm'
    },
    imageUrl: '/atlanta-1.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-atlanta-dunwoody',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030',
    giftCardUrl: 'URL_ADDRESS.toasttab.com/gift-cards'
  },
  {
    city: 'Charlotte',
    address: '225 E 6th St, Charlotte, NC 28202',
    phone: '980-209-0099',
    coordinates: [35.2271, -80.8431],
    hours: {
      mondayToThursday: '11am - 10pm',
      friday: '11am - 11pm',
      saturday: '11am - 12am',
      sunday: '11am - 10pm'
    },
    imageUrl: '/hero-6.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-charlotte',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-charlotte-210-e-trade-street-a104b',
    giftCardUrl: 'URL_ADDRESS.toasttab.com/gift-cards'
  },
  {
    city: 'Washington, D.C.',
    address: '1300 I St NW, Washington, DC 20005',
    phone: '202-289-4300',
    coordinates: [38.9012, -77.03],
    hours: {
      mondayToThursday: '11am - 10pm',
      friday: '11am - 11pm',
      saturday: '10am - 11pm',
      sunday: '10am - 10pm'
    },
    imageUrl: '/dc-1.jpg',
    reservationUrl:
      'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-dc-washington',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-dc-300-i-street-nw',
    giftCardUrl: 'https://www.toasttab.com/kitchen-kocktails-dc-300-i-street-nw/giftcards'
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
  <div class="bg-zinc-900/95">
    <SectionsHeroPage />
    <section class="locations">
      <LayoutContain class="f-py-24-32">
        <div class="w-full">
          <div class="flex flex-col w-full">
            <div class="flex flex-col justify-start items-start w-full">
              <p
                class="f-text-11-12 mb-24 text-start tracking-0.75 font-semibold uppercase text-brand-accent"
              >
                KITCHEN + KOCKTAILS
              </p>
              <h1
                class="f-text-28-34 leading-tight text-white tracking-0.25 font-gt-ultra font-medium text-start uppercase mb-6"
              >
                Our Locations
              </h1>
            </div>
          </div>
          <div class="divider bg-white/20 h-0.25 mb-10"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="location in filteredLocations"
            :key="location.city"
            class="bg-white shadow-md backdrop-blur-10 overflow-hidden"
          >
            <div class="relative h-48">
              <NuxtImg
                :src="location.imageUrl"
                :alt="location.city"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="f-text-19-21 font-semibold leading-tight tracking-tight mb-2">
                {{ location.city }}
              </h3>
              <p class="text-sm mb-4">{{ location.address }}</p>
              <div class="space-y-2 f-text-15-16 mb-6">
                <p><span class="font-semibold">Phone:</span> {{ location.phone }}</p>
                <div>
                  <p class="font-semibold mb-1">Hours:</p>
                  <p>Mon-Thu: {{ location.hours.mondayToThursday }}</p>
                  <p>Fri: {{ location.hours.friday }}</p>
                  <p>Sat: {{ location.hours.saturday }}</p>
                  <p>Sun: {{ location.hours.sunday }}</p>
                </div>
              </div>
              <div class="flex space-x-3">
                <NuxtLink
                  :href="location.reservationUrl"
                  target="_blank"
                  class="inline-block w-full text-center f-text-12-13 leading-tight uppercase bg-brand-accent border border-brand-accent text-white hover:text-brand-accent hover:bg-white/0 f-py-8-10 f-px-24-32 tracking-wider transition-colors duration-300"
                >
                  Reserve
                </NuxtLink>
                <NuxtLink
                  :href="location.orderUrl"
                  target="_blank"
                  class="inline-block w-full text-center f-text-12-13 leading-tight uppercase bg-brand-accent border border-brand-accent text-white hover:text-brand-accent hover:bg-white/0 f-py-8-10 f-px-24-32 tracking-wider transition-colors duration-300"
                >
                  Order Online
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>

<style scoped></style>
