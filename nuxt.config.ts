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
  modules: ['@unocss/nuxt', '@nuxt/image', '@nuxt/icon', '@nuxtjs/seo'],
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
  robots: {
    config: {
      UserAgent: '*',
      Disallow: ''
    }
  },
  app: {
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
