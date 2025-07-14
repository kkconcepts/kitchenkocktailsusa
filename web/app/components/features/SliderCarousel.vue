<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  slidesPerView: {
    type: [Number, String],
    default: 2.5
  },
  spaceBetween: {
    type: Number,
    default: 24
  },
  height: {
    type: String,
    default: '400px'
  }
})

const swiperRef = ref(null)

const onSwiperReady = (swiper) => {
  swiperRef.value = swiper
}

const nextSlide = () => swiperRef.value?.slideNext()
const prevSlide = () => swiperRef.value?.slidePrev()
</script>

<template>
  <div class="features-slider-carousel f-py-160-180 w-full">
    <Swiper
      ref="swiperRef"
      :touch-ratio="2"
      :resistance-ratio="0"
      :long-swipes="true"
      :long-swipes-ratio="0.05"
      :threshold="0"
      :speed="300"
      :grab-cursor="true"
      :keyboard="{ enabled: true, onlyInViewport: false }"
      :loop="true"
      :space-between="spaceBetween"
      :slides-per-view="slidesPerView"
      :breakpoints="{
        320: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView }
      }"
      @swiper="onSwiperReady"
      class="w-full"
      :style="{ height }"
      data-grid
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative overflow-hidden hover:cursor-pointer"
      >
        <NuxtImg
          :src="slide"
          :alt="`Slide ${index + 1}`"
          class="object-cover w-full h-full animate-item"
        />
      </SwiperSlide>
    </Swiper>

    <LayoutContain>
      <div class="slider-controls mt-4 flex justify-end py-2 gap-4 font-semibold">
        <button
          @click="prevSlide"
          class="slider-btn f-text-11-12 py-2 uppercase opacity-80 leading-tight tracking-wider transition-colors duration-300 hover:opacity-70"
        >
          Prev
        </button>

        <button
          @click="nextSlide"
          class="relative group slider-btn f-text-11-12 py-2 uppercase leading-tight tracking-wider transition-colors duration-300"
        >
          <span class="inline-block relative">
            Next
            <span
              class="absolute left-0 bottom-[-4px] h-[1.5px] w-0 bg-brand-accent transition-all duration-300 group-hover:w-full"
            />
          </span>
        </button>
      </div>
    </LayoutContain>
  </div>
</template>

<style scoped></style>
