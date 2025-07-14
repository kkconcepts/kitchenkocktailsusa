import { onMounted, nextTick } from 'vue'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useParallaxEffects = () => {
  onMounted(async () => {
    await nextTick()

    const smoother = ScrollSmoother.get()
    if (!smoother) return

    const parallaxEls = document.querySelectorAll('[data-speed]')

    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-speed') || '1')
      smoother.effects(el as HTMLElement, { speed })
    })

    ScrollTrigger.refresh()
  })
}
