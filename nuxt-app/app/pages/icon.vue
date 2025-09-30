<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
    <div class="max-w-6xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Square Logo Variations</h1>
        <p class="text-gray-600 dark:text-gray-400">Choose a square logo design for avatar/icon use on platforms like Thumbtack</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Option 1: Just Stripes -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex justify-center mb-4">
            <div class="w-64 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-inner flex items-center justify-center">
              <svg width="160" height="160" viewBox="0 0 32 32" class="color-stripe-logo">
                <rect x="3" y="2" width="4" height="28" rx="2" class="stripe-1" />
                <rect x="11" y="2" width="4" height="28" rx="2" class="stripe-2" />
                <rect x="19" y="2" width="4" height="28" rx="2" class="stripe-3" />
                <rect x="27" y="2" width="4" height="28" rx="2" class="stripe-4" />
              </svg>
            </div>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Stripes Only</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Simple and recognizable stripe pattern</p>
        </div>

        <!-- Option 2: DB Monogram -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex justify-center mb-4">
            <div class="w-64 h-64 bg-gradient-to-br from-amber-400 via-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-8xl font-bold text-white tracking-tighter">DB</span>
            </div>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">DB Monogram</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Daybreak abbreviated with gradient background</p>
        </div>

        <!-- Option 3: D with Stripe Accent -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex justify-center mb-4">
            <div class="w-64 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-inner flex items-center justify-center relative">
              <span class="text-9xl font-bold text-gray-800 dark:text-white">D</span>
              <div class="absolute bottom-8 right-8">
                <svg width="80" height="80" viewBox="0 0 32 32" class="color-stripe-logo">
                  <rect x="3" y="2" width="4" height="28" rx="2" class="stripe-1" />
                  <rect x="11" y="2" width="4" height="28" rx="2" class="stripe-2" />
                  <rect x="19" y="2" width="4" height="28" rx="2" class="stripe-3" />
                  <rect x="27" y="2" width="4" height="28" rx="2" class="stripe-4" />
                </svg>
              </div>
            </div>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">D with Stripes</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Large D with stripe accent in corner</p>
        </div>

        <!-- Option 4: Circular Stripes -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex justify-center mb-4">
            <div class="w-64 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-inner flex items-center justify-center">
              <div class="w-48 h-48 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 via-pink-500 to-purple-600 flex items-center justify-center">
                <div class="w-32 h-32 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <span class="text-5xl font-bold text-gray-800 dark:text-white">D</span>
                </div>
              </div>
            </div>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Circular Badge</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">D in a circular badge with gradient ring</p>
        </div>

        <!-- Option 5: Compact Stacked -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex justify-center mb-4">
            <div class="w-64 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-inner flex items-center justify-center">
              <div class="flex items-stretch space-x-2">
                <svg width="24" height="80" viewBox="0 0 32 48" preserveAspectRatio="none">
                  <rect x="3" y="0" width="3" height="48" rx="1.5" class="stripe-1" />
                  <rect x="11" y="0" width="3" height="48" rx="1.5" class="stripe-2" />
                  <rect x="19" y="0" width="3" height="48" rx="1.5" class="stripe-3" />
                  <rect x="27" y="0" width="3" height="48" rx="1.5" class="stripe-4" />
                </svg>
                <div class="flex flex-col justify-center">
                  <span class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">DAYBREAK</span>
                  <span class="text-xl font-normal text-gray-600 dark:text-gray-400 leading-tight">CLEANING</span>
                </div>
              </div>
            </div>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Compact Stacked</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Full logo in compact square format</p>
        </div>

        <!-- Option 6: DC Square -->
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div class="flex justify-center mb-4">
            <div class="w-64 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-inner flex items-center justify-center">
              <div class="relative w-48 h-48">
                <!-- Gradient background -->
                <div class="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 via-pink-500 to-purple-600 rounded-2xl opacity-10"></div>
                <!-- Stripes on left -->
                <div class="absolute left-4 top-8 bottom-8">
                  <svg width="20" height="100%" viewBox="0 0 32 48" preserveAspectRatio="none">
                    <rect x="3" y="0" width="4" height="48" rx="2" class="stripe-1" />
                    <rect x="11" y="0" width="4" height="48" rx="2" class="stripe-2" />
                    <rect x="19" y="0" width="4" height="48" rx="2" class="stripe-3" />
                    <rect x="27" y="0" width="4" height="48" rx="2" class="stripe-4" />
                  </svg>
                </div>
                <!-- DC text -->
                <div class="absolute inset-0 flex flex-col items-center justify-center pl-6">
                  <span class="text-6xl font-bold text-gray-800 dark:text-white leading-none">DC</span>
                </div>
              </div>
            </div>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">DC with Stripes</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Daybreak Cleaning initials with stripe accent</p>
        </div>

      </div>

      <!-- Download Section -->
      <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">How to Export</h2>
        <ol class="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Choose your favorite design above</li>
          <li>Right-click on the logo you want to use</li>
          <li>Select "Inspect Element" in your browser</li>
          <li>Find the container div and copy its HTML</li>
          <li>Use a tool like <a href="https://www.figma.com" class="text-primary hover:underline">Figma</a> or take a screenshot to export as PNG/SVG</li>
        </ol>
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">
          Tip: For best results on Thumbtack and similar platforms, export at 512x512px or higher resolution
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for this static display page
</script>

<style scoped>
/* Stripe colors matching the brand */
.stripe-1 {
  fill: #FBB024; /* Yellow/Amber */
}

.stripe-2 {
  fill: #D97706; /* Orange */
}

.stripe-3 {
  fill: #EC4899; /* Pink */
}

.stripe-4 {
  fill: #9333EA; /* Purple */
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .stripe-1,
  .stripe-2,
  .stripe-3,
  .stripe-4 {
    opacity: 0.9;
  }
}
</style>
