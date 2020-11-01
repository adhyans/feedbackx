const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./client/src/index",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-[contenthash].js",
    chunkFilename: "[name]-[chunkhash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "async",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "client/index.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
