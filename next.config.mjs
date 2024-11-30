import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: process.env.BUILD_DIR,
  reactStrictMode: false,
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
