const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/components/GamePresentation.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    environment: {
      // ...
      arrowFunction: false, // <-- this line does the trick
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
};
