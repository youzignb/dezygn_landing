# API Reference - Dezygn Audit Tool

Complete API documentation for the website audit functionality.

## Base URL
```
https://yourdomain.com/api/
```

## Authentication
All API endpoints use the `GUMLOOP_KEY` environment variable for external service authentication.

---

## Endpoints

### Start Analysis

**POST** `/analyze-website`

Initiates a new website analysis pipeline using Gumloop AI.

#### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "websiteUrl": "https://example.com"
}
```

**Parameters:**
- `websiteUrl` (string, required): The website URL to analyze. Can include or exclude `http://`/`https://` protocol.

#### Response

**Success (200):**
```json
{
  "run_id": "abc123xyz789",
  "status": "started", 
  "message": "Pipeline started successfully"
}
```

**Error (400) - Missing URL:**
```json
{
  "error": "Website URL is required"
}
```

**Error (500) - Configuration:**
```json
{
  "error": "API configuration error. Please contact support."
}
```

**Error (500) - Gumloop API:**
```json
{
  "error": "Analysis failed. Please try again later.",
  "details": "Gumloop API error: 503 - Service temporarily unavailable"
}
```

#### Example

```bash
curl -X POST https://yourdomain.com/api/analyze-website \
  -H "Content-Type: application/json" \
  -d '{"websiteUrl": "https://example.com"}'
```

---

### Poll Results

**POST** `/poll-results`

Checks the status of an analysis pipeline and retrieves results when complete.

#### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "run_id": "abc123xyz789"
}
```

**Parameters:**
- `run_id` (string, required): The pipeline run ID returned from `/analyze-website`

#### Response

**Success - In Progress (200):**
```json
{
  "status": "RUNNING",
  "completed": false,
  "failed": false,
  "outputs": null
}
```

**Success - Completed (200):**
```json
{
  "status": "DONE",
  "completed": true,
  "failed": false,
  "outputs": {
    "Brand Analysis": "{\"score\": 74, \"businessType\": \"Service Business\", ...}"
  }
}
```

**Success - Failed (200):**
```json
{
  "status": "FAILED", 
  "completed": false,
  "failed": true,
  "outputs": null
}
```

**Error (400) - Missing run_id:**
```json
{
  "error": "run_id is required"
}
```

**Error (500) - Polling failed:**
```json
{
  "error": "Polling failed. Please try again later.",
  "details": "Polling failed: 503"
}
```

#### Pipeline States

- `STARTED`: Pipeline just initiated
- `RUNNING`: Analysis in progress
- `DONE`: Analysis completed successfully
- `FAILED`: Analysis failed due to error
- `TERMINATED`: Pipeline was stopped/cancelled

#### Example

```bash
curl -X POST https://yourdomain.com/api/poll-results \
  -H "Content-Type: application/json" \
  -d '{"run_id": "abc123xyz789"}'
```

---

## Data Models

### Analysis Results

The `outputs["Brand Analysis"]` contains a JSON string with the following structure:

```json
{
  "score": 74,
  "businessType": "Service Business - Hair Salon & Barber",
  "industry": "Beauty & Personal Care", 
  "target_audience": "Adults (men and women, 18-55)...",
  "name": "Website Visual Audit",
  
  "primary_color": "#C7876A",
  "secondary_color": "#56504D", 
  "background_color": "#FFFFFF",
  "font_style": "Modern sans-serif...",
  "brand_personality": "Approachable, Professional, Trendy",
  "core_values": "Expertise, Welcoming Atmosphere, Craftsmanship",
  "key_visual_elements": "Large wall clock, warm salon interior...",
  
  "quickWin1_title": "Upgrade client result gallery",
  "quickWin1_current": "Nine static photos in grid...",
  "quickWin1_opportunity": "Create animated before-after transitions...",
  "quickWin1_impact": "high",
  "quickWin1_feature": "MotionSpark™ - Animate static results",
  
  "quickWin2_title": "Add branded social sharing assets",
  "quickWin2_current": "Basic Facebook icon present...",
  "quickWin2_opportunity": "Auto-generate branded story content...",
  "quickWin2_impact": "high", 
  "quickWin2_feature": "InstaShare™ - White-label social sharing",
  
  "quickWin3_title": "Strengthen brand consistency",
  "quickWin3_current": "Mixed lighting/quality in photos...",
  "quickWin3_opportunity": "Standardize gallery look with color correction...",
  "quickWin3_impact": "medium",
  "quickWin3_feature": "InstantBrand Sync™ - Harmonize photos",
  
  "colorConsistency": 72,
  "visualStyleScore": 63,
  "imageQualityScore": 70,
  
  "brandIssue1": "Uneven quality in client photos...",
  "brandIssue2": "Some text blocks visually dense...",
  "brandIssue3": "Brand color appears inconsistently...",
  
  "competitiveGap1": "Leading salons often use video testimonials...",
  "competitiveGap2": "No visible service menu/pricing infographics...",
  "competitiveGap3": "Opportunity for unique style guides...",
  
  "contentMultiplication1": "Client results → Animated before/after...",
  "contentMultiplication2": "Salon/team photo → Various mood/tone edits...", 
  "contentMultiplication3": "Static service section → Short explainer videos...",
  
  "totalOpportunities": 11,
  "aiReadyScore": 78
}
```

### Field Descriptions

**Core Metrics:**
- `score`: Overall design opportunity score (0-100)
- `aiReadyScore`: How ready the site is for AI enhancement (0-100)
- `totalOpportunities`: Total number of improvement opportunities found

**Business Analysis:**
- `businessType`: AI-detected business category
- `industry`: Broader industry classification
- `target_audience`: Inferred target demographic

**Brand Analysis:**
- `primary_color`/`secondary_color`: Detected brand colors (hex codes)
- `font_style`: Typography analysis
- `brand_personality`: Personality traits detected
- `core_values`: Inferred brand values

**Scoring Metrics:**
- `colorConsistency`: Brand color usage consistency (0-100)
- `visualStyleScore`: Overall visual coherence (0-100) 
- `imageQualityScore`: Image quality assessment (0-100)

**Quick Wins (1-3):**
- `quickWin[X]_title`: Improvement opportunity name
- `quickWin[X]_current`: Current state description
- `quickWin[X]_opportunity`: Recommended improvement
- `quickWin[X]_impact`: Impact level ("high", "medium", "low")
- `quickWin[X]_feature`: Suggested Dezygn feature to use

**Issues & Gaps:**
- `brandIssue[1-3]`: Specific brand consistency issues
- `competitiveGap[1-3]`: Areas where competitors excel
- `contentMultiplication[1-3]`: Content expansion opportunities

---

## Error Handling

### HTTP Status Codes

- `200`: Success
- `400`: Bad Request (missing/invalid parameters)
- `405`: Method Not Allowed (non-POST requests)
- `500`: Internal Server Error (API/processing failures)
- `504`: Gateway Timeout (Vercel function timeout)

### Error Response Format

All errors return JSON in this format:
```json
{
  "error": "Human-readable error message",
  "details": "Technical details (optional)"
}
```

### Common Error Scenarios

1. **Invalid URL**: Non-parseable or non-HTTP(S) URLs
2. **Missing Environment**: GUMLOOP_KEY not configured
3. **Gumloop API Down**: External service unavailable
4. **Parsing Errors**: Malformed response from Gumloop
5. **Timeout**: Analysis taking longer than expected

---

## Rate Limiting

Currently no rate limiting is implemented. Consider adding:
- IP-based limiting (5 requests/hour)
- User-based limiting with email capture
- Vercel KV for distributed rate limiting

---

## Monitoring & Logging

### Key Metrics to Track

**Performance:**
- Average pipeline start time
- Average analysis completion time
- Success/failure rates
- Error types and frequency

**Usage:**
- Requests per day/hour
- Unique websites analyzed
- Geographic distribution

**Business:**
- Conversion rate (audit → signup)
- Popular business types analyzed
- High-scoring vs low-scoring sites

### Log Formats

**Function Logs:**
```
🚀 Audit API called: {method, url, timestamp}
🔑 Environment check: {hasGumloopKey, keyLength}
🔄 Calling Gumloop API: {url, websiteUrl, timestamp}
📊 Gumloop poll response: {state, hasOutputs, timestamp}
✅ Returning poll response: {status, completed, hasOutputs}
```

**Error Logs:**
```
💥 Analysis error: {error, stack, timestamp}
❌ Gumloop API error response: {errorText}
❌ Outputs serialization failed: {error}
```

---

*Last updated: January 2025*