import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

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
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('src');
    return config;
  }
};

export default withNextIntl(nextConfig);
