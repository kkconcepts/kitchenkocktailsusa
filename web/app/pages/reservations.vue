<script setup>
import { ref } from 'vue'
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

const title = ref('Reservations')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

useScrollContentAnimation()
useParallaxEffects()

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
  <LayoutSmooth ref="main">
    <section class="min-h-100vh">
      <LayoutContain class="max-w-90rem">
        <div class="grid grid-cols-2 gap-16 f-py-160-180">
          <!-- Left Column: Contact Info -->
          <div class="flex flex-col gap-12">
            <div class="max-w-340px">
              <h1 class="text-4xl font-gt-ultra tracking-wide mb-6 uppercase">{{ title }}</h1>
              <p class="">
                {{ pageDescription }}
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-gt-ultra tracking-wide mb-4 uppercase">Large Parties</h2>
              <p class="mb-4 f-text-13-14 max-w-xs">
                Contact our reservations team to inquire about hosting a private event
              </p>
              <NuxtLink
                class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                aria-label="View our menu button"
                to="/private-events/make-a-request"
              >
                Request a Reservation
              </NuxtLink>
            </div>

            <div>
              <h2 class="text-2xl font-gt-ultra tracking-wide mb-6">FOLLOW US</h2>
              <div class="social-links flex space-x-4 f-text-16-18">
                <NuxtLink
                  to="https://www.facebook.com/share/193vpd2MN7/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kitchen + Kocktails on Facebook"
                  class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
                >
                  <Icon name="uil:facebook-f" />
                </NuxtLink>
                <NuxtLink
                  to="https://www.tiktok.com/@kitchenkocktailsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kitchen + Kocktails on Facebook"
                  class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
                >
                  <Icon name="ic:baseline-tiktok" />
                </NuxtLink>
                <NuxtLink
                  to="https://www.instagram.com/kitchenkocktailsusa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Kitchen + Kocktails on Facebook"
                  class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
                >
                  <Icon name="uil:instagram" />
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Right Column: Reservation Form -->
          <div class=""></div>
        </div>
      </LayoutContain>
    </section>
    <section>
      <SectionsLocationsAlt />
    </section>
  </LayoutSmooth>
</template>
