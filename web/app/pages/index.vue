<script setup>
import { ref } from 'vue'
import { ogImage } from '~/constants'
import AnimatedButton from '~/components/base/AnimatedButton.vue'
import { useParallaxEffects } from '~/composables/useParallaxEffects'
import { useFirstScreenAnimation } from '~/composables/useFirstScreenAnimation'
import { useScrollContentAnimation } from '~/composables/useScrollContentAnimation'
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
useParallaxEffects()

onMounted(async () => {
  await useFirstScreenAnimation('.page-content') // or whatever wraps your content
})

const title = ref('Home')
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
  <div class="page-content text-white">
    <section class="section">
      <SectionsHeroPage
        title="Welcome Home"
        :images="['/hero-3.jpg', '/hero-4.jpg', '/hero-5.jpg']"
      />
    </section>
    <section class="">
      <div class="flex flex-col f-pb-160-180">
        <div class="grid grid-cols-2 items-center justify-center">
          <div class="col-span-1 f-py-40-80">
            <div class="flex flex-col justify-start items-center">
              <div class="flex flex-col gap-4 max-w-lg fade-group" data-type="stagger">
                <p
                  class="animate-child f-text-11-12 text-start tracking-0.25 font-semibold uppercase text-brand-accent"
                >
                  DOWN-HOME DISHES, REFINED TASTE
                </p>
                <h2
                  class="animate-child f-text-24-56 leading-[95%] font-gt-ultra text-start uppercase tracking-wide mb-12"
                >
                  Flavor You
                  <br />
                  Can Feel
                </h2>
                <p class="animate-child font-regular max-w-xlpx leading-tight f-text-15-17 mb-4">
                  Soulful and satisfying, our dishes are rooted in tradition but never stuck in the
                  past. From crispy fried catfish to rich, house-made sauces, everything is built on
                  bold flavors and heartfelt preparation. This is comfort food reimagined with pride
                  and purpose.
                </p>
                <div class="flex space-x-4 animate-child">
                  <NuxtLink
                    class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                    aria-label="View our menu button"
                    to="/menu"
                  >
                    View our menu
                  </NuxtLink>
                  <AnimatedButton
                    text="Book a reservation"
                    aria-label="Book a reservation button"
                    button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                    to="/reservations"
                  />
                </div>
              </div>
            </div>
          </div>
          <div data-type="image" class="animate-image col-span-1 h-90vh overflow-hidden">
            <NuxtImg
              src="/slider-4.jpg"
              alt="Restaurant interior"
              class="w-full h-full object-cover"
              data-speed="0.95"
            />
          </div>
        </div>
        <section class="locations">
          <SectionsLocations />
        </section>
        <div>
          <div class="grid grid-cols-2 min-h-60vh">
            <div data-type="image" class="col-span-1 overflow-hidden h-full animate-image">
              <NuxtImg
                src="/slider-6.jpg"
                alt="Restaurant interior"
                class="w-full h-full object-cover"
                format="webp"
                data-speed="0.95"
              />
            </div>
            <div class="flex flex-col justify-start items-start gap-12">
              <LayoutContain>
                <div class="flex flex-col gap-4 max-w-lg f-py-48-64 ml-12" data-type="stagger">
                  <p
                    class="animate-child f-text-11-12 text-start tracking-0.25 font-semibold uppercase text-brand-accent"
                  >
                    FRESH FLAVOR, SOUTHERN HEART
                  </p>
                  <h3
                    class="animate-child f-text-24-56 leading-[95%] font-gt-ultra text-start uppercase tracking-wide mb-8"
                  >
                    Fresh
                    <br />
                    Meets Fire
                  </h3>
                  <p class="animate-child font-regular max-w-md leading-tight f-text-15-17 mb-4">
                    Crisp greens, bold seasonings, and Southern-style shrimp come together in
                    perfect balance. We take fresh ingredients and elevate them with unexpected
                    twists, creating dishes that are as satisfying as they are unforgettable. Every
                    forkful is a celebration of character and craft.
                  </p>
                  <div class="flex space-x-4 animate-child">
                    <NuxtLink
                      class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                      aria-label="View our menu button"
                      to="/menu"
                    >
                      View our menu
                    </NuxtLink>
                    <AnimatedButton
                      text="Book a reservation"
                      aria-label="Book a reservation button"
                      button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                      to="/reservations"
                    />
                  </div>
                </div>
              </LayoutContain>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <FeaturesSliderCarousel :slides="imageSlides" :slides-per-view="2.5" height="400px" />
    </section>
    <section class="cta-section">
      <div class="w-full">
        <div class="w-full grid grid-cols-8 mx-auto f-gap-24-32 min-h-100vh">
          <div class="md:col-span-4 flex flex-col w-full f-py-160-180">
            <LayoutContain>
              <BaseContentWithDivider
                category="EXPANDING ACROSS THE NATION"
                title="Sweet Comfort, Bold Flavor"
                description="Our desserts are more than just the final course — they’re the grand finale.
                    Each treat is crafted by hand with rich, indulgent ingredients and layered with
                    flavor that leaves a lasting impression. From warm bites to cool finishes, it’s
                    the kind of Southern sweetness that keeps you coming back."
                class="h-full"
              >
                <template #title />
                <template #buttons>
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
                </template>
              </BaseContentWithDivider>
            </LayoutContain>
            <div class="h-40vh hidden">
              <div
                class="flex flex-row max-w-90rem gap-4 f-gap-24-32 justify-start items-start h-full w-full"
              >
                <div class="divider ml-24 h-full w-2.5px bg-brand-accent" />
                <div class="flex flex-col fade-group" data-type="stagger">
                  <p
                    class="animate-child f-text-11-12 text-start mb-4 tracking-0.25 font-semibold uppercase text-brand-accent"
                  >
                    SWEET SOUTHERN INDULGENCE
                  </p>
                  <h3
                    class="animate-child text-5xl font-gt-ultra text-start uppercase tracking-wide mb-12"
                  >
                    Sweet Comfort,
                    <br />
                    Bold Flavor
                  </h3>
                  <p class="animate-child font-regular max-w-xl leading-tight f-text-15-17 mb-8">
                    Our desserts are more than just the final course — they’re the grand finale.
                    Each treat is crafted by hand with rich, indulgent ingredients and layered with
                    flavor that leaves a lasting impression. From warm bites to cool finishes, it’s
                    the kind of Southern sweetness that keeps you coming back.
                  </p>
                  <div class="animate-child flex flex-row gap-4">
                    <NuxtLink
                      class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                      aria-label="View our menu button"
                      to="/menu"
                    >
                      View our menu
                    </NuxtLink>
                    <AnimatedButton
                      text="Book a reservation"
                      aria-label="Book a reservation button"
                      button-class="border-1 border-brand-accent bg-transparent hover:ease-in-out text-brand-accent"
                      to="/reservations"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-4 h-full w-full">
            <div data-type="image" class="w-full h-full overflow-hidden animate-image">
              <NuxtImg
                src="/slider-10.jpg"
                alt="Restaurant interior"
                class="w-full h-full object-cover"
                format="webp"
                data-speed="0.95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionsCateringCTA />
    <section>
      <SectionsLocationsAlt />
    </section>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
}
.stagger-container > * {
  opacity: 0;
}

.locations {
  position: relative;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.hover-zoom {
  cursor: pointer;
}

.hover-zoom__image {
  transform-origin: center;
  will-change: transform;
  opacity: 0.8;
}

.location-card {
  opacity: 0;
  transition: transform 0.3s ease;
}

.location-card:hover {
  transform: translateY(-4px);
}
</style>
