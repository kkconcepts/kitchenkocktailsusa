<script setup>
// Fetch featured dishes from Sanity
const { data: featuredDishes } = await useSanityQuery(groq`
  *[_type == "menuItem" && featured == true] {
    _id,
    name,
    image,
    slug
  }
`)
</script>

<template>
  <div class="featured-section py-24">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="uppercase tracking-widest text-sm mb-4">AMERICA'S BEST COMFORT FOOD</p>
        <h2 class="text-4xl font-light text-brand-gold">DISHES THAT SATISFY EVERY CRAVING</h2>
      </div>

      <!-- Grid layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="dish in featuredDishes" :key="dish._id" class="featured-dish">
          <div class="aspect-6/8 overflow-hidden">
            <SanityImage
              v-if="dish.image"
              :asset-id="dish.image.asset._ref"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-16">
        <NuxtLink
          to="/menu"
          class="inline-block border border-black px-12 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
        >
          BUTTON CTA
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-dish {
  position: relative;
}

.featured-dish img {
  transition: transform 0.3s ease;
}

.featured-dish:hover img {
  transform: scale(1.05);
}
</style>
