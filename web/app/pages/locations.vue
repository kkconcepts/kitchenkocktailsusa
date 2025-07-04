<script setup>
import { ref, computed } from 'vue'
import { ogImage } from '~/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsatl/',
    giftCardUrl:
      'URL_ADDRESS.toasttab.com/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030/giftcards'
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
    instagramUrl: 'https://www.instagram.com/kitchenkocktailschi',
    giftCardUrl:
      'URL_ADDRESS.toasttab.com/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030/giftcards'
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
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsusa/',
    giftCardUrl:
      'URL_ADDRESS.toasttab.com/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030/giftcards'
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
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsclt/',
    giftCardUrl:
      'URL_ADDRESS.toasttab.com/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030/giftcards'
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
    instagramUrl: 'https://www.instagram.com/kitchenkocktailsdc',
    giftCardUrl:
      'URL_ADDRESS.toasttab.com/kitchen-kocktails-atlanta-4400-ashford-dunwoody-rd-suite-3030/giftcards'
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

onMounted(() => {
  if (process.client) {
    gsap.utils.toArray('.stagger-fade-in').forEach((element) => {
      gsap.set(element, { autoAlpha: 0 }) // Set initial state
      gsap.to(element, {
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        y: -5,
        ease: 'cubic.out',
        delay: 1.25
      })
    })

    // Add opacity animation to sections
    gsap.utils.toArray('.scroll-fade').forEach((element) => {
      gsap.set(element, { opacity: 0 }) // Set initial state

      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%', // Starts animation when element is 80% from the top of the viewport
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        animation: gsap.to(element, {
          opacity: 1,
          duration: 0.8,
          ease: 'cubic.out'
        })
      })
    })
  }
})
</script>

<template>
  <div class="">
    <section>
      <SectionsHeroPage title="Locations" image="/hero-2.jpg" />
    </section>
    <section class="locations">
      <LayoutContain class="f-pt-24-32 f-pb-80-120">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-fade">
          <div
            v-for="location in filteredLocations"
            :key="location.city"
            class="bg-white shadow-sm border rounded-1 backdrop-blur-10 overflow-hidden"
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
                  class="inline-block w-full text-center font-semibold f-text-11-12 leading-tight uppercase rounded-0.5 tracking-wider f-py-8-10 f-px-24-32 bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-375 hover:transition-ease-in-out"
                >
                  Reserve a table
                </NuxtLink>
                <NuxtLink
                  :href="location.orderUrl"
                  target="_blank"
                  class="inline-block w-full text-center font-semibold f-text-11-12 leading-tight uppercase rounded-0.5 tracking-wider f-py-8-10 f-px-24-32 bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-375 hover:transition-ease-in-out"
                >
                  Order Online
                </NuxtLink>
              </div>
              <NuxtLink
                :href="location.giftCardUrl"
                target="_blank"
                class="inline-block w-full text-center font-semibold f-text-11-12 leading-tight uppercase rounded-0.5 tracking-wider f-py-8-10 f-px-24-32 bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-375 hover:transition-ease-in-out"
              >
                Purchase a gift card
              </NuxtLink>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>

<style scoped></style>
