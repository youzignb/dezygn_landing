# Dezygn 4.0 Landing Page

A high-converting React landing page for Dezygn 4.0 AI design tool with countdown timer, multiple sections, and optimized for conversion.

## 🚀 Features

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** icons
- **Vite** for fast development and building
- **Responsive design** optimized for all devices
- **Countdown timer** for urgency
- **Smooth scrolling** navigation
- **Animated elements** and transitions
- **SEO optimized** with proper meta tags

## 📦 Project Structure

```
├── src/
│   ├── App.tsx          # Main landing page component
│   ├── main.tsx         # React app entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── dist/                # Build output (generated)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment configuration
```

## 🛠️ Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dezygn 4.0 landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/dezygn-landing.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Vite configuration
   - Click "Deploy"

### Manual Deployment

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

### Environment Setup
The project is configured with:
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite
- Node.js Version: 18.x

## 📊 Performance

The build generates optimized bundles:
- **Vendor chunk**: React & React DOM (~141KB)
- **Icons chunk**: Lucide React icons (~4KB)  
- **Main chunk**: Application code (~107KB)
- **CSS**: Tailwind styles (~48KB)
- **Total gzipped**: ~71KB

## 🎨 Customization

### Styling
- Edit `tailwind.config.js` for custom animations and theme
- Modify `src/index.css` for global styles
- Update component classes in `src/App.tsx`

### Content
- Update copy and messaging in `src/App.tsx`
- Modify countdown timer duration (currently 24 hours)
- Change CTA buttons and links
- Update pricing and feature information

### SEO
- Update meta tags in `index.html`
- Modify OpenGraph properties
- Add structured data if needed

## 🔧 Configuration

### Vite Configuration
- Optimized for production builds
- Code splitting for better performance
- esbuild minification for fast builds

### Vercel Configuration
- SPA routing support
- Static asset caching headers
- Automatic redirects to index.html

## 📱 Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## 📝 License

This project is proprietary software for Dezygn 4.0.

---

**Ready for deployment!** The landing page is optimized for conversion with:
- Urgency messaging with countdown timer
- Clear value propositions
- Social proof and testimonials
- Multiple CTA sections
- Mobile-responsive design