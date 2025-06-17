<script setup>
defineProps({
  category: {
    type: String,
    default: 'CATERING & EVENTS'
  },
  title: {
    type: String,
    default: 'ELEVATE YOUR EVENT'
  },
  description: {
    type: String,
    default:
      'From intimate dinners to grand celebrations, our team crafts unforgettable experiences for groups of 10 or more.'
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
    default: '/hero-10.jpg'
  }
})
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Background Image with Gradient Overlay -->
    <div class="absolute inset-0">
      <NuxtImg :src="backgroundImage" alt="Background" class="w-full h-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-r from-zinc-900/100 via-brand-dark/35 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 px-4 py-16 md:py-24 max-w-6xl mx-auto">
      <div class="max-w-xl">
        <span class="text-brand-accent text-sm font-medium tracking-widest">{{ category }}</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">{{ title }}</h2>
        <p class="text-gray-200 text-lg mb-8">{{ description }}</p>
        <NuxtLink
          :to="buttonLink"
          class="inline-block bg-white text-dark px-8 py-3 text-sm tracking-wider font-bold transition-colors duration-200 hover:bg-brand-primary hover:text-white"
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
    </div>
  </section>
</template>
