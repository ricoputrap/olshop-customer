/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jduyejivhmenygmbfzdw.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**"
      }
    ]
  }
}

module.exports = nextConfig
