// 经典发问，哪些loader或者plugins，chunkhash和contenthash的区别
const path = require('path')
const webpack = require('webpack')
let { merge } = require('webpack-merge')
const common = require('./webpack.config')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 用来显示webpack的打包细节，如果是脚手架打包是看不到细节的
const DashboardPlugin = require('webpack-dashboard/plugin')
// 显示打包速度，目前存在插件似乎还没有适配webpack5
// const SpeedMeasureWebpackPlugin = require('speed-measure-webpack5-plugin')
// const smp = new SpeedMeasureWebpackPlugin()

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/[chunkhash].js',
        chunkFilename: 'js/[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        // 关闭webpack的输出信息
        quiet: false,
        // 运行时打开浏览器
        open: true,
        // 模块热更新
        hot: true,
        port: 8080,
        // 开启gzip压缩
        compress: true
    },
    plugins: [

        // 分离css
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css',
            chunkFilename: 'css/[name].[chunkhash].css'
        }),

        // 热替换
        new webpack.HotModuleReplacementPlugin(),

        // 无敌的webpack-server插件
        new DashboardPlugin()

    ]
})