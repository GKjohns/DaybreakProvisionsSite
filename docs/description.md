# Daybreak Provisions - Project Context & Design System

## Business Context

**Company**: Daybreak Provisions LLC  
**Founder**: Kyle Johnson (former Meta data scientist, currently running AI startups under Tidewater Research)  
**Location**: Richmond, VA

### Business Model
- Smart cooler vending operations for upscale locations (apartments, offices, healthcare facilities)
- Zero cost to property managers - we handle everything (installation, inventory, maintenance)
- Revenue through direct sales, optional revenue share with properties
- Target: Premium amenity positioning, not traditional vending

### Value Proposition
- **For Property Managers**: Premium amenity at zero cost, increases property value, tenant satisfaction
- **For End Users**: 24/7 access to quality food/drinks, curated selection, modern payment experience
- **Competitive Advantage**: No gaudy branding, elevated aesthetic, data-driven inventory optimization

## Brand Identity

### Core Brand Attributes
- Professional but approachable
- Modern without being tech-bro
- Confident and direct communication
- Quality-focused, not price-focused
- Service business that happens to use technology

### Voice & Tone
- Clear, direct, no fluff
- Confident without arrogance  
- Professional but not corporate
- Example: "Quality provisions. Zero overhead." not "Revolutionizing the future of automated retail solutions"

### Visual Identity

#### Logo
- **Primary**: "DAYBREAK" in bold, "PROVISIONS" smaller, secondary
- Simple wordmark, no complex graphics
- Can incorporate subtle gradient accent but sparingly

#### Color System

```css
/* Base Colors */
--color-white: #FFFFFF;
--color-black: #000000;
--color-gray-50: #FAFAFA;
--color-gray-100: #F4F4F5;
--color-gray-200: #E4E4E7;
--color-gray-300: #D4D4D8;
--color-gray-400: #A1A1AA;
--color-gray-500: #71717A;
--color-gray-600: #52525B;
--color-gray-700: #3F3F46;
--color-gray-800: #27272A;
--color-gray-900: #18181B; /* Soft black for dark mode backgrounds */

/* Gradient Accent - Use Very Sparingly */
--gradient-daybreak: linear-gradient(90deg, #FF6B35 0%, #F7931E 25%, #C77DFF 50%, #7209B7 75%, #560BAD 100%);

/* Light Mode */
--bg-primary: var(--color-white);
--text-primary: var(--color-black);
--text-secondary: var(--color-gray-600);
--border-color: var(--color-gray-200);

/* Dark Mode */
--dark-bg-primary: var(--color-gray-900);
--dark-text-primary: var(--color-white);
--dark-text-secondary: var(--color-gray-400);
--dark-border-color: var(--color-gray-800);
```

## Nuxt Configuration

### app.config.ts
```typescript
export default defineAppConfig({
  ui: {
    primary: 'gray',
    gray: 'neutral',
    
    button: {
      default: {
        size: 'md',
        variant: 'solid',
        color: 'black',
        loadingIcon: 'i-lucide-loader-2'
      },
      rounded: 'rounded-lg',
      font: 'font-bold',
      size: {
        md: 'text-sm px-6 py-3'
      },
      variant: {
        solid: 'shadow-sm text-white dark:text-black bg-black dark:bg-white hover:opacity-90',
        outline: 'ring-1 ring-current text-{color}-500 dark:text-{color}-400'
      }
    },
    
    card: {
      base: 'overflow-hidden',
      background: 'bg-white dark:bg-gray-900',
      divide: 'divide-y divide-gray-200 dark:divide-gray-800',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      rounded: 'rounded-xl',
      shadow: 'shadow-none',
      header: {
        padding: 'px-8 py-6'
      },
      body: {
        padding: 'px-8 py-6'
      }
    },
    
    container: {
      base: 'mx-auto',
      padding: 'px-6 sm:px-6 lg:px-12',
      constrained: 'max-w-6xl'
    }
  }
})
```

### Global CSS
```css
/* assets/css/main.css */

/* Typography System */
:root {
  --font-display: system-ui, -apple-system, sans-serif;
  --font-body: system-ui, -apple-system, sans-serif;
  
  /* Type Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  
  /* Font Weights */
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}

/* Base Styles */
html {
  @apply antialiased;
}

body {
  @apply bg-white dark:bg-gray-900 text-black dark:text-white;
  @apply transition-colors duration-300;
}

/* Typography Classes */
.heading-hero {
  @apply text-4xl md:text-6xl font-bold leading-[1.1];
}

.heading-section {
  @apply text-3xl md:text-4xl font-bold;
}

.heading-card {
  @apply text-xl font-bold;
}

.text-primary {
  @apply text-black dark:text-white;
}

.text-secondary {
  @apply text-gray-600 dark:text-gray-400;
}

/* Gradient Accent - Use Sparingly */
.accent-line {
  height: 2px;
  background: linear-gradient(90deg, #FF6B35 0%, #F7931E 25%, #C77DFF 50%, #7209B7 75%, #560BAD 100%);
}

.accent-line-subtle {
  height: 1px;
  background: linear-gradient(90deg, transparent, #C77DFF, transparent);
  opacity: 0.3;
}

/* Layout Utilities */
.section-padding {
  @apply py-16 md:py-20;
}

.container-width {
  @apply max-w-6xl mx-auto;
}

/* Component Overrides */
.metric-number {
  @apply text-3xl font-bold text-primary;
}

.metric-label {
  @apply text-sm font-medium text-gray-500;
}
```

## Component Patterns

### Page Structure
The landing page (`index.vue`) contains all main content directly, leveraging Nuxt UI's pre-built components:

```vue
<template>
  <div>
    <!-- Subtle gradient accent at top -->
    <div class="accent-line-subtle" />
    
    <!-- Header with UHeader component -->
    <UHeader>
      <template #left>
        <!-- Logo component -->
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    
    <!-- Main content sections directly in page -->
    <UContainer class="section-padding">
      <!-- Hero Section -->
      <div class="text-center py-20">
        <h1 class="heading-hero">Quality provisions. Zero overhead.</h1>
        <p class="text-xl text-secondary mt-6">Premium vending for premium properties</p>
        <UButton size="xl" class="mt-8">Schedule a Visit</UButton>
      </div>
      
      <!-- Metrics using UCard grid -->
      <div class="grid md:grid-cols-3 gap-6 mt-16">
        <UCard v-for="metric in metrics">
          <div class="text-center">
            <div class="metric-number">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
          </div>
        </UCard>
      </div>
      
      <!-- Features using Nuxt UI components -->
      <!-- Process steps using USteps or custom numbered list -->
      <!-- CTA section at bottom -->
    </UContainer>
  </div>
</template>
```

### Key Nuxt UI Components to Use

1. **UContainer**: For consistent max-width and padding
2. **UButton**: Pre-styled buttons with variants
3. **UCard**: For feature boxes and metrics
4. **UIcon**: For iconography throughout
5. **UHeader**: Navigation header with slots
6. **UColorModeButton**: Dark mode toggle
7. **UFormGroup/UInput**: For contact forms if needed
8. **UModal**: For any popup content
9. **UNotification**: For form feedback

### Custom Components (only when needed)

Build separate components ONLY for:
- **AppLogo.vue**: Custom logo with wordmark
- **Complex interactive elements**: If functionality requires significant logic
- **Reusable business logic**: Components used across multiple pages

### Dark Mode Strategy
- Nuxt UI handles most dark mode automatically
- Custom classes use Tailwind's `dark:` variant
- Toggle between clean white and soft gray-900 (not pure black)
- Primary buttons flip between black/white
- Gradient accents remain same in both modes

## Content Guidelines

### Headlines
- Hero: Short, punchy, direct benefit ("Quality provisions. Zero overhead.")
- Sections: Clear and functional ("How it works", "Simple process")
- No buzzwords or corporate jargon

### Body Copy
- Lead with benefit, not feature
- Keep sentences short and scannable
- Use specific numbers when possible
- Avoid superlatives and hyperbole

### CTAs
- Primary: Direct action ("Schedule a Visit", "Let's Talk")
- Secondary: Alternative contact method ("or call...")
- Always provide multiple contact options

## Technical Stack Notes

- **Framework**: Nuxt 3
- **UI Library**: Nuxt UI Pro (leverage built-in components extensively)
- **Icons**: Lucide icons (via @nuxt/icon)
- **Animations**: CSS transitions only, no complex JS animations
- **Forms**: Minimal - use UFormGroup/UInput from Nuxt UI
- **Component Philosophy**: Keep most content in pages, extract only when truly complex or reusable

## File Structure (Simplified)
```
/
├── pages/
│   ├── index.vue          # Landing page with all main content
│   ├── contact.vue        # Contact form page (if needed)
│   └── property-guide.vue # PDF download or info page
├── components/
│   └── AppLogo.vue        # Custom logo component only
├── composables/
│   └── useContactForm.ts  # Form logic if needed
└── assets/
    └── css/
        └── main.css       # Global styles and utilities
```

Most functionality is handled directly in `index.vue` using Nuxt UI components:
- UContainer for layout
- UCard for feature boxes
- UButton for CTAs
- UIcon for icons
- UHeader for navigation
- UColorModeButton for dark mode toggle

This approach reduces complexity and leverages the pre-built, tested components from Nuxt UI rather than reinventing the wheel.

## Launch Checklist
- [ ] Domain registered (daybreakprovisions.com)
- [ ] Email setup (kyle@daybreakprovisions.com)
- [ ] Simple one-page site deployed
- [ ] Contact form or Calendly link
- [ ] Google My Business profile
- [ ] Basic analytics (Plausible or SimpleAnalytics)
- [ ] Social proof section ready to populate after first installs