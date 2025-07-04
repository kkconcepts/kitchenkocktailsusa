<script setup>
import { appName, appDescription, ogImage } from '~/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother = ref(null)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    smoother.value = ScrollSmoother.create({
      wrapper: '#page-wrapper',
      content: '#page-content',
      smooth: 1.4,
      speed: 1,
      effects: true
    })
  }
})

onUnmounted(() => {
  if (smoother.value) {
    smoother.value.kill()
  }
})

const route = useRoute()

useSeoMeta({
  title: appName,
  description: appDescription,
  ogTitle: appName,
  ogDescription: appDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div id="__layout">
    <AppHeader />
    <div :class="['page', 'page-' + route.name]">
      <div id="page-wrapper" class="page-wrapper">
        <div id="page-content" class="page-content">
          <main role="main" class="main">
            <NuxtPage />
            <SectionsCateringCTA />
            <AppFooter />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#__nuxt {
  margin: 0;
  padding: 0;
}

#main {
  display: block;
  position: relative;
}

.page {
  min-height: 100vh;
  width: 100%;
}
</style>
