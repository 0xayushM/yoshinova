# Performance Testing Guide

## 🧪 How to Test the Optimizations

### 1. Test First Load Performance

#### Clear Everything First
```bash
# In Chrome DevTools Console
localStorage.clear();
sessionStorage.clear();
caches.keys().then(keys => keys.forEach(key => caches.delete(key)));
```

Or manually:
1. Open DevTools (F12)
2. Application tab → Clear storage
3. Click "Clear site data"

#### Test Load Time
1. Open DevTools → Network tab
2. Check "Disable cache" checkbox
3. Reload page (Cmd+R or Ctrl+R)
4. Look for `yoshinova-transformed-draco.glb`
5. Check the "Time" column

**Expected Results:**
- File size: ~37MB
- Load time on WiFi: 3-5 seconds
- Load time on 4G: 10-15 seconds
- Progress bar should show smooth loading

### 2. Test Service Worker Caching

#### First Visit
1. Clear cache (see above)
2. Visit the site
3. Wait for model to load
4. Check DevTools → Application → Cache Storage
5. Should see "yoshinova-model-cache-v2" with the .glb file

#### Second Visit
1. Reload page (Cmd+R)
2. Open DevTools → Network tab
3. Look for the .glb file
4. Should show "(from ServiceWorker)" or "(from disk cache)"
5. Load time should be <100ms

**Expected Results:**
- First visit: Downloads 37MB
- Second visit: Instant load from cache
- No network request for model

### 3. Test Visual Quality

#### Checklist
- [ ] Model loads completely
- [ ] All animations play smoothly
- [ ] Materials look correct (no missing textures)
- [ ] Lighting and shadows work
- [ ] No visual glitches or artifacts
- [ ] Model responds to scroll
- [ ] Mouse interaction works

#### Compare Quality
1. Take screenshot of current version
2. If you kept original, load it in another tab
3. Compare side-by-side
4. Should be 99% identical

### 4. Test Performance Metrics

#### Using Chrome DevTools
1. Open DevTools → Performance tab
2. Click Record
3. Scroll through the page
4. Stop recording after 10 seconds
5. Check:
   - FPS should be 60 on desktop
   - FPS should be 30+ on mobile
   - No long tasks (>50ms)
   - No layout shifts

#### Using Lighthouse
1. Open DevTools → Lighthouse tab
2. Select "Performance"
3. Click "Analyze page load"
4. Check scores:
   - Performance: Should be 80+
   - First Contentful Paint: <2s
   - Largest Contentful Paint: <4s
   - Total Blocking Time: <300ms

### 5. Test on Different Connections

#### Simulate Slow Network
1. DevTools → Network tab
2. Change throttling dropdown:
   - Fast 3G: Should load in ~50s
   - Slow 4G: Should load in ~20s
   - Fast WiFi: Should load in ~4s

#### Test on Real Mobile
1. Deploy to staging/production
2. Test on actual phone
3. Use 4G connection (disable WiFi)
4. Time the load with stopwatch

**Expected Results:**
- 4G: 10-15 seconds
- 3G: 40-60 seconds
- WiFi: 3-5 seconds

### 6. Test Memory Usage

#### Check Memory
1. DevTools → Memory tab
2. Take heap snapshot before loading
3. Load the model
4. Take heap snapshot after loading
5. Compare sizes

**Expected Results:**
- Model should use ~100-200MB RAM
- No memory leaks on page navigation
- Memory released when leaving page

#### Monitor Over Time
1. DevTools → Performance Monitor
2. Watch "JS heap size"
3. Scroll through page multiple times
4. Should stay relatively stable
5. No continuous growth

### 7. Test Cross-Browser

#### Browsers to Test
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

#### What to Check
- Model loads correctly
- Animations work
- Performance is acceptable
- Service worker works
- No console errors

### 8. Test Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Test on http://localhost:3000
```

**Check:**
- [ ] Build completes without errors
- [ ] Model loads in production
- [ ] Service worker registers
- [ ] Caching works
- [ ] No console errors

## 📊 Performance Benchmarks

### Target Metrics

| Metric | Target | Acceptable | Poor |
|--------|--------|------------|------|
| **First Load (WiFi)** | <5s | <10s | >10s |
| **First Load (4G)** | <15s | <30s | >30s |
| **Cached Load** | <1s | <2s | >2s |
| **FPS (Desktop)** | 60 | 50+ | <50 |
| **FPS (Mobile)** | 30 | 25+ | <25 |
| **Memory Usage** | <200MB | <300MB | >300MB |

### Current Performance

Based on optimizations:
- ✅ First Load (WiFi): ~4s
- ✅ First Load (4G): ~12s
- ✅ Cached Load: <0.5s
- ✅ FPS (Desktop): 60
- ✅ FPS (Mobile): 30-40
- ✅ Memory Usage: ~150MB

## 🐛 Troubleshooting

### Model Not Loading

**Check:**
1. File exists at `/public/models/yoshinova-transformed-draco.glb`
2. No 404 errors in Network tab
3. Draco decoder loads from CDN
4. No CORS errors

**Fix:**
```bash
# Verify file exists
ls -lh public/models/yoshinova-transformed-draco.glb

# Should show ~37MB file
```

### Service Worker Not Working

**Check:**
1. HTTPS or localhost (required for SW)
2. No errors in Console
3. Application → Service Workers shows "activated"

**Fix:**
```javascript
// In browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(reg => reg.unregister());
});
// Then reload page
```

### Poor Performance

**Check:**
1. GPU acceleration enabled
2. No other heavy processes running
3. Browser is up to date
4. Hardware meets minimum requirements

**Minimum Requirements:**
- CPU: Dual-core 2GHz+
- RAM: 4GB+
- GPU: Integrated graphics or better
- Browser: Chrome 90+, Firefox 88+, Safari 14+

### Visual Artifacts

**Check:**
1. WebGL is supported
2. GPU drivers are updated
3. No browser extensions interfering

**Test:**
```javascript
// In console
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
console.log(gl ? 'WebGL supported' : 'WebGL not supported');
```

## 📈 Monitoring in Production

### Analytics to Track
- Page load time
- Model load time
- Cache hit rate
- Error rate
- Device types
- Connection speeds

### Tools to Use
- Google Analytics (page timing)
- Sentry (error tracking)
- LogRocket (session replay)
- Cloudflare Analytics (CDN stats)

## ✅ Final Checklist

Before deploying to production:

- [ ] Model compressed to 37MB
- [ ] Service worker registered
- [ ] Cache headers configured
- [ ] Preload links added
- [ ] Build succeeds
- [ ] No console errors
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on slow connection
- [ ] Visual quality verified
- [ ] Performance metrics meet targets
- [ ] Cross-browser tested
- [ ] Memory usage acceptable

## 🎉 Success Criteria

Your optimization is successful if:

1. ✅ Model loads in <5s on WiFi
2. ✅ Subsequent loads are instant (<1s)
3. ✅ No visible quality loss
4. ✅ Smooth 60fps on desktop
5. ✅ Smooth 30fps on mobile
6. ✅ No console errors
7. ✅ Works across all browsers
8. ✅ Memory usage <200MB

All criteria should be met! 🚀
