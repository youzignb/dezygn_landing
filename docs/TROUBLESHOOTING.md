# Troubleshooting Guide - Dezygn Audit Tool

Common issues, solutions, and debugging procedures for the website audit tool.

## 🚨 Quick Issue Resolution

### Most Common Issues

| Issue | Quick Fix | Details |
|-------|-----------|---------|
| "API configuration error" | Add `GUMLOOP_KEY` in Vercel | [Environment Setup](#environment-issues) |
| Analysis times out | Normal for complex sites | [Timeout Issues](#timeout-issues) |
| Results page blank | Check browser console | [Result Display Issues](#result-display-issues) |
| 404 on API calls | Redeploy functions | [Deployment Issues](#deployment-issues) |

## 🔧 Environment Issues

### Playbook form shows “Something went wrong” in production

**Symptoms**:
- `/playbook` form submit fails in production only
- Local dev works
- UI shows `Something went wrong. Try again.`

**Root Cause**: Missing Vercel environment variables at build time.

**Required Vars (Vite)**:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY` (use **anon/public** key, never service role)

**Fix**:
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add both variables with values from `.env.local` or Supabase API settings
3. Ensure **Production** is selected (or All Environments if desired)
4. Redeploy (Vite embeds `VITE_*` at build time)

### Missing GUMLOOP_KEY

**Symptoms**:
```
❌ API configuration error. Please contact support.
```

**Diagnosis**:
```bash
# Check Vercel environment variables
vercel env ls
```

**Solution**:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add `GUMLOOP_KEY` with your API key
3. Redeploy the project

**Prevention**:
- Document environment setup in team onboarding
- Use staging environment for testing
- Monitor environment variable changes

### Wrong Environment Variable Name

**Symptoms**:
```javascript
🔑 Environment check: { hasGumloopKey: false, keyLength: 0 }
```

**Solution**:
- Ensure variable is named exactly `GUMLOOP_KEY` (case-sensitive)
- No quotes around the value
- Restart functions after adding

## ⏱️ Timeout Issues

### Analysis Taking Too Long

**Symptoms**:
```javascript
⏰ Polling timed out after maximum attempts
💥 Analysis error: {error: 'Analysis timed out after 3 minutes...'}
```

**Normal Behavior**: 
- Simple sites: 30-60 seconds
- Complex sites: 60-180 seconds
- Large e-commerce: Can exceed 3 minutes

**Immediate Solutions**:
1. **Retry the analysis** - Often succeeds on second attempt
2. **Try a simpler URL** - Homepage vs. deep product pages
3. **Check Gumloop status** - External service might be slow

**Long-term Solutions**:
```javascript
// Increase timeout in frontend
const maxAttempts = 20; // 5 minutes instead of 3
```

### Vercel Function Timeout

**Symptoms**:
```
Error: Your function was stopped as it did not return an initial response within 25s
```

**Root Cause**: Server-side polling (should not happen with current architecture)

**Solution**: Architecture is designed to avoid this - check for code regressions

## 📊 Result Display Issues

### Blank Results Page

**Symptoms**:
- Analysis completes successfully
- Redirected to results page
- No data displayed

**Debugging Steps**:

1. **Check Browser Console**:
```javascript
// Should see:
✅ Pipeline completed! Setting results
🔍 Raw Brand Analysis JSON string: {...}
✅ Parsed analysis results: {score: 74, ...}
```

2. **Check for JavaScript Errors**:
```javascript
// Look for:
❌ Failed to parse Brand Analysis JSON: SyntaxError...
💥 Analysis error: {...}
```

3. **Verify Data Structure**:
```javascript
// In browser console:
console.log('Analysis Results:', analysisResults);
```

**Common Fixes**:

**Missing Output Node in Gumloop**:
- Ensure pipeline has "Output" node named "Brand Analysis"
- Check Gumloop pipeline configuration

**Malformed JSON Response**:
```javascript
// Debug in poll-results.js
console.log('Raw outputs:', JSON.stringify(pollData.outputs, null, 2));
```

### Partial Data Display

**Symptoms**:
- Some tabs show data
- Other tabs empty or show errors

**Debug Process**:
```javascript
// Check for missing fields
const requiredFields = [
  'score', 'businessType', 'quickWin1_title', 
  'colorConsistency', 'brandIssue1', 'competitiveGap1'
];

requiredFields.forEach(field => {
  if (!analysisResults[field]) {
    console.log(`Missing field: ${field}`);
  }
});
```

**Solution**: Update Gumloop pipeline to include all expected output fields

## 🌐 Network Issues

### CORS Errors

**Symptoms**:
```
Access to fetch at '/api/analyze-website' from origin 'https://yourdomain.com' 
has been blocked by CORS policy
```

**Solution**: Already handled in code, but check for:
```javascript
// Ensure these headers in API responses
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'POST, OPTIONS',
'Access-Control-Allow-Headers': 'Content-Type',
```

### API 404 Errors

**Symptoms**:
```javascript
📡 API response received: {status: 404, statusText: 'Not Found'}
```

**Causes**:
1. **Functions not deployed**: Run `git push` to deploy
2. **Wrong path**: Check `/api/` folder structure
3. **Vercel configuration**: Check `vercel.json` settings

**Solution**:
```bash
# Redeploy functions
git add api/ && git commit -m "Redeploy functions" && git push
```

## 🔄 Deployment Issues

### Functions Not Updating

**Symptoms**:
- Code changes not reflected
- Old log messages appearing
- Environment variables not taking effect

**Solution Process**:

1. **Force Redeploy**:
```bash
# Make a dummy change to trigger rebuild
git commit --allow-empty -m "Force redeploy"
git push
```

2. **Check Deployment Status**:
- Vercel Dashboard → Deployments
- Look for failed deployments
- Check build logs for errors

3. **Clear Vercel Cache**:
```bash
vercel --prod --force
```

### Build Failures

**Common Build Errors**:

**TypeScript Errors**:
```bash
src/pages/AuditPage.tsx(123,45): error TS2339: Property 'score' does not exist
```

**Solution**: Fix TypeScript types and build locally first
```bash
npm run build  # Test locally before pushing
```

**Dependency Issues**:
```bash
npm ERR! Could not resolve dependency
```

**Solution**: Clean install
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🐛 Gumloop Integration Issues

### Pipeline Not Starting

**Symptoms**:
```javascript
❌ Gumloop API error response: 401 Unauthorized
```

**Solutions**:
1. **Check API Key**: Verify `GUMLOOP_KEY` is correct
2. **Check User ID**: Ensure `nwu3TTmHaTNYcwsuIVPPjGBGp752` is correct
3. **Check Pipeline ID**: Verify `fUs1dKcqkEHy2bKDHrpE9k` exists

### Pipeline Failing

**Symptoms**:
```javascript
📊 Poll attempt X response: {status: 'FAILED', completed: false, failed: true}
```

**Debug Steps**:
1. **Check Gumloop Dashboard**: View pipeline execution logs
2. **Test with Simple URL**: Try `google.com` or `example.com`
3. **Check Website Accessibility**: Ensure target site is reachable

**Common Causes**:
- Website requires authentication
- Website blocks crawlers
- Website has complex JavaScript requirements
- Temporary website downtime

### Missing Output Fields

**Symptoms**:
```javascript
🚨 OUTPUTS DEBUG: {keys: ['Brand Analysis'], firstKey: undefined}
```

**Solution**: Check Gumloop pipeline configuration:
1. Ensure "Output" node is present
2. Verify output node is named "Brand Analysis"
3. Check output node is connected to analysis results

## 📱 Frontend Issues

### Mobile Display Problems

**Debug Steps**:
1. **Test on Device**: Use real mobile device, not just browser dev tools
2. **Check Responsive Breakpoints**: Test various screen sizes
3. **Verify Touch Interactions**: Ensure buttons/tabs work on mobile

### Performance Issues

**Symptoms**:
- Slow loading
- Unresponsive during analysis
- Memory usage warnings

**Solutions**:
1. **Check Bundle Size**: Look for large dependencies
2. **Monitor Memory Usage**: Use browser dev tools
3. **Optimize Images**: Ensure images are compressed

## 🔍 Debugging Tools & Techniques

### Enable Verbose Logging

**Frontend Debug Mode**:
```javascript
// Add to AuditPage.tsx for detailed logs
const DEBUG = true;
if (DEBUG) {
  console.log('🔍 Debug info:', {...});
}
```

**API Debug Mode**:
```javascript
// Already enabled in current implementation
// Check Vercel Function Logs for detailed output
```

### Browser Developer Tools

**Essential Console Commands**:
```javascript
// Check current state
console.log('Current analysis state:', {
  isAnalyzing,
  analysisComplete, 
  analysisResults,
  error
});

// Test API directly
fetch('/api/analyze-website', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({websiteUrl: 'https://example.com'})
}).then(r => r.json()).then(console.log);
```

**Network Tab Analysis**:
- Check API call timing
- Verify request/response headers
- Monitor for failed requests

### Vercel Dashboard Monitoring

**Function Logs**:
1. Go to Vercel Dashboard → Project → Functions
2. Click on function name
3. View real-time logs and invocations

**Deployment Logs**:
1. Go to Deployments tab
2. Click on specific deployment
3. View build logs for errors

## 🚨 Emergency Procedures

### Complete System Down

**Immediate Actions**:
1. **Check Vercel Status**: https://vercel-status.com
2. **Check Gumloop Status**: Contact Gumloop support
3. **Deploy Hotfix**: Temporary error message for users

**Hotfix Example**:
```javascript
// Add to AuditPage.tsx as emergency measure
const MAINTENANCE_MODE = false; // Set to true during outages

if (MAINTENANCE_MODE) {
  return <MaintenanceMessage />;
}
```

### Data Loss Recovery

**If Analysis Results Lost**:
- No persistent storage - users need to re-run analysis
- Consider implementing temporary result caching

### High Error Rate

**Monitoring Triggers**:
- Error rate > 20% over 5 minutes
- Response time > 10 seconds consistently
- Zero successful analyses in 10 minutes

**Response Actions**:
1. Check external service status
2. Review recent deployments
3. Scale down to maintenance mode if needed

## 📞 Support Escalation

### When to Escalate

**Immediate Escalation**:
- Complete system outage > 5 minutes
- Data integrity issues
- Security vulnerabilities discovered

**Standard Escalation**:
- Error rate > 30% for > 15 minutes
- External service issues affecting users
- Performance degradation > 50%

### Information to Collect

**For Bug Reports**:
- Exact error message
- Browser and version
- Steps to reproduce
- Network request/response logs
- Timestamp of issue

**For Performance Issues**:
- Timing measurements
- Resource usage statistics
- Network conditions
- Device specifications

---

*Troubleshooting guide updated January 2025*  
*Report issues to development team with collected diagnostics* 🛠️
