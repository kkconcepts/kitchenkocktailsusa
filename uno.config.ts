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
    ]
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
