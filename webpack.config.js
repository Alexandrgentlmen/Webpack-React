let path = require('path');
// let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebPackPlugin = require("html-webpack-plugin");

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: '/dist/'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '.'),
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
				loader: 'babel-loader',
				exclude: '/node_modules/',
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					// MiniCssExtractPlugin.loader,
					'style-loader', 'css-loader', 'postcss-loader',
				]
			}
		]
	},
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: 'main.css',
		// }),
		new HtmlWebPackPlugin({
			template: path.join(__dirname, './index.html'),
		})
	]
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	return conf;
}