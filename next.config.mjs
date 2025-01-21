/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.NEXT_PUBLIC_REPO_NAME || '';


const nextConfig = {
  publicRuntimeConfig: {
    basePath: isProd && repoName ? `/${repoName}` : '',
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  swcMinify: true,
  images: {
    unoptimized: true
  },
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  output: 'export',
}

export default nextConfig;