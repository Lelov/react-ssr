const path = require('path');
// 对于 require 的某些模块(比如 react express)在打包的时候进行排除
const nodeExternals = require('webpack-node-externals');  
const merge = require('webpack-merge');
const config = require('./webpack.base');

const serverConfig = {
  target: 'node',  // 指定当前打包环境为服务器端
  entry: './src/server/index.js', // 指定入口文件
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')  // 指定打包目录
  },
  externals: [nodeExternals() ],
}

module.exports = merge(serverConfig, config);