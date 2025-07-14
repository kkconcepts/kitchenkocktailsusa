import { defineNuxtRouteMiddleware } from '#app'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default defineNuxtRouteMiddleware((to, from) => {
  to.meta.pageTransition = {
    name: 'fade',
    mode: 'out-in',

    onLeave(el: Element, done: () => void) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    onEnter(el: Element, done: () => void) {
      const smoother = ScrollSmoother.get()

      // Instantly scroll to top before animation begins
      if (smoother) {
        smoother.scrollTo(0, false)
      }

      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: done
        }
      )
    }
  }
})
