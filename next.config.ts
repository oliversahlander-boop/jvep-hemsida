import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/boka-direkt",
        destination: "/kontakt",
        permanent: false,
      },
      {
        source: "/kontakta-oss",
        destination: "/kontakt",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
