var path = require('path');

module.exports = {
  entry: "./scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "App.js"
  },
  module: {
    // change 'loaders' to 'rules'
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
