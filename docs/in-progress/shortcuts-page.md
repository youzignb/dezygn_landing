# Dezygn Shortcuts Page Implementation Plan

## Overview
Create a new landing page at `/shortcuts` to showcase the Dezygn 4.5 update features, based on the styling of the existing `/special` page.

## Source Copy Document
All copy and content specifications are defined in: `/Users/dezygn/Projects/live/landing/dezygn_landing/docs/updates-shortcuts.md`

## Page Structure

### 1. Announcement Bar
- **Countdown Timer**: Expires Friday, September 20th, 2025 11:59 AM EST
- **Text**: "Special discount and free trial expires in: X days : X hours : X minutes : X seconds"
- **Component**: Reuse CountdownTimer component from SpecialPage

### 2. Hero Section
- **Headline**: "Become a one-man-marketing machine with Dezygn: Shortcuts"
- **Subheadline**: "Introducing the Dezygn Shortcuts update (4.5): better designs, templates, recipes, collage, a smarter ai and some cool video features"
- **Hero Video**: YouTube embed (https://www.youtube.com/watch?v=63bEtRKsQwA)
- **CTA Button**: "Get Dezygn Shortcuts" - links to pricing section

### 3. Three Steps Section
- **Visual Layout**: Three columns with icons/numbers
- **Step 1**: Import - Chrome extension feature
- **Step 2**: Remix - Templates and recipes
- **Step 3**: Publish - Distribution options

### 4. Features Section
- **Layout**: Alternating two-column layout (text left/video right, then reverse)
- **Video Implementation**: Looping autoplay MP4s without controls
- **Image Galleries**: Display UI screenshots below each feature when available

#### Features to Implement:
1. **Better Designs**
   - Video: better-designs.mp4
   - Images: better-designs folder

2. **Better Prompt Adherence**
   - Video: better-text.mp4
   - Images: better-prompt-adherence folder

3. **Better Image Editing**
   - Images: better-image-editing folder

4. **Better Text Fidelity**
   - No video specified
   - Images: better-text-fidelity folder

5. **Recipes**
   - Video: recipes.mp4
   - Images: recipes folder

6. **Instant Avatars**
   - Video: instant-avatars.mp4
   - Images: instant-avatars folder

7. **Collage**
   - Video: collage.mp4
   - Images: collage folder

8. **Templates**
   - Video: templates.mp4
   - Images: templates folder

9. **Dezygn Eye**
   - Video: dezygn-eye.mp4
   - Images: dezygn-eye folder

10. **Variations**
    - Video: variations.mp4
    - Images: variations folder

11. **Ingredients Panel**
    - Images: ingredients-panel folder

12. **Smaller Updates**
    - No specific media

13. **Video Studio**
    - Videos: studio-fast.mp4, studio-scene-from-frame.mp4
    - Images: studio folder
    - YouTube/TikTok embeds (regular embeds, not autoplay)

14. **Training & Support**
    - Images: training folder

### 5. About This Update Section
- Information about the free update for existing users
- Explanation of different pricing tiers

### 6. Pricing Section
- **Table Layout**: Three-column comparison (Legacy Special, Freelancer, Agency)
- **Pricing**: $99 one-time, $499/year, $1499/year
- **CTAs**: Buy Now for Legacy, Free 7-day trial for others

### 7. Credit Packs Section
- **Table**: Four columns showing pack details
- **Packs**: Starter ($29), Pro ($99), Studio ($299)
- **FAQ**: Expandable accordion for credit-related questions

### 8. Guarantee Section
- **100-Day Guarantee**: Money-back promise
- **Simple Layout**: Centered text with emphasis

### 9. Contact Section
- **Intercom Integration**: Modal popup
- **Fallback**: mailto:support@youzign.com

## Technical Implementation

### Components to Create/Reuse:
1. **ShortcutsPage.tsx**: Main page component
2. **CountdownTimer**: Reuse from SpecialPage with new deadline
3. **FeatureSection**: Component for alternating layout features
4. **PricingTable**: Component for pricing comparison
5. **CreditPacksTable**: Component for credit packs display
6. **FAQAccordion**: Component for expandable FAQ items

### Asset Management:
- All videos in: `/public/assets/updates/shortcuts/video-clips/`
- All images in: `/public/assets/updates/shortcuts/images/[feature-name]/`
- Import paths will follow the pattern used in SpecialPage

### Styling Approach:
- Base on SpecialPage.tsx styling
- Use same color scheme and typography
- Maintain consistent spacing and responsive design
- Tailwind CSS classes for styling

### Routing:
- Add route in App.tsx: `<Route path="/shortcuts" element={<ShortcutsPage />} />`

## Implementation Steps:

1. **Create ShortcutsPage.tsx** base structure
2. **Import all required assets** (videos and images)
3. **Implement Announcement Bar** with countdown timer
4. **Build Hero Section** with YouTube embed
5. **Create Three Steps Section**
6. **Implement Features Section** with alternating layouts
7. **Add Pricing Tables** (main pricing and credit packs)
8. **Add FAQ Accordion**
9. **Implement Guarantee and Contact sections**
10. **Add route to App.tsx**
11. **Test responsive design and video playback**

## Key Considerations:
- Ensure all video files autoplay and loop (except YouTube/TikTok embeds)
- Maintain mobile responsiveness
- Optimize image loading for performance
- Test countdown timer functionality
- Verify Intercom integration or use mailto fallback