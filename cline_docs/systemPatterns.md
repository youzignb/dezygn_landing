# System Patterns

## Architecture
- Next.js App Router architecture
- Client-side components with "use client" directive
- Component-based structure with reusable UI components
- Tailwind CSS for styling

## Key Technical Decisions
1. Component Organization:
   - UI components in `/components/ui`
   - Layout components in root `/components`
   - Hooks in `/hooks` directory
   - Utils in `/lib` directory

2. UI Component System:
   - Radix UI for accessible components
   - Shadcn-style component architecture
   - Custom theme provider implementation
   - Responsive design patterns

3. State Management:
   - React hooks for local state
   - Context for theme management
   - Form state handled by React Hook Form

4. Asset Management:
   - Public assets in `/public` directory
   - Next.js Image optimization
   - External CDN for platform logos

5. Authentication:
   - Dialog-based auth flow
   - External auth system integration
   - Protected routes pattern

## Design Patterns
- Component composition
- Controlled components
- Custom hooks for reusable logic
- Utility-first CSS with Tailwind
- Responsive design breakpoints
- Dark theme by default
