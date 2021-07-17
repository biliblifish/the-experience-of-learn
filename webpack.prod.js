const path = require('path')
const webpack = require('webpack')
let { merge } = require('webpack-merge')
const common = require('./webpack.config')

// 分离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩分离的js, 无需安装，webpack5自带
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[contenthash].js',
        chunkFilename: 'js/[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // 
        new webpack.ids.HashedModuleIdsPlugin(),

        // 分离css
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash:5].css',
            chunkFilename: 'css/[contenthash:5].css'
        }),
    ],
    // 分离JS(优化重点)
	optimization: {
        minimizer: true,
		// 压缩js
		minimizer: [
			new TerserPlugin({
                exclude: /node_modules/
            })
		],
        splitChunks:{
            chunks: "all", //表明将选择哪些 chunk 进行优化,默认作用于异步chunk，值为all/initial/async
            cacheGroups: {
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial'
                },
                elementUi: {
                    name: 'chunk-element',
                    priority: 20,
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/
                },
                echarts: {
                    name: 'chunk-echarts',
                    priority: 25,
                    test: /[\\/]node_modules[\\/]_?echarts(.*)/
                }
            },
            minSize: 0, //默认值是30kb,代码块的最小尺寸
            minChunks: 1, //被多少模块共享,在分割之前模块的被引用次数
            maxAsyncRequests: 3, //限制异步模块内部的并行最大请求数的，说白了你可以理解为是每个import()它里面的最大并行请求数量
            maxInitialRequests: 5, //限制入口的拆分数量
            name: false, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
        }
	}
})