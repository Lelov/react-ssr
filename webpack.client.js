const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');

const clientConfig = {
  entry: './src/client/index.js', // 指定入口文件
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'static')  // 指定打包目录
  },
}

module.exports = merge(clientConfig, config);