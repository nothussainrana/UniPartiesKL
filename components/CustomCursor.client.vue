<template>
  <div v-show="isPointerFine" :class="{ 'cursor-hover': isHovering }">
    <div class="cursor-ring" :style="ringStyle"></div>
    <div class="cursor-dot" :style="dotStyle"></div>
  </div>
  
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

const x = ref(0)
const y = ref(0)
const dotX = ref(0)
const dotY = ref(0)
const scale = ref(1)
const isHovering = ref(false)
const isPointerFine = ref(false)

let raf = 0

const update = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
}

const animate = () => {
  dotX.value += (x.value - dotX.value) * 0.25
  dotY.value += (y.value - dotY.value) * 0.25
  raf = requestAnimationFrame(animate)
}

const ringStyle = computed(() => ({
  '--x': `${x.value - 18}px`,
  '--y': `${y.value - 18}px`,
  '--scale': scale.value.toString()
} as any))

const dotStyle = computed(() => ({
  '--x': `${dotX.value - 4}px`,
  '--y': `${dotY.value - 4}px`
} as any))

const onMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  const hoverable = target?.closest?.('a, button, [role="button"], .magnetic, .hoverable')
  isHovering.value = Boolean(hoverable)
  scale.value = isHovering.value ? 1.4 : 1
}

onMounted(() => {
  isPointerFine.value = window.matchMedia('(pointer: fine)').matches
  if (!isPointerFine.value) return
  document.documentElement.classList.add('cursor-enabled')
  window.addEventListener('mousemove', update)
  window.addEventListener('mouseover', onMouseOver)
  animate()
})

onUnmounted(() => {
  if (!isPointerFine.value) return
  window.removeEventListener('mousemove', update)
  window.removeEventListener('mouseover', onMouseOver)
  cancelAnimationFrame(raf)
  document.documentElement.classList.remove('cursor-enabled')
})
</script>


