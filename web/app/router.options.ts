import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // optional: preserve position when using back/forward navigation
    if (savedPosition) return savedPosition

    // otherwise, prevent native scroll and let ScrollSmoother handle it
    return false
  }
}
