/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css')
const nextConfig = ([{
    reactStrictMode: true
  },
  withCSS({
    cssLoaderOptions: {
      url: false
    }
  })
])

module.exports = nextConfig
