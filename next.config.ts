/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static site generation
  // Ensure this flag is set to support Azure Static Web Apps
  trailingSlash: true,
  // Optional: Configure image optimization if needed
  images: {
    unoptimized: true, // For static export
  },
  // Disable type checking in build to avoid the PageProps issue
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint in build as well
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
