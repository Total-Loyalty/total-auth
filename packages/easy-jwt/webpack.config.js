const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

const LIB = 'lib'
const APP_ROOT = path.resolve(__dirname, LIB)
const BUILD_DIR = 'dist'

module.exports = {
  mode: 'production',
  entry: [path.resolve(APP_ROOT, 'index.ts')],
  output: {
    path: path.resolve(__dirname, BUILD_DIR),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'easyJwt',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [new CheckerPlugin()],
}
