/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.lucyinthesky.com',
        port: '',
        pathname: '/data/**',
      },
    ],
  },
};

module.exports = nextConfig;
