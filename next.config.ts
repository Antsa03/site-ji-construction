import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.0.102"],
}

export default nextConfig
