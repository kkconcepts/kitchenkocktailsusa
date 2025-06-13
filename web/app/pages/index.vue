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

// Add this to fetch featured items
const { data: featuredItems } = await useSanityQuery(groq`
  *[_type == "menuItem" && featured == true] {
    _id,
    name,
    description,
    image,
    slug,
    featuredCategory
  }
`)

// Separate kitchen and kocktail items
const kitchenFeatured = computed(() =>
  featuredItems.value?.filter((item) => item.featuredCategory === 'kitchen')
)

const kocktailsFeatured = computed(() =>
  featuredItems.value?.filter((item) => item.featuredCategory === 'kocktails')
)
</script>

<template>
  <div :class="pageClass">
    <section class="section">
      <SectionsHero />
    </section>
    <LayoutContain>
      <section class="section section-trigger">
        <div
          class="home-container mx-auto max-w-4xl text-center py-24 flex flex-col items-center justify-center"
        >
          <p class="text-sm mb-4 tracking-0.5 font-semibold text-brand-accent">WELCOME HOME</p>
          <h1 class="md:text-4xl text-2xl leading-tight font-black mb-4 tracking-tight">
            Tasty southern cuisine + craft kocktails
          </h1>
          <p class="md:text-lg text-md mb-6 leading-tight font-regular">
            Our Menu is an extensive menu with a focus on classic soul food entrees while providing
            a modern twist on things. Offering brunch on the weekend and featuring over 16 specialty
            cocktails, there is something for everyone at Kitchen + Kocktails by Kevin Kelley.
          </p>
          <NuxtLink
            to="/reservations"
            class="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors duration-200"
          >
            Reserve a table
          </NuxtLink>
        </div>
      </section>
    </LayoutContain>
    <section class="section border-t border-b">
      <LayoutContain>
        <div class="home-menu w-full grid grid-cols-2">
          <div class="food-menu py-32">
            <h2 class="text-3xl font-bold mb-8 text-center">KITCHEN</h2>
            <div class="flex flex-col max-w-sm mx-auto gap-6">
              <NuxtLink
                v-for="item in kitchenFeatured"
                :key="item._id"
                :to="`/menu/${item.slug.current}`"
                class="featured-item"
              >
                <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
              </NuxtLink>
              <NuxtLink
                to="/menu"
                class="text-brand-accent text-center hover:underline transition-colors duration-200"
              >
                View full menu
              </NuxtLink>
            </div>
          </div>

          <div class="food-menu py-32">
            <h2 class="text-3xl font-bold mb-8 text-center">KOCKTAILS</h2>
            <div class="flex flex-col max-w-sm mx-auto gap-6">
              <NuxtLink
                v-for="item in kocktailsFeatured"
                :key="item._id"
                :to="`/menu/${item.slug.current}`"
                class="featured-item"
              >
                <h3 class="text-xl font-semibold mb-2">{{ item.name }}</h3>
                <p class="text-gray-600">{{ item.description }}</p>
              </NuxtLink>
              <NuxtLink
                to="/menu"
                class="text-brand-accent text-center hover:underline transition-colors duration-200"
              >
                View all kocktails
              </NuxtLink>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
    <section class="section cta">
      <div class="min-h-55vh relative bg-brand-dark">
        <NuxtImg src="/hero-1.jpg" class="w-full h-full absolute object-cover" />
      </div>
    </section>
    <section class="section">
      <div
        class="home-container mx-auto max-w-4xl text-center py-24 flex flex-col items-center justify-center"
      >
        <p class="text-sm mb-4 tracking-0.5 font-semibold text-brand-accent">EVENTS + PROMOTIONS</p>
        <h1 class="md:text-4xl text-2xl leading-tight font-black mb-4 tracking-tight">
          Tasty southern cuisine + craft kocktails
        </h1>
        <p class="md:text-lg text-md mb-6 leading-tight font-regular">
          Our Menu is an extensive menu with a focus on classic soul food entrees while providing a
          modern twist on things. Offering brunch on the weekend and featuring over 16 specialty
          cocktails, there is something for everyone at Kitchen + Kocktails by Kevin Kelley.
        </p>
        <NuxtLink
          to="/reservations"
          class="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors duration-200"
        >
          Reserve a table
        </NuxtLink>
      </div>
    </section>
    <FeaturedDishes />
  </div>
</template>

<style scoped>
.section {
  width: 100%;
}
</style>
