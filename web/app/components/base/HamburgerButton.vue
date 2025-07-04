<template>
  <button class="relative z-[200]" aria-label="Toggle menu">
    <div class="w-8 h-2.5 flex flex-col justify-between hamburger-button">
      <span
        class="h-0.25 w-full origin-center transition-all duration-300"
        :class="{ 'rotate-45 translate-y-[4.5px]': isOpen }"
        style="background-color: transparent"
      />
      <span
        class="h-0.25 w-full transition-all duration-300"
        :class="{ 'opacity-0': isOpen }"
        style="background-color: transparent"
      />
      <span
        class="h-0.25 w-full origin-center transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-[4.5px]': isOpen }"
        style="background-color: transparent"
      />
    </div>
  </button>
</template>

<script setup>
defineProps({ isOpen: Boolean })
</script>
