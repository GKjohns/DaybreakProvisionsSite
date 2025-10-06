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
        { name: 'description', content: 'Richmond VA\'s trusted cleaning service. Regular house cleaning, deep cleaning, move-in/out, carpet cleaning, kitchen & bathroom deep cleans, and post-renovation cleaning. Eco-friendly products. Book online today!' },
        { name: 'keywords', content: 'house cleaning Richmond VA, residential cleaning service, carpet cleaning Richmond, deep cleaning service, move out cleaning, post renovation cleaning, kitchen deep clean, bathroom cleaning, eco-friendly cleaning, professional house cleaning, maid service Richmond, home cleaners Richmond Virginia, property management cleaning' },
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
        { name: 'twitter:description', content: 'Professional home cleaning in Richmond VA. Eco-friendly, insured & trained cleaners. Weekly, bi-weekly & monthly plans. Book online today!' },
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
                    name: 'Regular House Cleaning',
                    description: 'Professional cleaning for your home on a recurring schedule. Dust, vacuum, mop, and sanitize all living areas, kitchens, and bathrooms.',
                    serviceType: 'Residential Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Deep Cleaning',
                    description: 'Thorough top-to-bottom cleaning including baseboards, inside appliances, light fixtures, window tracks, and hard-to-reach spots.',
                    serviceType: 'Residential Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Move In/Out Cleaning',
                    description: 'Complete cleaning for vacant properties. Inside all cabinets, appliances, closets to meet inspection standards.',
                    serviceType: 'Property Management'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Carpet Cleaning',
                    description: 'Professional carpet cleaning using eco-friendly products. Removes dirt, stains, and odors from carpets.',
                    serviceType: 'Specialty Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Kitchen Deep Clean',
                    description: 'Intensive kitchen cleaning including inside oven, refrigerator, cabinets, and all appliances. Degreasing of stovetop and backsplash.',
                    serviceType: 'Specialty Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Bathroom Deep Clean',
                    description: 'Thorough bathroom sanitization including grout scrubbing, inside cabinets, shower door tracks. Removes soap scum and mildew.',
                    serviceType: 'Specialty Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Post-Renovation Cleaning',
                    description: 'Specialized cleaning after construction or renovation. Removes dust, debris, paint splatters, and adhesive residue.',
                    serviceType: 'Specialty Cleaning'
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
                name: 'What services do you offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer regular house cleaning, deep cleaning, move-in/out cleaning, carpet cleaning, kitchen deep clean, bathroom deep clean, and post-renovation cleaning. We can also create custom cleaning plans based on your specific needs.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do you price your services?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pricing varies based on the size of your home, the type of service, and frequency. We offer transparent pricing through our booking system where you can select your home size and service type to see exact costs upfront.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you use eco-friendly products?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! We prioritize eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. Our green cleaning solutions are effective against dirt and germs while being gentle on your home.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need to be home during the cleaning?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No, you don\'t need to be home. Many of our clients provide us with access to their homes and go about their day. Our team is trained to work independently with professionalism and respect for your space.'
                }
              },
              {
                '@type': 'Question',
                name: 'How far in advance should I book?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We recommend booking at least a week in advance for regular cleaning services. For move-out cleanings or urgent requests, we often have same-week availability. Check our booking calendar for current openings.'
                }
              },
              {
                '@type': 'Question',
                name: 'What if I need to reschedule or cancel?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We understand that plans change. Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment. This helps us accommodate other customers and maintain our schedule.'
                }
              },
              {
                '@type': 'Question',
                name: 'What areas do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We proudly serve the Richmond, VA metropolitan area. If you\'re unsure whether we service your location, please reach out and we\'ll let you know.'
                }
              }
            ]
          })
        }
      ]
    }
  }
})