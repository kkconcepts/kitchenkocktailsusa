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
      brandDark: '#1B1B1B',
      brandText: '#2E2E30',
      brandStroke: 'rgb(183, 159, 105)',
      brandBody: '#f2f0ed'
    },
    fontFamily: {
      'gt-ultra': ['GT Ultra Fine', 'sans-serif'],
      'gt-pantheon': ['GT Pantheon Text', 'sans-serif']
    }
  },
  presets: [
    presetWind3,
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [
          {
            name: 'Montserrat',
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
