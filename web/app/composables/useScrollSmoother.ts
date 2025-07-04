import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

// Define the type for ScrollSmoother instance
type ScrollSmootherInstance = ReturnType<typeof ScrollSmoother.create>

export const useScrollSmoother = (options = {}) => {
  // Properly type the ref to accept ScrollSmootherInstance or null
  const smoother = ref<ScrollSmootherInstance | null>(null)
  const isInitialized = ref(false)

  const defaultOptions = {
    wrapper: '#page-wrapper',
    content: '#page-content',
    smooth: 1,
    speed: 1.5,
    effects: true
  }

  const initSmoother = () => {
    if (process.client && !isInitialized.value) {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

      // Merge default options with provided options
      const smootherOptions = { ...defaultOptions, ...options }

      // Create the smoother instance
      smoother.value = ScrollSmoother.create(smootherOptions)
      isInitialized.value = true

      return smoother.value
    }
    return null
  }

  const destroySmoother = () => {
    if (smoother.value) {
      // Kill all ScrollTrigger instances first to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Kill the smoother instance
      smoother.value.kill()
      smoother.value = null
      isInitialized.value = false
    }
  }

  onMounted(() => {
    // We don't automatically initialize here to give pages control
  })

  onUnmounted(() => {
    destroySmoother()
  })

  return {
    smoother,
    isInitialized,
    initSmoother,
    destroySmoother
  }
}
