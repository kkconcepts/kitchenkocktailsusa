export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ['@/assets/css/main.css', '@unocss/reset/tailwind.css'],
  features: {
    inlineStyles: false
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  modules: ['@unocss/nuxt', '@nuxt/image', '@nuxt/icon', '@nuxtjs/seo', '@nuxtjs/sanity'],
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    preload: true,
    domains: ['kitchenkocktailsusa.com'],
    provider: 'ipx',
    ipx: {
      modifiers: {
        format: 'webp',
        quality: '80',
        progressive: true
      }
    }
  },
  build: {
    transpile: ['gsap']
  },
  site: {
    name: 'Kitchen + Kocktails USA',
    url: 'https://kitchenkocktailsusa.com',
    description:
      'Experience soulful Southern dining with a modern twist. Discover our signature cocktails, bold flavors, and vibrant atmosphere.',
    defaultImage: '/og-image.jpg',
    titleSeparator: '|',
    language: 'en',
    trailingSlash: false
  },
  plugins: [{ src: '~/plugins/gsap.client.ts' }],
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2024-01-01',
    useCdn: true
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    mailchimp: {
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER,
      listID: process.env.MAILCHIMP_LIST_ID
    }
  },
  app: {
    pageTransition: { name: 'page-transition', mode: 'out-in' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
        // Add these meta tags
        { property: 'og:title', content: 'Kitchen + Kocktails USA' },
        { property: 'og:description', content: 'Description goes here' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:url', content: 'https://kitchenkocktailsusa.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kitchen + Kocktails USA' },
        { name: 'twitter:description', content: 'Description goes here' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        { name: 'twitter:url', content: 'https://kitchenkocktailsusa.com' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        {
          rel: 'icon',
          href: '/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16'
        },
        {
          rel: 'icon',
          href: '/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180'
        },
        { rel: 'canonical', href: 'https://kitchenkocktailsusa.com' }
      ]
    }
  }
})
