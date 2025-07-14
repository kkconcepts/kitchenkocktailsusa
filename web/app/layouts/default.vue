<script setup>
import { useScrollSmoother } from '~/composables/useScrollSmoother'
import { usePageClasses } from '~/composables/usePageClasses'
import { useFirstScreenAnimation } from '~/composables/useFirstScreenAnimation'

useScrollSmoother()
const pageClasses = usePageClasses()

onMounted(async () => {
  await useFirstScreenAnimation('.page-content')
})
</script>

<template>
  <div id="viewport">
    <AppHeader />
    <div :class="pageClasses">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main role="main" class="main">
            <slot />
            <AppFooterAlt />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#viewport {
  overflow: hidden;
  position: relative;
  height: 100vh;
}

#smooth-wrapper {
  height: 100%;
  overflow: hidden;
  position: fixed;
  inset: 0;
}

#smooth-content {
  will-change: transform;
  min-height: 100vh;
}
</style>
