const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['gibbonsgazette.org', 'images.pexels.com'],
  },
  basePath: isProd ? '/recipe-sharing-platform' : '',
  assetPrefix: isProd ? '/recipe-sharing-platform/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
