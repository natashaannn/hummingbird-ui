const path = require('path');

// tell webpack where to start bundling the javascript files
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
}

// Define output path for the bundled file
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: "[name].[ext]",
                outputPath: "assets/fonts/",
            },
          },
        ]
    }
    ]
  },
}
