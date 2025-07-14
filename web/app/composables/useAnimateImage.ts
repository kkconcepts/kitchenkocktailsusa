import gsap from 'gsap'

export const useAnimateImage = (el: Element) => {
  const tl = gsap.timeline()

  tl.set(el, {
    overflow: 'hidden',
    pointerEvents: 'none'
  })

  tl.fromTo(
    el,
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      autoAlpha: 0,
      y: 100
    },
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1,
      autoAlpha: 1,
      y: 0,
      ease: 'quart.out',
      clearProps: 'all'
    }
  )

  // Animate child image if it exists (NuxtImg will render an img inside)
  const child = el.querySelector('img')
  if (child) {
    tl.fromTo(child, { scale: 1.025 }, { scale: 1, duration: 0.7 }, 0)
  }

  return tl
}
