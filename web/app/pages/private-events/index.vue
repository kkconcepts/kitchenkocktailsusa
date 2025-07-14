<script setup>
import { ref } from 'vue'
import { ogImage } from '~/constants'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

useScrollContentAnimation()
useParallaxEffects()

const title = ref('Private Events')
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
  <div class="page-content min-h-screen bg-black text-white">
    <section>
      <LayoutContain>
        <div class="f-py-160-180">
          <div class="grid grid-cols-12 f-gap-32-64 h-75vh">
            <div class="col-span-6 h-full w-full">
              <div data-type="image" class="w-full h-full overflow-hidden animate-image">
                <NuxtImg
                  src="/private-events-1.jpg"
                  alt="Restaurant interior"
                  class="w-full h-full object-cover"
                  format="webp"
                  data-speed="0.95"
                />
              </div>
            </div>
            <div class="col-span-4">
              <BaseContentWithDivider
                category="EXPANDING ACROSS THE NATION"
                title="Elegance meets comfort"
                description="No two events are the same — and that’s exactly how we treat them. Our team works with you to customize everything from the menu to the mood. With stylish interiors, seamless service, and indulgent Southern flavors, every event feels personal and polished. Let us bring your vision to life, the Southern way."
                class="h-full"
              >
                <template #title />
                <template #buttons>
                  <NuxtLink
                    class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                    aria-label="View our menu button"
                    to="/private-events/make-a-request"
                  >
                    Make a request
                  </NuxtLink>

                  <BaseAnimatedButton
                    text="Book a reservation"
                    aria-label="Book a reservation button"
                    button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                  />
                </template>
              </BaseContentWithDivider>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
    <section>
      <LayoutContain>
        <div class="f-py-160-180">
          <div class="grid grid-cols-12 max-w-7xl mx-auto f-gap-32-64 h-75vh">
            <div class="col-span-6">
              <BaseContentWithDivider
                category="INTIMATE GATHERINGS, UNFORGETTABLE MOMENTS"
                title="PRIVATE DINING, SOUTHERN STYLE"
                description="Whether you're celebrating a milestone or hosting a corporate affair, our private events offer more than just a space — they offer an experience. Enjoy hand-crafted dishes, curated cocktails, and warm Southern hospitality in an atmosphere designed to impress. From cozy dinners to grand celebrations, we help turn every moment into a memory."
                class="h-full"
              >
                <template #title />
                <template #buttons>
                  <NuxtLink
                    class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                    aria-label="View our menu button"
                    to="/private-events/make-a-request"
                  >
                    Make a request
                  </NuxtLink>

                  <BaseAnimatedButton
                    text="Book a reservation"
                    aria-label="Book a reservation button"
                    button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                  />
                </template>
              </BaseContentWithDivider>
            </div>
            <div class="col-span-6 h-full w-full">
              <div data-type="image" class="w-full h-full overflow-hidden animate-image">
                <NuxtImg
                  src="/private-events-2.jpg"
                  alt="Restaurant interior"
                  class="w-full h-full object-cover"
                  format="webp"
                  data-speed="0.95"
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
