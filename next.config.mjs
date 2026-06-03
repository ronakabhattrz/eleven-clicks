/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.elevenclicks.com" }],
        destination: "https://elevenclicks.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "elevenclicks.ca" }],
        destination: "https://elevenclicks.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
