module.exports = {
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