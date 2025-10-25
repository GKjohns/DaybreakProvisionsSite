<template>
  <UContainer class="py-16">
    <div class="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
      <h1>Privacy Policy</h1>
      
      <p class="lead">Last updated: {{ lastUpdated }}</p>

      <h2>SMS Marketing Consent</h2>
      
      <h3>How We Use SMS</h3>
      <p>
        By opting in to receive text messages from Daybreak Cleaning, you agree to receive SMS messages 
        for the following purposes:
      </p>
      <ul>
        <li>Booking confirmations and reminders</li>
        <li>Service updates and scheduling changes</li>
        <li>Special promotions and offers (optional)</li>
      </ul>

      <h3>Consent to Receive Messages</h3>
      <p>
        When you provide your phone number and opt in to receive text messages, you are consenting 
        to receive automated SMS messages from Daybreak Cleaning at the phone number provided. 
        This consent is not required to purchase goods or services.
      </p>

      <h3>Message Frequency</h3>
      <p>
        Message frequency varies based on your service schedule and any special offers we may send. 
        You may receive up to 4 messages per month for booking-related communications, and occasional 
        promotional messages if you opt in for marketing communications.
      </p>

      <h3>Message and Data Rates</h3>
      <p>
        Message and data rates may apply based on your mobile carrier's plan. Please contact your 
        carrier for details about your specific plan.
      </p>

      <h3>How to Opt Out</h3>
      <p>
        You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to 
        any text message you receive from us. You may also contact us directly at 
        <a href="tel:+18049132670">(804) 913-2670</a> or 
        <a href="mailto:kyle@daybreakrva.com">kyle@daybreakrva.com</a> to opt out.
      </p>

      <h3>Getting Help</h3>
      <p>
        For help or support with SMS messages, reply <strong>HELP</strong> to any message, or contact 
        us at <a href="tel:+18049132670">(804) 913-2670</a>.
      </p>

      <h3>Data Privacy and Sharing</h3>
      <p>
        We respect your privacy. Your phone number and any information you provide will not be shared 
        with third parties except as necessary to deliver SMS services through our messaging service 
        provider. We will never sell your personal information.
      </p>
      <p>
        We collect and store:
      </p>
      <ul>
        <li>Your phone number</li>
        <li>Your name and booking details</li>
        <li>SMS message history for service purposes</li>
        <li>Opt-in and opt-out preferences</li>
      </ul>

      <h3>Changes to This Policy</h3>
      <p>
        We may update this privacy policy from time to time. Any changes will be posted on this page 
        with an updated "Last Updated" date. Your continued participation in our SMS program after 
        changes are posted constitutes your acceptance of the updated policy.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have questions about this privacy policy or our SMS practices, please contact us:
      </p>
      <ul>
        <li><strong>Phone:</strong> <a href="tel:+18049132670">(804) 913-2670</a></li>
        <li><strong>Email:</strong> <a href="mailto:kyle@daybreakrva.com">kyle@daybreakrva.com</a></li>
        <li><strong>Business Name:</strong> Daybreak Cleaning LLC</li>
      </ul>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Privacy Policy - SMS Marketing Consent | Daybreak Cleaning',
  description: 'Privacy policy and SMS marketing consent information for Daybreak Cleaning. Learn how we use text messages and protect your privacy.',
  robots: 'index, follow'
})

// Last updated date
const lastUpdated = computed(() => {
  return new Date('2025-10-25').toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})
</script>

