const path = require('path')
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清理dist目录，保证每次打包清理dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 进度条插件
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// 分离css，并生成css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
// 压缩图片
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin')
// 加载vue的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 显示打包速度，目前存在插件排斥问题
// const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
// const smw = new SpeedMeasureWebpackPlugin()

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    // 状态
    stats: {
        all: false,
        assets: true,
        modules: true,
		env: true,
		errors: true,
		warnings: true,
		// our additional options
		moduleTrace: true,
		errorDetails: true,
        moduleAssets: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset/resource'
                // use: [
				// 	{
				// 		loader: 'url-loader',
				// 		options: {
				// 			limit: 10240, //小于10k的图片转成base64
				// 			name: '[name].[ext]',
				// 			outputPath: 'assets/img/',  //图片文件的输出路径
                //             publicPath: '../assets/img/', // 替换文件的相对路径
				// 		},
				// 	},
				// ]
            },
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
                            publicPath: '../fonts/'
						},
					},
				],
			},
        ],
    },
    devServer: {
        contentBase: './dist',
        // 关闭webpack的输出信息
        quiet: true,
        // 运行时打开浏览器
        open: true,
        // 模块热更新
        hot: true,
        port: 8080,
        // 开启gzip压缩
        compress: true
    },
    plugins: [

        new CleanWebpackPlugin(),

        // 进度条插件
        new ProgressBarPlugin({
			format: '  build [:bar] :percent (:elapsed seconds)',
			clear: false,
			width: 60,
		}),

        // new webpack.DefinePlugin({
        //     'process-env': 
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: '脚手架环境搭建',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        // 分离css
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css',
            chunkFilename: 'css/[name].[chunkhash].css'
        }),

        new VueLoaderPlugin(),
        new ImageMinimizerWebpackPlugin({
            minimizerOptions: {
                 // 无损设置
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                [
                  'svgo',
                  {
                    plugins: [
                      { removeViewBox: false },
                    ],
                  },
                ],
              ],
            }
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin({
                parallel: true
            })
        ] 
    }
}