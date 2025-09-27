<template>
  <div class="min-h-screen">
    <!-- Gradient accent bar -->
    <div class="gradient-accent" />

    <!-- Navigation -->
    <UHeader>
      <template #title>
        <AppLogo />
      </template>
      
      <template #right>
        <UButton 
          to="/consultation"
          variant="outline"
          size="md"
          trailing-icon="i-lucide-arrow-right"
        >
          Get Started
        </UButton>
      </template>
    </UHeader>

    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <!-- Sunrise Background Effect -->
      <HeroBackground />
      
      <UPageHero
        class="relative z-10"
        title="Premium amenities. Zero cost."
        description="We bring smart coolers to your building with fresh food and drinks. No installation fees, no maintenance hassles - just quality provisions when your people need them."
        orientation="vertical"
      :links="[
        { label: 'Get Started', size: 'xl', to: '/consultation' }
      ]"
      />
    </div>

    <!-- Three Pillars Section -->
    <UPageSection
      title="Why property managers choose us"
      description="We deliver a premium amenity experience that enhances your property value without adding to your operational burden."
      orientation="horizontal"
      :features="pillarsFeatures"
    >
      <div class="w-full aspect-[4/3] rounded-lg overflow-hidden">
        <img 
          src="/landing_art.png" 
          alt="Daybreak Provisions smart cooler with fresh food and beverages" 
          class="w-full h-full object-cover"
        />
      </div>
    </UPageSection>

    <!-- Simple Process Section -->
    <UPageSection
      title="Simple process"
      description="Getting premium provisions in your building is easier than you think. We handle everything from start to finish."
      orientation="horizontal"
      reverse
      :features="processSteps"
      class="border-t border-default"
    >
      <UCard class="w-full">
        <h4 class="font-bold mb-4">
          What we need from you
        </h4>
        <ul class="space-y-3 text-sm font-medium text-neutral-600">
          <li class="flex items-center gap-2">
            <UIcon name="i-lucide-check" class="w-4 h-4 text-primary flex-shrink-0" />
            3' x 3' floor space
          </li>
          <li class="flex items-center gap-2">
            <UIcon name="i-lucide-check" class="w-4 h-4 text-primary flex-shrink-0" />
            Standard electrical outlet
          </li>
          <li class="flex items-center gap-2">
            <UIcon name="i-lucide-check" class="w-4 h-4 text-primary flex-shrink-0" />
            High-traffic common area
          </li>
          <li class="flex items-center gap-2">
            <UIcon name="i-lucide-check" class="w-4 h-4 text-primary flex-shrink-0" />
            That's literally it
          </li>
        </ul>
      </UCard>
    </UPageSection>

    <!-- CTA Section -->
    <UPageCTA
      class="relative overflow-hidden"
      variant="naked"
      title="Ready to elevate your space?"
      description="Schedule a quick visit to see how easy it is to add this premium amenity. No commitment, just a conversation."
      orientation="vertical"
      :links="[
        { label: 'Get Started', size: 'lg', to: '/consultation' }
      ]"
    >
    </UPageCTA>

    <!-- Footer -->
    <UFooter>
      <template #left>
        <div class="text-xs font-bold text-muted tracking-wider">
          © {{ currentYear }} DAYBREAK PROVISIONS LLC
        </div>
      </template>

      <template #center>
        <ColorStripeLogo size="sm" />
      </template>

      <template #right>
        <div class="text-xs font-medium text-muted">
          Made with ☀️ in Richmond, VA
        </div>
      </template>
    </UFooter>
  </div>
</template>

<script setup>
// Computed current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Three pillars data
const pillarsFeatures = ref([
  {
    title: 'For Properties',
    description: 'Add a premium amenity without the overhead. We handle everything from installation to daily operations.',
    icon: 'i-lucide-building'
  },
  {
    title: 'Always Available',
    description: '24/7 access to quality food and beverages. Perfect for busy schedules and after-hours needs.',
    icon: 'i-lucide-clock'
  },
  {
    title: 'Completely Managed',
    description: 'From restocking to maintenance, we handle it all. You just provide the space.',
    icon: 'i-lucide-shield-check'
  }
])

// Process steps data
const processSteps = ref([
  {
    title: 'Schedule a Visit',
    description: 'We\'ll assess your space and discuss what works best for your building.',
    icon: 'i-lucide-calendar'
  },
  {
    title: 'Installation',
    description: 'We handle delivery and setup. Standard outlet, minimal footprint.',
    icon: 'i-lucide-wrench'
  },
  {
    title: 'We Take Care of the Rest',
    description: 'Regular restocking, cleaning, and maintenance. All managed by our team.',
    icon: 'i-lucide-check-circle'
  }
])
</script>