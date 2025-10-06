<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none min-h-[500px] z-0">
    <!-- Gradient Orbs -->
    <div class="absolute inset-0">
      <!-- Orb 1: Top-left, yellow-amber gradient -->
      <div 
        class="absolute -top-20 -left-20 w-96 h-96 opacity-20 dark:opacity-25"
      >
        <div 
          class="w-full h-full rounded-full bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-300 blur-3xl animate-pulse-slow"
        />
      </div>
      
      <!-- Orb 2: Mid-right, pink-purple gradient -->
      <div 
        class="absolute top-1/3 -right-20 w-80 h-80 opacity-20 dark:opacity-25"
      >
        <div 
          class="w-full h-full rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-purple-500 blur-3xl animate-float"
        />
      </div>
      
      <!-- Orb 3: Center-top, orange-pink blend -->
      <div 
        class="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 opacity-15 dark:opacity-20"
      >
        <div 
          class="w-full h-full rounded-full bg-gradient-to-b from-orange-300 to-pink-300 blur-3xl animate-float-delayed"
        />
      </div>
      
      <!-- Additional orb for more coverage -->
      <div 
        class="absolute top-2/3 left-1/4 w-64 h-64 opacity-10 dark:opacity-15"
      >
        <div 
          class="w-full h-full rounded-full bg-gradient-to-tr from-yellow-300 via-amber-400 to-orange-400 blur-3xl animate-pulse-slow"
          style="animation-delay: 2s;"
        />
      </div>
    </div>

    <!-- Fade-out gradient at the bottom -->
    <div 
      class="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"
    />
  </div>
</template>

<script setup lang="ts">
// Daybreak-inspired gradient orb background component
// Using brand colors: yellow, amber, orange, pink, purple
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.25;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-30px);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 12s ease-in-out infinite;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  @keyframes pulse-slow {
    0%, 100% {
      transform: scale(1);
      opacity: 0.2;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
  }
}
</style>
