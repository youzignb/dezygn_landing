# Development Guide - Dezygn Audit Tool

Complete development setup, workflows, and contribution guidelines.

## 🚀 Quick Start

### Local Development Setup

```bash
# 1. Clone repository
git clone <repository-url>
cd dezygn-landing-legacy

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local
# Add your GUMLOOP_KEY

# 4. Start development server
npm run dev

# 5. Start Vercel functions locally
npm i -g vercel
vercel dev
```

### Development URLs

```
Frontend:     http://localhost:5173
Vercel Dev:   http://localhost:3000
Audit Tool:   http://localhost:3000/audit
```

## 🛠️ Development Environment

### Required Software

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 18+ | Runtime environment |
| npm | 8+ | Package management |
| Git | 2.30+ | Version control |
| VSCode | Latest | Recommended IDE |
| Vercel CLI | Latest | Local function testing |

### Recommended VSCode Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode", 
    "ms-typescript.vscode-typescript-next",
    "ms-vscode.vscode-typescript-next",
    "vercel.vscode-vercel"
  ]
}
```

### Environment Configuration

**`.env.local`** (Local development):
```bash
# Gumloop API Configuration
GUMLOOP_KEY=sk_test_your_development_key

# Debug Settings
DEBUG_MODE=true
VERBOSE_LOGGING=true
```

**VSCode Settings** (`.vscode/settings.json`):
```json
{
  "typescript.preferences.includePackageJsonAutoImports": "on",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

## 📁 Project Structure

```
dezygn-landing-legacy/
├── api/                          # Vercel Edge Functions
│   ├── analyze-website.js        # Pipeline initiation
│   └── poll-results.js           # Status polling
├── docs/                         # Documentation
│   ├── README.md                 # Main documentation
│   ├── API_REFERENCE.md          # API documentation
│   ├── ARCHITECTURE.md           # System architecture
│   ├── TROUBLESHOOTING.md        # Issue resolution
│   ├── DEPLOYMENT.md             # Deployment guide
│   └── DEVELOPMENT.md            # This file
├── src/                          # React application
│   ├── pages/
│   │   ├── AuditPage.tsx         # Main audit interface
│   │   ├── HomePage.tsx          # Landing page
│   │   └── ...                   # Other pages
│   ├── components/               # Reusable components
│   ├── assets/                   # Images, icons, etc.
│   └── main.tsx                  # Application entry
├── public/                       # Static assets
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS config
├── vite.config.ts                # Vite build configuration
└── vercel.json                   # Vercel deployment config
```

## 🔧 Development Workflow

### Feature Development Process

1. **Create Feature Branch**:
```bash
git checkout -b feature/audit-improvements
```

2. **Development Cycle**:
```bash
# Start local development
npm run dev          # Frontend on :5173
vercel dev          # Functions on :3000 (separate terminal)

# Make changes
# Test locally
# Commit frequently
```

3. **Testing & Validation**:
```bash
# Build check
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

4. **Create Pull Request**:
```bash
git push origin feature/audit-improvements
# Create PR in GitHub
# Request code review
```

### Code Style Guidelines

**TypeScript**:
```typescript
// Use explicit types for function parameters
const handleSubmit = async (e: React.FormEvent) => {
  // Implementation
};

// Use interfaces for complex objects
interface AnalysisResults {
  score: number;
  businessType: string;
  quickWin1_title?: string;
}

// Use type guards for runtime validation
const isAnalysisComplete = (data: unknown): data is AnalysisResults => {
  return typeof data === 'object' && data !== null && 'score' in data;
};
```

**React Patterns**:
```typescript
// Use functional components with hooks
const AuditPage: React.FC = () => {
  const [state, setState] = useState<StateType>(initialState);
  
  // Use useCallback for expensive operations
  const handleAnalysis = useCallback(async (url: string) => {
    // Implementation
  }, []);
  
  return <div>{/* JSX */}</div>;
};

// Prefer composition over inheritance
const AnalysisCard: React.FC<{title: string; children: React.ReactNode}> = ({
  title, 
  children
}) => (
  <div className="bg-white rounded-lg p-4">
    <h3>{title}</h3>
    {children}
  </div>
);
```

**CSS/Tailwind**:
```tsx
// Use semantic class names
<div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
  
// Group related classes
<button className={`
  flex items-center gap-2 
  bg-gradient-to-r from-purple-600 to-blue-600 
  text-white px-6 py-3 rounded-xl font-bold 
  hover:shadow-lg transition-all
`}>

// Use responsive design
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
```

### Git Workflow

**Branch Naming**:
```bash
feature/audit-enhancements      # New features
bugfix/polling-timeout         # Bug fixes  
hotfix/critical-api-error      # Emergency fixes
docs/api-documentation         # Documentation updates
```

**Commit Messages**:
```bash
# Format: type(scope): description

feat(audit): add email capture functionality
fix(api): resolve timeout issues with large websites
docs(readme): update setup instructions
style(ui): improve mobile responsiveness
refactor(polling): optimize client-side polling logic
```

**Pull Request Template**:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature  
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Build passes
- [ ] No TypeScript errors

## Screenshots (if applicable)
```

## 🧪 Testing Strategy

### Manual Testing

**Local Testing Checklist**:
- [ ] URL validation works
- [ ] Analysis starts successfully
- [ ] Polling shows progress
- [ ] Results display correctly
- [ ] Error states handled gracefully
- [ ] Mobile responsive design
- [ ] Performance acceptable

**Cross-Browser Testing**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

### Automated Testing (Future Enhancement)

**Unit Tests**:
```typescript
// utils/url-validation.test.ts
import { isValidUrl } from './url-validation';

describe('URL Validation', () => {
  test('validates http URLs', () => {
    expect(isValidUrl('http://example.com')).toBe(true);
  });
  
  test('validates https URLs', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
  });
  
  test('rejects invalid URLs', () => {
    expect(isValidUrl('not-a-url')).toBe(false);
  });
});
```

**Integration Tests**:
```typescript
// api/analyze-website.test.ts
import { POST } from './analyze-website';

describe('Analyze Website API', () => {
  test('starts analysis successfully', async () => {
    const request = new Request('http://localhost/api/analyze-website', {
      method: 'POST',
      body: JSON.stringify({ websiteUrl: 'https://example.com' })
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.run_id).toBeDefined();
  });
});
```

## 🐛 Debugging

### Frontend Debugging

**Browser DevTools**:
```javascript
// Enable debug mode
localStorage.setItem('DEBUG_MODE', 'true');

// View component state
console.log('Current state:', {
  websiteUrl,
  isAnalyzing, 
  analysisComplete,
  analysisResults,
  error
});

// Test API calls directly
fetch('/api/analyze-website', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ websiteUrl: 'https://example.com' })
}).then(r => r.json()).then(console.log);
```

**React Developer Tools**:
- Install React DevTools browser extension
- Inspect component state and props
- Track state changes and re-renders

### Backend Debugging

**Local Function Debugging**:
```bash
# Start Vercel dev with debugging
DEBUG=1 vercel dev

# View function logs
vercel logs --follow
```

**Production Debugging**:
```bash
# View live function logs
vercel logs --follow --prod

# Filter specific function
vercel logs --follow --prod api/analyze-website
```

**Common Debug Patterns**:
```javascript
// Comprehensive request logging
console.log('🚀 Function called:', {
  method: request.method,
  url: request.url,
  headers: Object.fromEntries(request.headers.entries()),
  timestamp: new Date().toISOString()
});

// Data validation logging
console.log('📊 Received data:', {
  hasUrl: !!websiteUrl,
  urlLength: websiteUrl?.length,
  urlFormat: websiteUrl?.slice(0, 50) + '...'
});

// Error context logging
console.error('💥 Error occurred:', {
  error: error.message,
  stack: error.stack,
  context: { websiteUrl, runId },
  timestamp: new Date().toISOString()
});
```

## 🔄 Development Scripts

### Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server
npm run build            # Production build
npm run preview          # Preview production build

# Code Quality
npm run lint             # ESLint checking
npm run lint:fix         # Auto-fix linting issues
npm run type-check       # TypeScript validation

# Vercel Functions
vercel dev              # Local function development
vercel deploy           # Deploy to preview
vercel --prod           # Deploy to production
```

### Custom Development Scripts

**`scripts/dev-setup.sh`**:
```bash
#!/bin/bash
# Complete development environment setup

echo "🚀 Setting up Dezygn Audit Tool development environment..."

# Check Node.js version
node_version=$(node --version | cut -d'v' -f2)
required_version="18.0.0"

if [ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" = "$required_version" ]; then
  echo "✅ Node.js version $node_version is compatible"
else
  echo "❌ Node.js version $node_version is too old. Please upgrade to 18+"
  exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup environment
if [ ! -f .env.local ]; then
  echo "⚙️ Creating .env.local template..."
  echo "GUMLOOP_KEY=your_api_key_here" > .env.local
  echo "❗ Please add your GUMLOOP_KEY to .env.local"
fi

# Install Vercel CLI if not present
if ! command -v vercel &> /dev/null; then
  echo "🔧 Installing Vercel CLI..."
  npm install -g vercel
fi

echo "✅ Development environment ready!"
echo "Run 'npm run dev' to start the frontend"
echo "Run 'vercel dev' to start the API functions"
```

## 📊 Performance Monitoring

### Development Metrics

**Build Performance**:
```bash
# Measure build time
time npm run build

# Analyze bundle size
npm run build && ls -la dist/assets/
```

**Runtime Performance**:
```javascript
// Measure API response times
const startTime = performance.now();
const response = await fetch('/api/analyze-website', {...});
const endTime = performance.now();
console.log(`API call took ${endTime - startTime} milliseconds`);

// Monitor component re-renders
const AuditPage = () => {
  console.log('AuditPage rendered');
  // Component logic
};
```

### Optimization Guidelines

**Frontend Optimization**:
- Minimize re-renders with `useCallback` and `useMemo`
- Lazy load non-critical components
- Optimize images and assets
- Use Tailwind's purge for minimal CSS

**Backend Optimization**:
- Minimize function cold starts
- Reduce external API calls
- Optimize JSON parsing and serialization
- Use efficient logging practices

## 🤝 Contributing

### Code Review Process

**Before Requesting Review**:
- [ ] Code follows style guidelines
- [ ] No TypeScript errors
- [ ] Build passes locally
- [ ] Manual testing completed
- [ ] Documentation updated if needed

**Review Checklist**:
- [ ] Code quality and readability
- [ ] Performance implications
- [ ] Security considerations
- [ ] Error handling adequacy
- [ ] Test coverage (when applicable)

### Documentation Requirements

**Code Documentation**:
```typescript
/**
 * Polls Gumloop API for analysis completion status
 * @param runId - The pipeline run identifier
 * @returns Promise resolving to poll response data
 */
const pollForResults = async (runId: string): Promise<PollResponse> => {
  // Implementation
};
```

**API Changes**:
- Update API_REFERENCE.md for endpoint changes
- Add examples for new functionality
- Document breaking changes

**Feature Documentation**:
- Update README.md for new features
- Add troubleshooting entries for common issues
- Include deployment considerations

## 🔮 Future Development

### Planned Enhancements

**Short Term (Next Sprint)**:
- [ ] Email capture integration
- [ ] Result sharing functionality
- [ ] PDF export capability
- [ ] Enhanced error messages

**Medium Term (Next Quarter)**:
- [ ] User authentication system
- [ ] Analysis history storage
- [ ] Advanced analytics dashboard
- [ ] A/B testing framework

**Long Term (6+ Months)**:
- [ ] Real-time collaboration features
- [ ] Advanced AI model integration
- [ ] Enterprise features and APIs
- [ ] Mobile application

### Technical Debt

**Current Known Issues**:
- Bundle size approaching 500KB limit
- No automated testing framework
- Limited error monitoring
- Manual deployment validation

**Prioritized Improvements**:
1. Implement automated testing
2. Add comprehensive error monitoring
3. Optimize bundle size
4. Enhance CI/CD pipeline

---

*Development guide updated January 2025*  
*Happy coding! 🚀*