const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  outputDir: 'docs',
  lintOnSave: false,
  //transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/api2/',//目标地址
        //target: '',
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
})
