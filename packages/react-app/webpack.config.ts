import { env } from 'node:process'
import { resolve } from 'node:path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

import type { Configuration } from 'webpack'

const config: Configuration = {
  mode: env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: resolve('./src/index.tsx'),
  output: {
    path: resolve('./dist'),
    filename: 'react-app-bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./index.html'),
      scriptLoading: 'module'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '...']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'lodash.debounce': 'lodash.debounce'
  },
  externalsType: 'module',
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript'
              },
              transform: {
                react: {
                  runtime: 'automatic'
                }
              }
            }
          }
        }
      }
    ]
  }
}

export default config
