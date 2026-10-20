import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/aboutus', destination: '/about', permanent: true },
      { source: '/pastoralcare', destination: '/pastoral-care', permanent: true },
      { source: '/momentumcarecenter', destination: '/momentum-care-center', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'static1.squarespace.com',
      },
    ],
  },
}

export default nextConfig
