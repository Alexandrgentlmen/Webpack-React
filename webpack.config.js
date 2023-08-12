let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebPackPlugin = require("html-webpack-plugin");
let CleanPlugin = require("clean-webpack-plugin");

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		// publicPath: '/dist/'
		filename: '[name]_[hash].js', // Шаблон для названия файлов
		clean: true, // Очистить ./dist перед сборкой
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
					{ loader: MiniCssExtractPlugin.loader, options: {} },
					{ loader: 'css-loader', options: { url: true, import: true } },
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name]_[hash].css',
		}),
		new CleanPlugin.CleanWebpackPlugin(),
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
