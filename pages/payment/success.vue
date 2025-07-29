<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white py-12 px-4">
    <UContainer class="text-center max-w-xl">
      <div class="mb-12">
        <UIcon name="i-heroicons-check-circle" class="w-24 h-24 text-green-400 mx-auto animate-pulse" />
        <h1 class="text-4xl md:text-6xl font-black mt-6">Payment Successful!</h1>
        <p class="text-lg md:text-xl mt-4 text-white/80">
          Welcome to UniPartiesKL Elite. You’ll receive full access within a few minutes.
        </p>
      </div>

      <UButton
        size="xl"
        class="bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 hover:from-[#fe2905]/90 hover:to-[#fe2905] text-white font-black px-16 py-8 text-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#fe2905]/50 group relative overflow-hidden"
        :href="telegramLink"
        target="_blank"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <UIcon name="i-heroicons-paper-airplane" class="mr-4 group-hover:animate-bounce text-3xl" />
        JOIN TELEGRAM GROUP
      </UButton>

      <p class="text-sm text-white/60 mt-8">
        Having trouble? <a href="mailto:support@unipartieskl.com" class="text-[#fe2905] underline">Contact support</a>
      </p>
    </UContainer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const sessionId = route.query.session_id

// Optionally verify session or fetch more info here.

const telegramLink = 'https://t.me/UniPartiesKLElite' // TODO: replace with real invite link
</script> 