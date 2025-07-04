<script setup>
import { ogImage } from '~/constants'
import { ref } from 'vue'
const title = ref('Private Events')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

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
  <div class="min-h-screen">
    <!-- Header Section -->
    <LayoutContain>
      <div class="f-py-160-180">
        <div class="w-full">
          <div class="flex flex-col w-full">
            <div class="flex flex-col justify-start items-start w-full">
              <p
                class="f-text-10-11 mb-12 text-start tracking-0.75 font-semibold uppercase text-brand-accent"
              >
                KITCHEN + KOCKTAILS
              </p>
              <h1
                class="f-text-28-40 leading-tight tracking-0.25 font-gt-ultra font-medium text-start uppercase mb-6"
              >
                Private Events
              </h1>
              <p class="f-text-15-16 leading-tight max-w-5xl mb-12">
                From business dinners to milestone celebrations, private dining at Kitchen +
                Kocktails delivers an unforgettable experience your guests won’t soon forget.
                Whether you’re planning an intimate gathering or a large event with over 100
                attendees, we bring the signature sizzle. Enjoy USDA Prime steaks served sizzling on
                500° plates, handcrafted cocktails, and an award-winning wine list—all backed by the
                exceptional service and hospitality we’ve been known for since 1965. Ready to make
                it a night to remember? Request your private dining reservation today.
              </p>
            </div>
          </div>
          <div class="divider bg-white/20 h-0.25 mb-10"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 text-black f-text-15-16">
          <div class="bg-white shadow-lg menu-card flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9 relative overflow-hidden">
              <NuxtImg src="/hero-4.jpg" alt="Gallery" class="object-cover w-full h-full" />
            </div>
            <div class="p-6">
              <h3 class="tracking-tight f-text-16-19 font-medium mb-2">Gallery</h3>
              <p class="text-neutral-500 leading-tight f-text-13-15 font-light mb-4">
                Explore the ambience our spaces bring to your events.
              </p>
              <NuxtLink
                to="/about"
                class="inline-block w-full text-center f-text-12-13 uppercase bg-brand-accent border border-brand-accent text-white hover:text-brand-accent hover:bg-white/0 f-py-6-8 f-px-24-32 tracking-wider transition-colors duration-300"
              >
                View gallery
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white shadow-lg menu-card flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
              <NuxtImg
                src="/hero-10.jpg"
                alt="Menus"
                class="object-cover w-full h-full"
                quality="80"
                format="webp"
              />
            </div>
            <div class="p-6">
              <h3 class="tracking-tight f-text-16-19 font-medium mb-2">Menus</h3>
              <p class="text-neutral-500 leading-tight f-text-13-15 font-light mb-4">
                Explore a variety of private dining menus.
              </p>
              <NuxtLink
                to="/about"
                class="inline-block w-full text-center f-text-12-13 uppercase bg-brand-accent border border-brand-accent text-white hover:text-brand-accent hover:bg-white/0 f-py-6-8 f-px-24-32 tracking-wider transition-colors duration-300"
              >
                View menu
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white shadow-lg menu-card flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
              <NuxtImg
                src="/hero-7.jpeg"
                alt="Incentive Program"
                class="object-cover w-full h-full"
                quality="80"
                format="webp"
              />
            </div>
            <div class="p-6">
              <h3 class="tracking-tight f-text-16-19 font-medium mb-2">Incentive Program</h3>
              <p class="text-neutral-500 leading-tight f-text-13-15 font-light mb-4">
                Explore our exclusive private dining incentive program.
              </p>
              <NuxtLink
                to="/about"
                class="inline-block w-full text-center f-text-12-13 uppercase bg-brand-accent border border-brand-accent text-white hover:text-brand-accent hover:bg-white/0 f-py-6-8 f-px-24-32 tracking-wider transition-colors duration-300"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>

          <div class="col-span-2 p-4 border border-brand-primary border-2 hidden">
            <div class="text-center bg-brand-primary h-full flex items-center justify-center">
              <NuxtLink
                to="/private-events/make-a-request"
                class="inline-block text-sm bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
              >
                Make a Request
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Request Link -->
      </div>
    </LayoutContain>
  </div>
</template>
