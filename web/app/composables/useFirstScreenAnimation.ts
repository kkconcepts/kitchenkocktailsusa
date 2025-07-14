import gsap from 'gsap'
import { nextTick } from 'vue'

export const useFirstScreenAnimation = async (parentSelector: string) => {
  await nextTick()

  const parent = document.querySelector(parentSelector)
  if (!parent) return

  const title = parent.querySelector('.page-title')
  const header = document.querySelector('.app-header') // <- notice: global, not scoped to parent
  const pageMask = parent.querySelector('.page-mask')

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

  if (header) {
    tl.from(
      header,
      {
        yPercent: 0,
        clearProps: 'all'
      },
      '<'
    )
  }

  return tl
}
