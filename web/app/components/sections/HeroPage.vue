<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '/hero-3.jpg'
  },
  height: {
    type: String,
    default: '100vh'
  }
})

const slides = ref([{ src: props.image, alt: 'Kitchen + Kocktails Experience' }])

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
  <div class="hero relative">
    <div class="slider-container">
      <div
        v-for="(slide, index) in slides"
        :key="slide.src"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <NuxtImg
          :src="slide.src"
          :alt="slide.alt"
          format="webp"
          class="slide-image hero-image"
          data-speed="0.9"
        />
      </div>

      <!-- Bottom gradient overlay to blend with warm-gray-800 -->
      <div class="bottom-gradient hidden"></div>

      <!-- Slide Indicators -->
    </div>

    <div class="absolute bottom-0 left-0 right-0 f-py-16-24 text-white">
      <LayoutContain>
        <div data-type="stagger" class="flex flex-col justify-start items-start w-full h-full">
          <h1
            class="animate-child z-[150] f-text-34-72 leading-[95%] hidden animate-text tracking-0.25 font-gt-ultra font-medium text-start uppercase mb-4"
          >
            {{ title }}
          </h1>
        </div>
      </LayoutContain>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: v-bind('props.height');
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

/* Bottom gradient to blend with warm-gray-800 background */
.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
  z-index: 5;
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
.slide::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, rgba(13, 13, 16, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
}

.indicator.active {
  background: white;
}

/* Style for the navigation buttons */
.btn-contain {
  position: relative;
}

.btn-contain button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
