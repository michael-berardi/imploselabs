import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "/Users/libertydesignstudio/dev/overseer/standalone-repos/imploselabs",
  },
};

export default nextConfig;
