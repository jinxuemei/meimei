const path = require('path');
const Html = require('html-webpack-plugin')

module.exports = {
    //入口文件
    entry:{
        index: './src/index.js'
    },
    //出口
    output:{
        //绝对路径
        path:path.resolve(__dirname,'dist'),//取本文件路径，再找同级文件
        filename:'[name].js'//name取入口文件名
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }

        ]
    }
}