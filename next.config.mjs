// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false, // <-- disable LightningCSS / native oxide usage
  },

  // Add this rewrites function
  async rewrites() {
    return [
      // This rule will forward all requests for /results/... to your results portal
      {
        source: '/results/:path*',
        destination: 'https://results.dbggurukulam.com/results/:path*',
      },
      // It is highly recommended to also add rewrites for the other parts of the results app
      {
        source: '/question-paper/:path*',
        destination: 'https://results.dbggurukulam.com/question-paper/:path*',
      },
      {
        source: '/api/og-image',
        destination: 'https://results.dbggurukulam.com/api/og-image',
      },
    ];
  },
};

export default nextConfig;