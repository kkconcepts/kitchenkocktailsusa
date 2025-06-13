<script setup>
import { ref, onMounted } from 'vue'

const slides = ref([
  { src: '/hero-1.jpg', alt: 'Kitchen + Kocktails Experience' },
  { src: '/hero-2.jpg', alt: 'Signature Dishes' },
  { src: '/hero-3.jpg', alt: 'Cocktail Selection' }
])

const currentSlide = ref(0)
const isTransitioning = ref(false)

const nextSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const prevSlide = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

// Auto-advance slides
onMounted(() => {
  setInterval(nextSlide, 5000)
})
</script>

<template>
  <div class="hero bg-brand-dark relative">
    <div class="slider-container">
      <div
        v-for="(slide, index) in slides"
        :key="slide.src"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <NuxtImg :src="slide.src" :alt="slide.alt" class="slide-image" loading="eager" />
      </div>

      <!-- Navigation Arrows -->
      <div class="navigation-arrows hidden">
        <button class="nav-button prev" @click="prevSlide" :disabled="isTransitioning">
          <Icon name="uil:angle-left" class="text-2xl" />
        </button>
        <button class="nav-button next" @click="nextSlide" :disabled="isTransitioning">
          <Icon name="uil:angle-right" class="text-2xl" />
        </button>
      </div>

      <!-- Slide Indicators -->
      <div class="indicators">
        <button
          v-for="(_, index) in slides"
          :key="index"
          class="indicator"
          :class="{ active: index === currentSlide }"
          @click="currentSlide = index"
        />
      </div>
    </div>

    <div
      class="hidden absolute bottom-0 left-0 right-0 p-4 bg-dark-400/95 backdrop-blur-sm text-white"
    >
      <div class="grid grid-cols-2 f-gap-16-24">
        <NuxtLink
          to="/menu"
          class="bg-red-600 hover:bg-red-700 transition-colors duration-200 flex items-center justify-center h-10"
          >Our Menu</NuxtLink
        >
        <NuxtLink
          to="/reservations"
          class="bg-red-600 hover:bg-red-700 transition-colors duration-200 flex items-center justify-center h-10"
          >Reservations</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 100dvh;
  position: relative;
  overflow: hidden;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* background: rgba(255, 255, 255, 0.2); */
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.nav-button.prev {
  left: 20px;
}

.nav-button.next {
  right: 20px;
}

.indicators {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background: white;
}
</style>
