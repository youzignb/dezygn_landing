# Dezygn Landing Page Style Guide

## Overview
This style guide documents the comprehensive design system used across the Dezygn landing pages. The design focuses on modern, professional aesthetics with strong visual hierarchy and consistent user experience patterns.

## Design Philosophy
- **Modern Premium**: Clean, sophisticated design with high-end feel
- **Conversion-Focused**: Every element designed to guide users toward action
- **Trust-Building**: Professional appearance that instills confidence
- **Mobile-First**: Responsive design that works perfectly on all devices

## Color Palette

### Primary Brand Colors
- **Primary Gradient**: `from-purple-600 to-blue-600` (#9333EA → #2563EB)
- **Secondary Gradient**: `from-purple-400 to-blue-400` (lighter variant)
- **Dark Gradient**: `from-purple-800 to-blue-800` (darker variant)

### Supporting Colors
- **Gray Scale**: 
  - `gray-50` - Light backgrounds
  - `gray-100` - Subtle borders
  - `gray-600` - Secondary text
  - `gray-900` - Primary text
  - `gray-800` - Dark sections
- **Accent Colors**:
  - `green-500`, `green-600` - Success states, checkmarks
  - `purple-100` - Light backgrounds for icons
  - `white` - Cards, buttons, clean backgrounds

### Background Gradients
- **Main Background**: `bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30`
- **Dark Sections**: `bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900`
- **Accent Sections**: `bg-gradient-to-b from-white via-purple-50/30 to-white`

## Typography

### Font Family
- **Primary**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
- **Logo**: `Inter, system-ui, sans-serif`

### Font Weights & Sizes
- **font-black**: Main headings, pricing, CTAs (900 weight)
- **font-bold**: Secondary headings, navigation active states (700 weight)
- **font-medium**: Supporting text (500 weight)
- **font-normal**: Body text, logo text (400 weight)

### Heading Hierarchy
```css
/* Main Hero Headlines */
.hero-title {
  font-size: 6xl md:9xl; /* text-6xl md:text-9xl */
  font-weight: 900; /* font-black */
  line-height: 0.85; /* leading-[0.85] */
  letter-spacing: -0.025em; /* tracking-tight */
}

/* Section Headlines */
.section-title {
  font-size: 4xl md:5xl; /* text-4xl md:text-5xl */
  font-weight: 900; /* font-black */
}

/* Card Titles */
.card-title {
  font-size: 2xl; /* text-2xl */
  font-weight: 900; /* font-black */
}

/* Pricing Display */
.price-display {
  font-size: 4xl; /* text-4xl */
  font-weight: 900; /* font-black */
  background: linear-gradient(to right, #9333EA, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Layout & Spacing

### Container Patterns
- **Page Container**: `max-w-6xl mx-auto px-6` (some sections use `max-w-7xl`)
- **Section Padding**: `py-20 px-6` or `py-32 px-6` for hero sections
- **Card Padding**: `p-6` or `p-8` for larger cards

### Grid Systems
- **3-Column Cards**: `grid md:grid-cols-3 gap-6` or `gap-8`
- **Responsive Gaps**: `gap-6` (24px) standard, `gap-8` (32px) for larger sections

### Spacing Scale
- **Component Spacing**: `mb-4`, `mb-6`, `mb-8`, `mb-12`, `mb-16`
- **Section Spacing**: `py-20` (80px), `py-32` (128px)
- **Element Gaps**: `gap-2`, `gap-3`, `gap-6`, `gap-8`

## Components

### Navigation
```tsx
// Standard navigation pattern
<nav className="relative z-50 px-6 py-6">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <Logo variant="default" size="md" />
    <div className="hidden md:flex items-center gap-8">
      {/* Navigation links with hover states */}
      <Link className="text-gray-600 hover:text-purple-600 transition">
      {/* Active state */}
      <Link className="text-gray-900 font-bold hover:text-purple-600 transition">
      {/* CTA Button */}
      <a className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-300">
    </div>
  </div>
</nav>
```

### Cards
```tsx
// Standard pricing/feature card
<div className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
  {/* Hover effect overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
  
  <div className="relative p-6">
    {/* Card content */}
  </div>
</div>
```

### Buttons

#### Primary CTA Button
```tsx
<button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
  Get Started
</button>
```

#### Secondary Button
```tsx
<button className="bg-white border-2 border-purple-600 text-purple-600 px-12 py-6 rounded-full font-black hover:bg-purple-50 transition-all duration-300">
  View Pricing
</button>
```

#### Toggle Button (Active State)
```tsx
<button className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105 transition-all duration-300">
  Monthly
</button>
```

### Icons & Visual Elements

#### Icon Container Pattern
```tsx
<div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
  <IconComponent className="w-5 h-5 text-purple-600" />
</div>
```

#### Feature List Pattern
```tsx
<div className="flex items-center gap-3">
  <Check className="w-4 h-4 text-green-500" />
  <p className="text-sm">Feature description</p>
</div>
```

## Interactive Elements

### Hover Effects
- **Cards**: `hover:shadow-2xl transition-all duration-500`
- **Buttons**: `hover:scale-105 transition-all duration-300`
- **Icons**: `group-hover:scale-110 transition-transform duration-300`
- **Links**: `hover:text-purple-600 transition`

### Tooltips
```tsx
{/* Tooltip trigger */}
<HelpCircle 
  className="w-3 h-3 text-gray-400 cursor-help" 
  onMouseEnter={() => showTooltip('feature')}
  onMouseLeave={hideTooltip}
/>

{/* Tooltip content */}
{tooltipVisible === 'feature' && (
  <div className="absolute right-0 top-5 bg-gray-900 text-white text-xs p-3 rounded-lg shadow-lg z-50 w-56">
    Tooltip content here
  </div>
)}
```

### Animation Classes (from Tailwind Config)
- `animate-float`: Floating animation for decorative elements
- `animate-float-reverse`: Reverse floating animation
- `animate-scroll`: Horizontal scrolling animation
- `animate-shimmer`: Shimmer effect for loading states
- `animate-float-particle`: Complex particle movement

## Content Patterns

### Hero Section Structure
1. **Main Headline**: Bold, large text with gradient effects
2. **Subheadline**: Explanatory text in gray-600
3. **CTA Buttons**: Primary and secondary actions
4. **Supporting Elements**: Visual emphasis and trust signals

### Pricing Cards Structure
1. **Plan Icon**: Colored icon in rounded container
2. **Plan Name**: Bold, large text
3. **Description**: Brief explanation
4. **Price Display**: Large gradient text with billing info
5. **CTA Button**: Primary action button
6. **Feature List**: Checkmark list with tooltips

### Section Headers
```tsx
<div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
    Section Title
  </h2>
  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
    Supporting description text
  </p>
</div>
```

## Responsive Design

### Breakpoints
- **Mobile**: Default styles
- **md**: `768px` and up
- **lg**: `1024px` and up (minimal usage)

### Common Responsive Patterns
- **Grid**: `grid md:grid-cols-3` (stack on mobile, 3 columns on desktop)
- **Text**: `text-4xl md:text-5xl` (smaller on mobile)
- **Spacing**: `gap-6` consistent across breakpoints
- **Flex**: `flex flex-col sm:flex-row` (stack on mobile, row on larger screens)

## Accessibility

### Color Contrast
- Primary text on light backgrounds: `text-gray-900`
- Secondary text: `text-gray-600`
- White text on dark backgrounds: `text-white`
- Reduced opacity for subtle text: `text-white/70`, `text-white/50`

### Interactive Elements
- Hover states for all clickable elements
- Focus states via Tailwind defaults
- Sufficient target sizes (minimum 44px)
- Descriptive button text and aria labels

## Footer Pattern
```tsx
<footer className="px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-8">
        <Logo variant="light" size="md" />
        <div className="flex flex-col sm:flex-row gap-6 text-white/70">
          {/* Footer links */}
        </div>
      </div>
      <div className="text-white/50 text-sm">
        © 2025 Youzign SPRL. All rights reserved.
      </div>
    </div>
  </div>
</footer>
```

## Best Practices

### Component Consistency
- Always use the defined color palette
- Maintain consistent spacing using the spacing scale
- Apply hover effects to interactive elements
- Use the gradient pattern for primary CTAs
- Follow the card structure for content containers

### Performance
- Use `transition-all duration-300` for smooth interactions
- Implement `group` hover effects for nested elements
- Optimize images and use appropriate formats
- Minimize layout shifts with consistent sizing

### Content Guidelines
- Use action-oriented language for CTAs
- Maintain consistent tone throughout
- Emphasize value propositions clearly
- Use social proof and trust signals
- Keep feature descriptions concise but informative

## Implementation Notes

### Tailwind Configuration
The project uses custom animations defined in `tailwind.config.js`:
- Float animations for visual interest
- Scroll animations for dynamic content
- Shimmer effects for loading states
- Particle animations for background elements

### Logo Component
The Logo component supports multiple variants:
- `default`: Standard brand colors
- `light`: For dark backgrounds
- `dark`: For light backgrounds with more contrast

### State Management
- Pricing toggle (monthly/yearly)
- Legacy customer pricing
- Tooltip visibility states
- Responsive navigation state

This style guide serves as the foundation for maintaining visual consistency across all Dezygn landing pages and should be referenced when creating new components or pages.