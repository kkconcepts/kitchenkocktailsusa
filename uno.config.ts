import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

import { presetFluid } from 'unocss-preset-fluid'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  theme: {
    breakpoints: {
      xs: '480px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
      '2xl': '1920px'
    }
  },
  shortcuts: [
    // Element Wrapper
    ['l-ew', 'relative block overflow-hidden rounded-2xl mx-auto max-w-full w-hull h-full w-full'],
    // Hide Elements
    ['hide-sm', 'hidden sm:block'],
    ['hide-md', 'hidden md:block'],
    ['hide-lg', 'hidden lg:block'],
    ['hide-xl', 'hidden xl:block'],
    ['hide-2xl', 'hidden 2xl:block'],
    // Inline Flex Containers
    ['l-if1', 'inline-flex items-center'],
    ['l-if2', 'inline-flex items-center justify-between'],
    ['l-if3', 'inline-flex items-center justify-around'],
    ['l-if4', 'inline-flex items-center justify-evenly'],
    ['l-if5', 'inline-flex items-start justify-start'],
    ['l-if6', 'inline-flex items-end justify-end'],
    // Flex Containers (row)
    ['l-f1', 'flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col'],
    ['l-f2', 'flex items-center justify-between'],
    ['l-f3', 'flex items-center justify-around'],
    ['l-f4', 'flex items-center justify-evenly'],
    ['l-f5', 'flex flex-col md:flex-row items-start'],
    ['l-f6', 'flex items-end justify-end'],
    // Flex Containers (column)
    ['l-f7', 'flex flex-col items-start justify-center'],
    ['l-f8', 'flex flex-col items-start justify-start'],
    // Gap Utilities
    ['l-g0', 'f-gap-32-96'],
    ['l-g1', 'f-gap-32-64'],
    ['l-g2', 'f-gap-24-32'],
    ['l-g3', 'f-gap-16-24'],
    ['l-g4', 'f-gap-8-12'],
    ['l-g4-alt', 'f-gap-8-32'],
    ['l-g5', 'f-gap-4-8'],
    ['l-g6', 'f-gap-2-4'],
    // Advanced Flex Containers
    ['l-grid-2', 'flex flex-wrap f-gap-24-32'],
    ['l-grid-3', 'flex flex-wrap f-gap-24-32'],
    ['l-stack', 'flex flex-col f-gap-24-32'],
    // Responsive Flexbox
    ['l-row-md', 'flex flex-row md:flex-col f-gap-16-24'],
    ['l-col-lg', 'flex flex-col lg:flex-row f-gap-16-24'],
    // Responsive Containers
    ['l-cxs', 'f-max-w-320-480 mx-auto px-4'],
    ['l-csm', 'f-max-w-480-768 mx-auto px-4'],
    ['l-cmd', 'f-max-w-768-1024 mx-auto px-4'],
    ['l-clg', 'f-max-w-1024-1280 mx-auto px-4'],
    ['l-cxl', 'f-max-w-1280-1536 mx-auto px-4'],
    ['l-c2xl', 'f-max-w-1536-1920 mx-auto px-4'],
    // Hybrid Containers
    ['l-hc', 'flex-col f-px-24-96'],
    ['l-hc1', 'flex flex-col sm:flex-row'],
    // Headings with Letter Spacing
    ['t-s0', 'f-text-54-84 font-bold leading-[0.95] tracking-tight'],
    ['t-s1', 'f-text-32-48 font-bold leading-[1.3] tracking-normal'],
    ['t-s2', 'f-text-28-40 font-bold leading-[1.3] tracking-normal'],
    ['t-s3', 'f-text-24-36 font-bold leading-[1.3] tracking-normal'],
    ['t-s4', 'f-text-21-28 font-bold leading-[1.15] tracking-normal'],
    ['t-s5', 'f-text-18-24 font-bold leading-[1.3] tracking-normal'],
    ['t-s6', 'f-text-18-20 font-medium leading-[1.3] tracking-normal'],
    // Paragraphs with Slightly Looser Spacing
    ['t-s7', 'f-text-16-20 font-normal leading-[1.35] tracking-normal'],
    ['t-s7-a', 'f-text-16-24 font-normal leading-[1.35] tracking-normal'],
    ['t-s8', 'f-text-16-18 font-normal leading-[1.35] tracking-normal'],
    ['t-s9', 'f-text-15-16 font-normal leading-[1.3] tracking-normal'],
    // Buttons
    [
      'btn',
      'flex items-center t-s8 f-py-10-10 f-px-16-20 rounded-full text-white bg-dark-800 hover:bg-dark-400 transition ease-in-out duration-250'
    ],
    ['btn-2', 'flex items-center t-s8 f-py-10-10 f-px-16-20 rounded-full text-white'],
    [
      'btn-white',
      'flex items-center t-s8 f-py-10-10 f-px-16-24 rounded-full text-white bg-true-gray-800 border border-true-gray-800 hover:bg-dark-500 transition ease-in-out duration-200'
    ],
    // Icons
    ['l-ic1', 'f-w-3-5 f-h-3-5'],
    ['l-ic2', 'f-w-5-8 f-h-5-8'],
    ['l-ic3', 'f-w-20-24 f-h-20-24'],
    // Transitions
    ['l-t1', 'transition ease-in-out duration-250 hover:opacity-75'],
    ['l-t2', 'opacity-100 transition ease-in-out duration-350']
  ],
  presets: [
    presetWind3,
    presetWebFonts({
      fonts: {
        sans: 'Helvetica'
      }
    }),
    presetAttributify(),
    presetFluid({
      maxWidth: 1920,
      minWidth: 480
    }),
    presetIcons({ scale: 1.2 }),
    presetTypography()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
