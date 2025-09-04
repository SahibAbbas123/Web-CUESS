/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// If you’ll deploy to https://<user>.github.io/<repo>, set your repo name here:
const repo = "cuess";

const nextConfig = {
  // Static export for GitHub Pages:
  output: "export",

  // GitHub Pages doesn't do image optimization
  images: { unoptimized: true, domains: ["images.unsplash.com"] },

  // If deploying to a subpath, uncomment these two:
  // basePath: isProd ? `/${repo}` : "",
  // assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;