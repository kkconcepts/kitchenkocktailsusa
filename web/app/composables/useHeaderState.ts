// composables/useHeaderState.ts
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export const useHeaderState = () => {
  const isPastTrigger = ref(false)

  let trigger: ScrollTrigger | null = null

  onMounted(() => {
    trigger = ScrollTrigger.create({
      trigger: '.section-trigger',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        isPastTrigger.value = self.isActive
      },
      markers: false
    })
  })

  onUnmounted(() => {
    if (trigger) trigger.kill()
  })

  return {
    isPastTrigger
  }
}
