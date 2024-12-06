/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  output: 'standalone',
  // Serve Storybook static files from /storybook route
  async rewrites() {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
      {
        source: '/storybook/:path*',
        destination: '/storybook/:path*',
      },
    ]
  }
}

module.exports = nextConfig
