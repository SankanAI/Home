import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during the build process
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for GitHub Pages to handle images
    domains: [
      'images.unsplash.com', 
      'flaticon.com', 
      'github.com', 
      'assets.aceternity.com',
      'images.pexels.com'
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Home' : undefined, // Base path for subfolder deployment
};

export default nextConfig;
