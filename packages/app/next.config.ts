import analyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // TODO: fix this when routes are typed
  /* experimental: {
    typedRoutes: true,
  }, */
  experimental: {
    dynamicIO: true,
  },
};

export default withBundleAnalyzer(nextConfig);
