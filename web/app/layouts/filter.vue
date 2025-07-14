<script setup>
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
    <slot />
  </div>
</template>
