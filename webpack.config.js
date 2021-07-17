const path = require('path')
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清理dist目录，保证每次打包清理dist目录
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
// 进度条插件
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// 分离css，并生成css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
// 压缩图片
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin')
// 加载vue的插件
const {
    VueLoaderPlugin
} = require('vue-loader')
// 增加插件
// const WorkBoxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    // mode: 'development',
    entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'js/[name].[contenthash].js'
    // },
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
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader', 'thread-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        // 开启babel缓存
                        // 第二次构建时，会读取之前的缓存
                        // 用来缓存 loader的执行结果。之后的webpack 构建，将会尝试读取缓存，
                        // 来避免在每次执行时，可能产生的、高性能消耗的 Babel 
                        // 重新编译过程(recompilation process)。
                        cacheDirectory: true
                    }
                }, 'thread-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../fonts/'
                    },
                }, ],
            },
        ],
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

        new VueLoaderPlugin(),
        // pwa渐进式网络应用会用到
        // new WorkBoxWebpackPlugin.GenerateSW({
        //   // 1. 帮助serviceworker快速启动
        //   // 2. 删除旧的 serviceworker 生成一个 serviceworker 配置文件
        //   clientsClaim: true,
        //   skipWaiting: true
        // }),
        new ImageMinimizerWebpackPlugin({
            minimizerOptions: {
                // 无损设置
                plugins: [
                    ['gifsicle', {
                        interlaced: true
                    }],
                    ['jpegtran', {
                        progressive: true
                    }],
                    ['optipng', {
                        optimizationLevel: 5
                    }],
                    [
                        'svgo',
                        {
                            plugins: [{
                                removeViewBox: false
                            }, ],
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