/*
* @Author: Yanbiao
* @Date:   2018-01-30 17:29:25
* @Last Modified by:   Yanbiao
* @Last Modified time: 2018-01-31 00:46:23
*/

var webpack=require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量. dev/online
var WEBPACK_ENV =process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV)

var getHtmlConfig = function(name){
	return {
		template:'./src/view/'+name+'.html',
		filename: 'view/'+name+'.html',
		inject:true,
		hash:true,
		chunks:['common',name]
	}
};

var config ={
	entry:{
		'common': ['./src/page/common/index.js'],
		'index' : ['./src/page/index/index.js'],
		'login' : ['./src/page/login/index.js']
	},
	output:{
		path:'./dist',
		publicPath:'/dist',
		filename:'js/[name].js'
	},
	externals:{
		jquery:'window.jQuery'
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader", "css-loader")},
			{test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,loader:'url-loader?limit=100&name=resource/[name].[ext]'}
		]
	},
	plugins:[
		//通用模块
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'js/base.js'
		}),
		//css打包
		new ExtractTextPlugin("css/[name].css"),
		//html模板
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('login'))
	]
}

if('dev'==WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports=config;