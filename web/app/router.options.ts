import type {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  RouterScrollBehavior
} from 'vue-router'

export default {
  scrollBehavior(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    savedPosition: Awaited<ReturnType<RouterScrollBehavior>>
  ): ReturnType<RouterScrollBehavior> {
    if (savedPosition) return savedPosition
    return false
  }
}
