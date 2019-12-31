const VConsolePlugin = require('vconsole-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const CesiumSource = path.join('node_modules', 'cesium', 'Build', 'Cesium')

module.exports = {
  publicPath: '',
  outputDir: 'www',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new VConsolePlugin({
        filter: [],
        enable: process.env.NODE_ENV !== 'development'
      }),
      new CopyWebpackPlugin([{ from: path.join(CesiumSource, 'Workers'), to: 'Workers' }]),
      new CopyWebpackPlugin([{ from: path.join(CesiumSource, 'ThirdParty'), to: 'ThirdParty' }]),
      new CopyWebpackPlugin([{ from: path.join(CesiumSource, 'Assets'), to: 'Assets' }]),
      new CopyWebpackPlugin([{ from: path.join(CesiumSource, 'Widgets'), to: 'Widgets' }]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./')
      })
    ],
    module: {
      unknownContextCritical: false
    }
  }
}
