const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './public/favicon.png' // lưu favicon trong public
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' } // copy toàn bộ file từ public vào dist
      ]
    })
  ],
  devServer: {
    static: './dist',
    open: true,
    port: 3000
  },
  mode: 'development'
}
