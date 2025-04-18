/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static site generation
  // Ensure this flag is set to support Azure Static Web Apps
  trailingSlash: true,
  // Optional: Configure image optimization if needed
  images: {
    unoptimized: true, // For static export
  },
};

module.exports = nextConfig;
