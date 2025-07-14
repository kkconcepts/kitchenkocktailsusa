<script setup>
import { ref, watch } from 'vue'
import gsap from 'gsap'
import { useBodyScrollLock } from '~/composables/useBodyScrollLock.ts'

const emit = defineEmits(['close'])
const handleLinkClick = () => {
  emit('close')
}

const props = defineProps({
  isOpen: Boolean
})

const overlayRef = ref(null)
const hoveredImage = ref('/slider-1.jpg')
const animationComplete = ref(false)
const { lockScroll, unlockScroll } = useBodyScrollLock()

const menuLinks = [
  { label: 'Home', path: '/', image: '/slider-1.jpg' },
  { label: 'About', path: '/about', image: '/slider-2.jpg' },
  { label: 'Locations', path: '/locations', image: '/slider-3.jpg' },
  { label: 'Private Events', path: '/private-events', image: '/slider-4.jpg' },
  { label: 'Contact', path: '/contact', image: '/slider-5.jpg' },
  { label: 'Menu', path: '/menu', image: '/slider-6.jpg' },
  { label: 'Reservations', path: '/reservations', image: '/slider-7.jpg' },
  { label: 'Inquiries', path: '/private-events/make-a-request', image: '/slider-8.jpg' }
]

const handleHover = (img) => {
  if (animationComplete.value) {
    hoveredImage.value = img
  }
}

watch(
  () => props.isOpen,
  (val) => {
    const el = overlayRef.value
    if (!el) return

    animationComplete.value = false

    if (val) {
      lockScroll()

      gsap.set(el, { display: 'block' })
      gsap.set('[data-animate-link]', { y: 30, opacity: 0 })

      const imageContainer = el.querySelector('.image-container')
      const image = imageContainer.querySelector('img')

      gsap.set(imageContainer, { opacity: 0 })

      gsap.fromTo(
        el,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.6,
          ease: 'power4.inOut',
          onComplete: () => {
            gsap.to(imageContainer, {
              duration: 0.8,
              opacity: 1,
              ease: 'power1.inOut',
              onComplete: () => {
                const links = el.querySelectorAll('[data-animate-link]')
                gsap.fromTo(
                  links,
                  { y: 15, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.4,
                    ease: 'power2.inOut',
                    onComplete: () => {
                      animationComplete.value = true
                    }
                  }
                )
              }
            })
          }
        }
      )
    } else {
      gsap.to(el, {
        yPercent: 100,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(el, { display: 'none' })
          animationComplete.value = false
          unlockScroll()
        }
      })
    }
  },
  { immediate: true }
)
</script>

<template>
  <div ref="overlayRef" class="fixed top-0 left-0 w-full h-full z-[149] bg-black hidden">
    <div v-if="!animationComplete" class="absolute inset-0 z-[150] cursor-default" />

    <div class="flex gap-0 h-full w-full">
      <div class="w-1/2 relative overflow-hidden image-container">
        <NuxtImg
          :src="hoveredImage"
          alt="Preview image"
          class="object-cover w-full h-full transition-all duration-500 ease-in-out"
          format="webp"
        />
      </div>

      <div class="w-1/2 py-5">
        <LayoutContain>
          <nav aria-label="Main Menu">
            <ul>
              <li v-for="(item, i) in menuLinks" :key="i">
                <NuxtLink
                  :to="item.path"
                  data-animate-link
                  class="text-3xl font-gt-ultra uppercase max-w-280px tracking-wide block"
                  :class="{
                    'cursor-pointer': animationComplete,
                    'cursor-default': !animationComplete
                  }"
                  @mouseover="handleHover(item.image)"
                  @click="handleLinkClick"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </LayoutContain>
      </div>
    </div>
  </div>
</template>
