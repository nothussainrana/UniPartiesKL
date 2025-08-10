import { defineNuxtPlugin } from 'nuxt/app'
import type { Directive } from 'vue'
import VanillaTilt from 'vanilla-tilt'
import gsap from 'gsap'

const tilt: Directive<HTMLElement, Record<string, any>> = {
  mounted(el, binding) {
    const options = Object.assign({ max: 12, speed: 400, glare: true, 'max-glare': 0.2 }, binding.value || {})
    VanillaTilt.init(el, options)
  },
  unmounted(el: any) {
    el?.vanillaTilt?.destroy?.()
  }
}

const magnetic: Directive<HTMLElement, number> = {
  mounted(el, binding) {
    const strength = binding.value ?? 0.25
    el.classList.add('magnetic')
    el.style.transform = 'translate3d(0,0,0)'
    el.style.transition = 'transform 0.12s ease-out'
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      const moveX = relX * rect.width * strength * 0.2
      const moveY = relY * rect.height * strength * 0.2
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
    }
    const onLeave = () => { el.style.transform = 'translate3d(0,0,0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    ;(el as any)._magneticHandlers = { onMove, onLeave }
  },
  unmounted(el: any) {
    const h = el._magneticHandlers
    if (h) {
      el.removeEventListener('mousemove', h.onMove)
      el.removeEventListener('mouseleave', h.onLeave)
    }
  }
}

const reveal: Directive<HTMLElement, { y?: number; opacity?: number }> = {
  mounted(el, binding) {
    const y = binding.value?.y ?? 40
    const opacity = binding.value?.opacity ?? 0
    gsap.set(el, { y, opacity })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(el, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
          observer.disconnect()
        }
      })
    }, { threshold: 0.15 })
    observer.observe(el)
    ;(el as any)._revealObserver = observer
  },
  unmounted(el: any) {
    el._revealObserver?.disconnect?.()
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tilt', tilt)
  nuxtApp.vueApp.directive('magnetic', magnetic)
  nuxtApp.vueApp.directive('reveal', reveal)
})


