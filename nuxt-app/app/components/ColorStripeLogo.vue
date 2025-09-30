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

/* Light mode colors - vibrant daybreak theme */
.stripe-1 {
  fill: #FBB024; /* Yellow/Amber */
  opacity: 0.8;
}

.stripe-2 {
  fill: #D97706; /* Orange */
  opacity: 0.8;
}

.stripe-3 {
  fill: #EC4899; /* Pink */
  opacity: 0.8;
}

.stripe-4 {
  fill: #9333EA; /* Purple */
  opacity: 0.8;
}

/* Dark mode colors - slightly brighter for visibility */
@media (prefers-color-scheme: dark) {
  .stripe-1 {
    fill: #FBB024; /* Yellow/Amber */
    opacity: 0.9;
  }

  .stripe-2 {
    fill: #D97706; /* Orange */
    opacity: 0.9;
  }

  .stripe-3 {
    fill: #EC4899; /* Pink */
    opacity: 0.9;
  }

  .stripe-4 {
    fill: #9333EA; /* Purple */
    opacity: 0.9;
  }
}

/* Alternative: Using CSS custom properties that respect the color mode */
:root {
  --stripe-1-color: #FBB024;
  --stripe-2-color: #D97706;
  --stripe-3-color: #EC4899;
  --stripe-4-color: #9333EA;
  --stripe-opacity: 0.8;
}

:root.dark {
  --stripe-1-color: #FBB024;
  --stripe-2-color: #D97706;
  --stripe-3-color: #EC4899;
  --stripe-4-color: #9333EA;
  --stripe-opacity: 0.9;
}
</style>
