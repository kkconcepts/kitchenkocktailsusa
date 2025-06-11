<script setup>
import { ogImage } from '~/constants'
import { ref } from 'vue'

const showAlert = ref(true)

const title = ref('Home')
const pageDescription = ref(
  'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.'
)

const pageClass = computed(() => `page page-${title.value.toLowerCase()}`)

useSeoMeta({
  title: title,
  ogTitle: title,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div :class="pageClass">
    <ClientOnly>
      <ModulesPopUp
        :is-open="showAlert"
        title="We've made space—just for you."
        @close="showAlert = false"
      >
        <template #image>
          <NuxtImg
            src="/hero-4.jpg"
            alt="Restaurant interior"
            class="w-full md:h-[540px] h-360px object-cover"
          />
        </template>
        <p>
          We've reimagined comfort in every detail. More space, more style, and all the soul you
          love. Celebrate with us at our Chicago grand opening.
        </p>
      </ModulesPopUp>
    </ClientOnly>
    <section class="section">
      <SectionsHero />
    </section>
    <LayoutContain>
      <section class="section max-w-4xl m-auto">
        <div class="home-container text-center py-24 flex flex-col items-center justify-center">
          <p class="text-sm mb-4 tracking-0.5 font-semibold text-brand-accent">WELCOME HOME</p>
          <h1 class="md:text-4xl text-2xl leading-tight font-black mb-4 tracking-tight">
            Tasty southern cuisine + craft kocktails
          </h1>
          <p class="md:text-lg text-md mb-6 leading-tight font-regular">
            Our Menu is an extensive menu with a focus on classic soul food entrees while providing
            a modern twist on things. Offering brunch on the weekend and featuring over 16 specialty
            cocktails, there is something for everyone at Kitchen + Kocktails by Kevin Kelley.
          </p>
          <NuxtLink
            to="/reservations"
            class="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors duration-200"
          >
            Reserve a table
          </NuxtLink>
        </div>
      </section>
    </LayoutContain>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
}
</style>
