const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/assets/javascripts/src/index.js',
  output: {
    path: './app/assets/javascripts/bundle',
    filename: 'index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'API_URL': JSON.stringify('http://localhost:3000')
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  } 
}
