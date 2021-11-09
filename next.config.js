const withTM = require('next-transpile-modules')(['gsap']);
const withImages = require('next-images')

module.exports = withTM(withImages({
  images: {
    domains: ['images.ctfassets.net', "scontent.cdninstagram.com"]
  },
  reactStrictMode: true,
  webpack(config) {
    return config
  }
}))
