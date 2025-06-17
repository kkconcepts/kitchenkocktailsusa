<script setup>
import { ogImage } from '~/constants'

const title = ref('OUR STORY')
const pageDescription = ref(
  'Kitchen + Kocktails by Kevin Kelley is revolutionizing the way Americans enjoy elevated comfort food.'
)

const pageClass = computed(() => `page page-${title.value.toLowerCase().replace(' ', '-')}`)

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
  <div :class="pageClass">
    <section class="min-h-100vh m-auto f-py-160-180">
      <LayoutContain>
        <div class="flex flex-col f-gap-32-48 lg:space-y-14 space-y-4">
          <div class="flex flex-col">
            <p class="text-sm mb-4 text-center tracking-0.5 font-semibold text-brand-accent">
              AMERICA'S BEST COMFORT FOOD
            </p>
            <h1 class="text-5xl font-gt-ultra text-center uppercase tracking-wide">
              {{ title }}
            </h1>
          </div>
          <div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-18">
              <div class="flex flex-col gap-8">
                <p class="tracking-tight">
                  Kitchen + Kocktails by Kevin Kelley is revolutionizing the way Americans enjoy
                  elevated comfort food. Mr. Kevin Kelley, the owner, is a serial entrepreneur. Mr.
                  Kevin Kelley was living abroad in Paris, France after finding success as a
                  litigation attorney in Dallas, Texas at the Kelley Law Firm. Upon returning to the
                  United States, Mr. Kelley realized how much he missed the food that reminded him
                  of home while overseas. Through this experience, he decided on his next endeavor:
                  to open a beautifully designed, elevated comfort food dining room. From there,
                  Kevin Kelley had a vision. Why don't we have a restaurant in a prime location
                  where we can feel good about ourselves, with great cocktails and soul food?
                  Answering this question set him on a path to find a location to bring this idea to
                  life. Unfortunately, in Dallas, no one with prime locations would lease a building
                  to him for imprudent reasons. Kevin's response was to buy the historic East
                  building on Elm st. outright. This is how Kitchen + Kocktails by Kevin Kelley came
                  to life in a prime location and historic landmark of Dallas, Texas. Kitchen +
                  Kocktails was introduced to the Dallas restaurant market in May of 2020, during
                  the pandemic.
                </p>
                <div class="flex justify-center">
                  <button
                    class="bg-accent text-white px-8 py-3 uppercase hover:bg-accent/90 transition-colors"
                  >
                    RESERVATIONS
                  </button>
                </div>
              </div>
              <div class="relative h-[400px] md:h-auto">
                <NuxtImg
                  src="/kitchen-and-kocktails-kevin-kelley.jpeg"
                  alt="Chef preparing food"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-18 mt-12">
            <div class="relative h-[400px] md:h-auto order-2 md:order-1">
              <NuxtImg
                src="/hero-6.jpg"
                alt="Restaurant interior"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex flex-col gap-8 order-1 md:order-2">
              <p class="tracking-tight">
                By 2023 we've added two additional locations in Chicago, IL and Washington, D.C. The
                company has its sights on at least five additional locations in 2023, alone. Every
                food item, crafted cocktail and dessert is carefully created, tasted and selected by
                Kevin Kelley himself. This is the time, attention and quality that goes into each of
                our offerings. The quotes you see are Mr. Kevin Kelley's nod to living your best
                life. The artwork featured inside each location are hand selected by Mr. Kelley and
                can be reminiscent of the city's location. Kitchen + Kocktails by Kevin Kelley is
                more than just a restaurant, it is a home and a way of living your best life. The
                term at Kitchen + Kocktails by Kevin Kelley continues to scale and venture into new
                opportunities while happily serving the great cities of Dallas, Chicago and now,
                Washington, D.C.
              </p>
              <div class="flex justify-center">
                <button
                  class="bg-accent text-white px-8 py-3 uppercase hover:bg-accent/90 transition-colors"
                >
                  RESERVATIONS
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
