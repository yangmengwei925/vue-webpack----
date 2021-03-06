let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let TerserPlugin = require('terser-webpack-plugin');
let {smart} = require('webpack-merge');
//既想要base中的配置 又想要自己的配置  base
let base = require('./webpack.base');
module.exports = smart(base, {
  mode: 'production',
  optimization: {//webpack4.0之后出现的优化项
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]//压缩css
    //缺陷 可以压缩css 但是 js压缩又出现了问题
  }
});