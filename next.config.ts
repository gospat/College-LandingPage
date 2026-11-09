import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  distDir: "next-dist",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
