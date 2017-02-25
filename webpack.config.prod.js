const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/assets/javascripts/src/index.js',
  output: {
    path: './app/assets/javascripts/bundle',
    filename: 'index.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_URL': JSON.stringify('https://ice-creamery.herokuapp.com')
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  } 
}
