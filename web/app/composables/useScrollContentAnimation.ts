import { onMounted, nextTick } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export const useScrollContentAnimation = () => {
  onMounted(async () => {
    await nextTick()

    const elements = document.querySelectorAll('[data-type]')

    elements.forEach((el) => {
      const type = el.getAttribute('data-type')

      if (type === 'stagger') {
        const children = el.querySelectorAll('.animate-child')
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          animation: gsap.from(children, {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.7,
            ease: 'power2.out'
          })
        })
        return
      }

      ScrollTrigger.create({
        trigger: el,
        animation: type === 'text' ? useAnimateText(el) : useAnimateImage(el),
        once: true,
        start: 'top 85%'
      })
    })

    ScrollTrigger.refresh()
  })
}
