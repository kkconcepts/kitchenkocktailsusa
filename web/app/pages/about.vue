<script setup>
import { ref } from 'vue'
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { useScrollGridAnimation } from '~/composables/useScrollGridAnimation'
import FeaturesSliderCarousel from '~/components/features/SliderCarousel.vue'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

const imageSlides = [
  '/hero-7.jpeg',
  '/hero-8.jpeg',
  '/hero-9.jpg',
  '/slider-1.jpg',
  '/slider-2.jpg',
  '/slider-3.jpg'
]

useScrollContentAnimation()
useScrollGridAnimation()
useParallaxEffects()

const title = ref('About')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

// Set up page metadata
useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="page-content">
    <section class="min-h-100vh m-auto f-py-80-120 section-trigger">
      <LayoutContain>
        <div class="flex flex-col lg:space-y-14 space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="flex flex-col gap-8 col-span-2">
              <div
                data-type="image"
                class="animate-image relative h-[400px] overflow-hidden md:h-800px"
              >
                <NuxtImg
                  src="/kitchen-and-kocktails-kevin-kelley.jpeg"
                  alt="Chef preparing food"
                  class="w-full h-full object-cover"
                  quality="80"
                  format="webp"
                  data-speed="0.9"
                />
              </div>
            </div>

            <div class="flex flex-col gap-5" data-type="stagger">
              <div class="flex flex-col">
                <p
                  class="animate-child text-xs mb-4 text-start uppercase tracking-0.5 font-semibold text-brand-accent"
                />
                <h1
                  class="animate-child f-text-24-56 leading-[95%] font-gt-ultra text-start uppercase tracking-wide mb-8"
                >
                  Our Story
                </h1>
              </div>
              <p
                class="animate-child f-text-14-16 font-regular max-w-md tracking-tight leading-snug mb-4"
              >
                Kitchen + Kocktails by Kevin Kelley is revolutionizing the way Americans enjoy
                elevated comfort food. Mr. Kevin Kelley, the owner, is a serial entrepreneur. Mr.
                Kevin Kelley was living abroad in Paris, France after finding success as a
                litigation attorney in Dallas, Texas at the Kelley Law Firm. Upon returning to the
                United States, Mr. Kelley realized how much he missed the food that reminded him of
                home while overseas. Through this experience, he decided on his next endeavor: to
                open a beautifully designed, elevated comfort food dining room. From there, Kevin
                Kelley had a vision. Why don't we have a restaurant in a prime location where we can
                feel good about ourselves, with great cocktails and soul food? Answering this
                question set him on a path to find a location to bring this idea to life.
                Unfortunately, in Dallas, no one with prime locations would lease a building to him
                for imprudent reasons. Kevin's response was to buy the historic East building on Elm
                st. outright. This is how Kitchen + Kocktails by Kevin Kelley came to life in a
                prime location and historic landmark of Dallas, Texas. Kitchen + Kocktails was
                introduced to the Dallas restaurant market in May of 2020, during the pandemic.
              </p>
              <div class="animate-child justify-self-end flex items-center space-x-4">
                <NuxtLink
                  class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                  aria-label="View our menu button"
                  to="/menu"
                >
                  View our menu
                </NuxtLink>
                <BaseAnimatedButton
                  text="Book a reservation"
                  aria-label="Book a reservation button"
                  button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                  to="/reservations"
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>

    <section>
      <FeaturesSliderCarousel :slides="imageSlides" :slides-per-view="2.5" height="400px" />
    </section>

    <section>
      <LayoutContain>
        <div class="grid grid-cols-2 gap-10 justify-start items-center f-py-160-180">
          <div class="spacer" />
          <BaseContentWithDivider height="h-auto">
            <template #default>
              <p class="f-text-11-12 animate-child font-semibold uppercase text-brand-accent mb-4">
                Expanding our dishes to your city
              </p>
              <p class="f-text-14-16 animate-child max-w-xl tracking-tight leading-snug">
                By 2023 we've added two additional locations in Chicago, IL and Washington, D.C. The
                company has its sights on at least five additional locations in 2023, alone. Every
                food item, crafted cocktail and dessert is carefully created, tasted and selected by
                Kevin Kelley himself. This is the time, attention and quality that goes into each of
                our offerings.
              </p>
            </template>
          </BaseContentWithDivider>
        </div>
      </LayoutContain>
    </section>

    <section class="mt-12">
      <LayoutContain>
        <div class="grid grid-cols-1 md:grid-cols-2 items-stretch h-full">
          <BaseContentWithDivider
            category="EXPANDING ACROSS THE NATION"
            title="MAKING OUR WAY TO YOU"
            description="By 2023 we've added two additional locations in Chicago, IL and Washington, D.C. The company has its sights on at least five additional locations in 2023, alone. Every food item, crafted cocktail and dessert is carefully created, tasted and selected by Kevin Kelley himself. This is the time, attention and quality that goes into each of our offerings. The quotes you see are Mr. Kevin Kelley's nod to living your best life. The artwork featured inside each location are hand selected by Mr. Kelley and can be reminiscent of the city's location. Kitchen + Kocktails by Kevin Kelley is more than just a restaurant, it is a home and a way of living your best life. The term at Kitchen + Kocktails by Kevin Kelley continues to scale and venture into new opportunities while happily serving the great cities of Dallas, Chicago and now, Washington, D.C."
            class="h-full"
          >
            <template #title />
            <template #buttons>
              <NuxtLink
                class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                aria-label="View our menu button"
                to="/menu"
                @click.native.prevent="$router.push('/menu')"
              >
                View our menu
              </NuxtLink>
              <BaseAnimatedButton
                text="Book a reservation"
                aria-label="Book a reservation button"
                button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                to="/reservations"
              />
            </template>
          </BaseContentWithDivider>
          <div
            data-type="image"
            class="animate-image relative overflow-hidden h-[600px] md:h-[800px] w-full"
          >
            <NuxtImg
              src="/atlanta-1.jpg"
              alt="Restaurant interior"
              class="w-full h-full object-cover"
              quality="80"
              format="webp"
              data-speed="0.9"
            />
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
