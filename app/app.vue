<template>
  <div data-scroll-container>
    <NuxtLayout>
      <transition name="page-reveal" mode="out-in">
        <NuxtPage />
      </transition>
    </NuxtLayout>
    <ClientOnly>
      <CustomCursor />
    </ClientOnly>
  </div>
</template>

<script setup>
</script>

<style>
/* Page and layout reveal transitions with mask wipe */
.page-reveal-enter-active,
.page-reveal-leave-active,
.layout-reveal-enter-active,
.layout-reveal-leave-active {
  transition: clip-path 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease;
}
.page-reveal-enter-from,
.layout-reveal-enter-from {
  clip-path: inset(0 0 100% 0 round 16px);
  opacity: 0.6;
}
.page-reveal-enter-to,
.layout-reveal-enter-to {
  clip-path: inset(0 0 0 0 round 16px);
  opacity: 1;
}
.page-reveal-leave-from,
.layout-reveal-leave-from {
  clip-path: inset(0 0 0 0 round 16px);
  opacity: 1;
}
.page-reveal-leave-to,
.layout-reveal-leave-to {
  clip-path: inset(100% 0 0 0 round 16px);
  opacity: 0.6;
}
</style>