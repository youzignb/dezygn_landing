# Dezygn Landing Page Style Guide

## Table of Contents

1. [Overview](#overview)
2. [Design Philosophy](#design-philosophy)
3. [Color Palette](#color-palette)
   - [Primary Brand Colors](#primary-brand-colors)
   - [Custom Hex Values](#custom-hex-values)
   - [Semantic Colors](#semantic-colors)
   - [Background Gradients](#background-gradients)
   - [Opacity Scale](#opacity-scale)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Elevation & Shadows](#elevation--shadows)
7. [Border System](#border-system)
   - [Radius Scale](#radius-scale)
   - [Border Opacity](#border-opacity)
8. [Z-Index Layering](#z-index-layering)
9. [Components](#components)
   - [Navigation](#navigation)
   - [Cards](#cards)
   - [Buttons](#buttons)
   - [Form Inputs](#form-inputs)
   - [Badges & Status Indicators](#badges--status-indicators)
   - [Icons](#icons)
10. [Interactive States](#interactive-states)
    - [Hover Effects](#hover-effects)
    - [Focus States](#focus-states)
    - [Loading States](#loading-states)
    - [Tooltips](#tooltips)
11. [Effects & Decoration](#effects--decoration)
    - [Glassmorphism](#glassmorphism)
    - [Gradient Text](#gradient-text)
    - [Backdrop Blur](#backdrop-blur)
12. [Animation](#animation)
13. [Content Patterns](#content-patterns)
14. [Responsive Design](#responsive-design)
15. [Accessibility](#accessibility)
16. [Implementation Notes](#implementation-notes)
17. [Best Practices](#best-practices)

---

## Overview

This style guide documents the comprehensive design system used across the Dezygn landing pages. The design focuses on modern, professional aesthetics with strong visual hierarchy and consistent user experience patterns. It serves as the foundation for maintaining visual consistency across all Dezygn landing pages and should be referenced when creating new components or pages.

---

## Design Philosophy

- **Modern Premium**: Clean, sophisticated design with high-end feel
- **Conversion-Focused**: Every element designed to guide users toward action
- **Trust-Building**: Professional appearance that instills confidence
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Dark Mode Native**: Primary experience optimized for dark backgrounds

---

## Color Palette

### Primary Brand Colors

| Name | Tailwind Class | Hex Value | Use Case |
|------|----------------|-----------|----------|
| Primary Gradient Start | `purple-600` | `#9333EA` | CTAs, accents |
| Primary Gradient End | `blue-600` | `#2563EB` | CTAs, accents |
| Secondary Gradient Start | `purple-400` | `#C084FC` | Lighter variants |
| Secondary Gradient End | `blue-400` | `#60A5FA` | Lighter variants |
| Dark Gradient Start | `purple-800` | `#6B21A8` | Darker variants |
| Dark Gradient End | `blue-800` | `#1E40AF` | Darker variants |

```tsx
// Primary gradient pattern
className="bg-gradient-to-r from-purple-600 to-blue-600"

// Secondary (lighter) gradient
className="bg-gradient-to-r from-purple-400 to-blue-400"
```

### Custom Hex Values

These custom colors are used throughout the codebase for specific dark UI elements:

| Name | Hex Value | Use Case |
|------|-----------|----------|
| Body Background | `#050507` | Main page background |
| Card Background | `#0a0a0a` | Cards, dropdowns, overlays |
| Elevated Surface | `#0b0b0b` | Slightly elevated components |
| Muted Surface | `#1a1a1a` | Callout boxes, badges |

```tsx
// Dark body background
className="bg-[#050507]"

// Card/dropdown background with transparency
className="bg-[#0a0a0a]/95"
```

### Semantic Colors

| State | Border | Background | Text |
|-------|--------|------------|------|
| Success | `border-emerald-400/30` | `bg-emerald-500/10` | `text-emerald-300` |
| Success (Alt) | `border-green-500` | `bg-green-500` | `text-green-400` |
| Error | `border-red-400/30` | `bg-red-500/10` | `text-red-300` |
| Warning | `border-yellow-400/30` | `bg-yellow-500/10` | `text-yellow-300` |
| Info | `border-blue-400/30` | `bg-blue-500/10` | `text-blue-300` |

```tsx
// Success indicator
<div className="border border-green-500 bg-green-500/10 text-green-400">
  Success
</div>

// Error state
<div className="border border-red-400/30 bg-red-500/10 text-red-300">
  Error message
</div>
```

### Background Gradients

```tsx
// Light mode main background
className="bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30"

// Dark sections
className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"

// Light accent sections
className="bg-gradient-to-b from-white via-purple-50/30 to-white"

// Subtle dark gradient (landing pages)
className="bg-gradient-to-b from-gray-50 to-white"

// Animated gradient (CSS)
.animated-gradient {
  background: linear-gradient(120deg, #a855f7 0%, #3b82f6 50%, #a855f7 100%);
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}
```

### Opacity Scale

Standardized opacity values for consistent transparency:

| Opacity | Use Case | Example |
|---------|----------|---------|
| `/5` | Very subtle borders, barely visible | `border-white/5` |
| `/10` | Subtle borders, light backgrounds | `bg-white/10`, `border-white/10` |
| `/15` | Button borders, dividers | `border-white/15` |
| `/20` | More visible borders, hover states | `bg-white/20`, `border-white/20` |
| `/30` | Prominent borders, active states | `border-white/30`, `border-purple-500/30` |
| `/50` | Semi-transparent text, overlays | `text-white/50` |
| `/70` | Readable secondary text | `text-white/70` |
| `/80` | Near-opaque text | `text-white/80` |
| `/90` | Almost opaque | `text-white/90` |

---

## Typography

### Font Family

```tsx
// Primary (system stack)
fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"

// Logo/headings (Inter)
fontFamily: "Inter, system-ui, sans-serif"
```

### Font Weights & Sizes

| Weight | Class | Use Case |
|--------|-------|----------|
| 900 | `font-black` | Main headings, pricing, CTAs |
| 800 | `font-extrabold` | Section headings |
| 700 | `font-bold` | Secondary headings, nav active states |
| 600 | `font-semibold` | Emphasis text, badges |
| 500 | `font-medium` | Supporting text, labels |
| 400 | `font-normal` | Body text |
| 300 | `font-light` | Large descriptive text |

### Heading Hierarchy

```tsx
// Hero Headlines (H1)
<h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">

// Section Headlines (H2)
<h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">

// Card Titles (H3)
<h3 className="text-2xl md:text-3xl font-extrabold">

// Subsection Titles (H4)
<h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
```

### Text Styles

```tsx
// Body text (dark mode)
<p className="text-lg text-gray-400 leading-relaxed">

// Body text (light mode)
<p className="text-lg text-gray-600 leading-relaxed">

// Large descriptive text
<p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">

// Small caps labels
<span className="text-xs tracking-widest uppercase text-purple-400">
```

---

## Spacing & Layout

### Container Patterns

```tsx
// Standard page container
<div className="max-w-6xl mx-auto px-6">

// Wide container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Narrow content container
<div className="max-w-4xl mx-auto px-6">

// Centered narrow container
<div className="max-w-3xl mx-auto px-6">
```

### Section Padding

| Type | Class | Pixels |
|------|-------|--------|
| Standard section | `py-24` | 96px |
| Hero section | `py-32` | 128px |
| Compact section | `py-16` | 64px |
| Tight section | `py-10` | 40px |

### Grid Systems

```tsx
// 3-column cards
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

// 2-column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

// 2-column with wide right
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
  <div className="lg:col-span-1">...</div>
  <div className="lg:col-span-2">...</div>
</div>
```

### Spacing Scale

| Size | Class | Pixels |
|------|-------|--------|
| xs | `gap-1`, `mb-1` | 4px |
| sm | `gap-2`, `mb-2` | 8px |
| md | `gap-3`, `mb-3` | 12px |
| base | `gap-4`, `mb-4` | 16px |
| lg | `gap-6`, `mb-6` | 24px |
| xl | `gap-8`, `mb-8` | 32px |
| 2xl | `gap-12`, `mb-12` | 48px |
| 3xl | `gap-16`, `mb-16` | 64px |

---

## Elevation & Shadows

### Shadow Scale

| Level | Class | Use Case |
|-------|-------|----------|
| None | `shadow-none` | Flat elements |
| Small | `shadow-sm` | Subtle elevation (badges) |
| Base | `shadow` | Default elevation |
| Medium | `shadow-md` | Slight prominence |
| Large | `shadow-lg` | Cards at rest |
| XL | `shadow-xl` | Important cards, modals |
| 2XL | `shadow-2xl` | Hero elements, hover states |

### Shadow Patterns

```tsx
// Card at rest
<div className="shadow-xl">

// Card on hover
<div className="shadow-xl hover:shadow-2xl transition-all duration-500">

// Glow effect (decorative)
<div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl blur-xl opacity-20">
```

### Elevation Guidelines

1. **Base level (z-0)**: Background elements, decorative blurs
2. **Content level (z-10)**: Cards, content containers
3. **Floating level (z-20+)**: Tooltips, dropdowns, modals

---

## Border System

### Radius Scale

| Size | Class | Pixels | Use Case |
|------|-------|--------|----------|
| None | `rounded-none` | 0 | Sharp edges |
| Small | `rounded` | 4px | Subtle rounding |
| Medium | `rounded-md` | 6px | Buttons, inputs |
| Large | `rounded-lg` | 8px | Small cards |
| XL | `rounded-xl` | 12px | Standard cards |
| 2XL | `rounded-2xl` | 16px | Large cards, buttons |
| 3XL | `rounded-3xl` | 24px | Feature cards |
| Full | `rounded-full` | 9999px | Pills, avatars, CTAs |

### Border Opacity

```tsx
// Very subtle (dark mode)
className="border border-white/5"

// Subtle (dark mode)
className="border border-white/10"

// Visible (dark mode)
className="border border-white/15"

// Prominent (dark mode)
className="border border-white/20"

// Light mode subtle
className="border border-gray-100"

// Light mode visible
className="border border-gray-200"

// Colored borders
className="border border-purple-500/30"
className="border-2 border-purple-200"
```

---

## Z-Index Layering

| Layer | Z-Index | Class | Use Case |
|-------|---------|-------|----------|
| Announcement Bar | 60 | `z-[60]` | Top announcement banner |
| Navigation | 50 | `z-50` | Fixed header |
| Mobile Menu | 40 | `z-40` | Mobile overlay menu |
| Tooltips | 30 | `z-30` | Floating tooltips |
| Dropdowns | 20 | `z-20` | Dropdown menus |
| Floating | 10 | `z-10` | Elevated content |
| Base | 0 | `z-0` | Default layer |

```tsx
// Announcement bar
<div className="fixed top-0 w-full z-[60]">

// Navigation
<nav className="fixed w-full z-50" style={{ top: '36px' }}>

// Mobile menu overlay
<div className="fixed inset-0 bg-[#050507] z-40">

// Tooltip
<div className="absolute z-50">
```

---

## Components

### Navigation

#### Dark Navigation (V3)

```tsx
<nav className="fixed w-full z-50 px-6 py-4 md:px-10 flex justify-between items-center bg-[#050507]/80 backdrop-blur-xl border-b border-white/5">
  <Logo variant="light" />

  {/* Desktop nav items */}
  <div className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-400">
    <button className="flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors hover:text-white hover:bg-white/5">
      Nav Item
      <ChevronDown className="w-3.5 h-3.5" />
    </button>

    {/* Divider */}
    <div className="w-px h-5 bg-white/10 mx-2" />

    {/* Sign in button */}
    <a className="px-4 py-2 rounded-full border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200 text-gray-400">
      Sign In
    </a>

    {/* Primary CTA */}
    <a className="ml-2 flex items-center gap-1.5 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors duration-200">
      Get Started
      <ArrowRight className="w-3.5 h-3.5" />
    </a>
  </div>
</nav>
```

#### Light Navigation

```tsx
<nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <Logo variant="dark" />
      <div className="hidden md:flex items-center gap-8">
        <a className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition-all duration-300">
          Login
        </a>
      </div>
    </div>
  </div>
</nav>
```

#### Announcement Bar

```tsx
<div className="fixed top-0 w-full z-[60] bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 px-4 py-2 text-center">
  <a className="inline-flex items-center gap-2 text-white text-sm font-medium hover:opacity-90 transition-opacity">
    <span>Announcement text</span>
    <span className="underline underline-offset-2 font-semibold">CTA →</span>
  </a>
</div>
```

### Cards

#### Standard Card (Dark Mode)

```tsx
<div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-5">
  {/* Card content */}
</div>
```

#### Feature Card (Light Mode)

```tsx
<div className="group relative bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden">
  {/* Hover gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500" />

  <div className="relative p-6">
    {/* Card content */}
  </div>
</div>
```

#### Pricing Card

```tsx
<div className="relative group">
  {/* Glow effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />

  <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-purple-500 p-10 hover:-translate-y-2 transition-all duration-300">
    {/* Popular badge */}
    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-2xl text-sm font-black shadow-xl">
        MOST POPULAR
      </div>
    </div>

    {/* Card content */}
  </div>
</div>
```

#### Testimonial Card

```tsx
<div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
  {/* Avatar with status */}
  <div className="relative flex-shrink-0">
    <img src="..." className="w-12 h-12 rounded-full object-cover border border-white/20" />
    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-[#0a0a0a] flex items-center justify-center w-4 h-4">
      <Check className="w-2 h-2 text-white" />
    </div>
  </div>

  {/* Content */}
  <div className="text-left">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-white font-medium text-sm">Name</span>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
    </div>
    <p className="text-sm text-gray-400 leading-snug">Testimonial text</p>
  </div>
</div>
```

### Buttons

#### Size Scale

| Size | Padding | Text | Use Case |
|------|---------|------|----------|
| XS | `px-3 py-1` | `text-xs` | Inline actions |
| SM | `px-4 py-2` | `text-sm` | Secondary actions |
| MD | `px-6 py-3` | `text-base` | Standard buttons |
| LG | `px-10 py-4` | `text-lg` | Primary CTAs |
| XL | `px-12 py-5` | `text-xl` | Hero CTAs |
| 2XL | `px-14 py-7` | `text-2xl` | Final CTA sections |

#### Primary CTA Button

```tsx
<button className="inline-flex items-center gap-2 px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors text-lg group">
  Get Started
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>

// Gradient variant
<button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
  Get Started
</button>
```

#### Secondary Button

```tsx
<button className="px-4 py-2 rounded-full border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200 text-gray-400">
  Sign In
</button>

// Light mode
<button className="bg-white border-2 border-purple-600 text-purple-600 px-12 py-6 rounded-full font-black hover:bg-purple-50 transition-all duration-300">
  View Pricing
</button>
```

#### Ghost Button

```tsx
<button className="px-3.5 py-2 rounded-lg transition-colors hover:text-white hover:bg-white/5">
  Menu Item
</button>
```

#### Toggle Button

```tsx
// Active state
<button className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105 transition-all duration-300">
  Monthly
</button>

// Inactive state
<button className="px-6 py-3 rounded-xl font-bold text-gray-400 hover:text-white transition-all duration-300">
  Yearly
</button>
```

### Form Inputs

#### Text Input (Dark Mode)

```tsx
<div className="flex items-center gap-2">
  <div className="flex-1 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center px-3 text-xs text-gray-400">
    https://
    <span className="text-gray-300 ml-1">brand.com</span>
  </div>
  <button className="h-8 px-3 rounded-lg bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300 flex items-center">
    Import
  </button>
</div>
```

#### Input with Icon

```tsx
<div className="relative">
  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-colors"
  />
</div>
```

#### Range Slider

```tsx
<input
  type="range"
  min={0}
  max={100}
  className="w-full h-full opacity-0 cursor-ew-resize"
  aria-label="Slider label"
/>
```

### Badges & Status Indicators

#### Label Badge

```tsx
// Dark mode subtle
<span className="text-[10px] uppercase tracking-widest bg-white/10 border border-white/10 text-gray-200 px-2 py-1 rounded-full">
  Label
</span>

// Purple accent
<span className="text-[10px] uppercase tracking-widest bg-purple-500/20 border border-purple-500/30 text-purple-100 px-2 py-1 rounded-full">
  Result
</span>
```

#### Section Badge

```tsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
  Section Label
</div>

// Light mode
<div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-5 py-2 mb-6">
  <Zap className="w-4 h-4 text-purple-600" />
  <span className="text-purple-900 font-bold text-sm">BADGE TEXT</span>
</div>
```

#### Feature Badge

```tsx
<div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 text-sm font-semibold text-purple-700">
  <Users className="w-4 h-4" />
  3+ leads per day
</div>
```

#### "Popular" Badge

```tsx
<div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-black shadow-lg rotate-12">
  MOST POPULAR
</div>
```

#### Status Dot

```tsx
// Online/Active
<div className="w-2 h-2 bg-green-500 rounded-full" />

// With text
<span className="flex items-center gap-2">
  <span className="w-2 h-2 bg-green-500 rounded-full" />
  Active
</span>
```

### Icons

#### Icon Container Pattern

```tsx
// Small icon container
<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
  <Icon className="w-4 h-4" />
</span>

// Large icon container
<div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
  <span className="text-3xl">Emoji</span>
</div>

// Gradient icon container
<div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl rotate-3">
  1
</div>
```

#### Feature List Pattern

```tsx
<ul className="space-y-4">
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-4 h-4 text-white" />
    </div>
    <span className="text-gray-800 font-medium">Feature description</span>
  </li>
</ul>
```

---

## Interactive States

### Hover Effects

```tsx
// Card hover
className="hover:shadow-2xl transition-all duration-500"

// Card lift on hover
className="hover:-translate-y-2 transition-all duration-300"

// Card scale on hover
className="hover:scale-105 transition-all duration-300"

// Button hover
className="hover:bg-purple-500 transition-colors"

// Gradient button hover
className="hover:shadow-2xl hover:scale-105 transition-all duration-300"

// Icon hover (via group)
className="group-hover:scale-110 transition-transform duration-300"

// Link hover
className="hover:text-purple-600 transition"

// Background opacity hover
className="bg-white/5 hover:bg-white/10 transition-colors duration-300"

// Border hover
className="border border-white/15 hover:border-white/30 transition-all"
```

### Focus States

```tsx
// Input focus
className="focus:border-purple-500/50 focus:outline-none transition-colors"

// Button focus (using Tailwind defaults)
className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"

// Visible focus indicator
className="focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507]"
```

### Loading States

#### Spinner

```tsx
// Simple spinner
<div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />

// Button with loading
<button disabled className="opacity-50 cursor-not-allowed flex items-center gap-2">
  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
  Loading...
</button>
```

#### Shimmer Effect

```tsx
// Apply shimmer animation
<div className="relative overflow-hidden">
  <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</div>
```

#### Disabled States

```tsx
// Disabled button
className="disabled:opacity-50 disabled:cursor-not-allowed"

// Visual disabled state
className="opacity-50 cursor-not-allowed pointer-events-none"
```

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

---

## Effects & Decoration

### Glassmorphism

```tsx
// Standard glass effect
className="bg-white/10 backdrop-blur-sm border border-white/20"

// Strong glass effect
className="bg-[#050507]/80 backdrop-blur-xl border-b border-white/5"

// Frosted card
className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-xl"

// Glass badge
className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3"
```

### Gradient Text

```tsx
// Standard gradient text
<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300">
  Gradient Text
</span>

// Alternative gradient text
<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
  Gradient Text
</span>

// CSS equivalent
.gradient-text {
  background: linear-gradient(to right, #9333EA, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Backdrop Blur

| Level | Class | Use Case |
|-------|-------|----------|
| None | `backdrop-blur-none` | No blur |
| Small | `backdrop-blur-sm` | Subtle glass effect |
| Base | `backdrop-blur` | Standard blur |
| Large | `backdrop-blur-lg` | Prominent blur |
| XL | `backdrop-blur-xl` | Heavy blur (nav, modals) |

### Decorative Blurs

```tsx
// Background glow
<div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

// Card glow effect
<div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />

// Animated pulse glow
<div className="absolute -inset-2 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity animate-pulse" />
```

---

## Animation

### Animation Classes (Tailwind Config)

| Class | Description | Duration |
|-------|-------------|----------|
| `animate-float` | Floating animation | 6s infinite |
| `animate-float-reverse` | Reverse floating | 6s infinite |
| `animate-scroll` | Horizontal scroll | 10s linear infinite |
| `animate-shimmer` | Shimmer effect | 3s infinite |
| `animate-float-particle` | Particle movement | 8s infinite |
| `animate-pulse` | Built-in pulse | Default |
| `animate-spin` | Built-in spinner | Default |

### Animation Keyframes

```javascript
// tailwind.config.js
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px) rotate(3deg)' },
    '50%': { transform: 'translateY(-20px) rotate(3deg)' },
  },
  'float-reverse': {
    '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
    '50%': { transform: 'translateY(-20px) rotate(-3deg)' },
  },
  scroll: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
  shimmer: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(200%)' },
  },
  'float-particle': {
    '0%': { transform: 'translate(0, 0)' },
    '33%': { transform: 'translate(30px, -30px)' },
    '66%': { transform: 'translate(-20px, 20px)' },
    '100%': { transform: 'translate(0, 0)' },
  },
}
```

### Animation Principles

1. **Subtlety**: Use animations sparingly to enhance, not distract
2. **Purpose**: Every animation should serve a UX purpose
3. **Performance**: Prefer `transform` and `opacity` for smooth animations
4. **Duration**:
   - Micro-interactions: 150-300ms
   - Standard transitions: 300-500ms
   - Background animations: 3-10s
5. **Easing**: Use `ease-in-out` for natural movement

### Transition Classes

```tsx
// Fast transitions (micro-interactions)
className="transition-colors" // Color changes only

// Standard transitions
className="transition-all duration-300"

// Smooth card transitions
className="transition-all duration-500"

// Transform-specific
className="transition-transform duration-300"
```

---

## Content Patterns

### Hero Section Structure

1. **Badge/Label**: Category or announcement
2. **Main Headline**: Bold, large text (often with gradient)
3. **Subheadline**: Explanatory text in muted color
4. **CTA Buttons**: Primary and secondary actions
5. **Social Proof**: Testimonial or trust indicator
6. **Visual**: Hero image, video, or interactive element

### Section Headers

```tsx
<div className="text-center mb-16">
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-purple-400 mb-8">
    Section Label
  </div>
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
    Section Title with{' '}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
      Gradient Accent
    </span>
  </h2>
  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
    Supporting description text
  </p>
</div>
```

### Pricing Cards Structure

1. **Plan Icon/Emoji**: Visual identifier
2. **Plan Name**: Bold text
3. **Description**: Brief explanation
4. **Price Display**: Large text with billing info
5. **CTA Button**: Primary action
6. **Feature List**: Checkmark list

### FAQ Pattern

```tsx
<div className="space-y-3">
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full text-left flex justify-between items-start gap-4"
    >
      <span className="font-semibold text-lg">{question}</span>
      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
    </button>
    {isOpen && (
      <div className="mt-4 text-gray-600 leading-relaxed">{answer}</div>
    )}
  </div>
</div>
```

---

## Responsive Design

### Breakpoints

| Name | Width | Class Prefix |
|------|-------|--------------|
| Mobile | < 640px | (default) |
| SM | ≥ 640px | `sm:` |
| MD | ≥ 768px | `md:` |
| LG | ≥ 1024px | `lg:` |
| XL | ≥ 1280px | `xl:` |

### Common Responsive Patterns

```tsx
// Grid: Stack on mobile, columns on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Text sizing
<h1 className="text-4xl md:text-5xl lg:text-6xl">

// Spacing adjustments
<section className="py-16 md:py-24 lg:py-32">

// Flex direction
<div className="flex flex-col sm:flex-row items-center gap-4">

// Show/hide elements
<div className="hidden md:flex">
<div className="md:hidden">

// Container padding
<div className="px-4 sm:px-6 lg:px-8">
```

### Mobile Menu Pattern

```tsx
// Toggle button
<button className="lg:hidden text-white p-2">
  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>

// Mobile overlay
{isMenuOpen && (
  <div className="fixed inset-0 bg-[#050507] z-40 pt-28 px-6 overflow-y-auto">
    {/* Mobile menu content */}
  </div>
)}
```

---

## Accessibility

### Color Contrast

| Context | Text Color | Background | Minimum Ratio |
|---------|------------|------------|---------------|
| Primary text (dark) | `text-white` | `bg-[#050507]` | 4.5:1 |
| Secondary text (dark) | `text-gray-400` | `bg-[#050507]` | 4.5:1 |
| Primary text (light) | `text-gray-900` | `bg-white` | 4.5:1 |
| Secondary text (light) | `text-gray-600` | `bg-white` | 4.5:1 |
| Reduced opacity | `text-white/70` | Dark bg | Check contrast |

### Interactive Element Guidelines

- **Minimum target size**: 44x44px for touch targets
- **Hover states**: All clickable elements must have visible hover states
- **Focus indicators**: Visible focus rings for keyboard navigation
- **Descriptive labels**: Use `aria-label` for icon-only buttons

### Keyboard Navigation

```tsx
// Focusable elements
<button
  onKeyDown={(e) => e.key === 'Enter' && handleAction()}
  tabIndex={0}
  role="button"
  aria-label="Descriptive label"
>

// Skip link (add to top of page)
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded">
  Skip to main content
</a>
```

### Reduced Motion

```tsx
// Respect user preference
<div className="motion-safe:animate-float motion-reduce:animate-none">

// CSS approach
@media (prefers-reduced-motion: reduce) {
  .animate-float {
    animation: none;
  }
}
```

### Screen Reader Support

```tsx
// Hidden visually but available to screen readers
<span className="sr-only">Description for screen readers</span>

// Aria labels for icons
<button aria-label="Close menu">
  <X className="w-6 h-6" />
</button>

// Live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

---

## Implementation Notes

### Tailwind Configuration

The project uses custom animations defined in `tailwind.config.js`. See the [Animation](#animation) section for details.

### Logo Component

```tsx
// Logo variants
<Logo variant="default" />  // Standard brand colors
<Logo variant="light" />    // For dark backgrounds
<Logo variant="dark" />     // For light backgrounds

// Logo sizes
<Logo size="sm" />
<Logo size="md" />
<Logo size="lg" />
```

### State Management Patterns

- **Pricing toggle**: Monthly/yearly billing switch
- **FAQ accordion**: Open/close individual items
- **Mobile menu**: Open/close navigation overlay
- **Dropdown menus**: Hover-triggered with timeout
- **Modal states**: Show/hide signup modals

### Footer Pattern

```tsx
<footer className="bg-gray-900 border-t border-gray-800 py-10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <Logo variant="light" size="md" />
      <div className="flex items-center gap-6 text-sm">
        <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
          Terms of Service
        </Link>
      </div>
      <div className="text-gray-500 text-sm">
        © 2026 Youzign SPRL. All rights reserved.
      </div>
    </div>
  </div>
</footer>
```

---

## Best Practices

### Component Consistency

- Always use the defined color palette
- Maintain consistent spacing using the spacing scale
- Apply hover effects to all interactive elements
- Use the gradient pattern for primary CTAs
- Follow the card structure for content containers
- Match border radius to component hierarchy

### Performance

- Use `transition-all duration-300` for smooth interactions
- Implement `group` hover effects for nested elements
- Prefer `transform` and `opacity` for animations
- Minimize layout shifts with consistent sizing
- Lazy load images below the fold
- Use appropriate image formats and sizes

### Content Guidelines

- Use action-oriented language for CTAs
- Maintain consistent tone throughout
- Emphasize value propositions clearly
- Use social proof and trust signals
- Keep feature descriptions concise but informative
- Include relevant emojis sparingly for visual interest

### Code Organization

```tsx
// Recommended class ordering (Tailwind CSS)
// 1. Layout (position, display, flex/grid)
// 2. Spacing (margin, padding, gap)
// 3. Sizing (width, height)
// 4. Typography (font, text)
// 5. Background/Border
// 6. Effects (shadow, opacity, transform)
// 7. Transitions/Animations
// 8. States (hover, focus, active)

className="relative flex items-center gap-4 p-4 w-full text-sm font-medium bg-white/5 border border-white/10 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/10"
```

### Common Mistakes to Avoid

1. Using raw hex colors instead of design tokens
2. Inconsistent border radius across similar components
3. Missing hover/focus states on interactive elements
4. Hardcoding responsive values instead of using breakpoints
5. Forgetting to test on mobile viewports
6. Using animations that don't respect reduced motion preferences
7. Missing aria-labels on icon-only buttons
