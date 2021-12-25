const HtmlWebpackPlugin = require('html-webpack-plugin')
// 加载 Module Federation 插件
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    port: 8001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    new ModuleFederationPlugin({
      name: 'profile', // 当前应用名称，需要唯一，该名称必须与入口名称相匹配
      filename: 'profile.js', // 远程文件名称
      // exposes 表示当前应用是一个 Remote(远程应用)
      // exposes 表示导出的模块，只有在 exposes 中声明的模块才可以作为远程依赖被使用
      // 相当于新建一个新的 entry 入口，从 ./src/index.js 文件开始进行打包生产新的资源
      exposes: {
        './index': './src/index.js'
      }
    })
  ]
}
