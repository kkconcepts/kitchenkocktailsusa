import { ref } from 'vue'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export function useBodyScrollLock() {
  const isLocked = ref(false)
  let scrollPosition = 0

  const lockScroll = () => {
    if (isLocked.value) return

    // Get the ScrollSmoother instance
    const smoother = ScrollSmoother.get()

    if (smoother) {
      // Save current scroll position using ScrollSmoother
      scrollPosition = smoother.scrollTop()

      // Pause ScrollSmoother
      smoother.paused(true)
    } else {
      // Fallback for when ScrollSmoother isn't available
      scrollPosition = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
      document.body.style.touchAction = 'none'
    }

    isLocked.value = true
  }

  const unlockScroll = () => {
    if (!isLocked.value) return

    // Get the ScrollSmoother instance
    const smoother = ScrollSmoother.get()

    if (smoother) {
      // Resume ScrollSmoother
      smoother.paused(false)

      // Restore scroll position
      smoother.scrollTo(scrollPosition, false) // false = no animation
    } else {
      // Fallback for when ScrollSmoother isn't available
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.touchAction = ''
      window.scrollTo(0, scrollPosition)
    }

    isLocked.value = false
  }

  return {
    isLocked,
    lockScroll,
    unlockScroll
  }
}
