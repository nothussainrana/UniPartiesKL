// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: ['@nuxt/ui'],
  
  // Cloudflare Pages configuration
  nitro: {
    preset: 'cloudflare-pages'
  },
  
  // Performance optimizations
  experimental: {
    payloadExtraction: false
  },
  
  // App configuration
  app: {
    head: {
      title: 'UniPartiesKL - Your Ultimate Party Destination',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover the best parties and events in Kuala Lumpur with UniPartiesKL' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
