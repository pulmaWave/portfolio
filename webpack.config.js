const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true // dọn dẹp dist cũ
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] // xử lý css
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // sử dụng HTML gốc
      favicon: './src/favicon.png' // nếu có icon
    })
  ],
  devServer: {
    static: './dist',
    open: true,
    port: 3000
  },
  mode: 'development' // hoặc 'production'
}
