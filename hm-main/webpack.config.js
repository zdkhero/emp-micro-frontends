const HtmlWebpackPlugin = require('html-webpack-plugin')
// 导入 模块联邦
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    new ModuleFederationPlugin({
      name: 'main',
      // 用来连接容器即远程模块，也就是声明引用了哪些远程文件，从哪里导入的远程资源
      remotes: {
        // 属性名：映射的远程应用名称，通过该名称加载远程模块
        // 属性值：远程应用暴露到全局的 name@远程应用打包的入口模块地址
        profile: 'profile@http://localhost:8001/profile.js',
        cart: 'cart@http://localhost:8002/cart.js'
      }
    })
  ]
}
