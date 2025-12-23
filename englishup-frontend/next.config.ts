import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites(){
    return[
      {
        source:'/registro',
        destination:'/register',
      },
    ];

  },
};

export default nextConfig;
