/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.binaryhooks.com",
      },
    ],
  },
};

export default nextConfig;
