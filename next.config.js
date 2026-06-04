/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Static HTML Export
  output: 'export',
  // Disable next/image checking inside static builds if remote images are used
  images: {
    unoptimized: true
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  }
};

export default nextConfig;
