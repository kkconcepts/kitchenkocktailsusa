<script setup>
import { useScrollSmoother } from '~/composables/useScrollSmoother'
import { usePageClasses } from '~/composables/usePageClasses'

useScrollSmoother()
const pageClasses = usePageClasses()

import { useMenuFilter } from '~/composables/useMenuFilter'

const { searchQuery, selectedCity, selectedType } = useMenuFilter()
</script>

<template>
  <div>
    <AppHeader>
      <template #menu-categories>
        <FeaturesMenuCategories
          v-model:searchQuery="searchQuery"
          v-model:selectedCity="selectedCity"
          v-model:selectedType="selectedType"
        />
      </template>
    </AppHeader>
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
