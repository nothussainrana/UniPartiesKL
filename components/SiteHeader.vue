<template>
  <UContainer class="py-2">
    <nav class="fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between backdrop-blur-xl bg-black/40 rounded-2xl px-4 py-3 border border-[#fe2905]/20 shadow-xl shadow-[#fe2905]/10 w-[calc(100vw-1rem)] max-w-4xl"
      style="top: calc(env(safe-area-inset-top, 0px) + 0.5rem)"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="relative group inline-flex items-center">
        <img src="/logo-nobg.png" alt="UniPartiesKL logo" class="w-10 h-10 object-contain logo-spin" />
        <div class="absolute inset-0 w-10 h-10 bg-[#fe2905]/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
      </NuxtLink>

      <!-- Desktop Navigation (hidden on mobile) -->
      <div class="hidden md:flex items-center gap-2">
        <NuxtLink to="/events">
          <UButton variant="ghost" color="gray" class="text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-3 py-2 text-sm font-semibold">Events</UButton>
        </NuxtLink>
        <NuxtLink to="/venues">
          <UButton variant="ghost" color="gray" class="text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-3 py-2 text-sm font-semibold">Venues</UButton>
        </NuxtLink>
        <NuxtLink to="/about">
          <UButton variant="ghost" color="gray" class="text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-3 py-2 text-sm font-semibold">About</UButton>
        </NuxtLink>
      </div>

      <!-- Join Group Chat Button (center on mobile) -->
      <UButton 
        @click="navigateToPayment"
        class="bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 hover:from-[#fe2905]/90 hover:to-[#fe2905] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#fe2905]/40 font-bold px-4 py-2 text-sm text-white"
      >
        Join Group Chat
      </UButton>

      <!-- Hamburger Menu (mobile only) -->
      <UButton 
        variant="ghost" 
        color="gray"
        class="md:hidden text-white hover:text-[#fe2905] p-2"
        @click="isMenuOpen = !isMenuOpen"
      >
        <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
      </UButton>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <div 
      v-if="isMenuOpen"
      class="fixed top-20 left-1/2 -translate-x-1/2 z-40 md:hidden backdrop-blur-xl bg-black/90 rounded-2xl border border-[#fe2905]/20 shadow-xl shadow-[#fe2905]/10 w-[calc(100vw-1rem)] max-w-sm"
    >
      <div class="flex flex-col p-4 space-y-2">
        <NuxtLink to="/events" @click="isMenuOpen = false">
          <UButton variant="ghost" color="gray" class="w-full text-left text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-4 py-3 text-base font-semibold justify-start">Events</UButton>
        </NuxtLink>
        <NuxtLink to="/venues" @click="isMenuOpen = false">
          <UButton variant="ghost" color="gray" class="w-full text-left text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-4 py-3 text-base font-semibold justify-start">Venues</UButton>
        </NuxtLink>
        <NuxtLink to="/about" @click="isMenuOpen = false">
          <UButton variant="ghost" color="gray" class="w-full text-left text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-4 py-3 text-base font-semibold justify-start">About</UButton>
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const isMenuOpen = ref(false)

const navigateToPayment = async () => {
  await navigateTo('/payment')
}
</script>

<style scoped>
.logo-spin { animation: spin 8s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>