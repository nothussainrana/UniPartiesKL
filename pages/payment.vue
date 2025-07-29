<template>
  <div class="min-h-screen bg-black text-white overflow-hidden relative">
    <!-- Dynamic Moving Background (same as main page) -->
    <div class="fixed inset-0 z-0">
      <!-- Pure black base -->
      <div class="absolute inset-0 bg-black"></div>
      
      <!-- Moving gradient orbs -->
      <div class="absolute inset-0">
        <div class="absolute w-96 h-96 bg-gradient-radial from-[#fe2905]/20 to-transparent rounded-full blur-3xl animate-float-slow" 
             style="top: 10%; left: 10%; animation-delay: 0s;"></div>
        <div class="absolute w-80 h-80 bg-gradient-radial from-[#fe2905]/15 to-transparent rounded-full blur-3xl animate-float-medium" 
             style="top: 60%; right: 15%; animation-delay: 2s;"></div>
        <div class="absolute w-72 h-72 bg-gradient-radial from-[#fe2905]/10 to-transparent rounded-full blur-3xl animate-float-fast" 
             style="bottom: 20%; left: 30%; animation-delay: 4s;"></div>
      </div>
      
      <!-- Moving particles system -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Large moving particles -->
        <div class="absolute w-3 h-3 bg-[#fe2905] rounded-full animate-drift-1 opacity-80"></div>
        <div class="absolute w-2 h-2 bg-[#fe2905] rounded-full animate-drift-2 opacity-60"></div>
        <div class="absolute w-4 h-4 bg-[#fe2905] rounded-full animate-drift-3 opacity-40"></div>
        <div class="absolute w-1.5 h-1.5 bg-[#fe2905] rounded-full animate-drift-4 opacity-90"></div>
        <div class="absolute w-2.5 h-2.5 bg-[#fe2905] rounded-full animate-drift-5 opacity-70"></div>
        
        <!-- Medium particles -->
        <div class="absolute w-1 h-1 bg-[#fe2905] rounded-full animate-spiral-1 opacity-80"></div>
        <div class="absolute w-1.5 h-1.5 bg-[#fe2905] rounded-full animate-spiral-2 opacity-60"></div>
        <div class="absolute w-1 h-1 bg-[#fe2905] rounded-full animate-spiral-3 opacity-90"></div>
        
        <!-- Small floating particles -->
        <div class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-1"></div>
        <div class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-2"></div>
        <div class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-3"></div>
        <div class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-4"></div>
        <div class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-5"></div>
        <div class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-6"></div>
      </div>
      
      <!-- Subtle moving lines -->
      <div class="absolute inset-0">
        <div class="absolute h-px bg-gradient-to-r from-transparent via-[#fe2905]/30 to-transparent animate-line-1" style="top: 25%; width: 200px;"></div>
        <div class="absolute h-px bg-gradient-to-r from-transparent via-[#fe2905]/20 to-transparent animate-line-2" style="top: 75%; width: 150px;"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <!-- Navigation -->
      <UContainer class="py-6">
        <nav class="flex items-center justify-between backdrop-blur-xl bg-black/40 rounded-2xl px-8 py-5 border border-[#fe2905]/20 shadow-2xl shadow-[#fe2905]/10">
          <div class="flex items-center space-x-4">
            <div class="relative group">
              <UIcon name="i-heroicons-fire" class="w-10 h-10 text-[#fe2905] group-hover:animate-pulse transition-all duration-300" />
              <div class="absolute inset-0 w-10 h-10 bg-[#fe2905]/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </div>
            <NuxtLink to="/" class="text-3xl font-black bg-gradient-to-r from-white via-[#fe2905]/80 to-white bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
              UniPartiesKL
            </NuxtLink>
          </div>
          <UButton 
            @click="navigateBack"
            variant="ghost" 
            class="text-white hover:text-[#fe2905] hover:bg-[#fe2905]/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#fe2905]/20 font-semibold"
          >
            <UIcon name="i-heroicons-arrow-left" class="mr-2" />
            Back
          </UButton>
        </nav>
      </UContainer>

      <!-- Main Payment Section -->
      <UContainer class="py-20">
        <div class="max-w-4xl mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <h1 class="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
              <span class="bg-gradient-to-r from-white via-white to-[#fe2905]/90 bg-clip-text text-transparent animate-text-glow block">
                JOIN THE
              </span>
              <span class="bg-gradient-to-r from-[#fe2905] via-[#fe2905]/80 to-[#fe2905] bg-clip-text text-transparent animate-text-pulse block mt-4">
                ELITE CIRCLE
              </span>
            </h1>
            <p class="text-2xl md:text-3xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Gain exclusive access to KL's most <span class="text-[#fe2905] font-bold">coveted Telegram group</span> 
              and unlock the ultimate party experience
            </p>
          </div>

          <!-- Payment Card -->
          <UCard class="bg-gradient-to-br from-black via-black/95 to-black backdrop-blur-2xl border-2 border-[#fe2905]/30 hover:border-[#fe2905]/60 transition-all duration-700 shadow-2xl shadow-[#fe2905]/20 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-[#fe2905]/5 to-transparent"></div>
            
            <div class="relative z-10 p-12">
              <!-- VIP Package Header -->
              <div class="text-center mb-12">
                <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#fe2905] to-[#fe2905]/80 mb-6 shadow-2xl shadow-[#fe2905]/40">
                  <UIcon name="i-heroicons-trophy" class="w-10 h-10 text-white" />
                </div>
                <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
                  VIP TELEGRAM ACCESS
                </h2>
                <p class="text-xl text-white/80 font-light">
                  Join 50,000+ elite members in KL's most exclusive party network
                </p>
              </div>

              <!-- Features List -->
              <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="space-y-6">
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 rounded-full bg-[#fe2905] flex items-center justify-center">
                      <UIcon name="i-heroicons-check" class="w-5 h-5 text-white" />
                    </div>
                    <span class="text-lg text-white font-medium">Exclusive event invitations</span>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 rounded-full bg-[#fe2905] flex items-center justify-center">
                      <UIcon name="i-heroicons-check" class="w-5 h-5 text-white" />
                    </div>
                    <span class="text-lg text-white font-medium">VIP venue discounts</span>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 rounded-full bg-[#fe2905] flex items-center justify-center">
                      <UIcon name="i-heroicons-check" class="w-5 h-5 text-white" />
                    </div>
                    <span class="text-lg text-white font-medium">Priority table bookings</span>
                  </div>
                </div>
                <div class="space-y-6">
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 rounded-full bg-[#fe2905] flex items-center justify-center">
                      <UIcon name="i-heroicons-check" class="w-5 h-5 text-white" />
                    </div>
                    <span class="text-lg text-white font-medium">24/7 concierge support</span>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 rounded-full bg-[#fe2905] flex items-center justify-center">
                      <UIcon name="i-heroicons-check" class="w-5 h-5 text-white" />
                    </div>
                    <span class="text-lg text-white font-medium">Celebrity event access</span>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 rounded-full bg-[#fe2905] flex items-center justify-center">
                      <UIcon name="i-heroicons-check" class="w-5 h-5 text-white" />
                    </div>
                    <span class="text-lg text-white font-medium">Networking opportunities</span>
                  </div>
                </div>
              </div>

              <!-- Pricing -->
              <div class="text-center mb-12">
                <div class="inline-block bg-gradient-to-r from-[#fe2905]/20 to-[#fe2905]/10 rounded-2xl p-8 border border-[#fe2905]/30">
                  <div class="text-6xl md:text-7xl font-black text-[#fe2905] mb-2">
                    99RM
                  </div>
                  <div class="text-xl text-white/80 font-light">
                    One-time membership fee
                  </div>
                  <div class="text-sm text-white/60 mt-2">
                    Lifetime access • No recurring charges
                  </div>
                </div>
              </div>

              <!-- Buy Button -->
              <div class="text-center">
                <UButton 
                  @click="handlePurchase"
                  size="xl" 
                  class="bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 hover:from-[#fe2905]/90 hover:to-[#fe2905] text-white font-black px-20 py-8 text-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#fe2905]/50 group relative overflow-hidden"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <UIcon name="i-heroicons-credit-card" class="mr-4 group-hover:animate-bounce text-3xl" />
                  BUY NOW - JOIN ELITE
                </UButton>
                
                <p class="text-sm text-white/60 mt-6 max-w-md mx-auto">
                  Secure payment processing. You'll receive Telegram group access within minutes of purchase.
                </p>
              </div>
            </div>
          </UCard>

          <!-- Trust Indicators -->
          <div class="mt-16 text-center">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div class="group cursor-pointer">
                <div class="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-2 group-hover:animate-pulse transition-all duration-300">
                  50K+
                </div>
                <div class="text-white text-sm md:text-base font-semibold group-hover:text-[#fe2905] transition-colors duration-300">
                  ACTIVE MEMBERS
                </div>
              </div>
              <div class="group cursor-pointer">
                <div class="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-2 group-hover:animate-pulse transition-all duration-300">
                  2500+
                </div>
                <div class="text-white text-sm md:text-base font-semibold group-hover:text-[#fe2905] transition-colors duration-300">
                  EVENTS HOSTED
                </div>
              </div>
              <div class="group cursor-pointer">
                <div class="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-2 group-hover:animate-pulse transition-all duration-300">
                  150+
                </div>
                <div class="text-white text-sm md:text-base font-semibold group-hover:text-[#fe2905] transition-colors duration-300">
                  PREMIUM VENUES
                </div>
              </div>
              <div class="group cursor-pointer">
                <div class="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-2 group-hover:animate-pulse transition-all duration-300">
                  24/7
                </div>
                <div class="text-white text-sm md:text-base font-semibold group-hover:text-[#fe2905] transition-colors duration-300">
                  VIP SUPPORT
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script setup>
// Set page meta
useHead({
  title: 'VIP Membership - UniPartiesKL | Join Elite Telegram Group',
  meta: [
    { name: 'description', content: 'Join UniPartiesKL\'s exclusive VIP Telegram group for 99RM. Get access to premium events, VIP discounts, and elite networking opportunities.' }
  ]
})

// Navigation functions
const navigateBack = () => {
  navigateTo('/')
}

import { loadStripe } from '@stripe/stripe-js'
const config = useRuntimeConfig()
const stripePromise = loadStripe(config.public.stripePublishableKey)

const handlePurchase = async () => {
  try {
    // Call our serverless function to create a Stripe Checkout Session
    const res = await fetch('/api/checkout', {
      method: 'POST'
    })

    if (!res.ok) {
      throw new Error('Failed to initiate payment')
    }

    const { sessionId } = await res.json()

    // Redirect to Stripe Checkout
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({ sessionId })
    if (error) {
      console.error(error)
      alert('Unable to redirect to payment gateway. Please try again.')
    }
  } catch (err) {
    console.error(err)
    alert('Something went wrong. Please try again later.')
  }
}
</script>

<style scoped>
/* Custom color definitions for consistent rendering */
:root {
  --brand-red: #fe2905;
}

/* Force exact red color on all devices */
.text-\[#fe2905\] {
  color: #fe2905 !important;
}

.bg-\[#fe2905\] {
  background-color: #fe2905 !important;
}

.border-\[#fe2905\] {
  border-color: #fe2905 !important;
}

/* Radial gradient utility */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}

/* Advanced floating animations */
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -50px) rotate(90deg); }
  50% { transform: translate(-20px, -100px) rotate(180deg); }
  75% { transform: translate(-50px, -30px) rotate(270deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-40px, 60px) rotate(120deg); }
  66% { transform: translate(60px, -40px) rotate(240deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(80px, 80px) rotate(180deg); }
}

/* Particle drift animations */
@keyframes drift-1 {
  0% { transform: translate(-100px, 100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(100vw, -100px) rotate(360deg); opacity: 0; }
}

@keyframes drift-2 {
  0% { transform: translate(100vw, 100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(-100px, -100px) rotate(-360deg); opacity: 0; }
}

@keyframes drift-3 {
  0% { transform: translate(50vw, 100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(50vw, -100px) rotate(180deg); opacity: 0; }
}

@keyframes drift-4 {
  0% { transform: translate(-100px, 50vh) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(100vw, 50vh) rotate(360deg); opacity: 0; }
}

@keyframes drift-5 {
  0% { transform: translate(100vw, -100px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(-100px, 100vh) rotate(-360deg); opacity: 0; }
}

/* Spiral animations */
@keyframes spiral-1 {
  0% { transform: translate(50vw, 50vh) rotate(0deg) translateX(200px) rotate(0deg); }
  100% { transform: translate(50vw, 50vh) rotate(360deg) translateX(200px) rotate(-360deg); }
}

@keyframes spiral-2 {
  0% { transform: translate(30vw, 30vh) rotate(0deg) translateX(150px) rotate(0deg); }
  100% { transform: translate(30vw, 30vh) rotate(-360deg) translateX(150px) rotate(360deg); }
}

@keyframes spiral-3 {
  0% { transform: translate(70vw, 70vh) rotate(0deg) translateX(100px) rotate(0deg); }
  100% { transform: translate(70vw, 70vh) rotate(360deg) translateX(100px) rotate(-360deg); }
}

/* Floating particles */
@keyframes float-particle-1 {
  0%, 100% { transform: translate(10vw, 20vh) translateY(0px); }
  50% { transform: translate(15vw, 25vh) translateY(-20px); }
}

@keyframes float-particle-2 {
  0%, 100% { transform: translate(80vw, 30vh) translateY(0px); }
  50% { transform: translate(85vw, 35vh) translateY(-30px); }
}

@keyframes float-particle-3 {
  0%, 100% { transform: translate(60vw, 80vh) translateY(0px); }
  50% { transform: translate(65vw, 75vh) translateY(-25px); }
}

@keyframes float-particle-4 {
  0%, 100% { transform: translate(20vw, 70vh) translateY(0px); }
  50% { transform: translate(25vw, 65vh) translateY(-15px); }
}

@keyframes float-particle-5 {
  0%, 100% { transform: translate(90vw, 60vh) translateY(0px); }
  50% { transform: translate(85vw, 55vh) translateY(-35px); }
}

@keyframes float-particle-6 {
  0%, 100% { transform: translate(40vw, 40vh) translateY(0px); }
  50% { transform: translate(45vw, 45vh) translateY(-20px); }
}

/* Moving lines */
@keyframes line-1 {
  0% { transform: translateX(-100%) rotate(15deg); }
  100% { transform: translateX(100vw) rotate(15deg); }
}

@keyframes line-2 {
  0% { transform: translateX(100vw) rotate(-10deg); }
  100% { transform: translateX(-100%) rotate(-10deg); }
}

/* Text effects */
@keyframes text-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(254, 41, 5, 0.3); }
  50% { text-shadow: 0 0 40px rgba(254, 41, 5, 0.6), 0 0 60px rgba(254, 41, 5, 0.4); }
}

@keyframes text-pulse {
  0%, 100% { text-shadow: 0 0 30px rgba(254, 41, 5, 0.8); }
  50% { text-shadow: 0 0 50px rgba(254, 41, 5, 1), 0 0 70px rgba(254, 41, 5, 0.8); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(254, 41, 5, 0.3), 0 0 40px rgba(254, 41, 5, 0.1); }
  50% { box-shadow: 0 0 30px rgba(254, 41, 5, 0.5), 0 0 60px rgba(254, 41, 5, 0.2); }
}

/* Apply animations */
.animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
.animate-float-medium { animation: float-medium 15s ease-in-out infinite; }
.animate-float-fast { animation: float-fast 10s ease-in-out infinite; }

.animate-drift-1 { animation: drift-1 25s linear infinite; }
.animate-drift-2 { animation: drift-2 30s linear infinite; }
.animate-drift-3 { animation: drift-3 20s linear infinite; }
.animate-drift-4 { animation: drift-4 35s linear infinite; }
.animate-drift-5 { animation: drift-5 28s linear infinite; }

.animate-spiral-1 { animation: spiral-1 40s linear infinite; }
.animate-spiral-2 { animation: spiral-2 35s linear infinite reverse; }
.animate-spiral-3 { animation: spiral-3 45s linear infinite; }

.animate-float-particle-1 { animation: float-particle-1 8s ease-in-out infinite; }
.animate-float-particle-2 { animation: float-particle-2 12s ease-in-out infinite; }
.animate-float-particle-3 { animation: float-particle-3 10s ease-in-out infinite; }
.animate-float-particle-4 { animation: float-particle-4 14s ease-in-out infinite; }
.animate-float-particle-5 { animation: float-particle-5 9s ease-in-out infinite; }
.animate-float-particle-6 { animation: float-particle-6 11s ease-in-out infinite; }

.animate-line-1 { animation: line-1 15s linear infinite; }
.animate-line-2 { animation: line-2 18s linear infinite; }

.animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
.animate-text-pulse { animation: text-pulse 2s ease-in-out infinite; }
.animate-glow { animation: glow 2s ease-in-out infinite; }

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style> 