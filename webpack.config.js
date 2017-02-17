const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  assets: path.join(__dirname, 'assets')
};

module.exports = {
  devtool: 'source-map',
  entry: ['./src/js/script.js', './src/scss/main.scss'],
  output: {
    path: PATHS.assets,
    filename: '/js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      }
    ]
  },

  // postcss: [
  //   require('autoprefixer')
  // ],

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: '/css/[name].css',
      allChunks: true,
      })
  ],

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    // host: '10.0.0.59',
    host: '192.168.1.110',
    port: 2000,
    stats: "errors-only",
    // watch: true,
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
      // Delay the rebuild after the first change
      aggregateTimeout: 300,
      // Poll using interval (in ms, accepts boolean too)
      poll: 1000
    },
    hot: true,
    inline: true
  }
};