<script setup>
defineProps({
  category: {
    type: String,
    default: 'PRIVATE EVENTS'
  },
  title: {
    type: String,
    default: 'HOST WITH US'
  },
  description: {
    type: String,
    default:
      'Host your Private Events with us at Kitchen + Kocktails by Kevin Kelley in our trendy event room, the Asset Lounge that will seat 36.'
  },
  buttonText: {
    type: String,
    default: 'CONTACT US'
  },
  buttonLink: {
    type: String,
    default: '#'
  },
  backgroundImage: {
    type: String,
    default: '/hero-11.jpg'
  }
})
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Background Image with Gradient Overlay -->
    <div class="absolute inset-0">
      <NuxtImg :src="backgroundImage" alt="Background" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-r from-brand-dark/100 via-brand-dark/25 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 px-4 py-16 md:py-24 max-w-6xl mx-auto">
      <LayoutContain>
        <div class="">
          <span class="text-brand-accent text-sm font-medium tracking-wider">{{ category }}</span>
          <h2 class="text-4xl uppercase font-gt-ultra text-white mt-2 mb-4">{{ title }}</h2>
          <p class="text-gray-200 text-lg mb-8 max-w-xl">{{ description }}</p>
          <NuxtLink
            :to="buttonLink"
            class="inline-block bg-white text-dark px-8 py-3 text-sm font-bold transition-colors duration-200 hover:bg-brand-accent hover:text-white"
          >
            {{ buttonText }}
          </NuxtLink>
        </div>

        <!-- Dots Navigation -->
        <div class="flex gap-2 mt-8">
          <button
            v-for="i in 3"
            :key="i"
            class="w-2 h-2 rounded-full bg-white/50 first:bg-white"
            aria-label="Navigation dot"
          ></button>
        </div>
      </LayoutContain>
    </div>
  </section>
</template>
