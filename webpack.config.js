var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
	context: path.resolve('./'), //sets relative root directory for entry key Where it will look for entry point
	entry: {
		shared:'./js/shared_page.es6',
		about:'./js/about_page.es6',
		index:'./js/index_page.es6',
		contact:'./js/contact_page.es6'
	},
	output: {
		path: path.resolve('build/'), // where its putting build.js
		publicPath: '/public/assets/',  // THIS IS WHERE YOU ACCESS BUILD FILES FROM YOUR INDEX.HTML
		filename: "./js/[name].js"
	},

	watch:true,

	devServer:{
		contentBase:'public'
	},
	
	plugins : [
		new ExtractTextPlugin("styles/styles.css")
	],


	module:{
		loaders:[
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader","css-loader")
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")
			}
		],
		preLoaders:[
			{
				test:/\.es6$/,
				exclude:/node_modules/,
				loader:"jshint-loader"
			}
		]	
	},

	resolve: {
		extensions: ['','.js','.es6']
	}

}