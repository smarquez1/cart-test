module.exports = {
  swcMinify: true,
  // INFO: https://github.com/vercel/next.js/issues/31255#issuecomment-968614049
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
    }

    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ]
    return config
  },
}
