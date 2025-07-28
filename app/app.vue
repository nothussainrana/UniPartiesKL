<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <!-- Navigation -->
    <UContainer class="py-4">
      <nav class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-yellow-400" />
          <h1 class="text-2xl font-bold text-white">UniPartiesKL</h1>
        </div>
        <div class="hidden md:flex items-center space-x-6">
          <UButton variant="ghost" color="white" to="#events">Events</UButton>
          <UButton variant="ghost" color="white" to="#venues">Venues</UButton>
          <UButton variant="ghost" color="white" to="#about">About</UButton>
          <UButton color="yellow" variant="solid">Join Now</UButton>
        </div>
        <UButton variant="ghost" color="white" class="md:hidden">
          <UIcon name="i-heroicons-bars-3" />
        </UButton>
      </nav>
    </UContainer>

    <!-- Hero Section -->
    <UContainer class="py-20">
      <div class="text-center">
        <UBadge color="yellow" variant="solid" class="mb-6">
          🎉 Kuala Lumpur's Premier Party Platform
        </UBadge>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
          Discover the Best
          <span class="text-yellow-400">Parties</span>
          <br>in KL
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with the hottest events, exclusive venues, and amazing people. 
          Your ultimate guide to the Kuala Lumpur party scene.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton size="lg" color="yellow" variant="solid" class="text-lg px-8 py-4">
            <UIcon name="i-heroicons-calendar" class="mr-2" />
            Browse Events
          </UButton>
          <UButton size="lg" variant="outline" color="white" class="text-lg px-8 py-4">
            <UIcon name="i-heroicons-map-pin" class="mr-2" />
            Find Venues
          </UButton>
        </div>
      </div>
    </UContainer>

    <!-- Features Section -->
    <UContainer class="py-20">
      <div class="grid md:grid-cols-3 gap-8">
        <UCard class="bg-white/10 backdrop-blur-sm border-white/20">
          <template #header>
            <div class="flex items-center space-x-3">
              <UIcon name="i-heroicons-calendar-days" class="w-8 h-8 text-yellow-400" />
              <h3 class="text-xl font-semibold text-white">Latest Events</h3>
            </div>
          </template>
          <p class="text-gray-300">
            Stay updated with the hottest parties, club nights, and exclusive events happening across Kuala Lumpur.
          </p>
        </UCard>

        <UCard class="bg-white/10 backdrop-blur-sm border-white/20">
          <template #header>
            <div class="flex items-center space-x-3">
              <UIcon name="i-heroicons-map-pin" class="w-8 h-8 text-yellow-400" />
              <h3 class="text-xl font-semibold text-white">Premium Venues</h3>
            </div>
          </template>
          <p class="text-gray-300">
            Discover the most exclusive clubs, rooftop bars, and party venues that KL has to offer.
          </p>
        </UCard>

        <UCard class="bg-white/10 backdrop-blur-sm border-white/20">
          <template #header>
            <div class="flex items-center space-x-3">
              <UIcon name="i-heroicons-users" class="w-8 h-8 text-yellow-400" />
              <h3 class="text-xl font-semibold text-white">Connect & Network</h3>
            </div>
          </template>
          <p class="text-gray-300">
            Meet like-minded party-goers, make new friends, and build your social network in the KL scene.
          </p>
        </UCard>
      </div>
    </UContainer>

    <!-- Stats Section -->
    <UContainer class="py-20">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
          <div class="text-gray-300">Events Monthly</div>
        </div>
        <div>
          <div class="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">50+</div>
          <div class="text-gray-300">Premium Venues</div>
        </div>
        <div>
          <div class="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10K+</div>
          <div class="text-gray-300">Active Members</div>
        </div>
        <div>
          <div class="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
          <div class="text-gray-300">Support</div>
        </div>
      </div>
    </UContainer>

    <!-- CTA Section -->
    <UContainer class="py-20">
      <UCard class="bg-gradient-to-r from-yellow-500 to-orange-500 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Party?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Join thousands of party-goers and never miss the best events in Kuala Lumpur
        </p>
        <UButton size="lg" color="white" variant="solid" class="text-lg px-8 py-4">
          Get Started Now
        </UButton>
      </UCard>
    </UContainer>

    <!-- Footer -->
    <footer class="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-2 mb-4 md:mb-0">
            <UIcon name="i-heroicons-sparkles" class="w-6 h-6 text-yellow-400" />
            <span class="text-white font-semibold">UniPartiesKL</span>
          </div>
          <div class="flex space-x-6 text-gray-300">
            <a href="#" class="hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" class="hover:text-yellow-400 transition-colors">Terms</a>
            <a href="#" class="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup>
// Set page title
useHead({
  title: 'UniPartiesKL - Your Ultimate Party Destination',
  meta: [
    { name: 'description', content: 'Discover the best parties and events in Kuala Lumpur with UniPartiesKL' }
  ]
})
</script>
