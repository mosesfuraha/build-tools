const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
// Remove this line:
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      // Remove this section:
      // new CssMinimizerPlugin(),
    ],
  },
});
