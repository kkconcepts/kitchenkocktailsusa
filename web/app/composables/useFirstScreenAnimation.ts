import gsap from 'gsap'
import { nextTick } from 'vue'

// Add a flag to track if this is the first load
let hasRunFirstAnimation = false

export const useFirstScreenAnimation = async (parentSelector: string) => {
  await nextTick()

  // Only run on first page load, not during layout transitions
  if (hasRunFirstAnimation) return
  hasRunFirstAnimation = true

  const parent = document.querySelector(parentSelector)
  if (!parent) return

  const title = parent.querySelector('.page-title')
  const header = document.querySelector('.app-header') // global header
  const pageMask = parent.querySelector('.page-mask')
  const heroImage = document.querySelector('.hero-image') // global hero image

  const tl = gsap.timeline()

  if (pageMask) tl.from(pageMask, { opacity: 0 })

  if (title) {
    tl.from(title, {
      yPercent: 100,
      opacity: 0,
      ease: 'ease.in',
      clearProps: 'all'
    })
  }

  if (heroImage) {
    tl.from(
      heroImage,
      {
        autoAlpha: 0,
        duration: 1.5,
        ease: 'ease.in',
        clearProps: 'all'
      },
      '<'
    )
  }

  if (header) {
    tl.from(
      header,
      {
        yPercent: -100,
        ease: 'ease.in',
        clearProps: 'all'
      },
      '<'
    )
  }

  return tl
}

// Add a method to reset the animation flag (useful for development)
export const resetFirstScreenAnimation = () => {
  hasRunFirstAnimation = false
}
