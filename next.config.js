/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn.sanity.io",
      "blogger.googleusercontent.com",
      "api.freelogodesign.org",
    ],
  },
};
