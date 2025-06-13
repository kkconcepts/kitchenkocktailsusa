<script setup>
import { ogImage } from '~/constants'

const title = ref('Events & Promotions')
const pageDescription = ref(
  'See how Kitchen + Kocktails by Kevin Kelley collects, uses & safeguards your personal data. Transparent, secure, and customer‑focused.'
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

// Query to fetch all upcoming events
const { data: events } = (await useSanityQuery(
  `*[_type == "event" && dateTime(date) >= dateTime(now())] | order(date asc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    "imageUrl": mainImage.asset->url,
    description,
    date,
    locations,
    menus[] {
      title,
      type
    }
  }`
)) || { data: [] }

// Format date helper function
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div :class="pageClass">
    <section class="min-h-100vh bg-light-400 m-auto f-py-160-180">
      <LayoutContain>
        <div class="flex flex-col max-w-3xl m-auto">
          <h1 class="text-4xl text-center font-bold mb-10 uppercase">{{ title }}</h1>
          <p class="text-lg text-center">
            Great food, great vibes, and great company are just around the corner. Discover our
            growing family of restaurants and join us for a dining experience you won’t forget.
          </p>
        </div>
        <!-- Events Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div
            v-for="event in events"
            :key="event._id"
            class="relative aspect-[6/8] group overflow-hidden border-brand-accent border-4"
          >
            <NuxtLink :to="`/events/${event.slug}`" class="block h-full">
              <NuxtImg
                :src="event.imageUrl"
                :alt="event.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div class="absolute bottom-0 left-0 w-full py-2 px-8 text-white">
                  <h2 class="text-xl font-bold mb-0.5">{{ event.title }}</h2>
                  <h3 class="text-md mb-4">{{ formatDate(event.date) }}</h3>
                  <div class="flex flex-wrap gap-4">
                    <NuxtLink
                      v-for="menu in event.menus"
                      :key="menu.type"
                      :to="`/events/${event.slug}?menu=${menu.type}`"
                      class="inline-flex items-center gap-2 text-white hover:text-brand-accent transition-colors duration-200"
                    >
                      {{ menu.title }}
                      <Icon
                        name="uil:arrow-right"
                        class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>

<style scoped></style>
