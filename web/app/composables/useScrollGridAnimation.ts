import { onMounted, nextTick } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export const useScrollGridAnimation = () => {
  onMounted(async () => {
    await nextTick()

    const grids = document.querySelectorAll('[data-grid]')

    grids.forEach((grid) => {
      const items = grid.querySelectorAll('.animate-item')

      ScrollTrigger.create({
        trigger: grid,
        start: 'top 80%',
        once: true,
        animation: gsap.from(items, {
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power1.out'
        })
      })
    })

    ScrollTrigger.refresh()
  })
}
