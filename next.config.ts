import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // enable static HTML export
  output: 'export',

  // Add this section if you are using the next/image component.
  // This disables the built-in image optimization server, which
  // won't be available in a static export environment on shared hosting.
  // Images will be served as-is.
  images: {
    unoptimized: true,
  },

  // You can add other config options here if needed
};

export default nextConfig;