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
    default: '/slider-3.jpg'
  }
})
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Background Image with Gradient Overlay -->
    <div class="absolute inset-0 overflow-hidden">
      <NuxtImg
        :src="backgroundImage"
        alt="Background"
        class="w-full h-full object-cover"
        data-speed="0.9"
      />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 w-full h-full flex items-center justify-center mx-auto py-20 w-full text-white"
    >
      <div class="max-w-2xl w-full h-full flex flex-col items-center justify-center flex gap-4">
        <p class="f-text-11-12 text-center tracking-0.25 font-semibold uppercase text-brand-accent">
          CATERING & EVENTS
        </p>
        <h3
          class="f-text-24-56 leading-[95%] font-gt-ultra text-center uppercase tracking-wide mb-8"
        >
          ELEVATE YOUR EVENT
        </h3>
        <p class="font-regular max-w-3xl leading-tight text-center f-text-15-17 mb-4">
          From intimate dinners to grand celebrations, our team crafts unforgettable experiences for
          groups of 10 or more.
        </p>
        <NuxtLink
          class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
          aria-label="View our menu button"
          to="/private-events/make-a-request"
        >
          Contact our events team
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
