import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Strict Mode
  reactStrictMode: true,
  
  // 이미지 최적화 설정 (필요시)
  images: {
    remotePatterns: [
      // 외부 이미지 도메인 허용
    ],
  },
};

export default nextConfig;