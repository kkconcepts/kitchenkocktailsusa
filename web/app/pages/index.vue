<script setup>
import { ogImage } from '~/constants'
import { ref } from 'vue'

const showAlert = ref(true)

const title = ref('Home')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

const pageClass = computed(() => `page page-${title.value.toLowerCase()}`)

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
    <section class="section">
      <SectionsHero />
    </section>
    <!-- Circular Navigation Section -->
    <section class="py-16 bg-brand-light">
      <LayoutContain>
        <div
          class="home-container mx-auto max-w-6xl text-center flex flex-col items-center justify-center"
        >
          <p class="text-sm mb-4 tracking-0.5 font-semibold text-brand-accent">WELCOME HOME</p>
          <h1 class="font-gt-ultra text-5xl uppercase leading-wide mb-12 tracking-tight">
            OUR STORY
          </h1>
          <p class="md:text-lg text-md leading-tight font-regular">
            Created to deliver the best in food, drinks, and vibes to Dallas, Texas, Kitchen +
            Kocktails by Kevin Kelley is here to please. A dynamic comfort food restaurant at its
            core, Kitchen + Kocktails by Kevin Kelley will focus on well plated comfort foods,
            including flavored fried chicken, lobster tail, shrimp and grits, along with creative
            waffles and other southern classics made with a twist. In addition, Kitchen + Kocktails
            by Kevin Kelley will feature oxtails, greens, black eyed peas, and candied yams to go
            with desserts such as peach cobbler and banana pudding.
          </p>
        </div>
        <div
          class="md:grid md:grid-cols-3 grid grid-cols-1 f-gap-16-32 f-py-80-100 max-w-6xl mx-auto text-center"
        >
          <!-- About Us Circle -->
          <div class="flex flex-col items-center space-y-4">
            <div class="w-84 h-100 overflow-hidden mb-4">
              <NuxtImg
                src="/hero-9.jpg"
                alt="Kitchen + Kocktails Interior"
                class="w-full h-full object-cover"
              />
            </div>
            <h2 class="text-3xl font-gt-ultra uppercase">About Us</h2>
            <p class="text-gray-600 max-w-sm mx-auto">
              Experience the warmth and hospitality of our classic dishes.
            </p>
            <NuxtLink
              to="/about"
              class="inline-block text-sm bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
            >
              Learn More
            </NuxtLink>
          </div>

          <!-- Menu Circle -->
          <div class="flex flex-col items-center space-y-4">
            <div class="w-84 h-100 overflow-hidden mb-4">
              <NuxtImg src="/hero-3.jpg" alt="Signature Dish" class="w-full h-full object-cover" />
            </div>
            <h2 class="text-3xl font-gt-ultra uppercase">Our Menu</h2>
            <p class="text-gray-600 max-w-sm mx-auto">
              Discover our selection of southern classics, signature dishes, and handcrafted
              cocktails.
            </p>
            <NuxtLink
              to="/menu"
              class="inline-block text-sm bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
            >
              View Menu
            </NuxtLink>
          </div>

          <!-- Private Events Circle -->
          <div class="flex flex-col items-center space-y-4">
            <div class="w-84 h-100 overflow-hidden mb-4">
              <NuxtImg
                src="/hero-11.jpg"
                alt="Private Event Space"
                class="w-full h-full object-cover"
              />
            </div>
            <h2 class="text-3xl font-gt-ultra uppercase">Private Events</h2>
            <p class="text-gray-600 max-w-sm mx-auto">
              Create memorable experiences with our private dining and event spaces.
            </p>
            <NuxtLink
              to="/private-events"
              class="inline-block text-sm bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
            >
              Plan Event
            </NuxtLink>
          </div>
        </div>
      </LayoutContain>
    </section>
    <div class="grid md:grid-cols-2 grid-cols-1 min-h-65vh">
      <div class="w-full relative h-full">
        <NuxtImg src="/hero-3.jpg" class="w-full h-full object-cover absolute inset-0" />
      </div>
      <div class="w-full flex items-center bg-white justify-center">
        <div
          class="home-container mx-auto max-w-xl text-center flex flex-col items-center justify-center"
        >
          <p class="text-sm mb-4 tracking-0.5 font-semibold text-brand-accent">EXPERIENCE</p>
          <h1 class="md:text-4xl text-2xl leading-tight font-gt-ultra mb-4 tracking-tight">
            AMERICA'S BEST COMFORT FOOD
          </h1>
          <p class="md:text-lg text-md mb-6 leading-tight font-regular">
            Our Menu at Kitchen + Kocktails by Kevin Kelley is an extensive menu with a focus on
            classic soul food entrees while providing a modern twist on things. Offering brunch on
            the weekend and featuring over 16 specialty cocktails, there is something for everyone
            at Kitchen + Kocktails by Kevin Kelley.
          </p>
          <NuxtLink
            to="/menu"
            class="inline-block text-sm bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
          >
            View Locations
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 min-h-65vh">
      <div class="w-full flex items-center justify-center bg-warmGray-100">
        <div
          class="home-container mx-auto max-w-xl text-center flex flex-col items-center justify-center"
        >
          <p class="text-sm mb-4 tracking-0.5 font-semibold text-brand-accent">EXPERIENCE</p>
          <h1 class="md:text-4xl text-2xl leading-tight font-gt-ultra mb-4 tracking-tight">
            AMERICA'S BEST COMFORT FOOD
          </h1>
          <p class="md:text-lg text-md mb-6 leading-tight font-regular">
            Great food, great vibes, and great company are just around the corner. Discover our
            growing family of restaurants and join us for a dining experience you won’t forget.
          </p>
          <NuxtLink
            to="/menu"
            class="inline-block text-sm bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
          >
            View Locations
          </NuxtLink>
        </div>
      </div>
      <div class="w-full relative h-full">
        <NuxtImg src="/hero-6.jpg" class="w-full h-full object-cover absolute inset-0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
}
</style>
