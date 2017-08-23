var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      {
          test: /\.(png|gif|jpe?g)$/,
          loader: 'url-loader',
          options: {
              limit: 10000
            //name: '/img/[name]-[hash:8].[ext]'
          }
      },
      {
          test: /\.(eot|woff|woff2|ttf|svg)$/,
          loader: 'url-loader',
          options: {
              limit: 5000,
            //name: '/font/[name]-[hash:8].[ext]'
          }
      },
    ]
  },
  devServer: {
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}


module.exports = config;
