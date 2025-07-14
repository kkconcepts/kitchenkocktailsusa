<template>
  <button
    class="button f-text-12-13 font-semibold uppercase rounded-0.5 max-w-xs bg-brand-accent border border-brand-accent text-brand-accent f-py-6-8 f-px-16-20 tracking-wider transition-colors duration-300"
    :class="buttonClass"
    :aria-label="ariaLabel"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  buttonClass: {
    type: String,
    default: ''
  },
  ariaLabel: {
    type: String,
    default: 'Button'
  }
})

onMounted(() => {
  if (process.client) {
    const buttons = document.querySelectorAll('.button')

    buttons.forEach((item) => {
      let span = item.querySelector('span')
      let tl = gsap.timeline({ paused: true })

      tl.to(span, { duration: 0.35, yPercent: -150, ease: 'quart.in' })
      tl.set(span, { yPercent: 150 })
      tl.to(span, { duration: 0.2, yPercent: 0 })

      item.addEventListener('mouseenter', () => tl.play(0))
    })
  }
})
</script>

<style scoped>
.button {
  position: relative;
  overflow: hidden;
}

.button span {
  display: inline-block;
}
</style>
