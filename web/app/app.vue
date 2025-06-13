<script setup>
import { appName, appDescription, ogImage } from './constants'

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
    <main id="main" role="main">
      <NuxtLayout>
        <NuxtPage />
        <AppFooter />
      </NuxtLayout>
    </main>
  </div>
</template>

<style>
#__nuxt {
  margin: 0;
  padding: 0;
}

#main {
  display: block;
  unicode-bidi: isolate;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

.page {
  min-height: 100vh;
}
</style>
