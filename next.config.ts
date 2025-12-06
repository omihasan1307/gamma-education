/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gm.hetdcl.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.gammaeducationsolutions.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
