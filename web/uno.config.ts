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

export default defineConfig({
  theme: {
    colors: {
      brandPrimary: '#C72222',
      brandSecondary: '#26ACE2',
      brandAccent: '#AF905C',
      brandLight: 'rgb(239, 229, 212)',
      brandLightAccent: '#F4EAD3',
      brandDark: 'rgb(22, 22, 24)',
      brandText: '#2E2E30',
      brandStroke: 'rgb(183, 159, 105)',
      brandBody: 'rgb(222, 213, 202)'
    },
    fontFamily: {
      'gt-ultra': ['GT Ultra Fine', 'sans-serif'],
      'gt-pantheon': ['GT Pantheon Text', 'sans-serif']
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
      provider: 'google',
      fonts: {
        sans: [
          {
            name: 'Josefin Sans',
            weights: ['300', '400', '500', '600', '700'],
            italic: true
          }
        ]
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
