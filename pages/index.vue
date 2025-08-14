<template>
  <div class="min-h-screen bg-black text-white overflow-hidden relative">
    <!-- Dynamic Moving Background (parallax-enabled) -->
    <div class="absolute inset-0 z-0" data-scroll>
      <!-- Pure black base -->
      <div class="absolute inset-0 bg-black"></div>
      
      <!-- Moving gradient orbs -->
      <div class="absolute inset-0">
        <div data-scroll data-scroll-speed="-2" class="absolute w-96 h-96 bg-gradient-radial from-[#fe2905]/20 to-transparent rounded-full blur-3xl animate-float-slow" 
             style="top: 10%; left: 10%; animation-delay: 0s;"></div>
        <div data-scroll data-scroll-speed="1.4" class="absolute w-80 h-80 bg-gradient-radial from-[#fe2905]/15 to-transparent rounded-full blur-3xl animate-float-medium" 
             style="top: 60%; right: 15%; animation-delay: 2s;"></div>
        <div data-scroll data-scroll-speed="-1" class="absolute w-72 h-72 bg-gradient-radial from-[#fe2905]/10 to-transparent rounded-full blur-3xl animate-float-fast" 
             style="bottom: 20%; left: 30%; animation-delay: 4s;"></div>
      </div>
      
      <!-- Moving particles system -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Large moving particles -->
        <div data-scroll data-scroll-speed="0.6" class="absolute w-3 h-3 bg-[#fe2905] rounded-full animate-drift-1 opacity-80"></div>
        <div data-scroll data-scroll-speed="-0.5" class="absolute w-2 h-2 bg-[#fe2905] rounded-full animate-drift-2 opacity-60"></div>
        <div data-scroll data-scroll-speed="0.8" class="absolute w-4 h-4 bg-[#fe2905] rounded-full animate-drift-3 opacity-40"></div>
        <div data-scroll data-scroll-speed="-0.4" class="absolute w-1.5 h-1.5 bg-[#fe2905] rounded-full animate-drift-4 opacity-90"></div>
        <div data-scroll data-scroll-speed="0.9" class="absolute w-2.5 h-2.5 bg-[#fe2905] rounded-full animate-drift-5 opacity-70"></div>
        
        <!-- Medium particles -->
        <div data-scroll data-scroll-speed="-0.3" class="absolute w-1 h-1 bg-[#fe2905] rounded-full animate-spiral-1 opacity-80"></div>
        <div data-scroll data-scroll-speed="0.4" class="absolute w-1.5 h-1.5 bg-[#fe2905] rounded-full animate-spiral-2 opacity-60"></div>
        <div data-scroll data-scroll-speed="-0.2" class="absolute w-1 h-1 bg-[#fe2905] rounded-full animate-spiral-3 opacity-90"></div>
        
        <!-- Small floating particles -->
        <div data-scroll data-scroll-speed="0.2" class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-1"></div>
        <div data-scroll data-scroll-speed="-0.15" class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-2"></div>
        <div data-scroll data-scroll-speed="0.25" class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-3"></div>
        <div data-scroll data-scroll-speed="-0.2" class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-4"></div>
        <div data-scroll data-scroll-speed="0.18" class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-5"></div>
        <div data-scroll data-scroll-speed="-0.22" class="absolute w-0.5 h-0.5 bg-[#fe2905] rounded-full animate-float-particle-6"></div>
      </div>
      
      <!-- Subtle moving lines -->
      <div class="absolute inset-0">
        <div data-scroll data-scroll-speed="0.5" class="absolute h-px bg-gradient-to-r from-transparent via-[#fe2905]/30 to-transparent animate-line-1" style="top: 25%; width: 200px;"></div>
        <div data-scroll data-scroll-speed="-0.5" class="absolute h-px bg-gradient-to-r from-transparent via-[#fe2905]/20 to-transparent animate-line-2" style="top: 75%; width: 150px;"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10" data-scroll-section>
      <!-- Header moved to global layout -->

      <!-- Hero Section -->
      <UContainer class="py-20" data-scroll-section>
        <div class="text-center" v-reveal data-scroll data-scroll-speed="0.3">
          <h1 class="text-5xl sm:text-7xl md:text-9xl font-black mb-8 sm:mb-12 leading-none tracking-tight">
            <span class="bg-gradient-to-r from-white via-white to-[#fe2905]/90 bg-clip-text text-transparent animate-text-glow block">
              UNLEASH
            </span>
            <span class="bg-gradient-to-r from-[#fe2905] via-[#fe2905]/80 to-[#fe2905] bg-clip-text text-transparent animate-text-pulse block mt-4">
              THE NIGHT
            </span>
          </h1>
          
                     <p class="text-2xl md:text-3xl text-white mb-16 max-w-4xl mx-auto leading-relaxed font-light">
             Enter the <span class="text-[#fe2905] font-bold animate-pulse">ultimate VIP experience</span> in Kuala Lumpur's 
             <span class="text-[#fe2905] font-bold">most exclusive venues</span>. 
             Where legends are born and nights become <span class="text-[#fe2905] font-bold">unforgettable</span>.
           </p>
          
           <div class="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center" v-reveal data-scroll data-scroll-speed="0.4">
            <UButton 
              v-magnetic
              size="lg" 
              class="bg-gradient-to-r from-[#fe2905] to-[#fe2905]/90 hover:from-[#fe2905]/90 hover:to-[#fe2905] text-white font-black px-10 sm:px-16 py-5 sm:py-8 text-xl sm:text-2xl transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:shadow-2xl hover:shadow-[#fe2905]/50 group relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <UIcon name="i-heroicons-calendar" class="mr-4 group-hover:animate-bounce text-3xl" />
              DISCOVER EVENTS
            </UButton>
             <UButton 
               v-tilt
               size="lg" 
               class="border-3 border-[#fe2905] bg-transparent text-[#fe2905] hover:bg-[#fe2905]/10 font-black px-10 sm:px-16 py-5 sm:py-8 text-xl sm:text-2xl transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:shadow-2xl hover:shadow-[#fe2905]/30 group backdrop-blur-xl relative overflow-hidden"
             >
               <div class="absolute inset-0 bg-gradient-to-r from-[#fe2905]/0 via-[#fe2905]/10 to-[#fe2905]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
               <UIcon name="i-heroicons-map-pin" class="mr-4 group-hover:animate-bounce text-3xl" />
               ELITE VENUES
             </UButton>
          </div>
        </div>
      </UContainer>

      <!-- Features Section -->
        <UContainer class="pt-10" data-scroll-section>
                <div class="grid md:grid-cols-3 gap-12">
          <UCard v-tilt class="bg-black backdrop-blur-2xl border-2 border-[#fe2905]/30 hover:border-[#fe2905]/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-[#fe2905]/30 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-[#fe2905]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <template #header>
              <div class="flex items-center space-x-6 relative z-10">
                <div class="relative">
                  <UIcon name="i-heroicons-calendar-days" class="w-14 h-14 text-[#fe2905] group-hover:animate-pulse transition-all duration-300" />
                  <div class="absolute inset-0 w-14 h-14 bg-[#fe2905]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                </div>
                <h3 class="text-3xl font-black text-white group-hover:text-[#fe2905] transition-colors duration-500">
                  EXCLUSIVE EVENTS
                </h3>
              </div>
            </template>
            <div class="relative z-10">
              <p class="text-white text-xl leading-relaxed font-light">
                Access the most <span class="text-[#fe2905] font-semibold">coveted parties</span>, private VIP events, and underground experiences that define KL's elite nightlife scene.
              </p>
            </div>
          </UCard>

          <UCard v-tilt class="bg-black backdrop-blur-2xl border-2 border-[#fe2905]/30 hover:border-[#fe2905]/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-[#fe2905]/30 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-[#fe2905]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <template #header>
              <div class="flex items-center space-x-6 relative z-10">
                <div class="relative">
                  <UIcon name="i-heroicons-building-office-2" class="w-14 h-14 text-[#fe2905] group-hover:animate-pulse transition-all duration-300" />
                  <div class="absolute inset-0 w-14 h-14 bg-[#fe2905]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                </div>
                <h3 class="text-3xl font-black text-white group-hover:text-[#fe2905] transition-colors duration-500">
                  LUXURY VENUES
                </h3>
              </div>
            </template>
            <div class="relative z-10">
              <p class="text-white text-xl leading-relaxed font-light">
                Step into <span class="text-[#fe2905] font-semibold">penthouse clubs</span>, rooftop sanctuaries, and hidden speakeasies where only the elite gather.
              </p>
            </div>
          </UCard>

          <UCard v-tilt class="bg-black backdrop-blur-2xl border-2 border-[#fe2905]/30 hover:border-[#fe2905]/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-[#fe2905]/30 group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-[#fe2905]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <template #header>
              <div class="flex items-center space-x-6 relative z-10">
                <div class="relative">
                  <UIcon name="i-heroicons-users" class="w-14 h-14 text-[#fe2905] group-hover:animate-pulse transition-all duration-300" />
                  <div class="absolute inset-0 w-14 h-14 bg-[#fe2905]/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                </div>
                <h3 class="text-3xl font-black text-white group-hover:text-[#fe2905] transition-colors duration-500">
                  ELITE CIRCLE
                </h3>
              </div>
            </template>
            <div class="relative z-10">
              <p class="text-white text-xl leading-relaxed font-light">
                Join KL's most <span class="text-[#fe2905] font-semibold">influential network</span> of tastemakers, celebrities, and nightlife connoisseurs.
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>

      <!-- Stats Section -->
      <UContainer class="py-32" data-scroll-section>
         <div class="bg-gradient-to-r from-black/60 via-black/80 to-black/60 backdrop-blur-2xl rounded-3xl border-2 border-[#fe2905]/30 p-8 md:p-16 relative overflow-visible">
           <div class="absolute inset-0 bg-gradient-to-r from-[#fe2905]/5 via-transparent to-[#fe2905]/5"></div>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center relative z-10">
             <div class="group cursor-pointer px-1 py-4">
               <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:animate-pulse transition-all duration-300 leading-none">
                 2500+
               </div>
               <div class="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold group-hover:text-[#fe2905] transition-colors duration-300 tracking-wide">
                 LEGENDARY EVENTS
               </div>
             </div>
             <div class="group cursor-pointer px-1 py-4">
               <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:animate-pulse transition-all duration-300 leading-none">
                 150+
               </div>
               <div class="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold group-hover:text-[#fe2905] transition-colors duration-300 tracking-wide">
                 EXCLUSIVE VENUES
               </div>
             </div>
             <div class="group cursor-pointer px-1 py-4">
               <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:animate-pulse transition-all duration-300 leading-none">
                 50K+
               </div>
               <div class="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold group-hover:text-[#fe2905] transition-colors duration-300 tracking-wide">
                 ELITE MEMBERS
               </div>
             </div>
             <div class="group cursor-pointer px-1 py-4">
               <div class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#fe2905] to-[#fe2905]/80 bg-clip-text text-transparent mb-3 md:mb-4 group-hover:animate-pulse transition-all duration-300 leading-none">
                 24/7
               </div>
               <div class="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold group-hover:text-[#fe2905] transition-colors duration-300 tracking-wide">
                 VIP CONCIERGE
               </div>
             </div>
           </div>
         </div>
       </UContainer>

      <!-- CTA Section -->
      <UContainer class="pb-32" data-scroll-section>
        <UCard class="bg-gradient-to-r from-[#fe2905] via-[#fe2905]/90 to-[#fe2905] text-center overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-r from-[#fe2905]/95 via-[#fe2905]/90 to-[#fe2905]/95"></div>
          <div class="absolute inset-0">
            <div class="absolute top-0 left-0 w-full h-full opacity-30">
              <div class="absolute top-20 left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
              <div class="absolute bottom-20 right-20 w-52 h-52 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
            </div>
          </div>
          <div class="relative z-10 py-24">
            <h2 class="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
              READY TO RULE THE NIGHT?
            </h2>
            <p class="text-2xl md:text-3xl text-white/95 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Join KL's most <span class="font-black">exclusive party empire</span> and become part of the legend
            </p>
            <UButton 
              @click="navigateToPayment"
              size="xl" 
              class="bg-black hover:bg-gray-900 text-white font-black px-20 py-8 text-2xl transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-black/70 group relative overflow-hidden border-2 border-black hover:border-gray-800"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <UIcon name="i-heroicons-trophy" class="mr-4 group-hover:animate-bounce text-3xl" />
              CLAIM VIP STATUS
            </UButton>
          </div>
        </UCard>
      </UContainer>

      <!-- Footer moved to global layout -->
    </div>
  </div>
</template>

<script setup>
// Set page meta
useHead({
  title: 'UniPartiesKL - Unleash The Night | KL\'s Premier Party Platform',
  meta: [
    { name: 'description', content: 'Experience the ultimate party destination in Kuala Lumpur. Exclusive events, premium venues, and unforgettable nights await.' }
  ]
})

// Navigation function for payment page
const navigateToPayment = async () => {
  await navigateTo('/payment')
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

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Spinning logo */
.logo-spin { animation: spin 8s linear infinite; }

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style> 