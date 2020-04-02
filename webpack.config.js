const path = require("path");

const include = path.join(__dirname, "src");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: ["./src/index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        ],
        include
      },
      {
        test: /\.jpg/,
        loaders: ["file-loader"],
        include
      },
      {
        test: /\.module\.css/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]--[hash:base64:5]"
              }
            }
          },
          "postcss-loader"
        ],
        include
      }
    ]
  }
};
