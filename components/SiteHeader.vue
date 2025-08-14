<template>
  <UContainer class="py-2">
    <nav class="fixed top-2 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-3 whitespace-nowrap backdrop-blur-xl bg-black/40 rounded-2xl px-8 py-3 border border-[#fe2905]/20 shadow-xl shadow-[#fe2905]/10 w-fit">
      <NuxtLink to="/" class="relative group inline-flex items-center">
        <img src="/logo-nobg.png" alt="UniPartiesKL logo" class="w-12 h-12 object-contain logo-spin" />
        <div class="absolute inset-0 w-12 h-12 bg-[#fe2905]/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
      </NuxtLink>
      <div class="flex items-center gap-2">
        <NuxtLink to="/events">
          <UButton variant="ghost" class="text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-2 py-1 text-sm font-semibold">Events</UButton>
        </NuxtLink>
        <NuxtLink to="/venues">
          <UButton variant="ghost" class="text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-2 py-1 text-sm font-semibold">Venues</UButton>
        </NuxtLink>
        <NuxtLink to="/about">
          <UButton variant="ghost" class="text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 px-2 py-1 text-sm font-semibold">About</UButton>
        </NuxtLink>
      </div>
      <UButton 
        @click="navigateToPayment"
        class="bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 hover:from-[#fe2905]/90 hover:to-[#fe2905] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#fe2905]/40 font-bold px-4 py-2 text-sm text-white"
      >
        Join Group Chat
      </UButton>
    </nav>
  </UContainer>
</template>

<script setup>
const navigateToPayment = async () => {
  await navigateTo('/payment')
}
</script>

<style scoped>
.logo-spin { animation: spin 8s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>


