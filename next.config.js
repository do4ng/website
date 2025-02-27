/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    serverComponentsExternalPackages: ['shiki'],
  },
  /**
   * @type {import("sass").Options<"sync">}
   */
  sassOptions: {},
  async redirects() {
    return [
      {
        source: '/serpack',
        destination: '/serpack/introduction',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
