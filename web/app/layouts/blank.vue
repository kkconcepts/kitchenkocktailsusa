<script setup>
import { useRoute, computed } from '#imports'

const route = useRoute()
const pageClass = computed(() => {
  const path = route.path.slice(1).replace(/\//g, '-') || 'home'
  return ['page', `page-${path}`]
})
</script>

<template>
  <div>
    <main class="main" role="main">
      <slot />
    </main>
  </div>
</template>
