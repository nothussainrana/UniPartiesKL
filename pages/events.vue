<template>
  <div class="min-h-screen bg-black text-white">
    <UContainer class="py-16 sm:py-24">
      <div class="text-center mb-14">
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4">Past Events</h1>
        <p class="text-base sm:text-xl text-white/80 px-4 sm:px-0">A glimpse of legendary nights we hosted in KL.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 px-4 sm:px-0">
        <UCard
          v-for="event in pastEvents"
          :key="event.id"
          class="bg-black/80 border-2 border-[#fe2905]/20 hover:border-[#fe2905]/50 transition-all duration-300 overflow-hidden"
        >
          <template #header>
            <div class="flex items-start justify-between">
              <h3 class="text-xl sm:text-2xl font-black">{{ event.title }}</h3>
              <span class="text-xs sm:text-sm text-white/70 bg-[#fe2905]/10 border border-[#fe2905]/30 rounded-full px-3 py-1">{{ event.date }}</span>
            </div>
          </template>

          <div class="space-y-3">
            <p class="text-white/80 text-sm sm:text-base">{{ event.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in event.tags"
                :key="tag"
                class="text-[10px] sm:text-xs tracking-wide uppercase bg-[#fe2905]/10 border border-[#fe2905]/30 text-white/80 rounded-full px-2 py-1 sm:px-3"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <template #footer>
            <div class="flex items-center justify-between">
              <div class="text-white/60 text-xs sm:text-sm">{{ event.venue }}</div>
              <div class="text-[#fe2905] font-bold text-sm">Sold Out</div>
            </div>
          </template>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const pastEvents = [
  {
    id: 'evt-1',
    title: 'X Event Name',
    date: 'X Date',
    venue: 'X Venue, X Location',
    description: 'X event description with X details and X features.',
    tags: ['X Tag', 'X Tag', 'X Tag']
  }
]
</script>


