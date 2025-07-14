import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const usePageClasses = () => {
  const route = useRoute()

  const pageClasses = computed((): string => {
    const base = 'page'
    const routeName = route.name?.toString().toLowerCase() || 'unknown'
    return `${base} page-${routeName}`
  })

  return pageClasses
}
