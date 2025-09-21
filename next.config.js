/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['frames.farcaster.xyz'],
  },
}

module.exports = nextConfig

