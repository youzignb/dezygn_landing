# Promptography V2 Sales Page Style Guide

## Overview
This style guide documents the specific visual language and design patterns used for the "AI Photography Agency Secrets" sales page (`PromptographyPageV2.tsx`). Unlike the main Dezygn branding, this page utilizes a "Direct Response" aesthetic focused on high readability, urgency, and conversion.

## Design Philosophy
- **Direct Response**: Focus on persuasive copy, clear hierarchy, and psychological triggers (scarcity, authority, social proof).
- **High Contrast**: Strong distinction between sections using background colors (`white` vs `slate-50`).
- **Readability**: Large body text (`text-lg` to `text-xl`) with relaxed leading for easy consumption of long-form copy.
- **Color Coding**: Specific colors are assigned to different emotional/logical threads (e.g., Red for pain/urgency, Green for profit/solution).

## Color Palette & Coding

### Thematic Colors
The page uses a semantic color system to guide the user's emotion:

- **Urgency / Pain / Alert**: `Red`
  - Elements: Scarcity bar buttons, "Hard Truth" section pill, "Ends Soon" badges, primary CTA buttons.
  - Classes: `bg-red-600`, `text-red-600`, `bg-red-50`, `border-red-200`.
  
- **Money / Profit / Success**: `Green`
  - Elements: Money values, "The Opportunity" section, "Profit" steps, Pricing guarantees.
  - Classes: `text-green-600`, `bg-green-50`, `border-green-200`, `from-green-50 to-emerald-50`.

- **Structure / Learning / Framework**: `Purple` & `Blue`
  - Elements: Modules, "The Framework" section, educational content.
  - Classes: `text-purple-600`, `bg-purple-50`, `text-blue-600`, `bg-blue-50`.

- **Warning / Decision**: `Yellow` / `Orange`
  - Elements: "The Journey" section, warning boxes, scarcity countdowns.
  - Classes: `bg-yellow-400`, `text-yellow-700`, `bg-orange-50`.

- **Base Text**: `Slate`
  - Used instead of Gray for a slightly cooler, more modern feel.
  - Headings: `text-slate-900`
  - Body: `text-slate-700` or `text-slate-600`

## Typography

### Headlines
- **Font**: Inter / Sans-serif.
- **Weight**: `font-black` (900) is used extensively for maximum impact.
- **Leading**: Tighter leading (`leading-tight` or `leading-[1.05]`) for large headlines.
- **Styles**:
  - **Hero**: `text-5xl md:text-6xl font-black tracking-tight`.
  - **Section**: `text-3xl md:text-5xl font-black`.
  - **Subhead**: `text-xl md:text-2xl font-bold text-slate-600`.

### Body Copy
- **Size**: larger than standard web apps. `text-lg` is the baseline for story sections.
- **Leading**: `leading-relaxed` for better readability.
- **Emphasis**:
  - **Highlight**: `bg-[#ffea00]` (Yellow highlighter look).
  - **Red Underline**: `underline decoration-red-300 decoration-4`.
  - **Bold**: `font-bold text-slate-900` (used to break up skimming).

## Component Library

### 1. Section "Pills"
Used at the top of every major section to categorize the content.
```jsx
<div className="inline-block px-4 py-1.5 bg-[COLOR]-50 border border-[COLOR]-100 rounded-full mb-6">
  <span className="text-[COLOR]-600 font-bold text-xs uppercase tracking-wider">
    SECTION TITLE
  </span>
</div>
```

### 2. Underline Separator
A visual break often found under section headlines.
```jsx
<div className="w-20 h-1 bg-[COLOR]-500 rounded-full mb-12"></div>
```

### 3. Feature/Module Cards
Rounded cards with a gradient border or hover effect.
```jsx
<div className="relative group">
  {/* Glow Effect */}
  <div className="absolute -inset-0.5 bg-gradient-to-r from-[COLOR]-600 to-[COLOR]-400 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>
  {/* Card Content */}
  <div className="relative bg-white p-8 rounded-3xl border-2 border-[COLOR]-200 shadow-lg hover:shadow-xl transition-shadow">
     ...
  </div>
</div>
```

### 4. Primary CTA Button (Buy Now)
High visibility button with shadow.
```jsx
<a href="#pricing" className="block w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-2xl py-5 rounded-2xl shadow-lg shadow-red-600/30 transition-all transform hover:scale-[1.01] text-center">
  BUY NOW
</a>
```

### 5. Scarcity Bar (Sticky)
Sticky header to drive urgency.
- **Background**: `bg-slate-900`
- **Text**: `text-white`
- **Timer**: `tabular-nums` for non-jumping numbers.

### 6. Testimonial / Quote Box
Used for social proof or emphasizing a key point.
```jsx
<div className="bg-gradient-to-r from-[COLOR]-50 to-[COLOR]-50 border-l-4 border-[COLOR]-500 pl-8 pr-6 py-6 rounded-r-xl shadow-sm">
  <p className="text-xl italic text-slate-800 leading-relaxed mb-2">"Quote text..."</p>
  <p className="text-sm font-semibold text-[COLOR]-700">— Author</p>
</div>
```

## Layout Patterns

### Story Flow
The page follows a distinct narrative flow:
1. **Hook**: Hero section with big promise.
2. **Logic**: "Simple as 1-2-3" steps.
3. **Problem**: "Silent Killer" (Red theme).
4. **Solution**: "Great Shift" (Green theme).
5. **Authority**: "My Journey" (Orange/Slate theme).
6. **Product**: "Introducing..." (Purple theme).
7. **Value Stack**: Detailed breakdown of modules.
8. **Offer**: Price anchor and discount.
9. **Risk Reversal**: Guarantee.
10. **Crossroads**: "Choice 1 vs Choice 2".

### Spacing
- **Vertical Rhythm**: Generous spacing (`py-24`) between sections to allow the user to mentally reset.
- **Container**: `max-w-4xl` for text-heavy story sections (optimal line length), `max-w-6xl` or `max-w-7xl` for grid layouts (features/pricing).
