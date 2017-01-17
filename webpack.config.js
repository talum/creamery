module.exports = {
  entry: './app/assets/javascripts/src/index.js',
  output: {
    path: './app/assets/javascripts/bundle',
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  } 
}
