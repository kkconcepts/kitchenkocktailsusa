<script setup>
import { ref } from 'vue'
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useFirstScreenAnimation } from '~/composables/useFirstScreenAnimation'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

const title = ref('Reservations')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

useFirstScreenAnimation()
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
              <p class="">General Inquiries:</p>
              <NuxtLink
                href="mailto:info@kitchenkocktailsusa.com"
                class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
              >
                info@kitchenkocktailsusa.com
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
