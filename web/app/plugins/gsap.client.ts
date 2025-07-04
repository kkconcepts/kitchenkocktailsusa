// plugins/gsap.client.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, Draggable, InertiaPlugin)
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollToPlugin,
      ScrollSmoother,
      Draggable,
      InertiaPlugin
    }
  }
})
