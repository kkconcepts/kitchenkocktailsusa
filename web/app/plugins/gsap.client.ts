import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    return {
      provide: {
        gsap,
        ScrollTrigger,
        ScrollSmoother
      }
    }
  }
})
