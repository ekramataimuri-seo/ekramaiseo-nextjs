/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.wpfedev.com", // Updated to your new Admin
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
