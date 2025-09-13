import analyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /*   experimental: {
    // TODO: fix this when routes are typed
    typedRoutes: true,
  }, */
  compiler: {
    styledComponents: false,
  },
  outputFileTracingRoot: "../../",
  // Enable if static export is needed
  // output: "export",
};

export default withBundleAnalyzer(nextConfig);
