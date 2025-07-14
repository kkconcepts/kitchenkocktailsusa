import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export const useScrollSmoother = () => {
  onMounted(() => {
    const wrapper = document.querySelector('#smooth-wrapper')
    const content = document.querySelector('#smooth-content')

    if (wrapper && content && !ScrollSmoother.get()) {
      console.log('🌀 ScrollSmoother initialized')
      ScrollSmoother.create({
        wrapper,
        content,
        smooth: 1.3,
        speed: 1.8,
        effects: true
      })
    } else {
      console.warn('⚠️ ScrollSmoother not initialized', {
        wrapper,
        content,
        alreadyCreated: !!ScrollSmoother.get()
      })
    }
  })
}
