import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
