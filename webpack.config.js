var webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/build/scripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        include: /\.json$/,
        loaders: ["json-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
