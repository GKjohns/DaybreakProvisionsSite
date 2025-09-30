// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxtjs/supabase'],

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

  // Supabase configuration
  supabase: {
    // Disable auth redirects since we're not using authentication
    redirect: false,
    // Keep SSR cookies enabled for proper SSR support (default behavior)
    // Even without auth, this ensures proper context sharing between server and client
    // We'll primarily use the service key for server-side operations
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_KEY
  },
  
  // Force light mode only
  colorMode: {
    preference: 'light',    // Force light mode
    fallback: 'light',      // Fallback to light mode
    dataValue: 'light',     // Value to use for light mode
    classSuffix: ''         // No suffix for light mode class
  },

  // Vite configuration to fix cookie module ESM compatibility
  vite: {
    optimizeDeps: {
      include: ['cookie']
    },
    ssr: {
      noExternal: ['cookie']
    }
  },

  app: {
    head: {
      // HTML lang
      htmlAttrs: {
        lang: 'en'
      },
      
      // Default title - optimized for SEO with location and service
      title: 'Daybreak Cleaning | Professional Home Cleaning Service Richmond VA',
      titleTemplate: '%s | Daybreak Cleaning Richmond',
      
      // Meta tags
      meta: [
        // Standard meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // SEO meta tags - enhanced for local search
        { name: 'description', content: 'Trusted residential cleaning service in Richmond, VA. Eco-friendly products, background-checked professionals, flexible scheduling. Weekly, bi-weekly & monthly plans. Call (804) 555-0100 for free quote!' },
        { name: 'keywords', content: 'house cleaning Richmond VA, residential cleaning service, home cleaners near me, maid service Richmond, eco-friendly cleaning, professional house cleaning, deep cleaning service, move in out cleaning, bi-weekly cleaning, trusted cleaners Richmond Virginia' },
        { name: 'author', content: 'Daybreak Cleaning LLC' },
        { name: 'geo.region', content: 'US-VA' },
        { name: 'geo.placename', content: 'Richmond' },
        { name: 'geo.position', content: '37.5407;-77.4360' },
        { name: 'ICBM', content: '37.5407, -77.4360' },
        
        // Open Graph / Facebook - enhanced with better imagery and local focus
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.daybreakrva.com' },
        { property: 'og:title', content: 'Daybreak Cleaning - Richmond\'s Trusted Home Cleaning Service' },
        { property: 'og:description', content: 'Professional home cleaning you can trust. Serving Richmond families with eco-friendly products, trained & insured cleaners, and 100% satisfaction guarantee. Get your free quote today!' },
        { property: 'og:image', content: 'https://www.daybreakrva.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Daybreak Cleaning - Professional Home Cleaning Service in Richmond VA' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'Daybreak Cleaning' },
        { property: 'fb:app_id', content: '' }, // Add if you have Facebook app
        
        // Twitter / X - enhanced for better cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@daybreakrva' }, // Add your Twitter handle
        { name: 'twitter:creator', content: '@daybreakrva' },
        { name: 'twitter:url', content: 'https://www.daybreakrva.com' },
        { name: 'twitter:title', content: 'Daybreak Cleaning - Richmond\'s Trusted Home Cleaning Service' },
        { name: 'twitter:description', content: 'Professional home cleaning in Richmond VA. Eco-friendly, insured & trained cleaners. Weekly, bi-weekly & monthly plans. Call (804) 555-0100!' },
        { name: 'twitter:image', content: 'https://www.daybreakrva.com/og-image.png' },
        { name: 'twitter:image:alt', content: 'Daybreak Cleaning Logo' },
        
        // Additional SEO
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#f97316' } // Your primary color
      ],
      
      // Link tags
      link: [
        // Favicon - prefer SVG for modern browsers, fallback to ICO
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.daybreakrva.com' },
        
        // Preconnect to optimize loading
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      
      // Structured data / JSON-LD - enhanced for better local SEO
      script: [
        // Organization/Business Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CleaningService',
            '@id': 'https://www.daybreakrva.com',
            name: 'Daybreak Cleaning LLC',
            alternateName: 'Daybreak Cleaning',
            slogan: 'Professional home cleaning you can trust',
            url: 'https://www.daybreakrva.com',
            logo: 'https://www.daybreakrva.com/og-image.png',
            image: [
              'https://www.daybreakrva.com/og-image.png',
              'https://www.daybreakrva.com/landing_art.png'
            ],
            description: 'Trusted residential cleaning service in Richmond, VA. We provide eco-friendly house cleaning with background-checked professionals. Weekly, bi-weekly, and monthly cleaning plans available.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '',
              addressLocality: 'Richmond',
              addressRegion: 'VA',
              addressCountry: 'US',
              postalCode: '23220'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 37.5407,
              longitude: -77.4360
            },
            telephone: '+1-804-555-0100',
            email: 'hello@daybreakrva.com',
            openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-16:00'],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '16:00'
              }
            ],
            priceRange: '$$',
            paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Debit Card', 'Venmo', 'Zelle'],
            areaServed: [
              {
                '@type': 'City',
                name: 'Richmond',
                '@id': 'https://en.wikipedia.org/wiki/Richmond,_Virginia'
              },
              {
                '@type': 'City',
                name: 'Henrico'
              },
              {
                '@type': 'City',
                name: 'Short Pump'
              },
              {
                '@type': 'City',
                name: 'Glen Allen'
              }
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Cleaning Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Regular Cleaning',
                    description: 'Weekly or bi-weekly house cleaning service'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Deep Cleaning',
                    description: 'Comprehensive one-time or seasonal deep clean'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Move In/Out Cleaning',
                    description: 'Thorough cleaning for moving transitions'
                  }
                }
              ]
            },
            founder: {
              '@type': 'Person',
              name: 'Kyle Johnson',
              jobTitle: 'Founder & CEO'
            },
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+1-804-555-0100',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
                hoursAvailable: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00'
                }
              },
              {
                '@type': 'ContactPoint',
                telephone: '+1-804-555-0100',
                contactType: 'sales',
                areaServed: 'US',
                availableLanguage: 'English'
              }
            ],
            sameAs: [
              'https://www.facebook.com/daybreakrva',
              'https://www.instagram.com/daybreakrva',
              'https://www.yelp.com/biz/daybreak-cleaning-richmond'
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
              bestRating: '5',
              worstRating: '1'
            }
          })
        },
        // WebPage Schema for Homepage
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.daybreakrva.com/#webpage',
            url: 'https://www.daybreakrva.com/',
            name: 'Daybreak Cleaning - Professional Home Cleaning Service Richmond VA',
            description: 'Richmond\'s most trusted residential cleaning service offering weekly, bi-weekly, and monthly cleaning plans with eco-friendly products and trained professionals.',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.daybreakrva.com/'
                }
              ]
            },
            isPartOf: {
              '@id': 'https://www.daybreakrva.com'
            },
            about: {
              '@id': 'https://www.daybreakrva.com'
            },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              contentUrl: 'https://www.daybreakrva.com/og-image.png',
              width: 1200,
              height: 630
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.description']
            }
          })
        },
        // FAQPage Schema for common questions
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What areas do you service in Richmond?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide cleaning services throughout Richmond, VA including Henrico, Short Pump, Glen Allen, and surrounding areas within a 20-mile radius of downtown Richmond.'
                }
              },
              {
                '@type': 'Question',
                name: 'How often should I schedule cleaning service?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most of our clients prefer weekly or bi-weekly service to maintain a consistently clean home. We also offer monthly service and one-time deep cleaning options based on your needs and budget.'
                }
              },
              {
                '@type': 'Question',
                name: 'Are your cleaning products safe for pets and children?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! We exclusively use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment while still being highly effective at cleaning.'
                }
              },
              {
                '@type': 'Question',
                name: 'Are you insured and bonded?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. Daybreak Cleaning is fully insured and bonded for your peace of mind. All our cleaners are background-checked and professionally trained.'
                }
              },
              {
                '@type': 'Question',
                name: 'What if I need to reschedule my cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We understand schedules change. Just give us 24 hours notice to reschedule your cleaning at no charge. We\'ll work with you to find a new time that fits your schedule.'
                }
              }
            ]
          })
        }
      ]
    }
  }
})