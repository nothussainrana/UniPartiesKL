import { defineNuxtPlugin } from 'nuxt/app'
import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin((nuxtApp) => {
  let loco: LocomotiveScroll | null = null

  nuxtApp.hook('app:mounted', () => {
    const container = document.querySelector<HTMLElement>('[data-scroll-container]')
    if (!container) return
    loco = new LocomotiveScroll({
      el: container,
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: false },
      tablet: { smooth: true }
    })
  })

  nuxtApp.hook('page:finish', () => {
    // refresh after route change
    requestAnimationFrame(() => loco?.update())
  })

  return {
    provide: { locomotive: () => loco }
  }
})


