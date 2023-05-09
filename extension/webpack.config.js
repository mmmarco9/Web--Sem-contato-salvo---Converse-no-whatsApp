const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
  {
    mode: "production",
    entry: {
      background: path.resolve(__dirname, "background.ts"),
      content: path.resolve(__dirname, "content.ts"),
      script: path.resolve(__dirname, "script.ts"),
    },
    output: {
      path: path.join(__dirname, "../build/extension"),
      filename: "[name].js",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
        },
      ],
    },
    plugins: [],
  },
];
