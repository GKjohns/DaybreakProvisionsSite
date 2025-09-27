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
          to="/" 
          size="sm"
          variant="ghost"
          icon="i-lucide-home"
        >
          Back to Home
        </UButton>
      </template>
    </UHeader>

    <!-- Page Content -->
    <div class="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-highlighted mb-4">
          Let's get provisions in your building
        </h1>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          Quick and easy. Tell us about your property and we'll reach out to schedule a visit.
        </p>
      </div>

      <!-- Form Section -->
      <UCard>
        <UForm
          :state="state"
          :validate="validate"
          @submit="onSubmit"
          class="space-y-6"
        >
          <!-- Contact Information Section -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Your Information</h3>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <UFormField label="Name" name="name" required>
                <UInput
                  v-model="state.name"
                  placeholder="Jane Smith"
                  icon="i-lucide-user"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Company/Property" name="propertyName">
                <UInput
                  v-model="state.propertyName"
                  placeholder="Downtown Business Center"
                  icon="i-lucide-building"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Email" name="email" required>
                <UInput
                  v-model="state.email"
                  type="email"
                  placeholder="jane@company.com"
                  icon="i-lucide-mail"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Phone" name="phone" required>
                <UInput
                  v-model="state.phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  icon="i-lucide-phone"
                  class="w-full"
                />
              </UFormField>
            </div>
          </div>

          <USeparator />

          <!-- Property Address Section -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Property Location</h3>
            <div class="space-y-4">
              <UFormField 
                label="Property Address" 
                name="fullAddress" 
                description="Street address, city, state, zip code"
                required
              >
                <UInput
                  v-model="state.fullAddress"
                  placeholder="123 Main Street, Richmond, VA 23220"
                  icon="i-lucide-map-pin"
                  class="w-full"
                  @input="handleAddressInput"
                />
                <!-- Note: In production, this would show autocomplete suggestions -->
                <div v-if="showAddressHint" class="mt-2 text-sm text-muted">
                  <UIcon name="i-lucide-info" class="w-4 h-4 inline mr-1" />
                  Address autocomplete will be available in production
                </div>
              </UFormField>
            </div>
          </div>

          <USeparator />

          <!-- Additional Information Section -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Additional Information</h3>
            <UFormField
              label="Notes"
              name="notes"
              description="Any access instructions, preferred timing, or special requirements? (optional)"
            >
              <UTextarea
                v-model="state.notes"
                placeholder="e.g., Loading dock access, preferred location near lobby, best times to contact, etc."
                :rows="3"
                class="w-full"
              />
            </UFormField>
          </div>

          <!-- What Happens Next Section -->
          <UAlert
            icon="i-lucide-sparkles"
            color="primary"
            variant="soft"
            title="What Happens Next"
          >
            <template #description>
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>We'll review your information and reach out within 1 business day</li>
                <li>Schedule a quick 15-minute site assessment</li>
                <li>We'll measure the space and assess foot traffic</li>
                <li>Installation typically within 3-5 business days after approval</li>
                <li>No commitment required during the site visit</li>
              </ul>
            </template>
          </UAlert>

          <!-- Submit Button -->
          <div class="flex justify-between items-center pt-4">
            <UButton
              type="submit"
              size="lg"
              :loading="isSubmitting"
              :disabled="isSubmitting || !isFormValid"
            >
              {{ isSubmitting ? 'Submitting...' : 'Request Consultation' }}
            </UButton>
          </div>
        </UForm>
      </UCard>

      <!-- Trust Indicators -->
      <div class="mt-12 text-center">
        <p class="text-sm text-muted mb-4">
          Questions? Email us at hello@daybreakprovisions.com
        </p>
        <div class="flex items-center justify-center gap-6 text-sm text-muted">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-success" />
            <span>No installation fees</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-success" />
            <span>Cancel anytime</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-check-circle" class="w-4 h-4 text-success" />
            <span>Full service included</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <UFooter class="mt-auto">
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

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

// Current year for copyright
const currentYear = computed(() => new Date().getFullYear())

// Form state
const state = reactive({
  name: '',
  email: '',
  phone: '',
  propertyName: '',
  fullAddress: '',
  notes: ''
})

// Submission state
const isSubmitting = ref(false)
const showAddressHint = ref(false)
const toast = useToast()

// Check if form is valid for enabling submit button
const isFormValid = computed(() => {
  return state.name && state.email && state.phone && state.fullAddress
})

// Handle address input (placeholder for autocomplete)
function handleAddressInput() {
  // Show hint when user starts typing
  if (state.fullAddress.length > 0 && state.fullAddress.length < 10) {
    showAddressHint.value = true
  } else {
    showAddressHint.value = false
  }
  
  // In production, this would trigger address autocomplete API
}

// Form validation
const validate = (state: any): FormError[] => {
  const errors: FormError[] = []

  // Required field validation
  if (!state.name) errors.push({ name: 'name', message: 'Name is required' })
  
  // Email validation
  if (!state.email) {
    errors.push({ name: 'email', message: 'Email is required' })
  } else if (!isValidEmail(state.email)) {
    errors.push({ name: 'email', message: 'Please enter a valid email address' })
  }
  
  // Phone validation
  if (!state.phone) {
    errors.push({ name: 'phone', message: 'Phone number is required' })
  } else if (!isValidPhone(state.phone)) {
    errors.push({ name: 'phone', message: 'Please enter a valid phone number' })
  }
  
  // Address validation
  if (!state.fullAddress) {
    errors.push({ name: 'fullAddress', message: 'Property address is required' })
  }

  return errors
}

// Validation helpers
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function isValidPhone(phone: string): boolean {
  // Remove all non-digits for validation
  const digitsOnly = phone.replace(/\D/g, '')
  return digitsOnly.length >= 10 && digitsOnly.length <= 11
}

// Form submission handler
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  isSubmitting.value = true

  try {
    // Submit to API route
    const response = await $fetch('/api/consultation', {
      method: 'POST',
      body: {
        name: state.name,
        email: state.email,
        phone: state.phone,
        propertyName: state.propertyName,
        fullAddress: state.fullAddress,
        notes: state.notes
      }
    })
    
    // Success handling
    toast.add({
      title: 'Request Submitted!',
      description: `Thank you! We'll reach out to ${state.email} within 1 business day to schedule your consultation.`,
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
    
    // Reset form after successful submission
    state.name = ''
    state.email = ''
    state.phone = ''
    state.propertyName = ''
    state.fullAddress = ''
    state.notes = ''
    showAddressHint.value = false
    
    // Optional: Log the response for debugging
    console.log('Form submitted successfully:', response)
    
    // Optional: Redirect to a thank you page or back to home after a delay
    // setTimeout(() => navigateTo('/'), 3000)
    
  } catch (error: any) {
    // Error handling
    const errorMessage = error?.data?.statusMessage || 'There was an error submitting your request. Please try again or email us directly at hello@daybreakprovisions.com.'
    
    toast.add({
      title: 'Submission Error',
      description: errorMessage,
      color: 'error',
      icon: 'i-lucide-alert-circle'
    })
    
    console.error('Submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Gradient accent bar from the main page */
.gradient-accent {
  height: 2px;
  background: linear-gradient(
    to right,
    rgb(251 191 36 / 0.8),
    rgb(217 119 6 / 0.8),
    rgb(236 72 153 / 0.8),
    rgb(147 51 234 / 0.8)
  );
}
</style>
