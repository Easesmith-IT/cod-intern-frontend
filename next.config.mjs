/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "de9todata.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "coral-hyena-467754.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;
