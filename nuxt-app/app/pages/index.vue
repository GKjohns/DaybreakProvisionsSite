<template>
  <!-- Gradient accent bar -->
  <div class="gradient-accent" />

    <!-- Navigation -->
    <UHeader>
      <template #left>
        <AppLogo />
      </template>
      
      <template #right>
        <!-- Phone Number Button -->
        <UButton
          to="tel:+18049132670"
          color="primary"
          variant="ghost"
          icon="i-heroicons-phone"
          aria-label="Call (804) 913-2670"
          class="hidden sm:flex"
        >
          <span class="hidden lg:inline">(804) 913-2670</span>
        </UButton>
        
        <!-- Mobile Phone Icon Only -->
        <UButton
          to="tel:+18049132670"
          color="primary"
          variant="ghost"
          icon="i-heroicons-phone"
          aria-label="Call (804) 913-2670"
          class="sm:hidden"
        />
        
        <!-- Contact Slideover -->
        <USlideover 
          v-model:open="isContactOpen" 
          title="Get in Touch" 
          description="We'd love to hear from you. Send us a message and we'll get back to you soon."
          :ui="{ footer: 'justify-end' }"
        >
          <template #body>
            <div class="space-y-6">
              <!-- Contact Form -->
              <UForm :state="formState" :validate="validateForm" @submit="onSubmit" class="space-y-4">
                <UFormField label="Name" name="name" required>
                  <UInput v-model="formState.name" placeholder="Your name" class="w-full" />
                </UFormField>
                
                <UFormField label="Email" name="email" required>
                  <UInput v-model="formState.email" type="email" placeholder="your@email.com" class="w-full" />
                </UFormField>
                
                <UFormField label="Notes" name="notes">
                  <UTextarea v-model="formState.notes" placeholder="Tell us about your cleaning needs..." :rows="4" class="w-full" />
                </UFormField>
                
                <!-- Contact Information -->
                <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Or reach us directly:</p>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2 text-sm">
                      <UIcon name="i-heroicons-phone" class="text-gray-400" />
                      <a href="tel:+18049132670" class="text-primary hover:underline">
                        (804) 913-2670
                      </a>
                    </div>
                    <div class="flex items-center gap-2 text-sm">
                      <UIcon name="i-heroicons-envelope" class="text-gray-400" />
                      <a href="mailto:kyle@daybreakrva.com" class="text-primary hover:underline">
                        kyle@daybreakrva.com
                      </a>
                    </div>
                  </div>
                </div>
              </UForm>
            </div>
          </template>
          
          <template #footer="{ close }">
            <UButton color="neutral" variant="outline" @click="close">
              Cancel
            </UButton>
            <UButton color="primary" @click="submitForm" :loading="isSubmitting">
              Send Message
            </UButton>
          </template>
        </USlideover>
      </template>
    </UHeader>

    <!-- Main Content -->
    <UMain>
      <!-- Hero Section -->
      <div class="relative overflow-hidden">
        <!-- Subtle ambient background -->
        <div class="absolute inset-0 -z-10">
          <!-- Soft base gradient using brand colors - amber to orange with hint of pink -->
          <div class="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-pink-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
          
          <!-- Subtle animated orbs using only brand colors -->
          <div class="absolute top-0 -left-4 w-96 h-96 bg-amber-300/30 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-blob dark:bg-amber-600/20 dark:opacity-15" />
          <div class="absolute top-0 -right-4 w-96 h-96 bg-pink-300/25 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-pink-600/15 dark:opacity-10" />
          <div class="absolute -bottom-8 left-20 w-80 h-80 bg-orange-200/40 rounded-full mix-blend-soft-light filter blur-3xl opacity-35 animate-blob animation-delay-4000 dark:bg-orange-700/15 dark:opacity-12" />
          <div class="absolute bottom-0 right-20 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-blob animation-delay-6000 dark:bg-purple-700/10 dark:opacity-8" />
          
          <!-- Soft gradient overlay for depth -->
          <div class="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent dark:from-gray-900/90 dark:via-gray-900/20" />
          
          <!-- Warm radial glow in the center -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-amber-100/15 via-orange-100/10 to-transparent rounded-full" />
        </div>
        
        <!-- Hero content -->
        <UContainer class="relative">
          <div class="mx-auto max-w-4xl text-center py-24 lg:py-32">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Professional home cleaning you can trust.
            </h1>
            <p class="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We bring sparkle to your home with eco-friendly products, trained professionals, and attention to every detail.
            </p>
            <div class="mt-10 flex items-center justify-center gap-4">
              <UButton 
                label="Book Now"
                size="xl"
                to="https://app.squareup.com/appointments/buyer/widget/pp7iiefnbd7vqp/LNCHM239FSDW9"
                target="_blank"
              />
              <UButton 
                label="Reach Out"
                size="xl"
                color="neutral"
                variant="outline"
                @click="isContactOpen = true"
              />
            </div>
          </div>
        </UContainer>
      </div>

      <!-- Testimonial Section -->
      <UContainer class="py-12 lg:py-16">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Review 1 -->
            <UCard>
              <div class="flex flex-col items-center text-center space-y-4">
                <!-- Star Rating -->
                <div class="flex gap-1">
                  <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-6 h-6 text-amber-400" />
                </div>
                
                <!-- Review Text -->
                <p class="text-lg text-gray-700 dark:text-gray-300">
                  "Amazing work by George (Kyle) awesome guy and did an amazing job!!!"
                </p>
                
                <!-- Reviewer Info -->
                <div class="pt-2 space-y-2">
                  <div class="flex items-center justify-center gap-2">
                    <p class="font-semibold text-gray-900 dark:text-gray-100">Mac M.</p>
                    <UBadge color="success" variant="subtle" class="gap-1">
                      <UIcon name="i-heroicons-check-badge-solid" class="w-4 h-4" />
                      Verified Customer
                    </UBadge>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    House Cleaning · Fredericksburg, VA
                  </p>
                </div>
              </div>
            </UCard>

            <!-- Review 2 -->
            <UCard>
              <div class="flex flex-col items-center text-center space-y-4">
                <!-- Star Rating -->
                <div class="flex gap-1">
                  <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-6 h-6 text-amber-400" />
                </div>
                
                <!-- Review Text -->
                <p class="text-lg text-gray-700 dark:text-gray-300">
                  "Did a great job doing a move out clean for a good price. Everything looked great."
                </p>
                
                <!-- Reviewer Info -->
                <div class="pt-2 space-y-2">
                  <div class="flex items-center justify-center gap-2">
                    <p class="font-semibold text-gray-900 dark:text-gray-100">Jacqueline D.</p>
                    <UBadge color="success" variant="subtle" class="gap-1">
                      <UIcon name="i-heroicons-check-badge-solid" class="w-4 h-4" />
                      Verified Customer
                    </UBadge>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Move-Out Cleaning · Chester, VA
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>

      <!-- Square Appointments Booking Widget -->
      <UContainer class="py-16 lg:py-24">
        <div class="text-center mb-8">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            Book Your Cleaning in Minutes
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Simple online booking—pick your service, choose a time that fits your schedule, and you're all set. No phone calls needed.
          </p>
        </div>
        <SquareAppointments />
      </UContainer>

      <!-- Residential Cleaning Section -->
      <UPageSection
        title="Professional Residential Cleaning"
        description="Transform your home into a spotless sanctuary. Our residential cleaning services are designed to give you back your weekends while ensuring every corner of your home sparkles."
        orientation="horizontal"
        :features="[
          {
            title: 'Whole Home Cleaning',
            description: 'From kitchens to bathrooms, bedrooms to living spaces - we cover every room with meticulous attention to detail.',
            icon: 'i-lucide-home'
          },
          {
            title: 'Deep Clean Expertise',
            description: 'We tackle the tough spots others miss - baseboards, light fixtures, inside appliances, and those forgotten corners.',
            icon: 'i-lucide-sparkles'
          },
          {
            title: 'Eco-Friendly Products',
            description: 'Safe for your family and pets. Our green cleaning products are tough on dirt but gentle on your home and the environment.',
            icon: 'i-lucide-leaf'
          },
          {
            title: 'Flexible Scheduling',
            description: 'Weekly, bi-weekly, or monthly visits. Choose a schedule that fits your lifestyle and budget.',
            icon: 'i-lucide-calendar-check'
          }
        ]"
        :links="[
          { label: 'Get a Quote', size: 'lg', onClick: () => { isContactOpen = true } }
        ]"
      >
        <!-- Abstract sunrise visualization -->
        <div class="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
          <!-- Gradient background representing dawn -->
          <div class="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 dark:from-amber-900/10 dark:via-orange-900/10 dark:to-rose-900/10" />
          
          <!-- Abstract sun rays -->
          <div class="absolute inset-0">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent rotate-12 dark:via-amber-800/20" />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent -rotate-12 dark:via-orange-800/20" />
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/20 to-transparent rotate-45 dark:via-yellow-800/20" />
            </div>
          </div>
          
          <!-- Central abstract element -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="w-32 h-32 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/40 dark:from-amber-700/40 dark:to-orange-700/40 blur-xl" />
            <div class="absolute inset-4 rounded-full bg-gradient-to-br from-amber-100/60 to-orange-100/60 dark:from-amber-800/60 dark:to-orange-800/60 blur-md" />
          </div>
          
          <!-- Subtle sparkle accents -->
          <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse" />
          <div class="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse delay-75" />
          <div class="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-150" />
        </div>
      </UPageSection>

      <!-- Move-Out & Property Management Section -->
      <UPageSection
        title="Move-Out Cleaning & Property Management"
        description="Make transitions seamless with our comprehensive move-out cleaning services. Perfect for tenants, landlords, and property managers who need properties in pristine condition."
        orientation="horizontal"
        reverse
        :features="[
          {
            title: 'Complete Move-Out Service',
            description: 'Get your security deposit back or prepare your property for new tenants. We ensure every surface meets inspection standards.',
            icon: 'i-lucide-truck'
          },
          {
            title: 'Property Manager Partnerships',
            description: 'Reliable turnover cleaning for rental properties. We work with your schedule to minimize vacancy time.',
            icon: 'i-lucide-clipboard-check'
          },
          {
            title: 'Inspection-Ready Results',
            description: 'Inside appliances, cabinet interiors, window tracks - we handle all the details property inspectors check.',
            icon: 'i-lucide-shield-check'
          },
          {
            title: 'Fast Turnaround',
            description: 'Quick, efficient service to meet tight deadlines. Same-week availability for urgent turnovers.',
            icon: 'i-lucide-zap'
          }
        ]"
        :links="[
          { label: 'Get a Quote', size: 'lg', onClick: () => { isContactOpen = true } }
        ]"
      >
        <!-- Abstract geometric transition visualization -->
        <div class="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
          <!-- Base gradient with warmer tones -->
          <div class="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-rose-900/20 dark:via-pink-900/20 dark:to-purple-900/20" />
          
          <!-- Flowing transition lines -->
          <div class="absolute inset-0">
            <svg class="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <!-- Abstract flowing path representing transition -->
              <path d="M0,200 Q200,100 400,200 T800,200" 
                    stroke="url(#gradient1)" 
                    stroke-width="2" 
                    fill="none" 
                    opacity="0.3"/>
              <path d="M0,250 Q200,150 400,250 T800,250" 
                    stroke="url(#gradient1)" 
                    stroke-width="1.5" 
                    fill="none" 
                    opacity="0.2"/>
              <path d="M0,150 Q200,250 400,150 T800,150" 
                    stroke="url(#gradient1)" 
                    stroke-width="1.5" 
                    fill="none" 
                    opacity="0.2"/>
              
              <!-- Gradient definitions -->
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:rgb(236,72,153);stop-opacity:0.4" />
                  <stop offset="50%" style="stop-color:rgb(147,51,234);stop-opacity:0.6" />
                  <stop offset="100%" style="stop-color:rgb(236,72,153);stop-opacity:0.4" />
                </linearGradient>
              </defs>
              
              <!-- Circles representing key points -->
              <circle cx="200" cy="200" r="30" fill="url(#gradient1)" opacity="0.2"/>
              <circle cx="400" cy="200" r="40" fill="url(#gradient1)" opacity="0.25"/>
              <circle cx="600" cy="200" r="30" fill="url(#gradient1)" opacity="0.2"/>
            </svg>
          </div>
          
          <!-- Subtle floating elements with warm colors -->
          <div class="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-pink-200/20 to-purple-200/20 dark:from-pink-700/20 dark:to-purple-700/20 blur-xl animate-float" />
          <div class="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-200/20 to-rose-200/20 dark:from-purple-700/20 dark:to-rose-700/20 blur-xl animate-float-delayed" />
        </div>
      </UPageSection>

      <!-- Carpet Cleaning Section -->
      <UPageSection
        title="Professional Carpet Cleaning"
        description="Refresh your carpets and improve your home's air quality. Our professional carpet cleaning removes deep-seated dirt, stains, and odors that regular vacuuming can't reach."
        orientation="horizontal"
        :features="[
          {
            title: 'Deep Stain Removal',
            description: 'Tackle tough stains from pets, spills, and daily wear. Our cleaning process penetrates deep into carpet fibers for thorough results.',
            icon: 'i-lucide-droplet'
          },
          {
            title: 'Improved Air Quality',
            description: 'Remove allergens, dust mites, and trapped pollutants from your carpets to create a healthier home environment.',
            icon: 'i-lucide-wind'
          },
          {
            title: 'Extended Carpet Life',
            description: 'Regular professional cleaning helps maintain your carpet\'s appearance and extends its lifespan, protecting your investment.',
            icon: 'i-lucide-timer'
          },
          {
            title: 'Safe Cleaning Solutions',
            description: 'We use eco-friendly products that are tough on stains but gentle on your carpets and safe for your family and pets.',
            icon: 'i-lucide-leaf'
          }
        ]"
        :links="[
          { label: 'Get a Quote', size: 'lg', onClick: () => { isContactOpen = true } }
        ]"
      >
        <!-- Abstract fiber pattern visualization -->
        <div class="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
          <!-- Textured gradient background with warm neutrals -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-yellow-900/20" />
          
          <!-- Abstract fiber pattern using CSS -->
          <div class="absolute inset-0" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);"></div>
          
          <!-- Gradient overlay representing cleaning effect -->
          <div class="absolute inset-0">
            <div class="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white/10 dark:to-white/5" />
            <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/20 to-transparent dark:from-amber-800/20" />
          </div>
          
          <!-- Abstract clean spot circles with warm tones -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="relative">
              <div class="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-amber-100/30 to-orange-100/30 dark:from-amber-800/30 dark:to-orange-800/30 blur-2xl" />
              <div class="absolute -bottom-20 -right-20 w-32 h-32 rounded-full bg-gradient-to-br from-orange-100/30 to-yellow-100/30 dark:from-orange-800/30 dark:to-yellow-800/30 blur-2xl" />
              <div class="absolute top-0 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100/20 to-amber-100/20 dark:from-yellow-800/20 dark:to-amber-800/20 blur-xl" />
            </div>
          </div>
          
          <!-- Subtle shine effect -->
          <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5" />
        </div>
      </UPageSection>

      <!-- Eco-Friendly Practices Section -->
      <UPageSection
        title="Eco-Friendly Cleaning Practices"
        description="We care about your health and the environment. Our cleaning approach uses safer products and sustainable practices without compromising on cleanliness."
        orientation="horizontal"
        reverse
        :features="[
          {
            title: 'Family & Pet Safe Products',
            description: 'We use cleaning products that are safer for your family and pets, without harsh fumes or toxic residues.',
            icon: 'i-lucide-shield'
          },
          {
            title: 'Effective Cleaning Power',
            description: 'Green doesn\'t mean weak. Our eco-friendly products effectively tackle dirt, grime, and bacteria while being gentler on surfaces.',
            icon: 'i-lucide-sparkle'
          },
          {
            title: 'Reduced Environmental Impact',
            description: 'We minimize waste and use microfiber cloths that reduce the need for disposable products and excess chemicals.',
            icon: 'i-lucide-recycle'
          },
          {
            title: 'Better Indoor Air Quality',
            description: 'By avoiding harsh chemical cleaners, we help maintain cleaner air in your home, especially important for those with allergies or sensitivities.',
            icon: 'i-lucide-heart'
          }
        ]"
        :links="[
          { label: 'Learn More', size: 'lg', onClick: () => { isContactOpen = true } }
        ]"
      >
        <!-- Abstract nature-inspired visualization -->
        <div class="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
          <!-- Organic gradient background with warm earth tones -->
          <div class="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-900/10 dark:via-orange-900/10 dark:to-rose-900/10" />
          
          <!-- Abstract leaf patterns using SVG -->
          <div class="absolute inset-0">
            <svg class="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <!-- Organic flowing shapes -->
              <ellipse cx="200" cy="100" rx="150" ry="80" 
                      fill="url(#leafGradient)" 
                      opacity="0.15" 
                      transform="rotate(-20 200 100)"/>
              <ellipse cx="600" cy="300" rx="180" ry="90" 
                      fill="url(#leafGradient)" 
                      opacity="0.12" 
                      transform="rotate(30 600 300)"/>
              <ellipse cx="400" cy="200" rx="200" ry="100" 
                      fill="url(#leafGradient2)" 
                      opacity="0.1"/>
              
              <!-- Gradient definitions with warm colors -->
              <defs>
                <radialGradient id="leafGradient">
                  <stop offset="0%" style="stop-color:rgb(251,176,36);stop-opacity:0.3" />
                  <stop offset="100%" style="stop-color:rgb(217,119,6);stop-opacity:0.1" />
                </radialGradient>
                <radialGradient id="leafGradient2">
                  <stop offset="0%" style="stop-color:rgb(236,72,153);stop-opacity:0.25" />
                  <stop offset="100%" style="stop-color:rgb(251,176,36);stop-opacity:0.05" />
                </radialGradient>
              </defs>
              
              <!-- Subtle circular accents with warm colors -->
              <circle cx="150" cy="250" r="3" fill="rgb(251,176,36)" opacity="0.3"/>
              <circle cx="650" cy="150" r="2" fill="rgb(217,119,6)" opacity="0.3"/>
              <circle cx="350" cy="320" r="2.5" fill="rgb(236,72,153)" opacity="0.3"/>
            </svg>
          </div>
          
          <!-- Floating organic shapes with warm tones -->
          <div class="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-amber-200/20 to-orange-200/20 dark:from-amber-700/20 dark:to-orange-700/20 blur-2xl animate-float" />
          <div class="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-rose-200/15 to-pink-200/15 dark:from-rose-700/15 dark:to-pink-700/15 blur-2xl animate-float-delayed" />
          
          <!-- Light overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5" />
        </div>
      </UPageSection>

      <!-- FAQ Section -->
      <UContainer class="py-8">
        <div class="max-w-xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              Have questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
            </p>
          </div>
          
          <UAccordion 
            type="multiple"
            :items="faqItems"
          />
        </div>
      </UContainer>

      <!-- Veteran-Owned Business Section -->
      <UContainer class="py-16 lg:py-24">
        <div class="max-w-4xl mx-auto">
          <UCard class="relative overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-sm">
            <!-- Subtle flag-inspired accent line at top -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-600 opacity-40"></div>
            
            <!-- Subtle star watermark -->
            <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 opacity-5">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full text-gray-900 dark:text-gray-100">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <div class="relative z-10 space-y-6">
              <div class="flex flex-col sm:flex-row items-start gap-6">
                <div class="flex-shrink-0">
                  <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <UIcon name="i-heroicons-shield-check" class="w-7 h-7" />
                  </div>
                </div>
                
                <div class="flex-1 space-y-4">
                  <div>
                    <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Veteran-Owned & Operated
                    </h2>
                    <p class="text-base text-gray-600 dark:text-gray-400">
                      Your trust means everything to us. As a veteran-owned business, we bring military precision, integrity, and a deep commitment to service to every home we clean.
                    </p>
                  </div>
                  
                  <div class="grid sm:grid-cols-2 gap-3">
                    <div class="flex items-start gap-2.5">
                      <div class="w-1 h-4 bg-blue-600 rounded-full mt-0.5 flex-shrink-0"></div>
                      <div>
                        <p class="font-medium text-gray-900 dark:text-gray-100 text-sm">Attention to Detail</p>
                        <p class="text-xs text-gray-500 dark:text-gray-500">Military training means nothing gets overlooked</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-2.5">
                      <div class="w-1 h-4 bg-red-600 rounded-full mt-0.5 flex-shrink-0"></div>
                      <div>
                        <p class="font-medium text-gray-900 dark:text-gray-100 text-sm">Punctual & Reliable</p>
                        <p class="text-xs text-gray-500 dark:text-gray-500">We show up on time, every time</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-2.5">
                      <div class="w-1 h-4 bg-blue-600 rounded-full mt-0.5 flex-shrink-0"></div>
                      <div>
                        <p class="font-medium text-gray-900 dark:text-gray-100 text-sm">Honor & Integrity</p>
                        <p class="text-xs text-gray-500 dark:text-gray-500">Trustworthy service you can count on</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-2.5">
                      <div class="w-1 h-4 bg-red-600 rounded-full mt-0.5 flex-shrink-0"></div>
                      <div>
                        <p class="font-medium text-gray-900 dark:text-gray-100 text-sm">Community Focused</p>
                        <p class="text-xs text-gray-500 dark:text-gray-500">Proudly serving our Richmond neighbors</p>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-xs text-gray-500 dark:text-gray-500 italic pt-2 border-t border-gray-100 dark:border-gray-800">
                    "Service to others is the rent you pay for your room here on earth."<br/>We continue that service by bringing excellence to your home.
                  </p>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>

      <!-- CTA Section -->
      <UPageCTA
        title="A Spotless Home is Just a Click Away"
        description="Book online in under 2 minutes—no quotes, no hassle, just a cleaner home waiting for you."
        :links="[
          { label: 'Book Now', size: 'lg', to: 'https://app.squareup.com/appointments/buyer/widget/pp7iiefnbd7vqp/LNCHM239FSDW9', target: '_blank' },
          { label: 'Contact Us', size: 'lg', color: 'neutral', variant: 'outline', onClick: () => { isContactOpen = true } }
        ]"
        variant="naked"
        class="overflow-hidden max-w-5xl mx-auto relative"
      >
        <ClientOnly>
          <CtaGradient />
        </ClientOnly>
      </UPageCTA>
    </UMain>

    <!-- Footer -->
    <UFooter>
      <template #top>
        <UContainer>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <!-- Company Info -->
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <ColorStripeLogo size="sm" />
                <div>
                  <div class="text-lg font-bold">Daybreak Cleaning</div>
                  <div class="text-sm text-muted">Professional Home Cleaning</div>
                </div>
              </div>
              <div class="space-y-1 text-sm text-muted">
                <p>Black-Owned & Veteran-Owned Business</p>
                <p>Proudly serving Richmond, VA and surrounding areas</p>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div class="space-y-4">
              <h3 class="text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul class="space-y-2 text-sm text-muted">
                <li>• Residential Cleaning</li>
                <li>• Move-Out Cleaning</li>
                <li>• Carpet Cleaning</li>
                <li>• Deep Cleaning</li>
              </ul>
            </div>
            
            <!-- Contact Info -->
            <div class="space-y-4">
              <h3 class="text-sm font-semibold uppercase tracking-wider">Get In Touch</h3>
              <div class="space-y-2 text-sm">
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-phone" class="text-muted flex-shrink-0" />
                  <a href="tel:+18049132670" class="text-muted hover:text-primary transition-colors">
                    (804) 913-2670
                  </a>
                </div>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-envelope" class="text-muted flex-shrink-0" />
                  <a href="mailto:kyle@daybreakrva.com" class="text-muted hover:text-primary transition-colors">
                    kyle@daybreakrva.com
                  </a>
                </div>
                <div class="flex items-center gap-2">
                  <UIcon name="i-heroicons-map-pin" class="text-muted flex-shrink-0" />
                  <span class="text-muted">Richmond, Virginia</span>
                </div>
              </div>
              <div class="pt-2">
                <UButton
                  label="Book Online"
                  size="sm"
                  color="primary"
                  to="https://app.squareup.com/appointments/buyer/widget/pp7iiefnbd7vqp/LNCHM239FSDW9"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </UContainer>
        <USeparator />
      </template>
      
      <template #left>
        <div class="text-xs text-muted">
          © {{ currentYear }} Daybreak Cleaning LLC. All rights reserved.
        </div>
      </template>

      <template #right>
        <div class="flex items-center gap-3 text-xs text-muted">
          <button 
            @click="isPrivacyPolicyOpen = true" 
            class="hover:text-primary transition-colors underline"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <span>Made with ☀️ in Richmond, VA</span>
        </div>
      </template>
    </UFooter>

    <!-- Privacy Policy Slideover -->
    <USlideover 
      v-model:open="isPrivacyPolicyOpen" 
      title="Privacy Policy" 
      description="SMS Marketing Consent and Data Privacy"
    >
      <template #body>
        <div class="space-y-6">
          <!-- Simple intro -->
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Last updated: October 25, 2025</p>
          </div>

          <!-- SMS Consent Summary -->
          <div>
            <h3 class="font-semibold mb-3">SMS Marketing Consent</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
              By providing your phone number, you consent to receive automated SMS messages from Daybreak Cleaning for:
            </p>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• Booking confirmations and reminders</li>
              <li>• Service updates and scheduling changes</li>
              <li>• Special promotions (optional)</li>
            </ul>
          </div>

          <!-- Key Points -->
          <div class="space-y-4">
            <div>
              <p class="text-sm font-medium mb-1">Message Frequency</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Up to 4 messages per month. Message and data rates may apply.</p>
            </div>
            
            <div>
              <p class="text-sm font-medium mb-1">How to Opt Out</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Reply <strong>STOP</strong> to any message, or call us at (804) 913-2670.</p>
            </div>
            
            <div>
              <p class="text-sm font-medium mb-1">Need Help?</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Reply <strong>HELP</strong> to any message for support.</p>
            </div>
          </div>

          <!-- Privacy -->
          <div>
            <h4 class="font-semibold mb-2">Your Privacy</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300">
              We will never sell your personal information. Your data is only used to provide our services and communicate with you.
            </p>
          </div>

          <!-- Contact -->
          <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p class="text-sm font-medium mb-2">Questions?</p>
            <div class="space-y-1 text-sm">
              <p>
                <a href="tel:+18049132670" class="text-primary hover:underline">(804) 913-2670</a>
              </p>
              <p>
                <a href="mailto:kyle@daybreakrva.com" class="text-primary hover:underline">kyle@daybreakrva.com</a>
              </p>
            </div>
          </div>

          <!-- Full Policy Link -->
          <div>
            <UButton
              to="/privacy-policy"
              variant="soft"
              color="neutral"
              size="sm"
              block
            >
              View Full Privacy Policy
            </UButton>
          </div>
        </div>
      </template>
    </USlideover>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

// SEO optimization for homepage
useSeoMeta({
  title: 'Professional Home Cleaning Service in Richmond VA | Daybreak Cleaning',
  description: 'Professional cleaning service in Richmond VA offering residential cleaning, deep cleaning, move-in/out, carpet cleaning, and specialty services. Eco-friendly products, online booking, same-week availability.',
  ogTitle: 'Daybreak Cleaning - Professional Home Cleaning Service in Richmond VA',
  ogDescription: 'Professional home cleaning you can trust. Regular house cleaning, deep cleaning, move-in/out, carpet cleaning, and more. Book online in minutes.',
  ogImage: 'https://www.daybreakrva.com/og-image.png',
  ogUrl: 'https://www.daybreakrva.com',
  twitterTitle: 'Daybreak Cleaning - Richmond VA Home Cleaning Service',
  twitterDescription: 'Professional, eco-friendly home cleaning in Richmond VA. Regular cleaning, deep cleaning, move-in/out, carpet cleaning & more. Book online today!',
  twitterImage: 'https://www.daybreakrva.com/og-image.png',
  twitterCard: 'summary_large_image'
})

// Computed current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Contact form state
const isContactOpen = ref(false)
const isSubmitting = ref(false)
const formState = reactive({
  name: '',
  email: '',
  notes: ''
})

// Privacy policy slideover state
const isPrivacyPolicyOpen = ref(false)

const toast = useToast()

// Form validation
const validateForm = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ name: 'name', message: 'Name is required' })
  if (!state.email) errors.push({ name: 'email', message: 'Email is required' })
  if (state.email && !state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push({ name: 'email', message: 'Please enter a valid email' })
  }
  return errors
}

// Form submission
async function onSubmit(event: FormSubmitEvent<typeof formState>) {
  await submitForm()
}

async function submitForm() {
  isSubmitting.value = true
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formState
    })
    
    toast.add({
      title: 'Message sent!',
      description: 'Thank you for reaching out. We\'ll get back to you soon.',
      color: 'success'
    })
    
    // Reset form and close slideover
    formState.name = ''
    formState.email = ''
    formState.notes = ''
    isContactOpen.value = false
  } catch (error) {
    toast.add({
      title: 'Something went wrong',
      description: 'Please try again or contact us directly.',
      color: 'error'
    })
  } finally {
    isSubmitting.value = false
  }
}

// FAQ data
const faqItems = ref([
  {
    label: 'What services do you offer?',
    icon: 'i-lucide-sparkles',
    content: 'We offer regular house cleaning, deep cleaning, move-in/out cleaning, carpet cleaning, and specialized services like kitchen and bathroom deep cleans. We can also create custom cleaning plans based on your specific needs.'
  },
  {
    label: 'How do you price your services?',
    icon: 'i-lucide-tag',
    content: 'Pricing varies based on the size of your home, the type of service, and frequency. We offer transparent pricing through our booking system where you can select your home size and service type to see exact costs upfront.'
  },
  {
    label: 'Do you use eco-friendly products?',
    icon: 'i-lucide-leaf',
    content: 'Yes! We prioritize eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. Our green cleaning solutions are effective against dirt and germs while being gentle on your home.'
  },
  {
    label: 'Do I need to be home during the cleaning?',
    icon: 'i-lucide-home',
    content: 'No, you don\'t need to be home. Many of our clients provide us with access to their homes and go about their day. Our team is trained to work independently with professionalism and respect for your space.'
  },
  {
    label: 'How far in advance should I book?',
    icon: 'i-lucide-calendar',
    content: 'We recommend booking at least a week in advance for regular cleaning services. For move-out cleanings or urgent requests, we often have same-week availability. Check our booking calendar for current openings.'
  },
  {
    label: 'What if I need to reschedule or cancel?',
    icon: 'i-lucide-calendar-x',
    content: 'We understand that plans change. Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment. This helps us accommodate other customers and maintain our schedule.'
  },
  {
    label: 'What areas do you serve?',
    icon: 'i-lucide-map-pin',
    content: 'We proudly serve the Richmond, VA metropolitan area, as far south as Petersburg and as far north as Fredericksburg. If you\'re unsure whether we service your location, please reach out and we\'ll let you know.'
  }
])
</script>