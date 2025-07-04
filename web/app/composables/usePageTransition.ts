import { ref } from 'vue'
import gsap from 'gsap'

export const usePageTransitions = () => {
  const transitionComplete = ref(false)

  const pageTransition = {
    name: 'page-transition',
    mode: 'out-in',
    onEnter: (el: Element, done: () => void) => {
      gsap.set(el, { autoAlpha: 0, y: 40 })

      gsap
        .timeline({
          onComplete: () => {
            transitionComplete.value = true
            done()
          }
        })
        .to(el, { blur: 10, autoAlpha: 1, y: 0, duration: 0.5, ease: 'cubic.out' })
        .to(el, { scale: 1, duration: 0.5, ease: 'cubic.out' }, '-=0.25')
    },

    onLeave: (el: Element, done: () => void) => {
      transitionComplete.value = false

      gsap
        .timeline({
          onComplete: done
        })
        .to(el, { blur: 10, y: -20, autoAlpha: 0, duration: 0.5, ease: 'cubic.in' })
    }
  }

  return {
    pageTransition,
    transitionComplete
  }
}
