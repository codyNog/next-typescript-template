import analyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  // TODO: fix this when routes are typed
  /* experimental: {
    typedRoutes: true,
  }, */
};

export default withBundleAnalyzer(nextConfig);
