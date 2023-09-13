/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  // output: 'export',
  // distDir: '_static',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
