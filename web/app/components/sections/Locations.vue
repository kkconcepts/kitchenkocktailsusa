<script setup>
const searchQuery = ref('')

const filteredLocations = computed(() => {
  if (!searchQuery.value) return locations
  const query = searchQuery.value.toLowerCase()
  return locations.filter(
    (location) =>
      location.city.toLowerCase().includes(query) || location.address.toLowerCase().includes(query)
  )
})

const locations = [
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
    imageUrl: 'atlanta-1.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-atlanta-dunwoody',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61567084003235',
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsatl/'
  },
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
    imageUrl: '/chicago-1.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-chicago',
    orderUrl: 'https://order.toasttab.com/online/kitchen-kocktails-chicago-444-north-wabash-avenue',
    facebookUrl: 'https://www.facebook.com/kitchenkocktailschi',
    instagramUrl: 'https://www.instagram.com/kitchenkocktailschi'
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
    facebookUrl: 'https://www.facebook.com/kitchenkocktailsdallas',
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsusa/'
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
    imageUrl: '/charlotte-1.jpg',
    reservationUrl: 'https://www.opentable.com/r/kitchen-and-kocktails-by-kevin-kelley-charlotte',
    orderUrl:
      'https://order.toasttab.com/online/kitchen-kocktails-charlotte-210-e-trade-street-a104b',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61557320242715',
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsclt/'
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
    facebookUrl: 'https://www.facebook.com/kitchenkocktailsdc',
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsdc'
  }
]

const currentSlide = ref(0)
const slidesPerView = computed(() => {
  // Adjust number of cards based on screen size
  if (process.client) {
    if (window.innerWidth < 768) return 1 // Mobile
    if (window.innerWidth < 1024) return 2 // Tablet
    return 3 // Desktop
  }
  return 3 // Default for SSR
})

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
  <LayoutContain class="f-pt-32-48 f-py-60-100 mx-auto max-w-90rem">
    <div class="w-full">
      <div class="flex flex-col w-full stagger-container mb-6">
        <div class="flex justify-between items-end w-full">
          <div class="flex flex-col justify-start items-start">
            <p
              class="f-text-11-12 mb-12 text-start tracking-0.75 font-semibold uppercase text-brand-accent"
            >
              Discover
            </p>
            <h1
              class="f-text-24-40 leading-9 tracking-0.25 font-gt-ultra font-medium text-start uppercase mb-2"
            >
              Our Locations
            </h1>
          </div>
          <div class="flex gap-4">
            <div class="btn-contain">
              <button
                @click="prevSlide"
                :disabled="currentSlide === 0"
                class="f-text-11-12 uppercase px-4 py-2 leading-tight font-semibold tracking-wider text-neutral-400 transition-colors duration-300 hover:opacity-60"
              >
                Previous
              </button>
            </div>
            <div class="btn-contain relative">
              <button
                @click="nextSlide"
                :disabled="currentSlide === totalSlides - 1"
                class="f-text-11-12 py-2 font-semibold uppercase leading-tight tracking-wider transition-colors duration-300 hover:opacity-60"
              >
                Next
              </button>
              <div class="line absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent" />
            </div>
          </div>
        </div>
      </div>
      <div class="divider bg-black/10 h-0.25 mb-6 hidden"></div>
    </div>
    <div class="relative min-h-[32rem] stagger-container">
      <!-- or use a class that matches your average card height -->
      <Transition name="fade" mode="out-in">
        <div
          :key="currentSlide"
          class="grid justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden transition-opacity duration-400"
        >
          <div
            v-for="location in visibleLocations"
            :key="location.city"
            class="border-l border-l-2 border-brand-accent f-pl-24-32 backdrop-blur-10 overflow-hidden transition-all duration-300"
          >
            <div class="relative h-80 overflow-hidden">
              <NuxtImg
                :src="location.imageUrl"
                :alt="location.city"
                class="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer transition-opacity hover:transition-ease duration-500"
                quality="80"
                format="webp"
              />
            </div>
            <div class="f-pt-24-32">
              <h3 class="f-text-17-20 font-semibold leading-tight tracking-tight mb-2">
                {{ location.city }}
              </h3>
              <p class="f-text-14-16 text-neutral-500 mb-5.5">{{ location.address }}</p>
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
