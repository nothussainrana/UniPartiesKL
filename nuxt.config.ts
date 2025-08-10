
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxt/ui',
    ['@nuxtjs/tailwindcss', { exposeConfig: true }]
  ],

  // Global CSS
  css: ['~/assets/css/main.css'],
  
  // Cloudflare Pages configuration
  nitro: {
    preset: 'cloudflare-pages'
  },
  
  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      baseUrl: process.env.NUXT_PUBLIC_SITE_URL || process.env.DOMAIN
    }
  },
  
  // Performance optimizations
  experimental: {
    payloadExtraction: false
  },
  
  // App configuration
  app: {
    pageTransition: { name: 'page-reveal', mode: 'out-in' },
    layoutTransition: { name: 'layout-reveal', mode: 'out-in' },
    head: {
      title: 'UniPartiesKL - Unleash The Night | KL\'s Premier Party Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Experience the ultimate party destination in Kuala Lumpur. Exclusive events, premium venues, and unforgettable nights await.' },
        { name: 'keywords', content: 'KL parties, Kuala Lumpur nightlife, exclusive events, premium venues, party platform' },
        { property: 'og:title', content: 'UniPartiesKL - Unleash The Night' },
        { property: 'og:description', content: 'KL\'s most exclusive party platform' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
