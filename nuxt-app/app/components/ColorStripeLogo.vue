<template>
  <svg 
    :width="svgSize" 
    :height="svgSize" 
    viewBox="0 0 32 32" 
    class="color-stripe-logo"
  >
    <rect x="3" y="2" width="2" height="28" rx="1" class="stripe-1" />
    <rect x="12" y="2" width="2" height="28" rx="1" class="stripe-2" />
    <rect x="21" y="2" width="2" height="28" rx="1" class="stripe-3" />
    <rect x="30" y="2" width="2" height="28" rx="1" class="stripe-4" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const svgSize = computed(() => {
  const sizes = {
    sm: 16,
    md: 24, 
    lg: 32
  }
  return sizes[props.size]
})
</script>

<style scoped>
.color-stripe-logo {
  display: block;
}

/* Light mode colors */
.stripe-1 {
  fill: rgb(251 191 36 / 0.7); /* amber-400 with opacity */
}

.stripe-2 {
  fill: rgb(217 119 6 / 0.7); /* amber-600 with opacity */
}

.stripe-3 {
  fill: rgb(236 72 153 / 0.7); /* pink-500 with opacity */
}

.stripe-4 {
  fill: rgb(147 51 234 / 0.7); /* purple-600 with opacity */
}

/* Dark mode colors - softer, more muted versions */
@media (prefers-color-scheme: dark) {
  .stripe-1 {
    fill: rgb(252 211 77 / 0.8); /* amber-300 with higher opacity */
  }

  .stripe-2 {
    fill: rgb(245 158 11 / 0.8); /* amber-500 with higher opacity */
  }

  .stripe-3 {
    fill: rgb(244 114 182 / 0.8); /* pink-400 with higher opacity */
  }

  .stripe-4 {
    fill: rgb(168 85 247 / 0.8); /* purple-500 with higher opacity */
  }
}

/* Alternative: Using CSS custom properties that respect the color mode */
:root {
  --stripe-1-color: rgb(251 191 36 / 0.7);
  --stripe-2-color: rgb(217 119 6 / 0.7);
  --stripe-3-color: rgb(236 72 153 / 0.7);
  --stripe-4-color: rgb(147 51 234 / 0.7);
}

:root.dark {
  --stripe-1-color: rgb(252 211 77 / 0.8);
  --stripe-2-color: rgb(245 158 11 / 0.8);
  --stripe-3-color: rgb(244 114 182 / 0.8);
  --stripe-4-color: rgb(168 85 247 / 0.8);
}
</style>
