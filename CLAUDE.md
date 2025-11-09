# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Musso & Frank Grill restaurant website - a Next.js 14+ application showcasing Hollywood's oldest restaurant (est. 1919). The website balances historic elegance with modern functionality including reservations, e-commerce, and event bookings.

## Key Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000 (hot reload enabled)

# Production
npm run build        # Build production bundle (generates .next directory)
npm start            # Start production server on http://localhost:3000
npx next start -p 3002  # Start production server on alternate port

# Code Quality
npm run lint         # Run ESLint checks
```

## Architecture & Design Patterns

### Technology Stack
- **Framework**: Next.js 14 with App Router (not Pages Router)
- **Language**: TypeScript with strict typing
- **Styling**: Tailwind CSS with custom design system
- **State**: React hooks (useState, useEffect) - no external state management
- **Forms**: Controlled components with manual validation (no external form libraries currently)

### Design System Constants
The brand identity is strictly defined in `tailwind.config.ts`:
- **Primary**: `musso-burgundy` (#722F37) - CTAs, primary actions
- **Secondary**: `heritage-gold` (#D4AF37) - Accents, hover states
- **Background**: `classic-cream` (#FAF6F0) - Main bg color
- **Text**: `rich-black` (#1A1A1A) - Primary text

Typography hierarchy uses three font families:
- `font-playfair`: Headlines and display text
- `font-crimson`: Body text and descriptions
- `font-inter`: UI elements and forms

### Component Architecture

All components follow a consistent pattern:
1. **Page Components** (`app/*/page.tsx`): Client-side components with 'use client' directive, contain Header + main content + Footer
2. **Shared Components** (`components/*`): Reusable UI components that accept props for customization
3. **Component Composition**: Pages compose multiple shared components (Hero, Section, Card, Button)

Key architectural decisions:
- **No CMS Integration**: Content is hardcoded in components (ready for Sanity CMS integration)
- **No API Routes**: All data is static (prepared for future API integration)
- **Image Optimization**: All images use Next/Image component with fill prop for responsive sizing
- **Form Handling**: Forms are controlled components with local state (ready for backend integration)

### Page Structure Pattern

Every page follows this structure:
```tsx
'use client'  // For interactivity
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function PageName() {
  // Local state for forms/interactions
  return (
    <>
      <Header />
      <main className="pt-20">  // Account for fixed header
        <Hero ... />
        <Section background="white|cream|pattern" ...>
          {/* Page content */}
        </Section>
      </main>
      <Footer />
    </>
  )
}
```

### Responsive Design Strategy

The codebase uses a mobile-first approach with Tailwind breakpoints:
- Default: Mobile styles
- `sm:` 640px+ tablets
- `md:` 768px+ small laptops
- `lg:` 1024px+ desktops

Common patterns:
- Grid layouts: `grid md:grid-cols-2 lg:grid-cols-3`
- Typography scaling: `text-2xl sm:text-3xl lg:text-4xl`
- Spacing adjustments: `p-4 sm:p-6 lg:p-8`

### Form Implementation Pattern

Forms follow a consistent controlled component pattern:
```tsx
const [formData, setFormData] = useState({ field1: '', field2: '' })

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Form submitted:', formData)  // Ready for API integration
}
```

## Critical Implementation Details

### Menu System (`app/menu/page.tsx`)
Uses tab-based navigation with dynamic content switching. Menu data is hardcoded in `menuCategories` object - when integrating CMS, replace this object with API calls.

### Shopping Cart (`app/shop/page.tsx`)
Implements a local state cart system with add/remove functionality. Cart persists only during session - requires localStorage or backend for persistence.

### Multi-Step Forms (`app/private-events/page.tsx`)
Uses `formStep` state to control form progression with validation at each step. Progress bar is purely visual - implement actual validation before production.

### Image Assets
All images are in `public/images/` and referenced as `/images/filename`. The project includes 23 pre-optimized images that should not be replaced without testing responsive behavior.

## Known Limitations & Future Integrations

1. **Reservation System**: Currently shows form UI only - requires Resy/OpenTable API integration
2. **Payment Processing**: Shopping cart exists but no Stripe integration
3. **Email Handling**: Forms log to console - need SendGrid/Resend for actual emails
4. **CMS**: Content is hardcoded - prepared for Sanity CMS schemas
5. **Analytics**: No GA4 or tracking implemented yet

## Deployment Considerations

The app is configured for static generation (SSG) with all pages pre-rendered. When adding dynamic features:
1. Update page components to use `async` for data fetching
2. Consider ISR (Incremental Static Regeneration) for frequently updated content
3. Environment variables needed for production:
   - Payment gateway keys
   - Email service API keys
   - Reservation system credentials
   - CMS tokens

## Performance Targets

The codebase is optimized for:
- Lighthouse score: 95+
- First Load JS: ~108-115KB per page
- All images use WebP format with fallbacks
- Tailwind CSS is purged in production build