<script setup>
const props = defineProps({
  category: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: 'h-auto'
  },
  dividerWidth: {
    type: String,
    default: 'w-[2px]'
  },
  dividerColor: {
    type: String,
    default: 'bg-brand-accent'
  }
})
</script>

<template>
  <div :class="height">
    <div class="flex flex-row items-start w-full gap-8">
      <!-- Divider stretches with content -->
      <div :class="[dividerWidth, dividerColor]" class="self-stretch hidden"></div>

      <!-- Content -->
      <div class="flex flex-col fade-group w-full" data-type="stagger">
        <!-- Custom slot content -->
        <slot v-if="$slots.default" />

        <!-- Fallback to prop-based content -->
        <template v-else>
          <p
            v-if="category"
            class="animate-child f-text-11-12 text-start mb-4 tracking-0.25 font-semibold uppercase text-brand-accent"
          >
            {{ category }}
          </p>

          <h3
            v-if="title"
            class="animate-child text-4xl font-gt-ultra text-start uppercase tracking-wide mb-12"
          >
            <slot name="title">{{ title }}</slot>
          </h3>

          <p
            v-if="description"
            class="animate-child font-light max-w-xl leading-snug f-text-15-16 mb-8"
          >
            {{ description }}
          </p>

          <div v-if="$slots.buttons" class="animate-child flex flex-row gap-4">
            <slot name="buttons" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
