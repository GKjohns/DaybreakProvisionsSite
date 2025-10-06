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

      <!-- Testimonial Section -->
      <UContainer class="py-12 lg:py-16">
        <div class="max-w-2xl mx-auto">
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
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80"
          alt="Clean and modern living room with natural light"
          class="w-full rounded-lg shadow-2xl ring ring-default"
          loading="lazy"
        />
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
        <img 
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&q=80"
          alt="Empty clean room ready for new tenants"
          class="w-full rounded-lg shadow-2xl ring ring-default"
          loading="lazy"
        />
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
        <img 
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80"
          alt="Clean, plush carpet in modern home interior"
          class="w-full rounded-lg shadow-2xl ring ring-default"
          loading="lazy"
        />
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
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&q=80"
          alt="Lush green forest with sunlight streaming through trees"
          class="w-full rounded-lg shadow-2xl ring ring-default"
          loading="lazy"
        />
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
    content: 'We proudly serve the Richmond, VA metropolitan area, as far south as Petersburg and as far north as Fredericksburg. If you\'re unsure whether we service your location, please reach out and we\'ll let you know.'
  }
])
</script>