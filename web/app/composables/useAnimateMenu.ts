import { ref, watch } from 'vue'
import gsap from 'gsap'

export const useAnimateMenu = (isOpen: Ref<boolean>, el: Ref<HTMLElement | null>) => {
  watch(
    () => isOpen.value,
    (val) => {
      if (!el.value) return
      const target = el.value // safely narrow type after null check

      if (val) {
        gsap.set(target, { display: 'block' })

        gsap.fromTo(
          target,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.6,
            ease: 'power4.out',
            onComplete: () => {
              const links = target.querySelectorAll('[data-animate-link]')
              if (links.length) {
                gsap.fromTo(
                  links,
                  { y: 30, opacity: 0 },
                  { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
                )
              }
            }
          }
        )
      } else {
        gsap.to(target, {
          yPercent: 100,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(target, { display: 'none' })
          }
        })
      }
    },
    { immediate: true }
  )
}
