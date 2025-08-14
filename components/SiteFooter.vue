<template>
  <footer class="bg-gradient-to-r from-black via-black to-black border-t-2 border-[#fe2905]/30 py-10 sm:py-16">
    <UContainer>
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center space-x-4 mb-6 md:mb-0">
          <div class="relative">
            <img src="/logo-nobg.png" alt="UniPartiesKL logo" class="w-12 h-12 sm:w-16 sm:h-16 object-contain logo-spin" />
            <div class="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#fe2905]/30 rounded-full blur-lg"></div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-5 sm:gap-10 text-white">
          <a href="#" class="hover:text-[#fe2905] transition-all duration-300 hover:scale-110 text-base sm:text-xl font-semibold">Privacy</a>
          <a href="#" class="hover:text-[#fe2905] transition-all duration-300 hover:scale-110 text-base sm:text-xl font-semibold">Terms</a>
          <a href="#" class="hover:text-[#fe2905] transition-all duration-300 hover:scale-110 text-base sm:text-xl font-semibold">Contact</a>
          <a href="#" class="hover:text-[#fe2905] transition-all duration-300 hover:scale-110 text-base sm:text-xl font-semibold">VIP Club</a>
        </div>
      </div>
      <div class="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#fe2905]/20">
        <p class="text-white text-sm sm:text-lg">© 2026. All rights reserved. <span class="text-[#fe2905]">Party like royalty.</span></p>
      </div>
    </UContainer>
  </footer>
</template>

<style scoped>
.logo-spin { animation: spin 8s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>


