var path = require('path');
var webpack = require('webpack');
console.log(webpack);
var htmlWebpackPlugin=require('html-webpack-plugin');
var ppp=webpack.optimize.UglifyJsPlugin

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style!css',
                include:path.resolve(__dirname,'src')
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'da jian qian duan gong zuo liu cheng',
            template:'./src/index.html'
        }),
        new ppp({
            compress:false
        }),
        new webpack.BannerPlugin('作者:张敏\n日期:2016-12-14\n协议:MIT')
    ]
}
module.exports = config;