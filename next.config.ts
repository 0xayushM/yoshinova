import type { NextConfig } from "next";

const IMMUTABLE = "public, max-age=31536000, immutable";
const STATIC_MEDIA = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  // Enable gzip/brotli compression for all responses
  compress: true,

  // Next.js built-in image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      // 3-D model — large file, cache forever (content-addressed filename advised)
      {
        source: "/models/:path*",
        headers: [
          { key: "Cache-Control", value: IMMUTABLE },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
        ],
      },
      // Images — cache for 24 h, serve stale for 7 days while revalidating
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: STATIC_MEDIA }],
      },
      // Videos — same long cache, enable range requests for seeking
      {
        source: "/video/:path*",
        headers: [
          { key: "Cache-Control", value: STATIC_MEDIA },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
      // Fonts — immutable (file names rarely change)
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: IMMUTABLE }],
      },
      // Team photos
      {
        source: "/team/:path*",
        headers: [{ key: "Cache-Control", value: STATIC_MEDIA }],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Treat GLTF/GLB as static assets handled by the file loader
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        type: "asset/resource",
      });

      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...(config.optimization.splitChunks as any)?.cacheGroups,
            // Bundle Three.js + react-three separately so it can be cached
            // independently from the rest of the app code.
            three: {
              test: /[\\/]node_modules[\\/](three|@react-three|ogl)[\\/]/,
              name: "three",
              chunks: "all",
              priority: 10,
            },
            // Bundle animation libraries together
            animation: {
              test: /[\\/]node_modules[\\/](gsap|animejs|framer-motion|motion)[\\/]/,
              name: "animation",
              chunks: "all",
              priority: 9,
            },
          },
        },
      };
    }

    return config;
  },
};

export default nextConfig;
