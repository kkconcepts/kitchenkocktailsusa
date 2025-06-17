<template>
  <div class="bg-brand-light min-h-screen f-py-160-180">
    <!-- Header Section -->
    <LayoutContain>
      <div class="">
        <h1 class="text-5xl text-center font-gt-ultra uppercase tracking-wide mb-6">
          Private Events
        </h1>
        <p class="f-text-16-19 text-center font-light max-w-3xl tracking-tight mx-auto mb-12">
          When it comes to private events, Kitchen + Kocktails accommodates groups of all sizes,
          from intimate gatherings to large-scale events. Each room is elegantly decorated and
          equipped with all the amenities you need to host a successful event.
        </p>

        <!-- Explore Dining Options -->
        <h2 class="f-text-21-31 font-gt-ultra uppercase tracking-wide mb-8">
          Explore Dining Options
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Gallery Card -->
          <div class="bg-white shadow-lg menu-card flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
              <NuxtImg src="/hero-4.jpg" alt="Gallery" class="object-cover w-full h-full" />
            </div>
            <div class="p-6">
              <h3 class="f-text-14-18 tracking-tight font-semibold mb-2">Gallery</h3>
              <p class="text-stone-600 mb-4">
                Explore the ambience our spaces bring to your events.
              </p>
              <NuxtLink
                to="/about"
                class="inline-block text-sm w-full text-center bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
              >
                View gallery
              </NuxtLink>
            </div>
          </div>

          <!-- Menus Card -->
          <div class="bg-white shadow-lg menu-card flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
              <NuxtImg src="/hero-10.jpg" alt="Menus" class="object-cover w-full h-full" />
            </div>
            <div class="p-6">
              <h3 class="f-text-14-18 tracking-tight font-semibold mb-2">Menus</h3>
              <p class="text-stone-600 mb-4">
                Select a variety of items to fit your taste with our private dining menus.
              </p>
              <NuxtLink
                to="/about"
                class="inline-block text-sm w-full text-center bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
              >
                View menus
              </NuxtLink>
            </div>
          </div>

          <!-- Incentive Program Card -->
          <div class="bg-white shadow-lg menu-card flex flex-col h-full">
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
              <NuxtImg
                src="/hero-7.jpeg"
                alt="Incentive Program"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h3 class="f-text-14-18 tracking-tight font-semibold mb-2">Incentive Program</h3>
              <p class="text-stone-600 mb-4">
                Explore our exclusive private dining incentive program.
              </p>
              <NuxtLink
                to="/about"
                class="inline-block text-sm w-full text-center bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Request Link -->
        <div class="text-center">
          <NuxtLink
            to="/private-events/make-a-request"
            class="inline-block text-sm bg-brand-dark text-white px-8 py-3 mt-4 uppercase tracking-wider transition-colors duration-200 hover:bg-brand-dark/90"
          >
            Make a Request
          </NuxtLink>
        </div>
      </div>
    </LayoutContain>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Private Events',
  description:
    "Host your next private event at Kitchen + Kocktails. From intimate gatherings to large celebrations, we'll help create an unforgettable experience."
})
</script>
