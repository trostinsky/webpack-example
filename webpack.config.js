const path = require("path");
module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
        utils: "./src/dir/utils.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
      rules: [{
          test: /(\.js)$/,
          loader: "eslint-loader",
          exclude: /node_modules/
      }, {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
      }]
    },
    devServer: {
        port: 9000,
        contentBase: "./dist",
        hot: true,
        open: true
    }
}