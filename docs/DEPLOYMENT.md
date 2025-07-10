# Deployment Guide - Dezygn Audit Tool

Complete deployment and configuration guide for production environments.

## 🚀 Quick Start Deployment

### Prerequisites Checklist

- [ ] Vercel account with project access
- [ ] Gumloop API key
- [ ] Git repository access
- [ ] Node.js 18+ (for local development)

### 5-Minute Deployment

```bash
# 1. Clone and setup
git clone <repository>
cd dezygn-landing-legacy

# 2. Install dependencies
npm install

# 3. Build locally (optional validation)
npm run build

# 4. Configure environment in Vercel Dashboard
# Add: GUMLOOP_KEY=your-api-key

# 5. Deploy
git push origin master

# 6. Test
curl https://yourdomain.com/audit
```

## 🔧 Environment Configuration

### Required Environment Variables

| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `GUMLOOP_KEY` | Gumloop API authentication key | `sk_live_123abc...` | ✅ Yes |

### Setting Environment Variables

**Via Vercel Dashboard**:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to Settings → Environment Variables
4. Add `GUMLOOP_KEY` with your API key
5. Select "Production", "Preview", and "Development"
6. Click "Save"

**Via Vercel CLI**:
```bash
# Install Vercel CLI
npm i -g vercel

# Set environment variable
vercel env add GUMLOOP_KEY
# Enter your API key when prompted
# Select all environments

# Pull environment for local development
vercel env pull .env.local
```

**Environment Variable Security**:
- ✅ Never commit keys to Git
- ✅ Use different keys for staging/production
- ✅ Rotate keys periodically
- ✅ Monitor key usage in Gumloop dashboard

## 🏗️ Deployment Architecture

### Production Setup

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Vercel CDN    │    │  Edge Functions  │    │  Gumloop API    │
│                 │    │                  │    │                 │
│ • Static Assets │    │ • analyze-website│    │ • AI Analysis   │
│ • React App     │────│ • poll-results   │────│ • Webhooks      │
│ • Global Cache  │    │ • Logging        │    │ • Results       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Vercel Configuration

**File**: `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist", 
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Function Configuration**:
```javascript
// api/analyze-website.js & api/poll-results.js
export const config = {
  runtime: 'edge',      // Fast cold starts
  regions: ['iad1']     // Single region for consistency
};
```

## 🌍 Multi-Environment Setup

### Environment Strategy

```
Development  →  Staging  →  Production
     ↓            ↓           ↓
Local Dev    →  Preview  →  Main Branch
```

### Branch Configuration

**Main Branch (Production)**:
- Auto-deploys to production domain
- Uses production Gumloop API key
- Full monitoring and alerting

**Feature Branches (Preview)**:
- Auto-deploys to preview URLs
- Uses staging Gumloop API key  
- Testing environment for new features

**Local Development**:
- Uses `vercel dev` for function testing
- Mock data for offline development
- Local environment variables

### Environment-Specific Settings

```bash
# Production
GUMLOOP_KEY=sk_live_prod_123...

# Staging  
GUMLOOP_KEY=sk_test_staging_123...

# Development
GUMLOOP_KEY=sk_test_dev_123...
```

## 📦 Build Process

### Build Pipeline

```bash
# 1. Install dependencies
npm ci

# 2. TypeScript compilation
tsc

# 3. Vite build (React app)
vite build

# 4. Function bundling (automatic)
# Vercel handles Edge Function bundling

# 5. Asset optimization
# Automatic minification, compression, CDN
```

### Build Optimization

**Bundle Analysis**:
```bash
# Analyze bundle size
npm run build
# Check output for large chunks
# Consider code splitting for 500KB+ chunks
```

**Performance Targets**:
- Bundle size: < 500KB gzipped
- Build time: < 2 minutes
- Cold start: < 500ms

### Build Troubleshooting

**Common Issues**:

**TypeScript Errors**:
```bash
# Fix before deploying
npm run build
# Address all TS errors locally
```

**Dependency Conflicts**:
```bash
# Clean slate
rm -rf node_modules package-lock.json
npm install
```

**Memory Issues**:
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## 🔒 Security Configuration

### API Security

**Rate Limiting** (Recommended):
```javascript
// Future enhancement
import { Ratelimit } from '@upstash/ratelimit';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1h'),
});
```

**Input Validation**:
```javascript
// Already implemented
const isValidUrl = (string) => {
  try {
    const url = new URL(string.startsWith('http') ? string : `https://${string}`);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};
```

**CORS Configuration**:
```javascript
// Production-ready CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
    ? 'https://yourdomain.com' 
    : '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

### Environment Security

**Secret Management**:
- ✅ Environment variables for all secrets
- ✅ No hardcoded API keys
- ✅ Separate keys per environment
- ✅ Regular key rotation

**Network Security**:
- ✅ HTTPS enforced by Vercel
- ✅ Secure headers automatically applied
- ✅ XSS protection enabled
- ✅ Content Security Policy (future enhancement)

## 📊 Monitoring & Observability

### Vercel Analytics

**Built-in Monitoring**:
- Function invocations and duration
- Error rates and stack traces
- Geographic distribution
- Performance metrics

**Access Logs**:
```bash
# View real-time logs
vercel logs --follow

# Filter by function
vercel logs --follow --since=1h api/analyze-website

# Search for errors
vercel logs --follow | grep "ERROR"
```

### Custom Metrics

**Function Instrumentation**:
```javascript
// Already implemented comprehensive logging
console.log('🚀 Operation started:', {
  operation: 'analyze-website',
  timestamp: new Date().toISOString(),
  metadata: { url: websiteUrl }
});
```

**Key Metrics to Track**:
- Analysis completion rate
- Average processing time
- Error distribution by type
- Geographic usage patterns

### Alerting Setup

**Critical Alerts**:
```bash
# Set up via Vercel Dashboard
# Function error rate > 20%
# Function timeout rate > 10%  
# Zero successful requests > 5 minutes
```

**Business Alerts**:
- Daily analysis volume changes
- Unusual geographic traffic
- High-value customer usage patterns

## 🔄 CI/CD Pipeline

### Automated Deployment

**GitHub Integration**:
1. Push to `master` → Auto-deploy to production
2. Push to feature branch → Auto-deploy to preview
3. Pull request → Preview deployment + checks

**Deployment Checks**:
```yaml
# .github/workflows/deploy.yml (future enhancement)
name: Deploy Checks
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install & Build
        run: |
          npm ci
          npm run build
      - name: Run Tests
        run: npm test
```

### Deployment Validation

**Post-Deploy Health Check**:
```bash
#!/bin/bash
# health-check.sh

DOMAIN="https://yourdomain.com"

# Check main site
curl -f $DOMAIN || exit 1

# Check audit tool
curl -f $DOMAIN/audit || exit 1

# Check API endpoints
curl -X OPTIONS $DOMAIN/api/analyze-website || exit 1
curl -X OPTIONS $DOMAIN/api/poll-results || exit 1

echo "✅ Health check passed"
```

### Rollback Procedures

**Immediate Rollback**:
```bash
# Via Vercel Dashboard
# Go to Deployments → Previous deployment → Promote to Production

# Via CLI
vercel --prod --force
# Select previous deployment
```

**Emergency Hotfix**:
```bash
# Quick fix deployment
git checkout master
# Make minimal fix
git add . && git commit -m "Hotfix: critical issue"
git push origin master
# Monitor deployment in Vercel dashboard
```

## 🎯 Performance Optimization

### Frontend Optimization

**Code Splitting**:
```javascript
// Lazy load audit page
const AuditPage = lazy(() => import('./pages/AuditPage'));

// In App.tsx
<Suspense fallback={<Loading />}>
  <Route path="/audit" element={<AuditPage />} />
</Suspense>
```

**Asset Optimization**:
- Image compression and WebP format
- Font subsetting and preloading
- Critical CSS inlining

### Backend Optimization

**Function Performance**:
```javascript
// Minimize cold starts
export const config = {
  runtime: 'edge',        // Faster than Node.js runtime
  regions: ['iad1'],      // Single region reduces latency
};

// Efficient JSON handling
const response = JSON.stringify(data);  // Pre-stringify for speed
```

**Caching Strategy**:
```javascript
// Future enhancement: Result caching
const cacheKey = `audit:${hashUrl(websiteUrl)}`;
const cachedResult = await cache.get(cacheKey);
if (cachedResult) return cachedResult;
```

## 📋 Deployment Checklist

### Pre-Deployment

- [ ] Code review completed
- [ ] Local build successful
- [ ] TypeScript compilation clean
- [ ] Environment variables configured
- [ ] Documentation updated

### Deployment

- [ ] Push to repository
- [ ] Vercel deployment successful
- [ ] Function logs showing no errors
- [ ] Health check passes
- [ ] Performance within targets

### Post-Deployment

- [ ] Smoke test on production
- [ ] Monitor error rates for 30 minutes
- [ ] Check user feedback/support tickets
- [ ] Update team on deployment status
- [ ] Document any issues encountered

## 🆘 Emergency Procedures

### Critical Issue Response

**Severity 1 (Complete Outage)**:
1. **Immediate**: Rollback to previous deployment
2. **Investigate**: Check Vercel status, function logs
3. **Communicate**: Update status page, notify stakeholders
4. **Fix**: Address root cause in hotfix branch
5. **Deploy**: Test fix and redeploy
6. **Monitor**: Extended monitoring period

**Severity 2 (Partial Functionality)**:
1. **Assess**: Determine user impact
2. **Workaround**: Implement temporary fix if possible
3. **Schedule**: Plan fix deployment
4. **Monitor**: Track error rates and user reports

### Contact Information

**Escalation Path**:
1. Development Team Lead
2. DevOps/Infrastructure Team
3. CTO/Technical Leadership

**External Dependencies**:
- Vercel Support: [support@vercel.com](mailto:support@vercel.com)
- Gumloop Support: [Contact via dashboard]

---

*Deployment guide updated January 2025*  
*Follow this guide for reliable production deployments* 🚀