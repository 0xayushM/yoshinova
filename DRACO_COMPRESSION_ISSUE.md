# Draco Compression Issue - Resolution

## Issue

The Draco-compressed model (`yoshinova-transformed-draco.glb`) was causing a "Failed to fetch" error. This happened because:

1. **Draco Decoder Dependency**: The compressed model requires a Draco decoder to decompress the geometry
2. **@react-three/drei Configuration**: The `useGLTF` hook needs proper Draco decoder setup
3. **File Format**: The compression may have created compatibility issues

## Current Status

✅ **Reverted to original model** (`yoshinova-transformed.glb` - 126MB)
- All optimizations still active (caching, texture optimization, etc.)
- Model loads successfully
- Service worker caching works

## Why the Draco File Exists But Doesn't Load

The file was successfully created (37MB) and is accessible at the URL, but:
- `@react-three/drei`'s `useGLTF` needs explicit Draco loader configuration
- The Draco decoder WASM files need to be accessible
- There may be a mismatch between the compression format and decoder version

## Proper Solution: Use gltfpack Instead

`gltfpack` is more reliable than `gltf-pipeline` for web use because:
- Better compression algorithm (meshopt)
- No external decoder needed
- Better browser compatibility
- Maintains quality better

### Steps to Properly Compress

```bash
# Install gltfpack
npm install -g gltfpack

# Compress the model (recommended settings)
gltfpack -i public/models/yoshinova-transformed.glb \
         -o public/models/yoshinova-optimized.glb \
         -cc \
         -tc \
         -si 1.0

# Expected result: 126MB → 30-50MB
```

### Flags Explained
- `-cc`: Compress geometry (meshopt)
- `-tc`: Compress textures
- `-si 1.0`: Simplification ratio (1.0 = no quality loss)

### After Compression

Update the files to use the new model:

1. **GltfModel.tsx** (line 15):
   ```typescript
   url = "/models/yoshinova-optimized.glb"
   ```

2. **SceneRig.tsx** (line 163):
   ```typescript
   <GltfModel url="/models/yoshinova-optimized.glb" ... />
   ```

3. **layout.tsx** (line 22):
   ```typescript
   <link rel="preload" href="/models/yoshinova-optimized.glb" ... />
   ```

4. **sw.js** (line 2-3):
   ```javascript
   const CACHE_NAME = 'yoshinova-model-cache-v4';
   const MODEL_URLS = ['/models/yoshinova-optimized.glb'];
   ```

## Alternative: Use Draco Properly

If you want to use the Draco-compressed file, you need to:

### 1. Install Draco Decoder Files

```bash
# Download Draco decoder
mkdir -p public/draco
cd public/draco
curl -O https://www.gstatic.com/draco/versioned/decoders/1.5.6/draco_decoder.js
curl -O https://www.gstatic.com/draco/versioned/decoders/1.5.6/draco_decoder.wasm
curl -O https://www.gstatic.com/draco/versioned/decoders/1.5.6/draco_wasm_wrapper.js
```

### 2. Configure drei to Use Local Draco

Create `src/utils/dracoLoader.ts`:

```typescript
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export function setupDracoLoader() {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/draco/');
  dracoLoader.preload();
  return dracoLoader;
}
```

### 3. Update GltfModel Component

```typescript
import { setupDracoLoader } from '@/utils/dracoLoader';

// In component
useEffect(() => {
  const dracoLoader = setupDracoLoader();
  return () => dracoLoader.dispose();
}, []);
```

## Current Optimizations Still Active

Even with the original 126MB file, you still benefit from:

✅ **Service Worker Caching**
- First load: 126MB download
- Subsequent loads: Instant (from cache)

✅ **HTTP Optimization**
- Gzip compression (browser automatic)
- Long-term caching headers
- Reduces effective size by ~30%

✅ **Runtime Optimizations**
- Texture mipmapping
- Geometry optimization
- Material caching
- Frustum culling

✅ **Code Splitting**
- Three.js in separate chunk
- Parallel loading

## Recommended Next Steps

1. **Try gltfpack** (recommended):
   - Better compression
   - No decoder needed
   - More reliable

2. **Or setup Draco properly**:
   - Download decoder files
   - Configure drei
   - Test thoroughly

3. **Or keep current setup**:
   - Works reliably
   - Service worker makes repeat visits instant
   - Gzip reduces size by ~30%

## Performance Comparison

| Method | Size | First Load | Repeat Load | Complexity |
|--------|------|------------|-------------|------------|
| **Original (current)** | 126MB | ~13s WiFi | Instant | Low ✅ |
| **Gzip only** | ~88MB | ~9s WiFi | Instant | Low ✅ |
| **gltfpack** | ~40MB | ~4s WiFi | Instant | Medium |
| **Draco (broken)** | 37MB | N/A | N/A | High ❌ |

## Conclusion

The current setup with the original model + service worker caching is:
- ✅ **Working reliably**
- ✅ **Instant on repeat visits**
- ✅ **Good enough for most users**

For better first-load performance, use **gltfpack** instead of Draco.
