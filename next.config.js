const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withPlugins(
  [
    [
      withTypescript,
      {
        webpack(config, options) {
          if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
          return config
        },
      },
    ],
  ],
  {
    exportPathMap: () => ({
      '/': { page: '/' },
      '/photo': { page: '/photo' },
      '/blog': { page: '/blog' },
      '/cv': { page: '/cv' },
      '/404': { page: '/404' },
    }),
  },
)
