<script setup>
import { navigationLinks } from '~/utils/navigationLinks'
import FeaturesMenuOverlay from '~/components/features/MenuOverlay.vue'
import gsap from 'gsap'

const buttonRef = ref(null)
const isMenuOpen = ref(false)

watch(isMenuOpen, (open) => {
  const el = buttonRef.value
  if (!el) return

  const [bar1, bar2, bar3] = el.querySelectorAll('span')

  if (open) {
    gsap.to(bar1, { rotate: 45, y: 0, duration: 0.3, transformOrigin: 'center' })
    gsap.to(bar2, { opacity: 0, duration: 0.2 })
    gsap.to(bar3, { rotate: -45, y: 0, duration: 0.3, transformOrigin: 'center' })
  } else {
    gsap.to(bar1, { rotate: 0, y: '-5px', duration: 0.3 })
    gsap.to(bar2, { opacity: 1, duration: 0.2 })
    gsap.to(bar3, { rotate: 0, y: '5px', duration: 0.3 })
  }
})
</script>

<template>
  <header class="app-header fixed top-0 left-0 w-full z-50 transition-colors duration-300">
    <LayoutContain>
      <nav class="py-4 w-full grid grid-cols-12 items-center justify-between relative z-10">
        <div class="flex items-center max-w-sm space-x-6 f-text-11-12 w-full col-span-2">
          <NuxtLink to="/" class="z-[149] header-element">
            <NuxtImg
              src="/logo-transparent.png"
              alt="Kitchen + Kocktails logo"
              class="h-10 transition-all duration-300 hover:scale-103"
              quality="80"
              format="webp"
              preload
            />
          </NuxtLink>
        </div>

        <div
          class="flex items-center hidden space-x-12 justify-center f-text-11-12 w-full col-span-8"
        >
          <NuxtLink
            v-for="link in navigationLinks.slice(1, 6)"
            :key="link.path"
            :to="link.path"
            class="nav-item f-text-12-13 active:opacity-50 font-semibold md:flex hidden uppercase tracking-wider hover:opacity-50 transition-opacity transition:ease-in-out duration-375"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
        <!-- Keep this wrapping div for layout alignment -->
        <div class="w-full flex justify-end items-center col-span-2 gap-6">
          <button
            class="uppercase f-text-12-13 font-semibold py-2 px-4 rounded-sm bg-white text-black"
            aria-label="Make a reservation button"
            to="/reservations"
          >
            Make a reservation
          </button>
          <button
            ref="buttonRef"
            class="relative w-8 h-4 z-[151] flex items-center justify-center"
            aria-label="Open Menu button"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="absolute w-full h-[1.25px] bg-white transform -translate-y-[5px]"></span>
            <span class="absolute w-full h-[1.25px] bg-white"></span>
            <span class="absolute w-full h-[1.25px] bg-white transform translate-y-[5px]"></span>
          </button>
        </div>

        <!-- In the template section -->
        <FeaturesMenuOverlay :isOpen="isMenuOpen" @close="isMenuOpen = false" />
      </nav>
    </LayoutContain>
  </header>
</template>

<style scoped>
.app-header.inverted {
  background-color: white;
  color: black;
}

.nav-item.router-link-active,
.nav-item.router-link-exact-active {
  opacity: 0.5; /* Adjust this value as needed */
}

.hamburger-inverted span {
  background-color: black !important;
}
</style>
