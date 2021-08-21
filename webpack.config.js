const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/main.js', // entry point만 웹팩 구조상 path 안적어도 됨. 웹팩컨피그 파일을 기준으로 찾음. 
  output: {
    // path: path.resolve(__dirname, 'dist'), // 기본값
    // filename: 'main.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // .vue flle
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [ // 순서가 중요. 처음 적는게 가장 마지막에 동작
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    // host: 'localhost',
    // port: 8080,
    // hot: true // HMR
  }
}