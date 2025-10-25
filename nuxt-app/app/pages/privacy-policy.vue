<template>
  <!-- Gradient accent bar -->
  <div class="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400" />

  <!-- Navigation -->
  <UHeader>
    <template #left>
      <AppLogo />
    </template>
    
    <template #right>
      <UButton
        to="/"
        color="neutral"
        variant="ghost"
        icon="i-lucide-arrow-left"
        aria-label="Back to Home"
      >
        <span class="hidden sm:inline">Back to Home</span>
      </UButton>
    </template>
  </UHeader>

  <!-- Main Content -->
  <UMain>
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-16">
      <!-- Subtle animated orbs -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl dark:bg-amber-600/10" />
        <div class="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl dark:bg-pink-600/10" />
      </div>
      
      <UContainer>
        <div class="flex items-center justify-center mb-6">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
            <UIcon name="i-lucide-shield-check" class="w-10 h-10 text-amber-600 dark:text-amber-400" />
          </div>
        </div>
        
        <h1 class="text-4xl lg:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
        <p class="text-xl text-center text-gray-600 dark:text-gray-400">SMS Marketing Consent and Data Privacy</p>
        
        <div class="flex items-center justify-center mt-6">
          <UBadge color="neutral" variant="subtle" size="lg" class="gap-2">
            <UIcon name="i-lucide-calendar" class="w-4 h-4" />
            Last updated: October 25, 2025
          </UBadge>
        </div>
      </UContainer>
    </div>

    <!-- Content Section -->
    <UContainer class="py-16 lg:py-20">
      <div class="max-w-4xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Table of Contents Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-20">
              <UCard class="bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/5 dark:to-orange-900/5">
                <h3 class="font-semibold mb-4 flex items-center gap-2">
                  <UIcon name="i-lucide-list" class="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  Quick Navigation
                </h3>
                <ul class="space-y-2 text-sm">
                  <li>
                    <a href="#sms-consent" class="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
                      SMS Marketing Consent
                    </a>
                  </li>
                  <li>
                    <a href="#data-privacy" class="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
                      Data Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#contact" class="text-gray-600 hover:text-primary dark:text-gray-400 transition-colors">
                      Contact Information
                    </a>
                  </li>
                </ul>
              </UCard>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-12">
            <!-- SMS Marketing Consent Section -->
            <section id="sms-consent">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <UIcon name="i-lucide-message-square" class="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h2 class="text-2xl font-bold">SMS Marketing Consent</h2>
              </div>

              <div class="space-y-8">
                <!-- How We Use SMS -->
                <UCard>
                  <h3 class="font-semibold mb-3 flex items-center gap-2">
                    <UIcon name="i-lucide-info" class="w-4 h-4 text-primary" />
                    How We Use SMS
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    By opting in to receive text messages from Daybreak Cleaning, you agree to receive SMS messages 
                    for the following purposes:
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <UIcon name="i-lucide-check" class="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Booking confirmations and reminders</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <UIcon name="i-lucide-check" class="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Service updates and scheduling changes</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <UIcon name="i-lucide-check" class="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>Special promotions and offers (optional)</span>
                    </li>
                  </ul>
                </UCard>

                <!-- Consent Details -->
                <div class="space-y-6">
                  <div>
                    <h3 class="font-semibold mb-2">Consent to Receive Messages</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                      When you provide your phone number and opt in to receive text messages, you are consenting 
                      to receive automated SMS messages from Daybreak Cleaning at the phone number provided. 
                      This consent is not required to purchase goods or services.
                    </p>
                  </div>

                  <div>
                    <h3 class="font-semibold mb-2">Message Frequency</h3>
                    <p class="text-gray-700 dark:text-gray-300">
                      Message frequency varies based on your service schedule and any special offers we may send. 
                      You may receive up to 4 messages per month for booking-related communications, and occasional 
                      promotional messages if you opt in for marketing communications.
                    </p>
                  </div>

                  <UAlert
                    color="warning"
                    variant="subtle"
                    icon="i-lucide-alert-circle"
                    title="Message and Data Rates"
                    description="Message and data rates may apply based on your mobile carrier's plan. Please contact your carrier for details about your specific plan."
                  />
                </div>

                <!-- How to Opt Out -->
                <UCard class="border-2 border-primary/20 bg-primary/5">
                  <h3 class="font-semibold mb-3 flex items-center gap-2">
                    <UIcon name="i-lucide-log-out" class="w-4 h-4" />
                    How to Opt Out
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to 
                    any text message you receive from us. You may also contact us directly:
                  </p>
                  <div class="flex flex-wrap gap-3">
                    <UButton
                      color="primary"
                      variant="soft"
                      icon="i-lucide-phone"
                      to="tel:+18049132670"
                      class="gap-1.5"
                    >
                      (804) 913-2670
                      <UBadge color="warning" variant="subtle" size="xs">Text OK</UBadge>
                    </UButton>
                    <UButton
                      color="primary"
                      variant="soft"
                      icon="i-lucide-mail"
                      to="mailto:kyle@daybreakrva.com"
                    >
                      kyle@daybreakrva.com
                    </UButton>
                  </div>
                </UCard>

                <!-- Getting Help -->
                <div>
                  <h3 class="font-semibold mb-2">Getting Help</h3>
                  <p class="text-gray-700 dark:text-gray-300">
                    For help or support with SMS messages, reply <strong>HELP</strong> to any message, or text/call 
                    us at <a href="tel:+18049132670" class="text-primary hover:underline">(804) 913-2670</a>.
                  </p>
                </div>
              </div>
            </section>

            <!-- Data Privacy Section -->
            <section id="data-privacy" class="pt-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                  <UIcon name="i-lucide-shield" class="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 class="text-2xl font-bold">Data Privacy and Sharing</h2>
              </div>

              <UCard class="border-l-4 border-pink-400 dark:border-pink-600">
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  We respect your privacy. Your phone number and any information you provide will not be shared 
                  with third parties except as necessary to deliver SMS services through our messaging service 
                  provider. <strong>We will never sell your personal information.</strong>
                </p>
                
                <h3 class="font-semibold mb-3">Information We Collect</h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <span class="text-pink-500 dark:text-pink-400 mt-0.5">•</span>
                    <span>Your phone number</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-pink-500 dark:text-pink-400 mt-0.5">•</span>
                    <span>Your name and booking details</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-pink-500 dark:text-pink-400 mt-0.5">•</span>
                    <span>SMS message history for service purposes</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-pink-500 dark:text-pink-400 mt-0.5">•</span>
                    <span>Opt-in and opt-out preferences</span>
                  </li>
                </ul>
              </UCard>

              <div class="mt-6">
                <h3 class="font-semibold mb-2">Changes to This Policy</h3>
                <p class="text-gray-700 dark:text-gray-300">
                  We may update this privacy policy from time to time. Any changes will be posted on this page 
                  with an updated "Last Updated" date. Your continued participation in our SMS program after 
                  changes are posted constitutes your acceptance of the updated policy.
                </p>
              </div>
            </section>

            <!-- Contact Information -->
            <section id="contact" class="pt-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <UIcon name="i-lucide-contact" class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 class="text-2xl font-bold">Contact Information</h2>
              </div>

              <UCard class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
                <p class="text-gray-700 dark:text-gray-300 mb-6">
                  If you have questions about this privacy policy or our SMS practices, please contact us:
                </p>
                
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <UIcon name="i-lucide-phone" class="w-5 h-5 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <div class="flex items-center gap-2">
                        <a href="tel:+18049132670" class="font-medium text-primary hover:underline">
                          (804) 913-2670
                        </a>
                        <UBadge color="warning" variant="subtle" size="xs">Text OK</UBadge>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <UIcon name="i-lucide-mail" class="w-5 h-5 text-orange-700 dark:text-orange-400" />
                    </div>
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <a href="mailto:kyle@daybreakrva.com" class="font-medium text-primary hover:underline">
                        kyle@daybreakrva.com
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                      <UIcon name="i-lucide-building" class="w-5 h-5 text-pink-700 dark:text-pink-400" />
                    </div>
                    <div>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Business Name</p>
                      <p class="font-medium">Daybreak Cleaning LLC</p>
                    </div>
                  </div>
                </div>
              </UCard>
            </section>
          </div>
        </div>
      </div>
    </UContainer>
  </UMain>

  <!-- Footer -->
  <UFooter>
    <template #left>
      <div class="text-xs text-muted">
        © 2025 Daybreak Cleaning LLC. All rights reserved.
      </div>
    </template>

    <template #right>
      <div class="text-xs text-muted">
        Made with ☀️ in Richmond, VA
      </div>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Privacy Policy - SMS Marketing Consent | Daybreak Cleaning',
  description: 'Privacy policy and SMS marketing consent information for Daybreak Cleaning. Learn how we use text messages and protect your privacy.',
  robots: 'index, follow'
})
</script>