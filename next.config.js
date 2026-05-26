/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config, { nextRuntime }) => {
    // Edge runtime で WebAssembly モジュールを正しくバンドルするための設定
    // @vercel/og (next/og) は yoga.wasm と resvg.wasm を ?module 構文でインポートするため必要
    if (nextRuntime === "edge") {
      config.experiments = {
        ...config.experiments,
        asyncWebAssembly: true,
        layers: true,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
