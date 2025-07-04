<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { useMailchimp } from '~/composables/useMailchimp'

const route = useRoute()
const menuOverlay = ref(null)
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
  if (!menuOverlay.value || !navLinks.value) return

  if (props.isOpen) {
    gsap.set(menuOverlay.value, { display: 'block' })
    gsap.to(menuOverlay.value, {
      xPercent: 0,
      autoAlpha: 1,
      duration: 0.85,
      ease: 'power4.inOut',
      onComplete: () => {
        gsap.to(navLinks.value.children, {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          stagger: 0.025,
          ease: 'cubic.out'
        })
      }
    })
  } else {
    gsap.to(navLinks.value.children, {
      autoAlpha: 0,
      x: -30,
      duration: 0.5,
      ease: 'quart.in',
      onComplete: () => {
        gsap.to(menuOverlay.value, {
          xPercent: -100,
          duration: 0.5,
          ease: 'cubic.inOut',
          onComplete: () => {
            gsap.set(menuOverlay.value, { display: 'none' })
            gsap.killTweensOf([menuOverlay.value, navLinks.value.children])
          }
        })
      }
    })
  }
})

const { email, name, isEmailStep, handleInput } = useMailchimp()
</script>

<template>
  <div
    ref="menuOverlay"
    class="menu-overlay shadow-lg shadow bg-stone-800 backdrop-blur-50 fixed top-0 left-0 z-[100] w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/4"
  >
    <div class="h-full flex flex-col">
      <LayoutContain class="f-pt-160-180 f-pb-24-56">
        <nav ref="navLinks" class="flex flex-col w-full justify-start items-start space-y-2">
          <NuxtLink
            v-for="link in navigationLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link f-text-19-31 leading-tight font-gt-ultra uppercase text-white"
            :class="{ 'text-white ': route.path === link.path }"
            @click="emit('close')"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <div
          class="footer-col flex flex-col f-gap-2-4 items-start md:items-start justify-start order-1 mt-24"
        >
          <h3 class="text-start md:text-start text-white mb-2 f-text-15-15">
            Subscribe for news & offers
          </h3>
          <div class="news-input relative flex flex-row w-full max-w-250px overflow-hidden">
            <transition name="slide" mode="out-in">
              <input
                v-if="isEmailStep"
                v-model="email"
                class="w-full bg-transparent border-b border-gray-200 pr-24 f-text-15-15 pb-2 outline-none placeholder:text-gray-400 transition-all duration-300"
                type="email"
                placeholder="Enter your email"
                @keyup.enter="handleInput"
              />
              <input
                v-else
                v-model="name"
                class="w-full bg-transparent border-b border-gray-200 pr-24 pb-2 outline-none placeholder:text-gray-400 transition-all duration-300"
                type="text"
                placeholder="Enter your name"
                @keyup.enter="handleInput"
              />
            </transition>
            <button
              @click="handleInput"
              class="btn-primary absolute right-0 bottom-0 pb-2 text-white hover:opacity-60 transition-opacity duration-300 ease-in-out"
              aria-label="Submit button"
            >
              <Icon name="uil:arrow-right"></Icon>
            </button>
          </div>
        </div>
        <div class="social-links flex space-x-4 mt-10 text-white">
          <NuxtLink
            to="https://www.facebook.com/share/193vpd2MN7/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kitchen + Kocktails on Facebook"
            class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
          >
            <Icon name="uil:facebook-f" />
          </NuxtLink>
          <NuxtLink
            to="https://www.tiktok.com/@kitchenkocktailsofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kitchen + Kocktails on Facebook"
            class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
          >
            <Icon name="ic:baseline-tiktok" />
          </NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/kitchenkocktailsusa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kitchen + Kocktails on Facebook"
            class="hover:opacity-60 transition-opacity duration-300 ease-in-out"
          >
            <Icon name="uil:instagram" />
          </NuxtLink>
        </div>
      </LayoutContain>
    </div>
  </div>
</template>

<style scoped>
.menu-overlay {
  height: 100vh;
  display: none;
}

input::placeholder {
  color: white;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
