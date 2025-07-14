import gsap from 'gsap'

export const useAnimateText = (el: Element) => {
  return gsap.timeline().from(el, {
    opacity: 0,
    y: 50,
    duration: 0.7,
    ease: 'power2.out',
    clearProps: 'all'
  })
}
