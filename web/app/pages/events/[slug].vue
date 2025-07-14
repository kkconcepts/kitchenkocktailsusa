<script setup>
import { transition } from '~/utils/transition'

definePageMeta({
  pageTransition: transition
})

const route = useRoute()
const { slug } = route.params

const { getEventBySlug } = useEvents()
const { data: event } = await getEventBySlug(slug)
</script>

<template>
  <div class="page-event-detail bg-light-400">
    <AppHeader>
      <template #menu-categories>
        <div class="w-full shadow-sm backdrop-blur-md">
          <div class="container mx-auto">
            <div class="h-16 flex items-center justify-start space-x-2 text-gray-700">
              <NuxtLink to="/events" class="hover:text-primary transition-colors duration-200">
                Back to Events
              </NuxtLink>
              <span class="text-gray-400">&gt;</span>
              <span class="text-red-600">{{ event.title }}</span>
            </div>
          </div>
        </div>
      </template>
    </AppHeader>

    <section class="min-h-100vh max-w-6xl m-auto f-py-160-180">
      <LayoutContain>
        <div class="flex flex-col f-gap-32-48">
          <!-- Event Header -->
          <div class="flex flex-col items-center text-center mb-12">
            <h1 class="text-4xl font-bold mb-8">{{ event.title }}</h1>
            <p class="text-xl text-gray-600 mb-4">{{ formattedDate }}</p>
            <div class="flex gap-2">
              <span
                v-for="location in event.locations"
                :key="location"
                class="px-3 py-1 border border-brand-accent border-1.5 text-brand-accent rounded-full lowercase text-sm"
              >
                {{ formatCityName(location) }}
              </span>
            </div>
          </div>

          <!-- Event Image -->
          <div class="relative aspect-[16/9] overflow-hidden mb-12">
            <NuxtImg :src="event.imageUrl" :alt="event.title" class="w-full h-full object-cover" />
          </div>

          <!-- Event Description -->
          <div class="prose max-w-none mb-12">
            <PortableText :value="event.description" />
          </div>

          <!-- Special Offers -->
          <div v-if="event.specials && event.specials.length > 0" class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Special Offers</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="special in event.specials"
                :key="special.title"
                class="bg-gray-50 p-6 rounded-lg"
              >
                <h3 class="text-xl font-semibold mb-2">{{ special.title }}</h3>
                <p class="text-gray-600 mb-2">{{ special.description }}</p>
                <p v-if="special.price" class="text-brand-accent font-semibold">
                  {{ special.price }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutContain>
    </section>
  </div>
</template>
