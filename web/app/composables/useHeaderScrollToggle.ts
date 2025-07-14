// composables/useHeaderScrollToggle.ts
import { onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useHeaderScrollToggle = (isMenuOpen: Ref<boolean>) => {
  let trigger: ScrollTrigger | null = null

  const toggleState = () => {
    const hamburger = document.querySelector('.hamburger')
    const header = document.querySelector('.app-header')
    const triggerElement = trigger?.trigger as Element | undefined

    if (!hamburger || !header || !triggerElement) return

    const isAfterTrigger = ScrollTrigger.isInViewport(triggerElement)

    if (isMenuOpen.value) {
      hamburger.classList.remove('hamburger-inverted')
      header.classList.remove('inverted')
    } else if (isAfterTrigger) {
      hamburger.classList.add('hamburger-inverted')
      header.classList.add('inverted')
    } else {
      hamburger.classList.remove('hamburger-inverted')
      header.classList.remove('inverted')
    }
  }

  onMounted(() => {
    trigger = ScrollTrigger.create({
      trigger: '.section-trigger',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: toggleState,
      onToggle: toggleState
    })

    watch(isMenuOpen, toggleState)
  })

  onUnmounted(() => {
    if (trigger) trigger.kill()
  })
}
