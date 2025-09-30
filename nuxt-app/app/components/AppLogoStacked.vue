<template>
  <div class="flex items-stretch space-x-3">
    <!-- Custom stripes that stretch to match text height -->
    <svg 
      :width="stripesWidth" 
      :height="stripesHeight" 
      viewBox="0 0 32 48" 
      class="color-stripe-logo-stacked"
      preserveAspectRatio="none"
    >
      <rect x="3" y="0" width="2" height="48" rx="1" class="stripe-1" />
      <rect x="12" y="0" width="2" height="48" rx="1" class="stripe-2" />
      <rect x="21" y="0" width="2" height="48" rx="1" class="stripe-3" />
      <rect x="30" y="0" width="2" height="48" rx="1" class="stripe-4" />
    </svg>
    
    <div class="flex flex-col justify-center">
      <span :class="titleClass">
        DAYBREAK
      </span>
      <span :class="subtitleClass">
        CLEANING
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const stripesWidth = computed(() => {
  const widths = {
    sm: 24,
    md: 32,
    lg: 40
  }
  return widths[props.size]
})

const stripesHeight = computed(() => {
  const heights = {
    sm: 36,
    md: 48,
    lg: 56
  }
  return heights[props.size]
})

const titleClass = computed(() => {
  const classes = {
    sm: 'text-xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight',
    md: 'text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight',
    lg: 'text-3xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight'
  }
  return classes[props.size]
})

const subtitleClass = computed(() => {
  const classes = {
    sm: 'text-base font-normal text-gray-600 dark:text-gray-400 leading-tight',
    md: 'text-lg font-normal text-gray-600 dark:text-gray-400 leading-tight',
    lg: 'text-xl font-normal text-gray-600 dark:text-gray-400 leading-tight'
  }
  return classes[props.size]
})
</script>

<style scoped>
/* Reuse the same stripe colors from ColorStripeLogo */
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
    fill: #FBB024;
    opacity: 0.9;
  }

  .stripe-2 {
    fill: #D97706;
    opacity: 0.9;
  }

  .stripe-3 {
    fill: #EC4899;
    opacity: 0.9;
  }

  .stripe-4 {
    fill: #9333EA;
    opacity: 0.9;
  }
}
</style>
