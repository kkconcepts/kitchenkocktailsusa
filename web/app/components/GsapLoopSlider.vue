<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { sliderDishes } from '~/utils/sliderDishes'

gsap.registerPlugin(Draggable, InertiaPlugin)

const sliderRef = ref(null)
let draggableInstance = null
const itemWidth = ref(0)
const gap = 100
let totalWidth = 0
let containerWidth = 0

onMounted(() => {
  nextTick(() => {
    const slider = sliderRef.value
    const items = slider.querySelectorAll('.slider-item')
    itemWidth.value = items[0].offsetWidth
    totalWidth = items.length * (itemWidth.value + gap)
    containerWidth = slider.parentElement.offsetWidth

    gsap.set(slider, { x: 0 })

    if (draggableInstance) draggableInstance.kill()

    draggableInstance = Draggable.create(slider, {
      type: 'x',
      inertia: true,
      bounds: {
        minX: -(totalWidth - containerWidth),
        maxX: 0
      },
      dragResistance: 0.12,
      edgeResistance: 0.25
    })[0]
  })
})

const moveSlider = (direction) => {
  const slider = sliderRef.value
  const distance = itemWidth.value + gap
  const currentX = gsap.getProperty(slider, 'x')
  let newX = direction === 'next' ? currentX - distance : currentX + distance

  newX = Math.max(newX, -(totalWidth - containerWidth))
  newX = Math.min(newX, 0)

  gsap.to(slider, {
    x: newX,
    duration: 0.5,
    ease: 'power2.out',
    onUpdate: () => {
      draggableInstance.update()
    }
  })
}
</script>

<template>
  <div class="w-full f-pt-24-32">
    <LayoutContain class="max-w-90rem">
      <div class="flex flex-col w-full stagger-container mb-24">
        <div class="flex flex-row justify-between items-end w-full">
          <div class="flex flex-col justify-start items-start w-full">
            <p
              class="f-text-11-12 mb-10 text-center tracking-0.75 font-semibold uppercase text-brand-accent"
            >
              SIGNATURE SELECTIONS
            </p>
            <h1 class="f-text-32-72 leading-0 font-gt-ultra text-center uppercase mb-0">
              DIVE IN TO A WORLD OF FLAVOR
            </h1>
            <p class="font-regular leading-tight max-w-xl f-text-15-17 mb-4 hidden">
              Honest products, creative dishes, and flavors that stick in your mind. Inspired by
              local and international cuisine, we create a culinary experience that's artisanal and
              cooked with passion. Whether classic or surprising, our focus is always on what
              connects people: good food and good company.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </LayoutContain>
    <div class="slider-wrapper">
      <div class="slider-container">
        <div class="slider relative" ref="sliderRef">
          <div v-for="(dish, i) in sliderDishes" :key="i" class="slider-item">
            <NuxtImg
              :src="dish.src"
              :alt="dish.altText"
              class="slider-image w-full h-full object-cover"
              quality="50"
              loading="eager"
              placeholder
            />
          </div>
        </div>
      </div>
    </div>
    <LayoutContain>
      <div
        class="slider-buttons max-w-90rem mx-auto gap-3 items-center w-full flex justify-end f-px-24-32 mt-6"
      >
        <div class="btn-contain">
          <button
            @click="() => moveSlider('prev')"
            class="f-text-11-12 uppercase px-4 py-2 leading-tight font-semibold tracking-wider text-neutral-400 transition-colors duration-300 hover:opacity-60"
          >
            Previous
          </button>
        </div>
        <div class="btn-contain relative">
          <button
            @click="() => moveSlider('next')"
            class="f-text-11-12 py-2 font-semibold uppercase leading-tight tracking-wider transition-colors duration-300 hover:opacity-60"
          >
            Next
          </button>
          <div class="line absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent" />
        </div>
      </div>
    </LayoutContain>
  </div>
</template>

<style scoped>
.slider-wrapper {
  position: relative;
  height: 440px;
}

.slider-container {
  overflow: hidden;
  width: 100%;
  height: 440px;
}

.slider {
  display: flex;
  gap: 100px;
  width: max-content;
  will-change: transform;
  height: 540px;
}

.slider-item {
  position: relative;
  flex-shrink: 0;
  width: 30vw;
  height: 440px;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to top, rgba(6, 8, 34, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
}

.slider-item:hover .image-overlay {
  opacity: 1;
}

.dish-name {
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.dish-link {
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.slider-item:hover .dish-link {
  transform: translateY(0);
}

.slider-item:hover .dish-name {
  transform: translateY(0);
}

.slider-buttons {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .slider-item {
    width: 80vw;
  }
}
</style>
