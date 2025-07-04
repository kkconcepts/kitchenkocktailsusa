<script setup>
import { ref, onMounted } from 'vue'

const slides = ref([{ src: '/hero-7.jpeg', alt: 'Kitchen + Kocktails Experience' }])

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
    <div class="slider-container hero-about-fade-in">
      <div
        v-for="(slide, index) in slides"
        :key="slide.src"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <NuxtImg :src="slide.src" :alt="slide.alt" class="slide-image" preload />
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

    <div class="absolute bottom-0 left-0 right-0 f-py-8-12 text-white">
      <LayoutContain>
        <div class="flex flex-col justify-start items-start w-full stagger-fade-in">
          <p
            class="f-text-11-12 mb-2 text-start tracking-0.75 font-semibold uppercase text-brand-accent"
          >
            KITCHEN + KOCKTAILS
          </p>
          <h1
            class="f-text-28-56 leading-tight tracking-0.25 font-gt-ultra font-medium text-start uppercase mb-4"
          >
            About Us
          </h1>
        </div>
      </LayoutContain>
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

.stagger-container > * {
  opacity: 0;
}
</style>
