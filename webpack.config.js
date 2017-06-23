var path = require('path')
var commonLoaders = [
  {test: /\.js$/, loader: "jsx-loader"},
  {test: /\.png$/, loader: "url-loader"},
  {test: /\.jpg$/, loader: "file-loader"},
  {test: /\.css$/, loader: "style!css"}
]
var assetsPath = path.join(__dirname, 'public', 'assets')
var publicPath = "assets/"

module.exports = {
  name: 'browser',
  entry: './app/app.js',
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: publicPath
  },
  module: {
    loaders: commonLoaders
  }
}