var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },

  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
      { test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
      { test: /\.svg$/, loader: 'babel-loader!svg-react-loader' }
    ]
  },

  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}