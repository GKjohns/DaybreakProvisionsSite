<template>
  <!-- Gradient accent bar -->
  <div class="gradient-accent" />

    <!-- Navigation -->
    <UHeader>
      <template #left>
        <AppLogo />
      </template>
      
      <template #right>
        <!-- Contact Slideover -->
        <USlideover 
          v-model:open="isContactOpen" 
          title="Get in Touch" 
          description="We'd love to hear from you. Send us a message and we'll get back to you soon."
          :ui="{ footer: 'justify-end' }"
        >
          <!-- <UButton 
            variant="outline"
            icon="i-lucide-message-circle"
          >
            Get Started
          </UButton> -->
          
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
                  <div class="flex items-center gap-2 text-sm">
                    <UIcon name="i-heroicons-envelope" class="text-gray-400" />
                    <a href="mailto:kyle@daybreakrva.com" class="text-primary hover:underline">
                      kyle@daybreakrva.com
                    </a>
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
      <UPageHero
        title="Professional home cleaning you can trust."
        description="We bring sparkle to your home with eco-friendly products, trained professionals, and attention to every detail."
        orientation="horizontal"
        :links="[
          { label: 'Book Now', size: 'xl', to: 'https://app.squareup.com/appointments/buyer/widget/pp7iiefnbd7vqp/LNCHM239FSDW9', target: '_blank' },
          { label: 'Reach Out', size: 'xl', color: 'neutral', variant: 'outline', onClick: () => { isContactOpen = true } }
        ]"
      >
        <img 
          src="/hero-image.png"
          alt="Person organizing items on wooden shelves in a bright, clean modern kitchen with white farmhouse sink, natural wood cabinetry, and green plants"
          class="rounded-lg shadow-2xl ring ring-default"
        />
      </UPageHero>

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
      <UContainer class="py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Text Content (Left) -->
          <div class="space-y-6">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                Professional Residential Cleaning
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Transform your home into a spotless sanctuary. Our residential cleaning services are designed to give you back your weekends while ensuring every corner of your home sparkles.
              </p>
            </div>
            
            <div class="space-y-4">
              <div class="flex gap-4">
                <UIcon name="i-lucide-home" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Whole Home Cleaning</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    From kitchens to bathrooms, bedrooms to living spaces - we cover every room with meticulous attention to detail.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-sparkles" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Deep Clean Expertise</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    We tackle the tough spots others miss - baseboards, light fixtures, inside appliances, and those forgotten corners.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-leaf" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Eco-Friendly Products</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Safe for your family and pets. Our green cleaning products are tough on dirt but gentle on your home and the environment.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-calendar-check" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Flexible Scheduling</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Weekly, bi-weekly, or monthly visits. Choose a schedule that fits your lifestyle and budget.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="pt-4">
              <UButton size="lg" @click="isContactOpen = true">
                Get a Quote
              </UButton>
            </div>
          </div>
          
          <!-- Image (Right) -->
          <div class="relative">
            <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80"
                alt="Clean and modern living room with natural light"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </UContainer>

      <!-- Move-Out & Property Management Section -->
      <UContainer class="py-16 lg:py-24 border-t border-gray-200 dark:border-gray-800">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Image (Left) -->
          <div class="relative order-2 lg:order-1">
            <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80"
                alt="Empty clean room ready for new tenants"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <!-- Text Content (Right) -->
          <div class="space-y-6 order-1 lg:order-2">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                Move-Out Cleaning & Property Management
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Make transitions seamless with our comprehensive move-out cleaning services. Perfect for tenants, landlords, and property managers who need properties in pristine condition.
              </p>
            </div>
            
            <div class="space-y-4">
              <div class="flex gap-4">
                <UIcon name="i-lucide-truck" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Complete Move-Out Service</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Get your security deposit back or prepare your property for new tenants. We ensure every surface meets inspection standards.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-clipboard-check" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Property Manager Partnerships</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Reliable turnover cleaning for rental properties. We work with your schedule to minimize vacancy time.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-shield-check" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Inspection-Ready Results</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Inside appliances, cabinet interiors, window tracks - we handle all the details property inspectors check.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-zap" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Fast Turnaround</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Quick, efficient service to meet tight deadlines. Same-week availability for urgent turnovers.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="pt-4">
              <UButton size="lg" @click="isContactOpen = true">
                Get a Quote
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>

      <!-- Carpet Cleaning Section -->
      <UContainer class="py-16 lg:py-24 border-t border-gray-200 dark:border-gray-800">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Text Content (Left) -->
          <div class="space-y-6">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                Professional Carpet Cleaning
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Refresh your carpets and improve your home's air quality. Our professional carpet cleaning removes deep-seated dirt, stains, and odors that regular vacuuming can't reach.
              </p>
            </div>
            
            <div class="space-y-4">
              <div class="flex gap-4">
                <UIcon name="i-lucide-droplet" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Deep Stain Removal</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Tackle tough stains from pets, spills, and daily wear. Our cleaning process penetrates deep into carpet fibers for thorough results.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-wind" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Improved Air Quality</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Remove allergens, dust mites, and trapped pollutants from your carpets to create a healthier home environment.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-timer" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Extended Carpet Life</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Regular professional cleaning helps maintain your carpet's appearance and extends its lifespan, protecting your investment.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-leaf" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Safe Cleaning Solutions</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    We use eco-friendly products that are tough on stains but gentle on your carpets and safe for your family and pets.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="pt-4">
              <UButton size="lg" @click="isContactOpen = true">
                Get a Quote
              </UButton>
            </div>
          </div>
          
          <!-- Image (Right) -->
          <div class="relative">
            <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80"
                alt="Clean, plush carpet in modern home interior"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </UContainer>

      <!-- Eco-Friendly Practices Section -->
      <UContainer class="py-16 lg:py-24 border-t border-gray-200 dark:border-gray-800">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Image (Left) -->
          <div class="relative order-2 lg:order-1">
            <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&q=80"
                alt="Lush green forest with sunlight streaming through trees"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <!-- Text Content (Right) -->
          <div class="space-y-6 order-1 lg:order-2">
            <div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                Eco-Friendly Cleaning Practices
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We care about your health and the environment. Our cleaning approach uses safer products and sustainable practices without compromising on cleanliness.
              </p>
            </div>
            
            <div class="space-y-4">
              <div class="flex gap-4">
                <UIcon name="i-lucide-shield" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Family & Pet Safe Products</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    We use cleaning products that are safer for your family and pets, without harsh fumes or toxic residues.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-sparkle" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Effective Cleaning Power</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Green doesn't mean weak. Our eco-friendly products effectively tackle dirt, grime, and bacteria while being gentler on surfaces.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-recycle" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Reduced Environmental Impact</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    We minimize waste and use microfiber cloths that reduce the need for disposable products and excess chemicals.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <UIcon name="i-lucide-heart" class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 class="font-semibold mb-1">Better Indoor Air Quality</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    By avoiding harsh chemical cleaners, we help maintain cleaner air in your home, especially important for those with allergies or sensitivities.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="pt-4">
              <UButton size="lg" @click="isContactOpen = true">
                Learn More
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>

      <!-- FAQ Section -->
      <UContainer class="py-16 lg:py-24 border-t border-gray-200 dark:border-gray-800">
        <div class="max-w-3xl mx-auto">
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
            :ui="{
              trigger: 'text-base',
              body: 'text-base text-muted'
            }"
          />
        </div>
      </UContainer>

      <!-- CTA Section -->
      <UPageCTA
        class="relative overflow-hidden"
        title="A Spotless Home is Just a Click Away"
        description="Book online in under 2 minutes—no quotes, no hassle, just a cleaner home waiting for you."
        :links="[
          { label: 'Book Now', size: 'lg', to: 'https://app.squareup.com/appointments/buyer/widget/pp7iiefnbd7vqp/LNCHM239FSDW9', target: '_blank' },
          { label: 'Contact Us', size: 'lg', color: 'neutral', variant: 'outline', onClick: () => { isContactOpen = true } }
        ]"
      />
    </UMain>

    <!-- Footer -->
    <UFooter>
      <template #left>
        <div class="text-xs font-bold text-muted tracking-wider">
          © {{ currentYear }} DAYBREAK CLEANING LLC
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
    content: 'We proudly serve the Richmond, VA metropolitan area. If you\'re unsure whether we service your location, please reach out and we\'ll let you know.'
  }
])
</script>