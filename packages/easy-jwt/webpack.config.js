const path = require('path')

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
        loader: 'ts-loader',
      },
    ],
  },
}
