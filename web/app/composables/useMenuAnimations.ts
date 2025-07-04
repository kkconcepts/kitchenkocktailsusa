import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export const useMenuAnimations = () => {
  type Context = {
    add: (animation: gsap.core.Timeline | ((...args: any[]) => any)) => void
    revert: () => void
  }

  const ctx = ref<Context | null>(null)

  const animateTitle = (title: Element, description: Element) => {
    const tl = gsap.timeline()

    tl.from(title, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    }).from(
      description,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.4'
    )

    return tl
  }

  const animateCategories = () => {
    const timelines: gsap.core.Timeline[] = []

    document.querySelectorAll('[id].scroll-mt-32').forEach((category) => {
      const heading = category.querySelector('.font-gt-ultra.uppercase')
      const line = category.querySelector('.divider')
      const cards = category.querySelectorAll('.menu-card')

      if (heading && line && cards.length > 0) {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: category,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse'
            }
          })
          .from(heading, {
            y: 15,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out'
          })
          .from(line, {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.6,
            ease: 'power2.inOut'
          })
          .from(
            cards,
            {
              opacity: 0,
              y: 40,
              duration: 1,
              stagger: 0.025,
              ease: 'power2.out'
            },
            '-=0.5'
          )
        timelines.push(tl)
      }
    })

    return timelines
  }

  const initializeAnimations = () => {
    if (process.client) {
      nextTick(() => {
        ctx.value = gsap.context((self) => {
          const title = document.querySelector('h1')
          const description = document.querySelector('.text-center.font-light')

          if (title && description) {
            self.add(() => animateTitle(title, description))
          }

          const categoryTimelines = animateCategories()
          categoryTimelines.forEach((tl) => self.add(() => tl))
        })
      })
    }
  }

  const cleanupAnimations = () => {
    if (process.client) {
      // Kill all ScrollTrigger instances first
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Then revert the GSAP context
      if (ctx.value) {
        ctx.value.revert()
        ctx.value = null
      }
    }
  }

  return {
    initializeAnimations,
    cleanupAnimations
  }
}
