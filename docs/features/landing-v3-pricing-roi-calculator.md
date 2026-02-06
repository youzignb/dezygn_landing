# Landing V3 Pricing Plans + ROI Calculator

**Ship date:** February 6, 2026

## Summary
Landing Page V3 pricing was updated from a single plan to a 4-tier pricing table (including a Free plan) with consistent "Get Started Free" CTAs. A lightweight ROI calculator was added to help visitors map their client count and value to the right plan.

## What Changed
- Replaced the old single pricing card with 4 tiers:
  - Free (50 credits)
  - Small Business ($29/mo, 500 credits/month) positioned for in-house eCommerce stores
  - Freelancer ($49/mo, 1,000 credits/month) positioned as enough for 1-2 clients/month
  - Agency ($99/mo, 2,500 credits/month) positioned as enough for 3-4 clients/month
- Standardized pricing-table CTAs to: "Get Started Free".
- Added an ROI calculator (sliders):
  - Clients per month (0-6)
  - Average value per client per month ($100-$2,500)
  - Displays estimated revenue, recommended plan, and net after plan.
- Updated Hero section CTA below the headline to "Free Signup" and moved it above the hero video.

## Rationale
Pricing needed to communicate clear tiers and expected capacity (freelancer vs agency) while making the value obvious. The ROI calculator provides a quick, interactive explanation of how quickly the tool can pay for itself based on client value.

## Implementation Notes
- All pricing content and capacity messaging is defined in a single `pricingTiers` config inside the page for straightforward iteration.
- ROI recommendation highlights the suggested tier in the pricing table.

## Verification
- `npm run build`

## Files Touched
- `/src/pages/LandingPageV3.tsx`

