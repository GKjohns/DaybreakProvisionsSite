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


This approach reduces complexity and leverages the pre-built, tested components from Nuxt UI rather than reinventing the wheel.

## Launch Checklist
- [ ] Domain registered (daybreakprovisions.com)
- [ ] Email setup (kyle@daybreakprovisions.com)
- [ ] Simple one-page site deployed
- [ ] Contact form or Calendly link
- [ ] Google My Business profile
- [ ] Basic analytics (Plausible or SimpleAnalytics)
- [ ] Social proof section ready to populate after first installs