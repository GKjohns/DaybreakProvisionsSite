// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  
  // Force light mode only
  colorMode: {
    preference: 'light',    // Force light mode
    fallback: 'light',      // Fallback to light mode
    dataValue: 'light',     // Value to use for light mode
    classSuffix: ''         // No suffix for light mode class
  },

  app: {
    // Page transition for smooth load-in effect
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
    
    head: {
      // HTML lang
      htmlAttrs: {
        lang: 'en'
      },
      
      // Default title
      title: 'Daybreak Provisions - Quality provisions. Zero overhead.',
      
      // Meta tags
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // SEO meta tags
        { name: 'description', content: 'Smart coolers for your building. Premium amenity at zero cost. We handle installation, inventory, and maintenance. 24/7 access to fresh food and drinks for your tenants and employees.' },
        { name: 'keywords', content: 'smart coolers, vending services, office amenities, apartment amenities, Richmond VA, property management, automated retail, fresh food vending, workplace provisions' },
        { name: 'author', content: 'Daybreak Provisions LLC' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.daybreakprovisions.com' },
        { property: 'og:title', content: 'Daybreak Provisions - Quality provisions. Zero overhead.' },
        { property: 'og:description', content: 'Smart coolers for your building. Premium amenity at zero cost. We handle installation, inventory, and maintenance.' },
        { property: 'og:image', content: 'https://www.daybreakprovisions.com/og-image.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Daybreak Provisions' },
        
        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://www.daybreakprovisions.com' },
        { name: 'twitter:title', content: 'Daybreak Provisions - Quality provisions. Zero overhead.' },
        { name: 'twitter:description', content: 'Smart coolers for your building. Premium amenity at zero cost. We handle installation, inventory, and maintenance.' },
        { name: 'twitter:image', content: 'https://www.daybreakprovisions.com/og-image.png' },
        
        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      
      // Link tags
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.daybreakprovisions.com' },
        
        // Preconnect to optimize loading
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      
      // Structured data / JSON-LD
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Daybreak Provisions LLC',
            alternateName: 'Daybreak Provisions',
            url: 'https://www.daybreakprovisions.com',
            logo: 'https://www.daybreakprovisions.com/og-image.png',
            description: 'Smart cooler vending operations for upscale locations. Premium amenity positioning for apartments, offices, and healthcare facilities.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Richmond',
              addressRegion: 'VA',
              addressCountry: 'US'
            },
            founder: {
              '@type': 'Person',
              name: 'Kyle Johnson'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-804-555-0100',
              contactType: 'customer service'
            }
          })
        }
      ]
    }
  }
})