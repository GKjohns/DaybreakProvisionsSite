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
        <UColorModeButton />
      </template>
    </UHeader>

    <!-- Hero Section -->
    <section class="py-20 md:py-32">
      <UContainer>
        <div class="text-center max-w-2xl mx-auto">
          <h1 class="hero-title mb-6 text-primary">
            Quality provisions.<br/>
            Zero overhead.
          </h1>
          <p class="hero-subtitle">
            We install and maintain smart coolers in your building. 
            Your people get 24/7 access to fresh food and drinks. You get a premium amenity at no cost.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Stats Section -->
    <section class="py-16 border-t border-default">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <div class="flex items-baseline gap-2">
              <span class="stat-value">47</span>
              <span class="stat-label">Locations</span>
            </div>
          </div>
          <div>
            <div class="flex items-baseline gap-2">
              <span class="stat-value">99.7%</span>
              <span class="stat-label">Uptime</span>
            </div>
          </div>
          <div>
            <div class="flex items-baseline gap-2">
              <span class="stat-value">24/7</span>
              <span class="stat-label">Access</span>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Three Pillars Section -->
    <section class="py-16 md:py-20">
      <UContainer>
        <div class="grid md:grid-cols-3 gap-12">
          <div class="space-y-4">
            <UIcon name="i-lucide-building-2" class="w-8 h-8" />
            <h3 class="text-xl font-bold">
              Property Managers
            </h3>
            <p class="text-sm font-medium leading-relaxed text-secondary">
              Premium amenity your tenants actually want. We handle installation, inventory, and maintenance. 
              Optional revenue share available.
            </p>
          </div>

          <div class="space-y-4">
            <UIcon name="i-lucide-package" class="w-8 h-8" />
            <h3 class="text-xl font-bold">
              Curated Selection
            </h3>
            <p class="text-sm font-medium leading-relaxed text-secondary">
              Local coffee, fresh sandwiches, healthy snacks. We stock what your building actually wants, 
              backed by real purchase data.
            </p>
          </div>

          <div class="space-y-4">
            <UIcon name="i-lucide-zap" class="w-8 h-8" />
            <h3 class="text-xl font-bold">
              Smart Operations
            </h3>
            <p class="text-sm font-medium leading-relaxed text-secondary">
              Contactless payment, real-time inventory, predictive restocking. 
              The tech runs itself so we can focus on service.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Simple Process Section -->
    <section class="py-16 border-t border-default">
      <UContainer>
        <h2 class="text-3xl md:text-4xl font-bold mb-12">
          Simple process
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          <div class="space-y-6">
            <div class="flex gap-4">
              <span class="text-2xl font-bold text-subtle">
                01
              </span>
              <div>
                <h4 class="font-bold mb-1">Site Assessment</h4>
                <p class="text-sm font-medium text-secondary">Quick walkthrough to identify the best location and product mix for your building.</p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <span class="text-2xl font-bold text-subtle">
                02
              </span>
              <div>
                <h4 class="font-bold mb-1">Installation</h4>
                <p class="text-sm font-medium text-secondary">We deliver and set up the cooler. Standard outlet, minimal footprint. Takes under two hours.</p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <span class="text-2xl font-bold text-subtle">
                03
              </span>
              <div>
                <h4 class="font-bold mb-1">Ongoing Service</h4>
                <p class="text-sm font-medium text-secondary">Regular restocking, cleaning, and maintenance. Everything handled by our team.</p>
              </div>
            </div>
          </div>
          
          <div>
            <UCard>
              <h4 class="font-bold mb-4">
                What we need from you
              </h4>
              <ul class="space-y-3 text-sm font-medium text-secondary">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-gray-400 rounded-full opacity-60"></span>
                  3' x 3' floor space
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-gray-400 rounded-full opacity-60"></span>
                  Standard electrical outlet
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-gray-400 rounded-full opacity-60"></span>
                  High-traffic common area
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-gray-400 rounded-full opacity-60"></span>
                  That's literally it
                </li>
              </ul>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32">
      <UContainer>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to add this amenity?
          </h2>
          <p class="text-xl text-secondary mb-10 max-w-md mx-auto">
            Let's discuss how Daybreak can serve your property. Quick conversation, no pressure.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <UButton
              size="xl"
            >
              SCHEDULE A VISIT
            </UButton>
            <span class="text-sm font-medium text-muted">
              or call (804) 555-0100
            </span>
          </div>
          
          <!-- Subtle gradient accent under CTA -->
          <div class="mt-16 h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
        </div>
      </UContainer>
    </section>

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
          Richmond, VA
        </div>
      </template>
    </UFooter>
  </div>
</template>

<script setup>
// Computed current year for copyright
const currentYear = computed(() => new Date().getFullYear())
</script>