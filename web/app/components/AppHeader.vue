<script setup>
import { ref, watch, onMounted, nextTick, computed } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'

const { $gsap, $ScrollTrigger } = useNuxtApp()

const headerRef = ref(null)
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

const hamburgerColor = computed(() => {
  if (isMenuOpen.value) return '#ffffff'
  return isScrolled.value ? '#000000' : '#ffffff'
})

const logoSrc = computed(() => {
  return isScrolled.value ? '/logo-dark.png' : '/logo-transparent.png'
})

const updateHamburgerColor = () => {
  const spans = document.querySelectorAll('.hamburger-button span')
  console.log('updating spans:', spans.length)
  if (!spans.length) return

  gsap.to(spans, {
    backgroundColor: hamburgerColor.value,
    duration: 0.3,
    overwrite: true
  })
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      updateHamburgerColor()
    }, 100)
  })

  if (process.client) {
    const mainContent = document.querySelector('#main-content')
    if (!mainContent) return

    $ScrollTrigger.create({
      trigger: mainContent,
      start: 'top top-=100',
      end: 'top top-=100',
      invalidateOnRefresh: true,
      onToggle: (self) => {
        console.log('ScrollTrigger fired. Active:', self.isActive)
        isScrolled.value = self.isActive
        updateHamburgerColor()
      }
    })

    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top top-=100',
        end: 'top top-=100',
        scrub: 0.75,
        ease: 'ease.inOut'
      }
    })

    tl.to(headerRef.value, {
      backgroundColor: '#f2f0ed',
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
  }

  setTimeout(() => {
    $ScrollTrigger.refresh()
    updateHamburgerColor()
  }, 300)
})

watch([isMenuOpen, isScrolled], () => {
  updateHamburgerColor()
})

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
    if (isMenuOpen.value) isMenuOpen.value = false
  }
)
</script>

<template>
  <header ref="headerRef" class="app-header fixed top-0 left-0 w-full z-50 text-white">
    <LayoutContain>
      <nav class="py-6 h-auto flex w-full">
        <div class="flex flex-row justify-between w-full items-center">
          <div class="flex justify-start items-center space-x-6 f-text-11-12">
            <BaseHamburgerButton
              :is-open="isMenuOpen"
              class="hamburger-button"
              @click="isMenuOpen = !isMenuOpen"
            />
            <NuxtLink to="/" class="z-[149] justify-self-start">
              <NuxtImg
                :key="logoSrc"
                :src="logoSrc"
                alt="Kitchen + Cocktails"
                class="h-11 w-auto transition-opacity duration-300"
                quality="80"
                format="webp"
                preload
              />
            </NuxtLink>
          </div>

          <div class="flex justify-end items-center space-x-4 f-text-11-12">
            <div class="flex flex-row items-center gap-8">
              <NuxtLink
                v-for="link in navigationLinks.slice(1, 5)"
                :key="link.path"
                :to="link.path"
                class="nav-link f-text-11-12 mt-1 font-semibold md:flex hidden uppercase tracking-wider hover:text-brand-accent transition-colors duration-200"
              >
                {{ link.label }}
              </NuxtLink>
              <button
                class="f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-white hover:bg-brand-accent/90 f-py-6-8 f-px-24-32 tracking-wider hover:ease-in-out transition-colors duration-300"
                aria-label="View our menu button"
              >
                Make a reservation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </LayoutContain>

    <LazyFeaturesHeaderMenu
      :is-open="isMenuOpen"
      :navigation-links="navigationLinks"
      @close="isMenuOpen = false"
    />

    <div class="menu-categories-template bg-white">
      <slot name="menu-categories"></slot>
    </div>
  </header>
</template>

<style scoped></style>
