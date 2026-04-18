/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  crossOrigin: 'anonymous',
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = nextConfig
