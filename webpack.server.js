const path = require('path');
// 对于 require 的某些模块(比如 react express)在打包的时候进行排除
const nodeExternals = require('webpack-node-externals');  

module.exports = {
  target: 'node',  // 指定当前打包环境为服务器端
  entry: './src/index.js', // 指定入口文件
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')  // 指定打包目录
  },
  externals: [nodeExternals() ],
  // 模块配置
  module: {
    rules: [
      {
        // 处理jsx文件
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,  // 不适用此规则的目录
        options: {
          // 设置编译规则，需要安装对应的插件
          presets: ['@babel/react',
            ['@babel/env', { // 根据打包环境进行适配
              targets: {
                browsers: ['last 2 versions']  // 兼容主流浏览器最新2个版本
                }
            }
            ]
        ]
        }
      }
    ]
  }
}