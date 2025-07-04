<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref(null)
const isScrolled = ref(false)

onMounted(() => {
  ScrollTrigger.create({
    trigger: '#main-content',
    start: 'top top-=-100',
    end: 'top top-=-100',
    onToggle: (self) => {
      isScrolled.value = self.isActive
    }
  })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#main-content',
      start: 'top top-=-100',
      end: 'top top-=-100',
      scrub: 0.5,
      ease: 'cubic.inOut'
    }
  })

  tl.to(headerRef.value, {
    // backgroundColor: '#f2f0ed',
    duration: 0.75
  })

  tl.to(
    '.nav-link',
    {
      color: '#000000',
      duration: 0.3
    },
    '<-0.1'
  )

  tl.to(
    '.hamburger-button span',
    {
      backgroundColor: '#000000',
      duration: 0.3
    },
    '<-0.1'
  )

  tl.to(
    '.header-button',
    {
      color: '#000000',
      duration: 0.3
    },
    '<-0.1'
  )
})

const isMenuOpen = ref(false)
const route = useRoute()

const navigationLinks = [
  { path: '/', label: 'Home', image: '/hero-7.jpeg' },
  { path: '/menu', label: 'Our Menu', image: '/hero-1.jpg' },
  { path: '/about', label: 'About', image: '/hero-3.jpg' },
  { path: '/locations', label: 'Locations', image: '/hero-2.jpg' },
  { path: '/private-events', label: 'Private Events', image: '/hero-4.jpg' },
  { path: '/reservations', label: 'Reservations', image: '/hero-6.jpg' },
  { path: '/gift-cards', label: 'Gift Cards', image: '/hero-5.jpg' },
  { path: '/contact', label: 'Contact', image: '/hero-7.jpeg' }
]

watch(
  () => route.fullPath,
  () => {
    if (isMenuOpen.value) {
      isMenuOpen.value = false
    }
  }
)
</script>

<template>
  <header
    ref="headerRef"
    class="app-header fixed top-0 left-0 w-full z-50 text-white bg-transparent transition-all duration-300 ease-in-out"
  >
    <LayoutContain>
      <nav class="py-6 h-auto flex w-full">
        <div class="grid grid-cols-2 w-full items-center">
          <div class="flex flex-row col-span-1 f-gap-12-16">
            <div class="logo-group">
              <NuxtLink to="/" class="z-[200] relative justify-self-start">
                <NuxtImg
                  v-if="!isScrolled"
                  src="/logo-transparent.png"
                  alt="Kitchen + Cocktails"
                  class="h-10 w-auto"
                  quality="80"
                  format="webp"
                  preload
                />
                <NuxtImg
                  v-else
                  src="/logo-dark.png"
                  alt="Kitchen + Cocktails"
                  class="h-10 w-auto"
                  quality="80"
                  format="webp"
                />
              </NuxtLink>
            </div>
          </div>
          <div
            class="menu-btn-wrap flex space-x-8 justify-end items-center ml-auto rounded-0.5 py-1 z-[150]"
          >
            <NuxtLink
              to="/reservations"
              class="header-button hidden f-text-11-12 relative z-[150] font-semibold uppercase rounded-0.5 max-w-xs text-white hover:text-brand-accent hover:bg-white/0 f-py-6-8 f-px-12-24 tracking-wider transition-colors duration-300"
            >
              Make a reservation
            </NuxtLink>
            <BaseHamburgerButton
              :is-open="isMenuOpen"
              class="hamburger-button col-span-1"
              @click="isMenuOpen = !isMenuOpen"
            />
          </div>
        </div>
      </nav>
    </LayoutContain>

    <FeaturesHeaderMenuAlt
      :is-open="isMenuOpen"
      :navigation-links="navigationLinks"
      @close="isMenuOpen = false"
    />

    <div class="bg-white">
      <slot name="menu-categories"></slot>
    </div>
  </header>
</template>

<style scoped></style>
