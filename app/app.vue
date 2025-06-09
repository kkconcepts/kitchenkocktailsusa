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
      </NuxtLayout>
    </main>
    <AppFooter />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

#__nuxt {
  margin: 0;
  padding: 0;
}

#main {
  display: block;
  unicode-bidi: isolate;
}
</style>
