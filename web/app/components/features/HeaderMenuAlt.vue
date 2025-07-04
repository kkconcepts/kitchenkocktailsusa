<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'

const route = useRoute()
const menuOverlayAlt = ref(null)
const navLinks = ref(null)

const props = defineProps({
  isOpen: Boolean,
  navigationLinks: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close'])

watchEffect(() => {
  if (!menuOverlayAlt.value || !navLinks.value) return

  if (props.isOpen) {
    gsap.set(menuOverlayAlt.value, { display: 'block' })
    gsap.to(menuOverlayAlt.value, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power4.inOut',
      onComplete: () => {
        gsap.to(navLinks.value.children, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'quart.out'
        })
      }
    })
  } else {
    gsap.to(navLinks.value.children, {
      autoAlpha: 0,
      y: -100,
      duration: 0.5,
      ease: 'quart.in',
      onComplete: () => {
        gsap.to(menuOverlayAlt.value, {
          yPercent: -100,
          duration: 0.5,
          ease: 'cubic.inOut',
          onComplete: () => {
            gsap.set(menuOverlayAlt.value, { display: 'none' })
            gsap.killTweensOf([menuOverlayAlt.value, navLinks.value.children])
          }
        })
      }
    })
  }
})
</script>

<template>
  <div ref="menuOverlayAlt" class="menu-overlay-alt fixed top-0 h-auto z-[100]">
    <div class="p-4">
      <div class="h-full grid rounded-1 lg:grid-cols-8 overflow-hidden grid-cols-1 relative">
        <div class="col-span-8 w-full bg-white f-px-24-32">
          <nav
            ref="navLinks"
            class="flex items-start justify-end f-pt-12-20 f-px-32-56 f-pb-12-20 w-full space-x-12 flex-row z-[1]"
          >
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              class="nav-link relative f-text-11-12 tracking-wider leading-tight font-semibold text-black uppercase transition-colors duration-200"
              :class="{ 'text-brand-accent is-active': route.path === link.path }"
              @click="emit('close')"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
        <div class="h-full col-span-2 f-py-24-32 bg-brand-body relative z-[3] hidden">
          <div class="h-full w-full">
            <NuxtImg src="/slider-10.jpg" class="h-[50%] object-cover z-[4]" />
          </div>
          <div class="absolute top-0 right-0 h-full bg-stone z-[3]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-overlay-alt {
  width: 100%;
  display: none;
  color: white;
}

.nav-link.is-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  color: #af905c;
  background-color: #af905c;
}
</style>
