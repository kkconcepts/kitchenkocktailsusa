<script setup>
import { productTypes } from '~/utils/productTypes'
import { useMenuFilter } from '~/composables/useMenuFilter'
import { useToast } from '~/composables/useToast'

// Accept items as a prop instead of fetching
const props = defineProps(['items'])

const { filterItems } = useMenuFilter()

// Use the provided items
const filteredItems = computed(() => filterItems(props.items || []))

// Group menu items by category
const menuByCategory = computed(() => {
  const grouped = {}

  productTypes.forEach((type) => {
    if (type.value !== 'all') {
      grouped[type.value] = filteredItems.value.filter((item) => item.productType === type.value)
    }
  })

  return grouped
})

const { getToastUrl } = useToast()
</script>

<template>
  <div class="space-y-16">
    <template v-for="type in productTypes" :key="type.value">
      <div v-if="type.value !== 'all'" :id="type.value" class="scroll-mt-32">
        <template v-if="menuByCategory[type.value]?.length > 0">
          <h2 class="f-text-21-31 font-gt-ultra uppercase tracking-wide mb-2">
            {{ type.label }}
          </h2>
          <div class="divider h-0.25 bg-black w-full">
            <div class="h-full bg-black"></div>
          </div>
          <!-- Menu Grid Section -->
          <div class="py-6">
            <!-- Grid Container -->
            <div
              id="main-content"
              class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              data-grid
            >
              <div
                v-for="item in menuByCategory[type.value]"
                :key="item._id"
                class="bg-dark-600 shadow-lg menu-card animate-item flex flex-col h-full"
                ref="menuCards"
              >
                <NuxtLink :to="`/menu/${item.slug}`" class="block h-44">
                  <NuxtImg
                    :src="item.imageUrl"
                    :alt="item.name"
                    class="w-full h-full object-cover"
                  />
                </NuxtLink>
                <div class="p-4 flex flex-col flex-grow">
                  <div class="flex md:flex-row flex-col justify-between items-start gap-2">
                    <h3 class="f-text-14-16 tracking-tight font-semibold line-clamp-2 flex-1">
                      {{ item.name }}
                    </h3>
                    <p class="f-text-14-18 font-semibold whitespace-nowrap">
                      ${{ item.price.toFixed(2) }}
                    </p>
                  </div>

                  <div class="mt-auto hidden f-gap-4-8">
                    <NuxtLink
                      :href="getToastUrl(item)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block w-full py-2 text-center font-semibold bg-brand-dark text-white hover:bg-brand-dark/90 transition-colors duration-200"
                    >
                      Order Online
                    </NuxtLink>
                    <NuxtLink
                      :to="`/menu/${item.slug}`"
                      class="block w-full py-2 text-center font-semibold bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors duration-200"
                    >
                      See Details
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="hidden">{{ type.label }}</div>
        </template>
      </div>
    </template>
  </div>
</template>
